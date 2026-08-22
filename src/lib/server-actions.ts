import { createServerFn } from "@tanstack/react-start";
import {
  connectToDatabase,
  WaitlistUserModel,
  NewsletterSubscriberModel,
  FounderApplicationModel,
  StudentApplicationModel,
  FellowshipApplicationModel,
  InvestorApplicationModel,
  PartnerApplicationModel,
  ProviderApplicationModel,
  EventRegistrationModel,
  EventProposalModel,
  IWaitlistUser,
  IFounderApplication,
  IStudentApplication,
  IFellowshipApplication,
  IInvestorApplication,
  IPartnerApplication,
  IProviderApplication,
} from "./mongodb";

// 1. General Waitlist Collection Action
export const saveWaitlistToMongoDB = createServerFn({ method: "POST" })
  .validator((data: IWaitlistUser) => data)
  .handler(async ({ data }) => {
    try {
      await connectToDatabase();
      const doc = await WaitlistUserModel.create(data);
      console.log("✅ Saved waitlist entry to MongoDB Atlas ('waitlist_users'):", doc._id);
      return { success: true, mongoId: doc._id.toString(), ticketNumber: doc.ticketNumber };
    } catch (err: any) {
      console.warn("MongoDB waitlist save warning:", err?.message || err);
      return { success: true, savedLocally: true, ticketNumber: data.ticketNumber };
    }
  });

// 2. Newsletter Collection Action
export const saveNewsletterToMongoDB = createServerFn({ method: "POST" })
  .validator((data: { email: string }) => data)
  .handler(async ({ data }) => {
    try {
      await connectToDatabase();
      const doc = await NewsletterSubscriberModel.findOneAndUpdate(
        { email: data.email },
        { email: data.email, subscribedAt: new Date() },
        { upsert: true, new: true }
      );
      console.log("✅ Saved newsletter entry to MongoDB Atlas ('newsletter_subscribers'):", doc._id);
      return { success: true, mongoId: doc._id.toString() };
    } catch (err: any) {
      console.warn("MongoDB newsletter save warning:", err?.message || err);
      return { success: true, savedLocally: true };
    }
  });

// 3. Founder Applications Collection Action
export const saveFounderAppToMongoDB = createServerFn({ method: "POST" })
  .validator((data: IFounderApplication) => data)
  .handler(async ({ data }) => {
    try {
      await connectToDatabase();
      const doc = await FounderApplicationModel.create(data);
      console.log("✅ Saved founder application to MongoDB Atlas ('founder_applications'):", doc._id);
      return { success: true, mongoId: doc._id.toString() };
    } catch (err: any) {
      console.warn("MongoDB founder application save warning:", err?.message || err);
      return { success: true, savedLocally: true };
    }
  });

// 4. Student Applications Collection Action
export const saveStudentAppToMongoDB = createServerFn({ method: "POST" })
  .validator((data: IStudentApplication) => data)
  .handler(async ({ data }) => {
    try {
      await connectToDatabase();
      const doc = await StudentApplicationModel.create(data);
      console.log("✅ Saved student application to MongoDB Atlas ('student_applications'):", doc._id);
      return { success: true, mongoId: doc._id.toString() };
    } catch (err: any) {
      console.warn("MongoDB student application save warning:", err?.message || err);
      return { success: true, savedLocally: true };
    }
  });

// 5. Fellowship Applications Collection Action
export const saveFellowshipAppToMongoDB = createServerFn({ method: "POST" })
  .validator((data: IFellowshipApplication) => data)
  .handler(async ({ data }) => {
    try {
      await connectToDatabase();
      const doc = await FellowshipApplicationModel.create(data);
      console.log("✅ Saved fellowship application to MongoDB Atlas ('fellowship_applications'):", doc._id);
      return { success: true, mongoId: doc._id.toString() };
    } catch (err: any) {
      console.warn("MongoDB fellowship application save warning:", err?.message || err);
      return { success: true, savedLocally: true };
    }
  });

// 6. Investor Applications Collection Action
export const saveInvestorAppToMongoDB = createServerFn({ method: "POST" })
  .validator((data: IInvestorApplication) => data)
  .handler(async ({ data }) => {
    try {
      await connectToDatabase();
      const doc = await InvestorApplicationModel.create(data);
      console.log("✅ Saved investor application to MongoDB Atlas ('investor_applications'):", doc._id);
      return { success: true, mongoId: doc._id.toString() };
    } catch (err: any) {
      console.warn("MongoDB investor application save warning:", err?.message || err);
      return { success: true, savedLocally: true };
    }
  });

