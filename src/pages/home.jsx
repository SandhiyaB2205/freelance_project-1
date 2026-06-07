import bgVideo from "../data/background.mp4";
import React, { useState, useEffect } from "react";
const rollingCards = [
  {
    id: 1,
    dark: true,
    icon: "♕",
    title: "Master Strategy",
    description: "Learn advanced tactical strategies to outsmart opponents. Develop foresight, critical thinking, and a deeper understanding of positional play.",
    button: "View Strategy",
  },
  {
    id: 2,
    dark: false,
    icon: "♞",
    title: "Expert Coaches",
    description: "Learn from passionate mentors focused on strategy, discipline, analytical thinking, and developing a champion mindset.",
    button: "Meet Coaches",
  },
  {
    id: 3,
    dark: true,
    icon: "♚",
    title: "Proven Results",
    description: "Structured training programs with personalized guidance, performance analysis, and strategic improvement plans designed to unlock maximum potential.",
    button: "View Results",
  }
];

const Home = () => {
  const [activeCard, setActiveCard] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full flex flex-col">
      {/* Hero Wrapper */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "calc(100vh - 74px)", // Adjusts for the navbar height so it fits the screen
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontFamily: "'Inter', sans-serif",
          zIndex: 0,
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -3,
            transform: "scale(1.05)",
          }}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Dark Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
                        linear-gradient(
                            135deg,
                            rgba(2,6,23,0.92) 0%,
                            rgba(15,23,42,0.72) 45%,
                            rgba(0,0,0,0.45) 100%
                        )
                    `,
            zIndex: -2,
          }}
        />

        {/* Glow Effect */}
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(56,189,248,0.18), transparent 70%)",
            top: "-100px",
            right: "-120px",
            filter: "blur(20px)",
            zIndex: -1,
          }}
        />

        {/* Hero Section */}
        <section
          className="hero-container"
          style={{
            width: "100%",
            maxWidth: "1400px",
            padding: "0 8%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "60px",
            zIndex: 2,
          }}
        >
          {/* Left Content */}
          <div
            className="hero-content"
            style={{
              flex: 1,
              maxWidth: "700px",
              animation: "fadeUp 1s ease",
            }}
          >
            {/* Tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 18px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
                marginBottom: "28px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#f1fc75ff",
                  boxShadow: "0 0 15px #f1fc75ff",
                }}
              />

              <span
                style={{
                  color: "#f1f5f9",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Professional Chess Coaching
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{
                color: "#fff",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                fontWeight: "900",
                lineHeight: "1.05",
                letterSpacing: "-2px",
                marginBottom: "26px",
                textShadow: "0 10px 35px rgba(0,0,0,0.45)",
              }}
            >
              Train Your Mind.
              <br />

              <span
                style={{
                  background:
                    "linear-gradient(90deg, #f5fc69ff, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Master the Game.
              </span>
            </h1>

            {/* Description */}
            <p
              style={{
                color: "rgba(255,255,255,0.82)",
                fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
                lineHeight: "1.9",
                maxWidth: "620px",
                marginBottom: "40px",
                fontWeight: "400",
              }}
            >
              Join our elite chess coaching program designed for
              beginners, intermediate players, and future champions.
              Improve strategic thinking, concentration, confidence,
              and competitive skills through expert training.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                gap: "18px",
                flexWrap: "wrap",
              }}
            >
              {/* Primary Button */}
              <button
                style={{
                  padding: "15px 34px",
                  borderRadius: "999px",
                  border: "none",
                  background:
                    "linear-gradient(135deg, #f1fc75ff, #f1fc75ff)",
                  color: "black",
                  fontSize: "13px",
                  fontWeight: "800",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.35s ease",
                  boxShadow:
                    "0 10px 30px rgba(14,165,233,0.35)",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform =
                    "translateY(-4px) scale(1.02)";
                  e.target.style.boxShadow =
                    "0 16px 40px rgba(252, 249, 83, 0.94)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform =
                    "translateY(0px) scale(1)";
                  e.target.style.boxShadow =
                    "0 10px 30px rgba(255, 248, 44, 0.35)";
                }}
              >
                Start Your Chess Journey
              </button>

              {/* Secondary Button */}
              <button
                style={{
                  padding: "15px 32px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.35s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.background =
                    "rgba(255,255,255,0.16)";
                  e.target.style.transform =
                    "translateY(-3px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background =
                    "rgba(255,255,255,0.08)";
                  e.target.style.transform =
                    "translateY(0px)";
                }}
              >
                Explore Programs
              </button>
            </div>
          </div>
          <style>
            {`
                    @keyframes fadeUp {
                        from {
                            opacity: 0;
                            transform: translateY(40px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes floatCard {
                        0% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-12px);
                        }
                        100% {
                            transform: translateY(0px);
                        }
                    }

                    @media (max-width: 1100px) {
                        .hero-container {
                            flex-direction: column;
                            justify-content: center;
                            text-align: center;
                            padding-top: 120px;
                            padding-bottom: 80px;
                        }

                        .hero-content {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        }

                        .hero-card {
                            width: 100% !important;
                            max-width: 420px;
                        }
                    }

                    @media (max-width: 768px) {
                        .hero-container {
                            padding-left: 24px !important;
                            padding-right: 24px !important;
                        }

                        .hero-card {
                            min-height: auto !important;
                        }
                    }
                `}
          </style>
        </section>
      </section>
      {/* WHY CHOOSE US SECTION */}
      {/* PREMIUM SLIDER SECTION */}
      {/* PREMIUM MATCHING SLIDER SECTION */}
      <section className="relative w-full bg-[#fdfbf0] py-32 overflow-hidden">

        {/* Soft Background Blend */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-200/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-yellow-300/20 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

        {/* Heading */}
        <div className="relative z-10 text-center mb-20 px-6">

          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-yellow-300/70 bg-yellow-100/80 backdrop-blur-xl text-yellow-700 text-sm tracking-[5px] uppercase font-bold shadow-sm">
            ♟ Why Choose Us
          </span>

          <h2 className="mt-8 text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
            Strategic Training For
            <br />
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Future Champions
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-slate-600 text-xl leading-9">
            Experience premium chess coaching with structured guidance,
            strategic thinking, and tournament-focused learning.
          </p>

        </div>

        {/* MAIN SLIDER */}
        <div className="relative max-w-7xl mx-auto px-6">

          {/* Outer Glass Container */}
          <div className="relative overflow-hidden rounded-[42px] border border-black/5 bg-white/40 backdrop-blur-2xl shadow-[0_15px_80px_rgba(0,0,0,0.08)]">

            {/* Sliding Wrapper */}
            <div
              className="flex transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                width: `${rollingCards.length * 100}%`,
                transform: `translateX(-${activeCard * (100 / rollingCards.length)}%)`,
              }}
            >

              {rollingCards.map((card) => (

                <div
                  key={card.id}
                  className="
              w-full
              h-full
              shrink-0
              flex
              items-center
              justify-between
              px-16
              md:px-20
              py-14
              md:py-16
              gap-12
            "
                  style={{
                    width: `${100 / rollingCards.length}%`,
                  }}
                >

                  {/* LEFT */}
                  <div className="flex-1">

                    {/* Icon */}
                    <div
                      className={`
                  w-24
                  h-24
                  rounded-[28px]
                  flex
                  items-center
                  justify-center
                  text-6xl
                  mb-10
                  border
                  transition-all
                  duration-500
                  shadow-lg
                  ${card.dark
                          ? "bg-black text-yellow-300 border-white/10"
                          : "bg-yellow-100 text-yellow-500 border-yellow-200"}
                `}
                    >
                      {card.icon}
                    </div>

                    {/* Title */}
                    <h3
                      className="
                  text-5xl
                  md:text-6xl
                  font-black
                  leading-[1.1]
                  tracking-tight
                  text-slate-900
                "
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-8 text-slate-600 leading-9 text-lg md:text-xl max-w-2xl">
                      {card.description}
                    </p>

                    {/* Button */}
                    <button
                      className={`
                  mt-10
                  px-9
                  py-4
                  rounded-full
                  font-bold
                  text-lg
                  tracking-wide
                  transition-all
                  duration-500
                  hover:scale-105
                  ${card.dark
                          ? "bg-black text-white hover:bg-yellow-400 hover:text-black"
                          : "bg-yellow-400 text-black hover:shadow-[0_10px_35px_rgba(250,204,21,0.4)]"}
                `}
                    >
                      {card.button}
                    </button>

                  </div>

                  {/* RIGHT DESIGN */}
                  <div className="hidden md:flex flex-1 items-center justify-center">

                    <div className="relative w-[360px] h-[360px]">

                      {/* Main Circle */}
                      <div className="absolute inset-0 rounded-full border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white shadow-inner" />

                      {/* Glow */}
                      <div className="absolute inset-8 rounded-full bg-yellow-200/30 blur-3xl animate-pulse" />

                      {/* Center Icon */}
                      <div className="absolute inset-0 flex items-center justify-center text-[140px] text-yellow-400/90">
                        {card.icon}
                      </div>

                      {/* Floating Ring */}
                      <div className="absolute inset-[-18px] rounded-full border border-yellow-300/40 animate-spin [animation-duration:16s]" />

                      {/* Extra Ring */}
                      <div className="absolute inset-[-35px] rounded-full border border-yellow-200/30" />

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* SLIDER DOTS */}
          <div className="flex justify-center items-center gap-4 mt-12">

            {rollingCards.map((_, index) => (

              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`
            transition-all
            duration-500
            rounded-full
            ${activeCard === index
                    ? "w-14 h-3 bg-yellow-400"
                    : "w-3.5 h-3.5 bg-yellow-200 hover:bg-yellow-300"}
          `}
              />

            ))}

          </div>

        </div>

      </section>
      {/* PREMIUM COURSES SECTION */}

      <section className="relative w-full bg-[#fdfbf0] py-32 overflow-hidden">

        {/* Soft Background Blend */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-200/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-yellow-300/20 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-yellow-50/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

          {/* HEADING */}
          <div className="text-center mb-24">

            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-yellow-300/70 bg-yellow-100/80 backdrop-blur-xl text-yellow-700 text-xs tracking-[5px] uppercase font-bold shadow-sm">
              ♟ OUR COURSES
            </span>

            <h2 className="mt-8 text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
              Master Chess at
              <br />
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Every Level
              </span>
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-slate-600 text-xl leading-9">
              Structured programs designed for beginners,
              competitive players, and future champions.
            </p>

          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {/* BEGINNER CARD */}
            <div className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-black/5
        bg-white/40
        backdrop-blur-2xl
        shadow-[0_15px_80px_rgba(0,0,0,0.06)]
        p-8
        md:p-10
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-yellow-300
        hover:shadow-[0_20px_60px_rgba(250,204,21,0.18)]
      ">

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.15),transparent_50%)]" />

              {/* Badge */}
              <div className="relative z-10 inline-flex px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold tracking-[3px] uppercase border border-yellow-200">
                Beginner
              </div>

              {/* Title */}
              <h3 className="relative z-10 mt-8 text-4xl font-black text-slate-900">
                Beginner
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-5 text-slate-600 leading-8 text-lg">
                Learn the fundamentals of chess with interactive lessons
                and guided practice.
              </p>

              {/* Features */}
              <div className="relative z-10 mt-10 space-y-5">

                {[
                  "Piece movement & rules",
                  "Opening basics",
                  "Simple tactics",
                  "Puzzle solving",
                  "Weekly practice matches",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 text-slate-700"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.7)]" />
                    <span>{item}</span>
                  </div>

                ))}

              </div>

              {/* Bottom */}
              <div className="relative z-10 mt-12 flex items-center justify-between">

                <div className="px-5 py-2 rounded-full bg-yellow-50 border border-yellow-100 text-yellow-700 text-sm font-semibold">
                  8 Weeks
                </div>

                <button className="
            relative
            overflow-hidden
            px-6
            py-3
            rounded-full
            bg-black
            text-white
            font-bold
            tracking-wide
            transition-all
            duration-300
            hover:bg-yellow-400
            hover:text-black
            hover:scale-105
          ">
                  <span className="relative z-10">
                    Start Learning
                  </span>

                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </button>

              </div>

            </div>

            {/* INTERMEDIATE CARD */}
            <div className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-yellow-200
        bg-gradient-to-b
        from-yellow-50/90
        to-white/50
        backdrop-blur-2xl
        shadow-[0_20px_90px_rgba(250,204,21,0.15)]
        p-8
        md:p-10
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-yellow-400
        hover:shadow-[0_25px_70px_rgba(250,204,21,0.22)]
        scale-[1.02]
      ">

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.18),transparent_50%)]" />

              {/* Badge */}
              <div className="relative z-10 inline-flex px-4 py-2 rounded-full bg-yellow-200 text-yellow-800 text-xs font-bold tracking-[3px] uppercase border border-yellow-300">
                Intermediate
              </div>

              {/* Title */}
              <h3 className="relative z-10 mt-8 text-4xl font-black text-slate-900">
                Intermediate
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-5 text-slate-700 leading-8 text-lg">
                Improve strategic thinking, calculation,
                and tournament-level gameplay.
              </p>

              {/* Features */}
              <div className="relative z-10 mt-10 space-y-5">

                {[
                  "Positional concepts",
                  "Tactical combinations",
                  "Middlegame planning",
                  "Opening preparation",
                  "Competitive training",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 text-slate-800"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
                    <span>{item}</span>
                  </div>

                ))}

              </div>

              {/* Bottom */}
              <div className="relative z-10 mt-12 flex items-center justify-between">

                <div className="px-5 py-2 rounded-full bg-white border border-yellow-200 text-yellow-700 text-sm font-semibold">
                  12 Weeks
                </div>

                <button className="
            relative
            overflow-hidden
            px-6
            py-3
            rounded-full
            bg-yellow-400
            text-black
            font-bold
            tracking-wide
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_10px_30px_rgba(250,204,21,0.35)]
          ">
                  <span className="relative z-10">
                    Level Up
                  </span>

                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </button>

              </div>

            </div>

            {/* ADVANCED CARD */}
            <div className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-black/5
        bg-white/40
        backdrop-blur-2xl
        shadow-[0_15px_80px_rgba(0,0,0,0.06)]
        p-8
        md:p-10
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-yellow-300
        hover:shadow-[0_20px_60px_rgba(250,204,21,0.18)]
      ">

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.15),transparent_50%)]" />

              {/* Badge */}
              <div className="relative z-10 inline-flex px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold tracking-[3px] uppercase border border-yellow-200">
                Advanced
              </div>

              {/* Title */}
              <h3 className="relative z-10 mt-8 text-4xl font-black text-slate-900">
                Advanced
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-5 text-slate-600 leading-8 text-lg">
                Elite coaching for serious players aiming for ratings,
                titles, and championships.
              </p>

              {/* Features */}
              <div className="relative z-10 mt-10 space-y-5">

                {[
                  "Advanced calculation",
                  "Endgame mastery",
                  "Deep opening theory",
                  "Tournament psychology",
                  "Personal mentoring",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 text-slate-700"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.7)]" />
                    <span>{item}</span>
                  </div>

                ))}

              </div>

              {/* Bottom */}
              <div className="relative z-10 mt-12 flex items-center justify-between">

                <div className="px-5 py-2 rounded-full bg-yellow-50 border border-yellow-100 text-yellow-700 text-sm font-semibold">
                  16 Weeks
                </div>

                <button className="
            relative
            overflow-hidden
            px-6
            py-3
            rounded-full
            bg-black
            text-white
            font-bold
            tracking-wide
            transition-all
            duration-300
            hover:bg-yellow-400
            hover:text-black
            hover:scale-105
          ">
                  <span className="relative z-10">
                    Become a Champion
                  </span>

                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* ================= Tutor Section ================= */}
      <section className="relative w-full bg-[#fdfbf0] py-28 px-6 md:px-12 lg:px-20 overflow-hidden">

        {/* Background Glow Effects */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-yellow-200/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-300/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="relative max-w-7xl mx-auto">

          {/* Badge Above Image */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-yellow-300 bg-yellow-100 text-yellow-700 text-xs tracking-[3px] uppercase font-bold">
              Meet Your Tutor
            </div>
          </div>

          {/* Main Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Tutor Image */}
            <div className="group relative">

              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-yellow-500/10 rounded-[32px] blur-2xl opacity-70 group-hover:opacity-100 transition duration-500" />

              <div className="relative overflow-hidden rounded-[32px] border border-yellow-300/40 shadow-2xl">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIN5CsPi6KILPU87il4h987brG1y4bQ0wTBQPgerSLyx_a9RVQmcq_PQ3-hp6ZB7HUpOt94L03L4HepAiiftJaZXfN2gT7DeNbCSci0cPKQ&s=10"
                  alt="Chess Tutor"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Tutor Content */}
            <div className="relative">

              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-8">
                Learn Chess From a{" "}
                <span className="text-yellow-500">
                  Professional Coach
                </span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Passionate about teaching and helping players excel in chess,
                our mentor is a National Chess Player with an impressive Elo
                rating of <span className="font-bold text-black">1933</span>.
                Having represented{" "}
                <span className="font-semibold text-black">
                  Tamil Nadu
                </span>{" "}
                three times at the National level and consistently finishing in the
                top 10, the coach brings elite tournament experience and strategic
                expertise to every session.
                <br />
                <br />
                Achievements include winning the
                <span className="font-semibold text-black">
                  {" "}Gold Medal for Madras University
                </span>
                {" "}at the University Level and recognition at
                <span className="font-semibold text-black">
                  {" "}Magadh University (2007)
                </span>.
                The mentor is also a certified coach of the
                <span className="font-semibold text-black">
                  {" "}Tamil Nadu State Chess Association
                </span>
                holding the
                <span className="font-semibold text-black">
                  {" "}Chess Coaches Level 1 Certification (Beginners)
                </span>.
              </p>

            </div>
          </div>

          {/* Bottom Common Highlights */}
          <div className="grid sm:grid-cols-3 gap-6 mt-14">

            <div className="group bg-white/80 backdrop-blur-xl border border-yellow-200 rounded-[24px] p-6 hover:-translate-y-2 hover:border-yellow-400 transition-all duration-300 shadow-md hover:shadow-xl">
              <div className="text-yellow-500 text-3xl mb-4">♟</div>

              <h4 className="font-bold text-black text-lg mb-2">
                FIDE Rated
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed">
                Professional Chess Coach with tournament-level strategic expertise.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-xl border border-yellow-200 rounded-[24px] p-6 hover:-translate-y-2 hover:border-yellow-400 transition-all duration-300 shadow-md hover:shadow-xl">
              <div className="text-yellow-500 text-3xl mb-4">🏆</div>

              <h4 className="font-bold text-black text-lg mb-2">
                National Player
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed">
                Represented Tamil Nadu multiple times at prestigious national events.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-xl border border-yellow-200 rounded-[24px] p-6 hover:-translate-y-2 hover:border-yellow-400 transition-all duration-300 shadow-md hover:shadow-xl">
              <div className="text-yellow-500 text-3xl mb-4">🎯</div>

              <h4 className="font-bold text-black text-lg mb-2">
                Certified Coach
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed">
                Tamil Nadu State Chess Association certified Level 1 mentor.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
