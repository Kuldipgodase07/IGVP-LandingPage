import mongoose from "mongoose";

// MongoDB Atlas URI provided for IGVP Institute
export const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://IGVP_institute:Igvp%40123@cluster0.se6sibu.mongodb.net/igvp_institute_db?retryWrites=true&w=majority&appName=Cluster0";

// Direct replica set seedlist URI as secondary fallback if SRV resolution is blocked locally
export const MONGODB_DIRECT_URI =
  "mongodb://IGVP_institute:Igvp%40123@ac-aqpy3bp-shard-00-00.se6sibu.mongodb.net:27017,ac-aqpy3bp-shard-00-01.se6sibu.mongodb.net:27017,ac-aqpy3bp-shard-00-02.se6sibu.mongodb.net:27017/igvp_institute_db?replicaSet=atlas-aqpy3bp-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

export const MONGODB_PRIMARY_URI =
  "mongodb://IGVP_institute:Igvp%40123@ac-aqpy3bp-shard-00-01.se6sibu.mongodb.net:27017/igvp_institute_db?ssl=true&authSource=admin&directConnection=true";

let isConnected = false;

export async function connectToDatabase() {
  if (isConnected && mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  const uris = [MONGODB_URI, MONGODB_PRIMARY_URI, MONGODB_DIRECT_URI];

  for (const uri of uris) {
    try {
      const conn = await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 4000,
      });
      isConnected = true;
      console.log("Connected to MongoDB Atlas (igvp_institute_db)");
      return conn.connection;
    } catch (err: any) {
      console.warn(`Connection attempt warning (${uri.slice(0, 30)}...):`, err?.message || err);
    }
  }

  throw new Error("Could not connect to MongoDB Atlas after all URI attempts.");
}

/* -------------------------------------------------------------------------- */
/* SCHEMAS & MODELS FOR SEPARATE PERSONA-BASED DATA COLLECTIONS               */
/* -------------------------------------------------------------------------- */

// 1. General Waitlist Collection ("waitlist_users")
export interface IWaitlistUser {
  fullName: string;
  email: string;
  phone?: string;
  role: string;
  organization?: string;
  cohort: string;
  primaryGoal?: string;
  ticketNumber: string;
  queuePosition: number;
  submittedAt?: Date | string;
}

const WaitlistUserSchema = new mongoose.Schema<IWaitlistUser>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  role: { type: String, required: true },
  organization: { type: String },
  cohort: { type: String, required: true },
  primaryGoal: { type: String },
  ticketNumber: { type: String, required: true, unique: true },
  queuePosition: { type: Number, default: 42 },
  submittedAt: { type: Date, default: Date.now },
});

export const WaitlistUserModel =
  mongoose.models.WaitlistUser ||
  mongoose.model<IWaitlistUser>("WaitlistUser", WaitlistUserSchema, "waitlist_users");

// 2. Newsletter Subscribers Collection ("newsletter_subscribers")
export interface INewsletterSubscriber {
  email: string;
  subscribedAt?: Date;
}

const NewsletterSubscriberSchema = new mongoose.Schema<INewsletterSubscriber>({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now },
});

export const NewsletterSubscriberModel =
  mongoose.models.NewsletterSubscriber ||
  mongoose.model<INewsletterSubscriber>(
    "NewsletterSubscriber",
    NewsletterSubscriberSchema,
    "newsletter_subscribers"
  );

// 3. Founders Track Applications Collection ("founder_applications")
export interface IFounderApplication {
  fullName: string;
  email: string;
  phone?: string;
  startupName: string;
  stage: string; // Lab Stage, Prototype, Seed, Clinical Trial
  therapeuticArea?: string; // Biotech, Digital Health, MedTech, AI
  fundingRaised?: string;
  primaryNeed?: string; // Delaware Flip, VC Pitch, Regulatory 510k
  submittedAt?: Date;
}

const FounderApplicationSchema = new mongoose.Schema<IFounderApplication>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  startupName: { type: String, required: true },
  stage: { type: String, required: true },
  therapeuticArea: String,
  fundingRaised: String,
  primaryNeed: String,
  submittedAt: { type: Date, default: Date.now },
});

