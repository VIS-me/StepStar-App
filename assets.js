const Assets = {
    // Настройки рамок (border)
    frames: {
        blue: "4px solid #248bcf",
        pink: "4px solid #ff69b4",
        gold: "5px solid #FFD700"
    },
    // Словарь (Мультиязычность)
    i18n: {
        ru: {
            steps: "шагов", kcal: "ккал", km: "км", min: "мин",
            shareBtn: "Поделиться результатом", 
            shareMsg: "Я прошел уже {n} шагов в StepStar! 👟",
            rank: "Рейтинг", tour: "Турнир", prof: "Профиль", home: "Главная",
            champion: "Чемпион недели", noTour: "Турниров пока нет", shop: "Магазин ✨"
        },
        en: {
            steps: "steps", kcal: "kcal", km: "km", min: "min",
            shareBtn: "Share Result", 
            shareMsg: "I've walked {n} steps in StepStar! 👟",
            rank: "Rank", tour: "Tour", prof: "Profile", home: "Home",
            champion: "Weekly Champion", noTour: "No active tournaments", shop: "Shop ✨"
        }
    }
};

// Функция-помощник для поиска текста
function t(key, lang) {
    const l = Assets.i18n[lang] ? lang : 'en';
    return Assets.i18n[l][key] || key;
}

// Получение стиля рамки
function getFrameStyle(name) {
    return Assets.frames[name] || Assets.frames.blue;
}