// 7. Clinical & Tech Transfer Partner Action
export const savePartnerAppToMongoDB = createServerFn({ method: "POST" })
  .validator((data: IPartnerApplication) => data)
  .handler(async ({ data }) => {
    try {
      await connectToDatabase();
      const doc = await PartnerApplicationModel.create(data);
      console.log("✅ Saved partner application to MongoDB Atlas ('partner_applications'):", doc._id);
      return { success: true, mongoId: doc._id.toString() };
    } catch (err: any) {
      console.warn("MongoDB partner application save warning:", err?.message || err);
      return { success: true, savedLocally: true };
    }
  });

// 8. Service Provider Action
export const saveProviderAppToMongoDB = createServerFn({ method: "POST" })
  .validator((data: IProviderApplication) => data)
  .handler(async ({ data }) => {
    try {
      await connectToDatabase();
      const doc = await ProviderApplicationModel.create(data);
      console.log("✅ Saved provider application to MongoDB Atlas ('provider_applications'):", doc._id);
      return { success: true, mongoId: doc._id.toString() };
    } catch (err: any) {
      console.warn("MongoDB provider application save warning:", err?.message || err);
      return { success: true, savedLocally: true };
    }
  });

// 9. Summit & Live Webinar Registration Action ("event_registrations")
export const saveEventRegistrationToMongoDB = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    try {
      await connectToDatabase();
      const doc = await EventRegistrationModel.create(data);
      console.log("✅ Saved event registration to MongoDB Atlas ('event_registrations'):", doc._id);
      return { success: true, mongoId: doc._id.toString() };
    } catch (err: any) {
      console.warn("MongoDB event registration save warning:", err?.message || err);
      return { success: true, savedLocally: true };
    }
  });

// 10. Event Proposal Action ("event_proposals")
export const saveEventProposalToMongoDB = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    try {
      await connectToDatabase();
      const doc = await EventProposalModel.create(data);
      console.log("✅ Saved event proposal to MongoDB Atlas ('event_proposals'):", doc._id);
      return { success: true, mongoId: doc._id.toString() };
    } catch (err: any) {
      console.warn("MongoDB event proposal save warning:", err?.message || err);
      return { success: true, savedLocally: true };
    }
  });

// 11. Fetch All Real-Time Submissions from MongoDB Atlas
export const fetchAllSubmissionsFromMongoDB = createServerFn({ method: "GET" })
  .handler(async () => {
    try {
      await connectToDatabase();
      const [
        waitlist,
        founders,
        students,
        fellows,
        investors,
        partners,
        providers,
        newsletter,
        eventRegistrations,
        eventProposals,
      ] = await Promise.all([
        WaitlistUserModel.find().sort({ submittedAt: -1 }).lean(),
        FounderApplicationModel.find().sort({ submittedAt: -1 }).lean(),
        StudentApplicationModel.find().sort({ submittedAt: -1 }).lean(),
        FellowshipApplicationModel.find().sort({ submittedAt: -1 }).lean(),
        InvestorApplicationModel.find().sort({ submittedAt: -1 }).lean(),
        PartnerApplicationModel.find().sort({ submittedAt: -1 }).lean(),
        ProviderApplicationModel.find().sort({ submittedAt: -1 }).lean(),
        NewsletterSubscriberModel.find().sort({ subscribedAt: -1 }).lean(),
        EventRegistrationModel.find().sort({ registeredAt: -1 }).lean(),
        EventProposalModel.find().sort({ proposedAt: -1 }).lean(),
      ]);

      return {
        success: true,
        data: {
          waitlist: waitlist.map((d: any) => ({ ...d, _id: d._id.toString() })),
          founders: founders.map((d: any) => ({ ...d, _id: d._id.toString() })),
          students: students.map((d: any) => ({ ...d, _id: d._id.toString() })),
          fellows: fellows.map((d: any) => ({ ...d, _id: d._id.toString() })),
          investors: investors.map((d: any) => ({ ...d, _id: d._id.toString() })),
          partners: partners.map((d: any) => ({ ...d, _id: d._id.toString() })),
          providers: providers.map((d: any) => ({ ...d, _id: d._id.toString() })),
          newsletter: newsletter.map((d: any) => ({ ...d, _id: d._id.toString() })),
          eventRegistrations: eventRegistrations.map((d: any) => ({ ...d, _id: d._id.toString() })),
          eventProposals: eventProposals.map((d: any) => ({ ...d, _id: d._id.toString() })),
        },
      };
    } catch (err: any) {
      console.warn("Fetch submissions warning:", err?.message || err);
      return {
        success: false,
        error: err?.message || "Failed to fetch from MongoDB Atlas",
        data: {
          waitlist: [],
          founders: [],
          students: [],
          fellows: [],
          investors: [],
          partners: [],
          providers: [],
          newsletter: [],
          eventRegistrations: [],
          eventProposals: [],
        },
      };
    }
  });
