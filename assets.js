const Assets = {
    frames: {
        white: "4px solid #ffffff",
        green: "4px solid #4CAF50",
        lightblue: "4px solid #00BCD4",
        blue: "4px solid #248bcf",
        pink: "4px solid #ff69b4",
        purple: "4px solid #9C27B0",
        gold: "5px solid #FFD700"
    },
    // ... твой существующий i18n остается без изменений
};

// Исправим функцию, чтобы она возвращала белую рамку по умолчанию
function getFrameStyle(name) {
    return Assets.frames[name] || Assets.frames.white;
}
