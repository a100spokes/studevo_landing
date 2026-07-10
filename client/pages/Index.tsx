import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";

import {
  Star,
  ArrowRight,
  Brain,
  Lightbulb,
  BookOpen,
  Zap,
  CheckCircle,
  Clock,
  Play,
  GraduationCap,
  Smartphone,
} from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description:
        "Personalized learning paths that adapt to your style and pace, making complex AI concepts accessible.",
      accent: "bg-hi-yellow",
      iconColor: "text-ink",
    },
    {
      icon: Lightbulb,
      title: "Interactive Tutorials",
      description:
        "Hands-on exercises and real-world projects to reinforce your understanding of AI tools.",
      accent: "bg-powder-sky",
      iconColor: "text-ink",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Guides",
      description:
        "Step-by-step guides covering a wide range of AI tools and technologies for all skill levels.",
      accent: "bg-bubblegum",
      iconColor: "text-ink",
    },
    {
      icon: Zap,
      title: "Quick Access",
      description:
        "Instantly find and save the tutorials you need with our smart search and bookmark system.",
      accent: "bg-jelly-green/20",
      iconColor: "text-jelly-green",
    },
    {
      icon: CheckCircle,
      title: "Progress Tracking",
      description:
        "Monitor your learning journey with detailed progress tracking and achievement milestones.",
      accent: "bg-iris/10",
      iconColor: "text-iris",
    },
    {
      icon: Brain,
      title: "AI Coach",
      description:
        "Learn with a personal AI tutor that guides you through the material, asks questions, runs quizzes, and adapts to your pace.",
      accent: "bg-sunbeam",
      iconColor: "text-ink",
    },
  ];

  const tutorials = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/3cbd4f482bbba1262fd66f73cd83efb7a09472dc?width=764",
      title: "Getting Started with ChatGPT",
      description:
        "Learn how to effectively use ChatGPT for various tasks and improve your productivity.",
      level: "Beginner",
      duration: "1.5 hours",
      rating: 4.8,
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/75bd41a6be43f8622080666afdc0ec0b34794401?width=764",
      title: "Midjourney Art Creation",
      description:
        "Master the art of creating stunning images with Midjourney's AI image generation.",
      level: "Intermediate",
      duration: "2 hours",
      rating: 4.7,
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b594d9362c42ecc8b0bdab95cd684f253878f81f?width=764",
      title: "AI Workflow Automation",
      description:
        "Combine multiple AI tools to create powerful workflows for your projects.",
      level: "Advanced",
      duration: "3 hours",
      rating: 4.9,
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4bae996697a66b318882418d1939df01737c04ee?width=764",
      title: "Exploring Stable Diffusion",
      description:
        "Learn to generate custom images with Stable Diffusion models and prompts.",
      level: "Intermediate",
      duration: "2.5 hours",
      rating: 4.6,
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ac3b2ebc4fe648dae68161f3df68ef54a4d0d79d?width=764",
      title: "Claude AI for Business",
      description:
        "Implement Claude AI to enhance customer service and business operations.",
      level: "Business",
      duration: "2 hours",
      rating: 4.5,
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e903f3aaf77157d0cc370fcdd5391040c9e3fd6e?width=764",
      title: "AI Ethics & Best Practices",
      description:
        "Understanding ethical considerations when working with AI tools and models.",
      level: "Essential",
      duration: "1 hour",
      rating: 4.7,
    },
  ];

  const heroLogoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroLogoRef.current) return;
      const scrollY = window.scrollY;
      const rotate = scrollY * 0.05;
      const translateX = scrollY * 0.3;
      const opacity = Math.max(0.07 - scrollY * 0.0001, 0);
      heroLogoRef.current.style.transform = `rotate(${rotate}deg) translateX(${translateX}px)`;
      heroLogoRef.current.style.opacity = `${opacity}`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
        {/* Large vector logo — fixed, scrolls behind next section */}
        <div
          className="fixed inset-0 flex items-center justify-end pointer-events-none z-0"
          aria-hidden
        >
          <img
            ref={heroLogoRef}
            src="/logo/Vector 1.png"
            alt=""
            className="w-[50vw] sm:w-[45vw] lg:w-[38vw] max-w-[550px] opacity-[0.07] mr-[-5vw] lg:mr-[5vw] select-none transition-none"
          />
        </div>

        {/* Accent blobs */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden
        >
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-hi-yellow rounded-full opacity-20 blur-3xl animate-hero-glow" />
          <div className="absolute -bottom-32 -left-32 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-powder-sky rounded-full opacity-20 blur-3xl animate-hero-glow-delayed" />
        </div>

        <div className="max-w-content mx-auto relative z-10 px-6 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-frost rounded-pill px-4 py-1.5 mb-8 animate-hero-fade-in">
              <div className="w-2 h-2 bg-jelly-green rounded-full animate-pulse" />
              <span className="font-['DM_Mono'] text-sm text-ink/60">
                Your AI learning platform
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[80px] xl:text-[96px] font-bold text-ink leading-[0.95] tracking-[-0.04em] animate-hero-slide-up">
              Master AI tools
              <br />
              with{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Studevo</span>
                <span className="absolute bottom-[0.1em] left-0 w-full h-[0.3em] bg-hi-yellow/60 -z-0 rounded-sm" />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-ink/50 mt-8 max-w-lg leading-relaxed tracking-[-0.01em] animate-hero-slide-up-delayed">
              Step-by-step tutorials and interactive guides designed for all
              skill levels.
            </p>

            <div className="flex items-center gap-4 mt-10 animate-hero-slide-up-delayed-2">
              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-ink text-white text-lg px-7 py-3.5 rounded-btn border-2 border-ink shadow-[4px_4px_0_0_#ffda00] hover:shadow-[2px_2px_0_0_#ffda00] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150"
              >
                Get started <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#download"
                className="inline-flex items-center gap-2 text-ink text-lg px-7 py-3.5 rounded-btn border-2 border-ink/20 hover:border-ink/40 transition-colors duration-150"
              >
                Download app
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-16 sm:py-20 px-6 overflow-hidden bg-chalk z-10"
      >
        {/* Background accent */}
        <div
          className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-sunbeam/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
          aria-hidden
        />

        <div className="max-w-content mx-auto relative z-10">
          {/* Header */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 mb-12 sm:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-frost rounded-pill px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 bg-jelly-green rounded-full" />
                <span className="font-['DM_Mono'] text-sm text-ink/60">
                  About Studevo
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] text-ink leading-[1] tracking-[-0.03em]">
                Your pocket
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">university</span>
                  <span className="absolute bottom-[0.05em] left-0 w-full h-[0.3em] bg-jelly-green/30 -z-0 rounded-sm" />
                </span>
              </h2>
            </div>
            <div className="flex items-end lg:justify-end">
              <p className="text-lg text-ink/50 max-w-sm leading-relaxed tracking-[-0.01em] lg:text-right">
                Studevo is a learning app packed with courses, video lessons,
                and interactive content to help you grow your skills — anytime,
                anywhere.
              </p>
            </div>
          </div>

          {/* About content */}
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="bg-white border-2 border-ink/[0.06] rounded-[1.25rem] p-7 hover:border-ink/20 hover:translate-y-[-4px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="w-12 h-12 bg-marker-red/10 rounded-xl flex items-center justify-center mb-5">
                <Play className="w-5 h-5 text-marker-red" />
              </div>
              <h3 className="text-lg font-semibold text-ink tracking-[-0.01em] mb-2">
                Video Lessons
              </h3>
              <p className="text-sm text-ink/50 leading-relaxed">
                Bite-sized video tutorials from industry professionals. Watch,
                pause, rewind — learn at your own pace with high-quality
                content.
              </p>
            </div>

            <div className="bg-white border-2 border-ink/[0.06] rounded-[1.25rem] p-7 hover:border-ink/20 hover:translate-y-[-4px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="w-12 h-12 bg-iris/10 rounded-xl flex items-center justify-center mb-5">
                <GraduationCap className="w-5 h-5 text-iris" />
              </div>
              <h3 className="text-lg font-semibold text-ink tracking-[-0.01em] mb-2">
                Structured Courses
              </h3>
              <p className="text-sm text-ink/50 leading-relaxed">
                Complete learning paths from beginner to advanced. Each course
                is carefully designed with quizzes and practical exercises.
              </p>
            </div>

            <div className="bg-white border-2 border-ink/[0.06] rounded-[1.25rem] p-7 hover:border-ink/20 hover:translate-y-[-4px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="w-12 h-12 bg-jelly-green/10 rounded-xl flex items-center justify-center mb-5">
                <Smartphone className="w-5 h-5 text-jelly-green" />
              </div>
              <h3 className="text-lg font-semibold text-ink tracking-[-0.01em] mb-2">
                Learn Anywhere
              </h3>
              <p className="text-sm text-ink/50 leading-relaxed">
                Available on iOS and Android. All video lessons include
                subtitles and transcriptions in multiple languages.
              </p>
            </div>
          </div>

          {/* Bottom highlight */}
          <div className="mt-8 grid lg:grid-cols-2 gap-5">
            <div className="bg-ink rounded-[1.25rem] p-8 sm:p-10 text-white">
              <h3 className="text-2xl sm:text-3xl tracking-[-0.02em] leading-[1.1] mb-4">
                Built for students who want real results
              </h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-md">
                No fluff, no filler. Every course and video lesson in Studevo is
                designed to give you practical, applicable skills that you can
                use in real projects and your career.
              </p>
            </div>
            <div className="relative bg-hi-yellow rounded-[1.25rem] p-8 sm:p-10 overflow-hidden flex items-center">
              <div className="relative z-10">
                <div className="font-['DM_Mono'] text-xs text-ink/50 uppercase tracking-widest mb-3">
                  What's inside
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-ink">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">
                      100+ structured courses
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-ink">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">
                      400+ video lessons
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-ink">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">Quizzes</span>
                  </li>
                  <li className="flex items-center gap-3 text-ink">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">AI Tutor</span>
                  </li>
                </ul>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <img src="/logo/Vector 1.png" alt="" className="w-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative py-16 sm:py-20 px-6 overflow-hidden bg-chalk z-10"
      >
        {/* Background accent */}
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] bg-hi-yellow/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden
        />

        <div className="max-w-content mx-auto relative z-10">
          {/* Header — left-aligned, bold */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 mb-12 sm:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-frost rounded-pill px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 bg-iris rounded-full" />
                <span className="font-['DM_Mono'] text-sm text-ink/60">
                  Features
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] text-ink leading-[1] tracking-[-0.03em]">
                Everything you
                <br />
                need to{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">master AI</span>
                  <span className="absolute bottom-[0.05em] left-0 w-full h-[0.3em] bg-powder-sky/60 -z-0 rounded-sm" />
                </span>
              </h2>
            </div>
            <div className="flex items-end lg:justify-end">
              <p className="text-lg text-ink/50 max-w-sm leading-relaxed tracking-[-0.01em] lg:text-right">
                Studevo combines powerful learning tools with intuitive design
                to make AI accessible to everyone.
              </p>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white border-2 border-ink/[0.06] rounded-[1.25rem] p-7 hover:border-ink/20 hover:translate-y-[-4px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-default"
              >
                <div
                  className={`w-12 h-12 ${feature.accent} rounded-xl flex items-center justify-center mb-5`}
                >
                  <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-ink tracking-[-0.01em] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-ink/50 leading-relaxed">
                  {feature.description}
                </p>

                {/* Corner number */}
                <span className="absolute top-5 right-6 font-['DM_Mono'] text-xs text-ink/15">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section
        id="tutorials"
        className="relative pt-16 sm:pt-20 pb-6 px-6 overflow-hidden bg-chalk bg-gradient-to-l from-[#f5f0e0]/40 via-chalk to-chalk z-10"
      >
        {/* Background accent */}
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-bubblegum/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden
        />

        <div className="max-w-content mx-auto relative z-10">
          {/* Header — same style as features */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 mb-12 sm:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-frost rounded-pill px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 bg-bubblegum rounded-full" />
                <span className="font-['DM_Mono'] text-sm text-ink/60">
                  Tutorials
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] text-ink leading-[1] tracking-[-0.03em]">
                Learn from
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">expert guides</span>
                  <span className="absolute bottom-[0.05em] left-0 w-full h-[0.3em] bg-bubblegum/40 -z-0 rounded-sm" />
                </span>
              </h2>
            </div>
            <div className="flex items-end lg:justify-end">
              <p className="text-lg text-ink/50 max-w-sm leading-relaxed tracking-[-0.01em] lg:text-right">
                Dive into our comprehensive collection covering the latest AI
                tools and technologies.
              </p>
            </div>
          </div>

          {/* Tutorial cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className="group relative bg-white border-2 border-ink/[0.06] rounded-[1.25rem] overflow-hidden hover:border-ink/20 hover:translate-y-[-4px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-ink text-xs font-medium px-3 py-1.5 rounded-lg">
                    {tutorial.level}
                  </span>
                  <span className="absolute top-3 right-3 bg-ink/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {tutorial.duration}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-hi-yellow text-hi-yellow"
                      />
                    ))}
                    <span className="font-['DM_Mono'] text-xs text-ink/40 ml-1.5">
                      {tutorial.rating}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-ink tracking-[-0.01em] leading-snug">
                    {tutorial.title}
                  </h3>
                  <p className="text-sm text-ink/50 leading-relaxed">
                    {tutorial.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-4 sm:py-6 px-6 bg-chalk z-10 relative">
        <div className="max-w-content mx-auto">
          <div className="relative bg-hi-yellow rounded-[1.25rem] px-6 sm:px-8 py-10 sm:py-14 overflow-hidden">
            <div className="absolute -bottom-14 -right-20 pointer-events-none opacity-20" aria-hidden>
              <img src="/logo/Vector 1.png" alt="" className="w-40 sm:w-52" />
            </div>
            <div className="relative z-10 grid grid-cols-3 gap-4 sm:gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-4xl lg:text-5xl text-ink tracking-[-0.03em]">100+</div>
                <div className="font-['DM_Mono'] text-[10px] sm:text-xs text-ink/40 uppercase tracking-widest mt-2 sm:mt-3">Courses</div>
              </div>
              <div className="border-x border-ink/10">
                <div className="text-2xl sm:text-4xl lg:text-5xl text-ink tracking-[-0.03em]">15k+</div>
                <div className="font-['DM_Mono'] text-[10px] sm:text-xs text-ink/40 uppercase tracking-widest mt-2 sm:mt-3">Active users</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl lg:text-5xl text-ink tracking-[-0.03em]">4.8</div>
                <div className="font-['DM_Mono'] text-[10px] sm:text-xs text-ink/40 uppercase tracking-widest mt-2 sm:mt-3">App Store rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section id="download" className="py-10 px-6 bg-chalk z-10 relative">
        <div className="max-w-content mx-auto">
          <div className="relative bg-ink rounded-[1.25rem] px-8 sm:px-14 py-14 sm:py-16 overflow-hidden">
            {/* Background logo */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.2]"
              aria-hidden
            >
              <img
                src="/logo/Vector 1.png"
                alt=""
                className="w-80 sm:w-[28rem] lg:w-[34rem] rotate-[-15deg] animate-hero-float select-none"
              />
            </div>

            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-pill px-4 py-1.5 mb-6">
                  <span className="w-1.5 h-1.5 bg-jelly-green rounded-full animate-pulse" />
                  <span className="font-['DM_Mono'] text-sm text-white/50">
                    Available now
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl text-white tracking-[-0.02em] leading-[1.1]">
                  Download Studevo
                </h3>
                <p className="text-base text-white/40 mt-3 max-w-md leading-relaxed">
                  Get the app on your phone and start learning today. Courses,
                  video lessons, and AI tutor — all in your pocket.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="hover:translate-y-[-3px] hover:brightness-110 transition-all duration-300"
                >
                  <img
                    src="/apple.png"
                    alt="Download on the App Store"
                    className="h-12 sm:h-14"
                  />
                </a>
                <a
                  href="#"
                  className="hover:translate-y-[-3px] hover:brightness-110 transition-all duration-300"
                >
                  <img
                    src="/google.png"
                    alt="Get it on Google Play"
                    className="h-12 sm:h-14"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 px-6 overflow-hidden bg-chalk z-10">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden
        >
          <img
            src="/logo/Vector 1.png"
            alt=""
            className="w-[30vw] max-w-[300px] opacity-[0.04] animate-hero-float select-none"
          />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-frost rounded-pill px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 bg-jelly-green rounded-full" />
            <span className="font-['DM_Mono'] text-sm text-ink/60">
              Get started
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[64px] text-ink leading-[1] tracking-[-0.03em]">
            Start your AI
            <br />
            learning{" "}
            <span className="relative inline-block">
              <span className="relative z-10">journey</span>
              <span className="absolute bottom-[0.05em] left-0 w-full h-[0.3em] bg-sunbeam/60 -z-0 rounded-sm" />
            </span>
          </h2>

          <p className="text-lg text-ink/50 mt-6 max-w-lg mx-auto leading-relaxed tracking-[-0.01em]">
            Join thousands of learners who are mastering AI tools and advancing
            their skills with Studevo.
          </p>

          <div className="flex items-center justify-center gap-4 mt-10">
            <a
              href="#download"
              className="inline-flex items-center gap-2 bg-ink text-white text-lg px-8 py-4 rounded-btn border-2 border-ink shadow-[4px_4px_0_0_#ffda00] hover:shadow-[2px_2px_0_0_#ffda00] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150"
            >
              Get started <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-ink text-lg px-8 py-4 rounded-btn border-2 border-ink/20 hover:border-ink/40 transition-colors duration-150"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
