import { Quote } from "lucide-react";

export interface SuccessStory {
  quote: string;
  name: string;
  role: string;
  metric: string;
  avatar?: string;
  avatarBg?: string;
}

interface PersonaSuccessStoriesProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  stories: SuccessStory[];
}

export function PersonaSuccessStories({
  badge = "Success Stories",
  title = "Real Impact & Proven Outcomes",
  subtitle = "See how constituents in our ecosystem accelerate breakthroughs, secure funding, and scale global operations.",
  stories,
}: PersonaSuccessStoriesProps) {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            {badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] mt-4">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto font-medium">
            {subtitle}
          </p>
        </div>

        {/* Seamless Infinite Marquee Ticker */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] py-6 -my-6">
          <div className="flex w-max animate-marquee gap-8 pr-8 hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex gap-8">
                {stories.map((story, i) => (
                  <div
                    key={`${groupIndex}-${i}`}
                    className="relative w-[380px] sm:w-[440px] bg-card/90 backdrop-blur-xl border border-border/80 rounded-3xl p-8 flex flex-col justify-between hover:border-primary/60 hover:shadow-[0_12px_45px_-10px_rgba(4,159,217,0.25)] transition-all duration-500 hover:-translate-y-2 cursor-default group overflow-hidden shrink-0"
                  >
                    {/* Top Ambient Cyan Accent Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#049fd9] via-[#0288c7] to-indigo-600 opacity-80 group-hover:opacity-100 transition-opacity" />

                    <Quote className="h-12 w-12 text-primary/15 absolute top-6 right-6 transform -scale-x-100 group-hover:text-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 pointer-events-none" />

                    <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-10 group-hover:text-foreground transition-colors relative z-10 font-medium italic">
                      "{story.quote}"
                    </p>

                    <div className="relative z-10 pt-4 border-t border-border/50">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          {story.avatar ? (
                            <img
                              src={story.avatar}
                              alt={story.name}
                              className="h-11 w-11 rounded-full object-cover border-2 border-primary/30 shadow-md shrink-0 group-hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <div className={`h-11 w-11 rounded-full ${story.avatarBg || "bg-primary/10 text-primary"} flex items-center justify-center font-black text-base border border-primary/20 shadow-inner shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                              {story.name.charAt(0)}
                            </div>
                          )}
                          <div className="overflow-hidden">
                            <p className="text-foreground font-bold text-sm truncate">{story.name}</p>
                            <p className="text-xs text-foreground/60 font-medium truncate mt-0.5">
                              {story.role}
                            </p>
                          </div>
                        </div>

                        <div className="bg-warning/10 border border-warning/25 px-3 py-1 rounded-full shrink-0 shadow-sm group-hover:bg-warning/20 transition-colors">
                          <p className="text-[10px] font-bold text-warning uppercase tracking-widest whitespace-nowrap">
                            {story.metric}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
