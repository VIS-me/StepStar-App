const Assets = {
    frames: {
        blue: "4px solid #248bcf",
        pink: "4px solid #ff69b4",
        gold: "5px solid #FFD700",
        none: "4px solid transparent"
    },
    // Словарь переводов
    i18n: {
        ru: {
            steps: "шагов", kcal: "ккал", km: "км", min: "мин",
            shareBtn: "Поделиться", shareText: "Я прошел {n} шагов в StepStar! 👟",
            rank: "Рейтинг", tour: "Турнир", prof: "Профиль",
            home: "Главная", winner: "Победитель недели 👑",
            noTour: "Турниров пока нет", shop: "Магазин ✨",
            champion: "Чемпион недели"
        },
        en: {
            steps: "steps", kcal: "kcal", km: "km", min: "min",
            shareBtn: "Share Result", shareText: "I walked {n} steps in StepStar! 👟",
            rank: "Rank", tour: "Tour", prof: "Profile",
            home: "Home", winner: "Winner of the week 👑",
            noTour: "No active tournaments", shop: "Shop ✨",
            champion: "Weekly Champion"
        }
    }
};

function getFrameStyle(frameName) {
    return Assets.frames[frameName] || Assets.frames.blue;
}

// Функция для получения текста на нужном языке
function t(key, lang = 'en') {
    return Assets.i18n[lang][key] || Assets.i18n['en'][key];
}
