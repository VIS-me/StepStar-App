const Assets = {
    frames: {
        blue: "4px solid #248bcf",
        pink: "4px solid #ff69b4",
        gold: "5px solid #FFD700"
    },
    i18n: {
        ru: {
            steps: "шагов", kcal: "ккал", km: "км", min: "мин",
            shareBtn: "Поделиться результатом", 
            shareMsg: "Я прошел уже {n} шагов в StepStar! 👟",
            rank: "Рейтинг", tour: "Турнир", prof: "Профиль", home: "Главная",
            champion: "Чемпион недели", noTour: "Турниров пока нет", shop: "Магазин ✨",
            balance: "Баланс", winner: "Победитель",
            invite: "Пригласить друзей",
            joinBtn: "Участвовать"
        },
        en: {
            steps: "steps", kcal: "kcal", km: "km", min: "min",
            shareBtn: "Share Result", 
            shareMsg: "I've walked {n} steps in StepStar! 👟",
            rank: "Rank", tour: "Tour", prof: "Profile", home: "Home",
            champion: "Weekly Champion", noTour: "No active tournaments", shop: "Shop ✨",
            balance: "Balance", winner: "Winner",
            invite: "Invite Friends",
            joinBtn: "Join for"
        },
        uk: {
            steps: "кроків", kcal: "ккал", km: "км", min: "хв",
            shareBtn: "Поділитися результатом", 
            shareMsg: "Я пройшов вже {n} кроків у StepStar! 👟",
            rank: "Рейтинг", tour: "Турнір", prof: "Профіль", home: "Головна",
            champion: "Чемпіон тижня", noTour: "Турнірів поки немає", shop: "Магазин ✨",
            balance: "Баланс", winner: "Переможець",
            invite: "Запросити друзів",
            joinBtn: "Брати участь"
        }
    }
};

function t(key, lang) {
    // Проверяем, есть ли язык в словаре, иначе используем английский
    const l = Assets.i18n[lang] ? lang : 'en';
    return Assets.i18n[l][key] || key;
}

function getFrameStyle(name) {
    return Assets.frames[name] || Assets.frames.blue;
}
