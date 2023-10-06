"use client";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
export default function Lottie() {
    return (
        <div>
            <Player
                autoplay
                loop
                src="https://lottie.host/303a6105-6aaa-4697-a116-3f1306572ccd/rdIKUPBcgI.json"
                style={{ height: "300px", width: "300px" }}
            >
                <Controls
                    visible={false}
                    buttons={["play", "repeat", "frame", "debug"]}
                />
            </Player>
        </div>
    );
}
