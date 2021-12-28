import React from "react";

const BackgroundVideo = () => {
    const videoSource = "../src/sunflowerfield.mp4"
    return (
        <div>
        <div>
            test
        </div>
            <video autoPlay loop muted>
                <source src={require("./sunflowerfield.mp4")} type="video/mp4"/>
            </video>
        </div>
    )
}
export default BackgroundVideo