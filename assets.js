// Глобальный склад стилей
const Assets = {
    // Список доступных рамок
    frames: {
        blue: "4px solid #248bcf",
        pink: "4px solid #ff69b4",
        gold: "5px solid #FFD700",
        none: "4px solid transparent"
    },
    // Короны и значки
    badges: {
        winner: "👑",
        none: ""
    }
};

// Вспомогательная функция для получения стиля
function getFrameStyle(frameName) {
    return Assets.frames[frameName] || Assets.frames.blue;
}
