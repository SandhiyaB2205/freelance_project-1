import React from "react";
import bgVideo from "../data/background.mp4"; // your video path

const Home = () => {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
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
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -2,
                }}
            >
                <source src={bgVideo} type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.45)",
                    zIndex: -1,
                }}
            ></div>

        </div>
    );
};

export default Home;
