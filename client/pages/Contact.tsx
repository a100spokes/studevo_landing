import { useState } from "react";
import Layout from "@/components/Layout";
import { ArrowRight, Mail, HelpCircle } from "lucide-react";

const topics = [
  {
    id: "technical",
    label: "Technical issue",
    description: "Report broken data, wrong scores, UI bugs.",
  },
  {
    id: "feedback",
    label: "Feedback",
    description: "Ideas, feature requests, suggestions.",
  },
  {
    id: "partnership",
    label: "Partnership",
    description: "Business development, cooperation.",
  },
  {
    id: "advertising",
    label: "Advertising",
    description: "Media kit, placements, sponsorships.",
  },
];

export default function Contact() {
  const [selectedTopic, setSelectedTopic] = useState("technical");

  return (
    <Layout>
      <section className="relative pt-24 pb-10 lg:pt-28 lg:pb-12 px-6 overflow-hidden">
        {/* Background accents */}
        <div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-powder-sky/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute -bottom-32 -left-32 w-[300px] h-[300px] bg-hi-yellow/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden
        />

        <div className="max-w-content mx-auto relative z-10">
          {/* Header */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-frost rounded-pill px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 bg-powder-sky rounded-full" />
                <span className="font-['DM_Mono'] text-sm text-ink/60">
                  Support
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] text-ink leading-[1] tracking-[-0.03em]">
                Get in{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">touch</span>
                  <span className="absolute bottom-[0.05em] left-0 w-full h-[0.3em] bg-powder-sky/50 -z-0 rounded-sm" />
                </span>
              </h1>
            </div>
            <div className="flex items-end lg:justify-end">
              <p className="text-lg text-ink/50 max-w-sm leading-relaxed tracking-[-0.01em] lg:text-right">
                Have a question or want to propose a partnership? We typically
                respond within{" "}
                <strong className="text-ink">1–2 business days</strong>
              </p>
            </div>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-6 items-stretch">
            {/* Left column */}
            <div className="flex flex-col gap-6">
              {/* Prefer email */}
              <div className="bg-white border-2 border-ink/[0.06] rounded-[1.25rem] p-7 hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-powder-sky/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-ink" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-ink tracking-[-0.01em]">
                      Prefer email?
                    </h2>
                    <p className="text-sm text-ink/50 mt-1.5 leading-relaxed">
                      Reach us directly at{" "}
                      <a
                        href="mailto:contact@studevo.com"
                        className="text-ink underline underline-offset-2 hover:text-ink/70 transition-colors"
                      >
                        contact@studevo.com
                      </a>
                    </p>
                    <p className="text-xs text-ink/30 mt-2">
                      Tip: include the match link (or match ID) when reporting a
                      technical issue.
                    </p>
                  </div>
                </div>
              </div>

              {/* How can we help */}
              <div className="bg-white border-2 border-ink/[0.06] rounded-[1.25rem] p-7 flex-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-11 h-11 bg-hi-yellow/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-ink" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-ink tracking-[-0.01em]">
                      How can we help?
                    </h2>
                    <p className="text-sm text-ink/50 mt-1.5">
                      Choose a topic to route your request.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {topics.map((topic) => (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopic(topic.id)}
                      className={`text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                        selectedTopic === topic.id
                          ? "border-ink bg-ink text-white"
                          : "border-ink/[0.06] bg-white hover:border-ink/20 hover:translate-y-[-2px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.06)]"
                      }`}
                    >
                      <div
                        className={`text-sm font-semibold ${selectedTopic === topic.id ? "text-white" : "text-ink"}`}
                      >
                        {topic.label}
                      </div>
                      <div
                        className={`text-xs mt-1 ${selectedTopic === topic.id ? "text-white/60" : "text-ink/40"}`}
                      >
                        {topic.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — Form */}
            <div className="bg-white border-2 border-ink/[0.06] rounded-[1.25rem] p-7">
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-lg font-semibold text-ink tracking-[-0.01em]">
                  Send a message
                </h2>
                <span className="font-['DM_Mono'] text-xs text-ink/40 bg-chalk border border-frost rounded-lg px-3 py-1.5">
                  1–2 days
                </span>
              </div>
              <p className="text-sm text-ink/40 mb-7">
                Fill in the form and we'll reply to your email.
              </p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-['DM_Mono'] text-[11px] text-ink/40 uppercase tracking-widest mb-2">
                      Topic
                    </label>
                    <select
                      value={selectedTopic}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      className="w-full bg-chalk border-2 border-ink/[0.06] rounded-xl px-4 py-3 text-sm text-ink appearance-none cursor-pointer focus:outline-none focus:border-ink/30 transition-colors"
                    >
                      <option value="technical">Technical issue</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="advertising">Advertising</option>
                      <option value="general">General question</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-['DM_Mono'] text-[11px] text-ink/40 uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-chalk border-2 border-ink/[0.06] rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink/25 focus:outline-none focus:border-ink/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-['DM_Mono'] text-[11px] text-ink/40 uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-chalk border-2 border-ink/[0.06] rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink/25 focus:outline-none focus:border-ink/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-['DM_Mono'] text-[11px] text-ink/40 uppercase tracking-widest mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Short summary"
                      className="w-full bg-chalk border-2 border-ink/[0.06] rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink/25 focus:outline-none focus:border-ink/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-['DM_Mono'] text-[11px] text-ink/40 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us what you need help with..."
                    className="w-full bg-chalk border-2 border-ink/[0.06] rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink/25 focus:outline-none focus:border-ink/30 transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-ink text-white text-base px-6 py-3.5 rounded-xl font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] active:translate-y-0 active:shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-200"
                >
                  Submit <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-ink/30 text-center mt-3">
                  By submitting this form, you agree that we may contact you at
                  the email address provided.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
