import React from "react";
import bgVideo from "../data/background.mp4";
import { useState } from "react";
const Home = () => {
  const [activeCard, setActiveCard] = useState(1);
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
      <section className="relative w-full bg-[#fdfbf0] py-28 px-6 md:px-12 lg:px-20 overflow-hidden">

        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-200/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-yellow-300/20 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

        {/* Heading */}
        <div className="relative max-w-7xl mx-auto text-center mb-24 z-10">

          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-yellow-300 bg-yellow-100/80 backdrop-blur-xl text-yellow-700 text-xs tracking-[4px] uppercase font-bold shadow-md">
            ♟ Why Choose Us
          </span>

          <h2 className="mt-7 text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
            Master The Art Of
            <br />
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Strategic Thinking
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-slate-600 text-lg md:text-xl leading-9 font-medium">
            Experience premium chess coaching that transforms beginners into
            confident players and competitors into future champions.
          </p>
        </div>

        {/* Cards */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 z-10">

          {/* Card 1 */}
          <div
            onClick={() => setActiveCard(0)}
            className={`group relative cursor-pointer rounded-[32px]
      p-[1px] transition-all duration-500 hover:-translate-y-4
      ${activeCard === 0
                ? "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-600 shadow-[0_0_50px_rgba(234,179,8,0.35)] scale-[1.02]"
                : "bg-black/10"
              }`}
          >
            <div className="relative h-full rounded-[31px] bg-black p-10 overflow-hidden">

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="absolute -top-20 -right-20 w-52 h-52 bg-yellow-400/20 blur-3xl rounded-full" />
              </div>

              {/* Icon */}
              <div className="relative w-20 h-20 rounded-2xl bg-white/10 border border-white/10 text-yellow-300 flex items-center justify-center text-4xl mb-8 backdrop-blur-xl group-hover:rotate-6 transition duration-500">
                ♛
              </div>

              <h3 className="text-3xl font-extrabold text-white mb-5 tracking-tight">
                Elite Training
              </h3>

              <p className="leading-8 text-[15px] text-gray-400">
                Advanced coaching sessions crafted to improve tactical
                awareness, positional understanding, opening preparation,
                and competitive confidence.
              </p>

              {/* Bottom Line */}
              <div
                className={`absolute bottom-0 left-0 h-[3px]
          bg-gradient-to-r from-yellow-300 to-yellow-500 transition-all duration-500
          ${activeCard === 0 ? "w-full" : "w-0"}`}
              />
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => setActiveCard(1)}
            className={`group relative cursor-pointer rounded-[32px]
      p-[1px] transition-all duration-500 hover:-translate-y-4
      ${activeCard === 1
                ? "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-600 shadow-[0_0_50px_rgba(234,179,8,0.35)] scale-[1.02]"
                : "bg-black/10"
              }`}
          >
            <div className="relative h-full rounded-[31px] bg-white p-10 overflow-hidden border border-black/5">

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-yellow-400/20 blur-3xl rounded-full" />
              </div>

              {/* Icon */}
              <div className="relative w-20 h-20 rounded-2xl bg-black/[0.04] border border-black/5 text-yellow-500 flex items-center justify-center text-4xl mb-8 backdrop-blur-xl group-hover:rotate-6 transition duration-500">
                ♞
              </div>

              <h3 className="text-3xl font-extrabold text-slate-900 mb-5 tracking-tight">
                Expert Coaches
              </h3>

              <p className="leading-8 text-[15px] text-slate-600">
                Learn from passionate mentors focused on strategy,
                discipline, analytical thinking, and developing a
                champion mindset for tournament success.
              </p>

              {/* Bottom Line */}
              <div
                className={`absolute bottom-0 left-0 h-[3px]
          bg-gradient-to-r from-yellow-300 to-yellow-500 transition-all duration-500
          ${activeCard === 1 ? "w-full" : "w-0"}`}
              />
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => setActiveCard(2)}
            className={`group relative cursor-pointer rounded-[32px]
      p-[1px] transition-all duration-500 hover:-translate-y-4
      ${activeCard === 2
                ? "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-600 shadow-[0_0_50px_rgba(234,179,8,0.35)] scale-[1.02]"
                : "bg-black/10"
              }`}
          >
            <div className="relative h-full rounded-[31px] bg-black p-10 overflow-hidden">

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="absolute top-1/2 left-1/2 w-56 h-56 -translate-x-1/2 -translate-y-1/2 bg-yellow-400/10 blur-3xl rounded-full" />
              </div>

              {/* Icon */}
              <div className="relative w-20 h-20 rounded-2xl bg-white/10 border border-white/10 text-yellow-300 flex items-center justify-center text-4xl mb-8 backdrop-blur-xl group-hover:rotate-6 transition duration-500">
                ♚
              </div>

              <h3 className="text-3xl font-extrabold text-white mb-5 tracking-tight">
                Proven Results
              </h3>

              <p className="leading-8 text-[15px] text-gray-400">
                Structured training programs with personalized guidance,
                performance analysis, and strategic improvement plans
                designed to unlock maximum potential.
              </p>

              {/* Bottom Line */}
              <div
                className={`absolute bottom-0 left-0 h-[3px]
          bg-gradient-to-r from-yellow-300 to-yellow-500 transition-all duration-500
          ${activeCard === 2 ? "w-full" : "w-0"}`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
