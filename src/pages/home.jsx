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
      <section className="w-full bg-[#fdfbf0] py-28 px-6 md:px-12 lg:px-20 overflow-hidden">

        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="inline-block px-5 py-2 rounded-full border border-yellow-300 bg-yellow-100 text-yellow-700 text-xs tracking-[3px] uppercase font-bold backdrop-blur-md">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            Elevate Your Chess
            <br />
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Beyond Limits
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 text-lg leading-8 font-medium">
            Experience world-class chess coaching designed to build
            strategic thinkers, confident competitors, and future
            champions.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div
            onClick={() => setActiveCard(0)}
            className={`relative cursor-pointer rounded-[28px]
            p-10 transition-all duration-500 ease-out
            group overflow-hidden hover:-translate-y-3
            hover:shadow-2xl bg-black text-white
            ${activeCard === 0
                ? "border-2 border-yellow-400 scale-[1.03] shadow-[0_0_40px_rgba(250,204,21,0.35)]"
                : "border border-white/10"
              }`}
          >
            <div className="w-20 h-20 rounded-full bg-white/10 text-yellow-300 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500">
              ♛
            </div>

            <h3 className="text-2xl font-bold mb-5 tracking-tight">
              Elite Training
            </h3>

            <p className="leading-8 text-[15px] text-gray-400">
              Every lesson is designed to strengthen fundamentals,
              sharpen tactical thinking, and help players build
              confidence for competitive success.
            </p>

            <div
              className={`absolute bottom-0 left-0 h-1
                bg-gradient-to-r from-yellow-300 to-yellow-500
                transition-all duration-500
                ${activeCard === 0
                  ? "w-full opacity-100"
                  : "w-0 opacity-0"
                }`}
            />
          </div>

          {/* Card 2 */}
          <div
            onClick={() => setActiveCard(1)}
            className={`relative cursor-pointer rounded-[28px]
            p-10 transition-all duration-500 ease-out
            group overflow-hidden hover:-translate-y-3
            hover:shadow-2xl bg-white text-black
            ${activeCard === 1
                ? "border-2 border-yellow-400 scale-[1.03] shadow-[0_0_40px_rgba(250,204,21,0.35)]"
                : "border border-black/10"
              }`}
          >
            <div className="w-20 h-20 rounded-full bg-black/5 text-yellow-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500">
              ♞
            </div>

            <h3 className="text-2xl font-bold mb-5 tracking-tight">
              Expert Coaches
            </h3>

            <p className="leading-8 text-[15px] text-gray-600">
              Learn from passionate coaches who focus on strategy,
              discipline, decision-making, and developing a champion
              mindset both on and off the board.
            </p>

            <div
              className={`absolute bottom-0 left-0 h-1
                bg-gradient-to-r from-yellow-300 to-yellow-500
                transition-all duration-500
                ${activeCard === 1
                  ? "w-full opacity-100"
                  : "w-0 opacity-0"
                }`}
            />
          </div>

          {/* Card 3 */}
          <div
            onClick={() => setActiveCard(2)}
            className={`relative cursor-pointer rounded-[28px]
            p-10 transition-all duration-500 ease-out
            group overflow-hidden hover:-translate-y-3
            hover:shadow-2xl bg-black text-white
            ${activeCard === 2
                ? "border-2 border-yellow-400 scale-[1.03] shadow-[0_0_40px_rgba(250,204,21,0.35)]"
                : "border border-white/10"
              }`}
          >
            <div className="w-20 h-20 rounded-full bg-white/10 text-yellow-300 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500">
              ♚
            </div>

            <h3 className="text-2xl font-bold mb-5 tracking-tight">
              Proven Excellence
            </h3>

            <p className="leading-8 text-[15px] text-gray-400">
              Our structured coaching approach combines experience,
              personalized guidance, and performance-driven training
              to unlock every student’s true potential.
            </p>

            <div
              className={`absolute bottom-0 left-0 h-1
                bg-gradient-to-r from-yellow-300 to-yellow-500
                transition-all duration-500
                ${activeCard === 2
                  ? "w-full opacity-100"
                  : "w-0 opacity-0"
                }`}
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
