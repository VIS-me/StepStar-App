const translations = {
    ru: {
        home: "Дом", rank: "Ранг", tour: "Турнир", prof: "Профиль",
        invite: "Пригласить", shop: "Магазин", week_winner: "Лидер недели",
        global: "МИР", friends_tab: "ДРУЗЬЯ", kcal: "ккал", km: "км", min: "мин"
    },
    en: {
        home: "Home", rank: "Rank", tour: "Tour", prof: "Profile",
        invite: "Invite", shop: "Shop", week_winner: "Weekly Leader",
        global: "GLOBAL", friends_tab: "FRIENDS", kcal: "kcal", km: "km", min: "min"
    }
};

window.t = (key, lang) => {
    return translations[lang] ? translations[lang][key] : (translations['en'][key] || key);
};

const frameStyles = {
    'white': '3px solid #ffffff',
    'green': '3px solid #4CAF50',
    'lightblue': '3px solid #00BCD4',
    'blue': '3px solid #2196F3',
    'pink': '3px solid #E91E63',
    'purple': '3px solid #9C27B0',
    'gold': '3px solid #FFD700',
    'gold_vip_frame': '4px double #FFD700'
};

window.getFrameStyle = (id) => frameStyles[id] || frameStyles['white'];

window.calcStats = (steps) => {
    const s = parseInt(steps) || 0;
    return {
        dist: (s * 0.00075).toFixed(2),
        kcal: (s * 0.04).toFixed(0),
        time: (s / 100).toFixed(0)
    };
};