export const FounderApplicationModel =
  mongoose.models.FounderApplication ||
  mongoose.model<IFounderApplication>(
    "FounderApplication",
    FounderApplicationSchema,
    "founder_applications"
  );

// 4. STEM Students Track Applications Collection ("student_applications")
export interface IStudentApplication {
  fullName: string;
  email: string;
  university: string;
  degreeProgram: string; // Undergrad, Masters, PhD, MD
  fieldOfStudy: string;
  sprintInterest?: string; // 72-Hour Sprint, Deal Room Analysis
  submittedAt?: Date;
}

const StudentApplicationSchema = new mongoose.Schema<IStudentApplication>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  university: { type: String, required: true },
  degreeProgram: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },
  sprintInterest: String,
  submittedAt: { type: Date, default: Date.now },
});

export const StudentApplicationModel =
  mongoose.models.StudentApplication ||
  mongoose.model<IStudentApplication>(
    "StudentApplication",
    StudentApplicationSchema,
    "student_applications"
  );

// 5. Upskilling Executive Fellows Collection ("fellowship_applications")
export interface IFellowshipApplication {
  fullName: string;
  email: string;
  phone?: string;
  currentRole: string;
  company: string;
  experienceYears: string;
  fellowshipTrack: string; // Healthcare Executive, VC Diligence, BioTech Commercialization
  submittedAt?: Date;
}

const FellowshipApplicationSchema = new mongoose.Schema<IFellowshipApplication>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  currentRole: { type: String, required: true },
  company: { type: String, required: true },
  experienceYears: { type: String, required: true },
  fellowshipTrack: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

export const FellowshipApplicationModel =
  mongoose.models.FellowshipApplication ||
  mongoose.model<IFellowshipApplication>(
    "FellowshipApplication",
    FellowshipApplicationSchema,
    "fellowship_applications"
  );

// 6. Investors Track Collection ("investor_applications")
export interface IInvestorApplication {
  fullName: string;
  email: string;
  phone?: string;
  investorType: string; // Angel, Family Office, VC Fund, Syndicate
  checkSize?: string;
  targetSectors?: string;
  accreditedStatus?: string;
  submittedAt?: Date;
}

const InvestorApplicationSchema = new mongoose.Schema<IInvestorApplication>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  investorType: { type: String, required: true },
  checkSize: String,
  targetSectors: String,
  accreditedStatus: String,
  submittedAt: { type: Date, default: Date.now },
});

export const InvestorApplicationModel =
  mongoose.models.InvestorApplication ||
  mongoose.model<IInvestorApplication>(
    "InvestorApplication",
    InvestorApplicationSchema,
    "investor_applications"
  );

// 7. Clinical Sites & Tech Transfer Partners Collection ("partner_applications")
export interface IPartnerApplication {
  fullName: string;
  email: string;
  phone?: string;
  organizationName: string;
  partnerType: string; // Clinical Site, Hospital, University Tech Transfer, R&D Lab
  location?: string;
  partnershipGoal?: string;
  submittedAt?: Date;
}

const PartnerApplicationSchema = new mongoose.Schema<IPartnerApplication>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  organizationName: { type: String, required: true },
  partnerType: { type: String, required: true },
  location: String,
  partnershipGoal: String,
  submittedAt: { type: Date, default: Date.now },
});

export const PartnerApplicationModel =
  mongoose.models.PartnerApplication ||
  mongoose.model<IPartnerApplication>(
    "PartnerApplication",
    PartnerApplicationSchema,
    "partner_applications"
  );

// 8. Vetted Service Providers Collection ("provider_applications")
export interface IProviderApplication {
  fullName: string;
  email: string;
  phone?: string;
  companyName: string;
  serviceCategory: string; // Legal/Delaware Flip, Regulatory/FDA, Clinical Trials, Software/AI
  website?: string;
  submittedAt?: Date;
}

const ProviderApplicationSchema = new mongoose.Schema<IProviderApplication>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  companyName: { type: String, required: true },
  serviceCategory: { type: String, required: true },
  website: String,
  submittedAt: { type: Date, default: Date.now },
});

export const ProviderApplicationModel =
  mongoose.models.ProviderApplication ||
  mongoose.model<IProviderApplication>(
    "ProviderApplication",
    ProviderApplicationSchema,
    "provider_applications"
  );
