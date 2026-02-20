const Assets = {
    frames: {
        blue: "4px solid #248bcf",
        pink: "4px solid #ff69b4",
        gold: "5px solid #FFD700",
        none: "4px solid transparent"
    }
};

function getFrameStyle(frameName) {
    return Assets.frames[frameName] || Assets.frames.blue;
}
