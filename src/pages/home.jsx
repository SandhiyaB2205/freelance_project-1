import React from "react";
import bgVideo from "../data/background.mp4";

const Home = () => {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Inter', sans-serif",
                zIndex: 0,
                backgroundColor:"white"
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
            <div
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
        </div>
    );
};

export default Home;
