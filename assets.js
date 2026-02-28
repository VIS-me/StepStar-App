const Assets = {
    frames: {
        white: "4px solid #ffffff",
        green: "4px solid #4CAF50",
        lightblue: "4px solid #00BCD4",
        blue: "4px solid #248bcf",
        blue_default: "4px solid #248bcf",
        pink: "4px solid #ff69b4",
        purple: "4px solid #9C27B0",
        gold: "5px solid #FFD700",
        gold_vip_frame: "5px solid #FFD700"
    },
    i18n: {
        ru: {
            steps: "шагов", kcal: "ккал", km: "км", min: "мин",
            shareBtn: "Поделиться результатом", 
            shareMsg: "Я прошел уже {n} шагов в StepStar! 👟",
            rank: "Рейтинг", tour: "Турнир", prof: "Профиль", home: "Главная",
            champion: "Чемпион недели", noTour: "Турниров пока нет", shop: "Магазин ✨",
            balance: "Баланс", winner: "Победитель",
            invite: "Пригласить друзей", joinBtn: "Участвовать",
            vip_status: "VIP СТАТУС", vip_desc: "Скрыть баланс и калории + Золотая рамка"
        },
        en: {
            steps: "steps", kcal: "kcal", km: "km", min: "min",
            shareBtn: "Share Result", 
            shareMsg: "I've walked {n} steps in StepStar! 👟",
            rank: "Rank", tour: "Tour", prof: "Profile", home: "Home",
            champion: "Weekly Champion", noTour: "No active tournaments", shop: "Shop ✨",
            balance: "Balance", winner: "Winner",
            invite: "Invite Friends", joinBtn: "Join for",
            vip_status: "VIP STATUS", vip_desc: "Hide balance/kcal + Gold Frame"
        }
    }
};

/**
 * Функция перевода
 */
function t(key, lang) {
    const l = (Assets.i18n[lang]) ? lang : 'ru';
    return Assets.i18n[l][key] || key;
}

/**
 * Получение стиля рамки
 */
function getFrameStyle(name) {
    return Assets.frames[name] || Assets.frames.white;
}
