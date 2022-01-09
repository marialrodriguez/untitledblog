import React from "react";

const BackgroundVideo = () => {
    const videoSource = "./sunflowerfield.mp4"
    return (
        <div>
            <video autoPlay loop muted>
                <source src={videoSource} type="video/mp4"/>
            </video>
        </div>
    )
}
export default BackgroundVideo