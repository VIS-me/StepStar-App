// ТВОЙ ОБЪЕКТ ASSETS (БЕЗ ПОТЕРЬ)
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
            rank: "Рейтинг", tour: "Турнир", prof: "Профиль", home: "Главная",
            champion: "Чемпион недели", shop: "Магазин ✨", balance: "Баланс",
            winner: "Победитель", invite: "Пригласить друзей", joinBtn: "Участвовать",
            today: "Прошел сегодня", week: "Прошел за неделю", month: "Прошел за месяц"
        },
        en: {
            steps: "steps", kcal: "kcal", km: "km", min: "min",
            shareBtn: "Share Result",
            rank: "Rank", tour: "Tour", prof: "Profile", home: "Home",
            champion: "Weekly Champion", shop: "Shop ✨", balance: "Balance",
            winner: "Winner", invite: "Invite Friends", joinBtn: "Join",
            today: "Today", week: "This week", month: "This month"
        }
    }
};

function t(key, lang) {
    const l = Assets.i18n[lang] ? lang : 'en';
    return Assets.i18n[l][key] || key;
}

function getFrameStyle(name) {
    return Assets.frames[name] || Assets.frames.blue;
}

// СОСТОЯНИЕ
let state = {
    steps: 8420,
    coins: 1500,
    frame: 'gold',
    lang: 'ru'
};

const user = { first_name: "Alexander", photo_url: "https://via.placeholder.com/150" };

// СТРАНИЦЫ
const Pages = {
    home: () => {
        const goal = 10000;
        const offset = 628 - (628 * Math.min(state.steps / goal, 1));
        return `
        <div class="home-page">
            <div class="avatar-container">
                <img src="${user.photo_url}" class="main-avatar-big" style="border: ${getFrameStyle(state.frame)}">
            </div>
            <div class="home-name">${user.first_name}</div>
            <div style="position:relative; width:240px; height:240px; display:flex; align-items:center; justify-content:center;">
                <svg width="240" height="240" style="transform: rotate(-90deg);">
                    <circle stroke="rgba(255,255,255,0.05)" stroke-width="12" fill="transparent" r="100" cx="120" cy="120"/>
                    <circle stroke="var(--main-color)" stroke-width="12" fill="transparent" r="100" cx="120" cy="120" 
                        style="stroke-dasharray: 628; stroke-dashoffset: ${offset}; transition: 0.8s; stroke-linecap: round;"/>
                </svg>
                <div style="position:absolute; text-align:center;">
                    <div style="font-size:48px; font-weight:800;">${state.steps}</div>
                    <div style="opacity:0.5; font-size:12px; text-transform:uppercase;">${t('steps', state.lang)}</div>
                </div>
            </div>
            <button class="blue-btn" style="width:100%; margin-top:40px; padding:18px; border-radius:20px;">${t('shareBtn', state.lang)}</button>
        </div>`;
    },

    profile: () => `
        <div class="prof-page">
            <div class="avatar-container">
                <img src="${user.photo_url}" class="main-avatar-big" style="border: ${getFrameStyle(state.frame)}">
            </div>
            <h3 class="home-name">${user.first_name}</h3>
            <div class="stats-history">
                <div class="history-item"><span>${t('today', state.lang)}:</span><b>${state.steps}</b></div>
                <div class="history-item"><span>${t('week', state.lang)}:</span><b>${state.steps * 7}</b></div>
                <div class="history-item"><span>${t('month', state.lang)}:</span><b>${state.steps * 30}</b></div>
            </div>
            <div class="balance-card-horizontal">
                <div>
                    <div style="font-size:12px; opacity:0.6">${t('balance', state.lang)}</div>
                    <div style="font-size:24px; font-weight:800">${state.coins} 💰</div>
                </div>
                <div class="btn-column">
                    <button class="blue-btn" onclick="navigate('shop')">${t('shop', state.lang).split(' ')[0]}</button>
                    <button class="blue-btn" style="background:#444" onclick="navigate('achievements')">Награды</button>
                </div>
            </div>
        </div>`,

    rank: () => `
        <div class="hero-winner">
            <img src="https://via.placeholder.com/150" class="hero-img" style="border: 5px solid var(--main-color)">
            <div style="color:var(--main-color); font-weight:bold; margin-top:15px;">${t('champion', state.lang)}</div>
            <div style="font-size:24px; font-weight:800;">Dmitry</div>
        </div>
        <div class="shop-block" style="margin-top:-20px">
            <div class="history-item" style="color:var(--main-color)"><span>#124 You</span><b>${state.steps}</b></div>
            <h4 style="opacity:0.4; margin:15px 0 10px;">TOP 3 FRIENDS</h4>
            <div class="history-item"><span>1. Alex</span><b>15,200</b></div>
            <div class="history-item"><span>2. Maria</span><b>14,100</b></div>
        </div>`,

    tour: () => `
        <div class="hero-winner">
            <img src="https://via.placeholder.com/150" class="hero-img" style="border: 5px solid var(--gold)">
            <div style="color:var(--gold); font-weight:bold; margin-top:15px;">${t('winner', state.lang)}</div>
            <div style="font-size:24px; font-weight:800;">Alexander</div>
        </div>
        <div class="shop-block" style="display:flex; justify-content:space-between; align-items:center;">
            <button class="blue-btn" style="flex:1; margin-right:15px;">${t('joinBtn', state.lang)}</button>
            <b style="color:var(--gold); font-size:18px;">10,000 💰</b>
        </div>
        <div class="shop-block" style="margin-top:0">
            <h4 style="opacity:0.4; margin-bottom:10px;">TOP 10</h4>
            ${[1,2,3].map(i => `<div class="history-item"><span>${i}. Player</span><b>${15000 - i*1000}</b></div>`).join('')}
        </div>`,

    shop: () => `
        <div class="shop-block" style="display:flex; justify-content:space-between; align-items:center;">
            <div><div style="opacity:0.5">${t('balance', state.lang)}</div><div style="font-size:24px; font-weight:800;">${state.coins} 💰</div></div>
            <button class="blue-btn" onclick="alert('Daily bonus +10!')">Получить</button>
        </div>
        <div class="shop-block">
            <h4>Рамки аватара</h4>
            <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:10px;">
                ${Object.keys(Assets.frames).map(f => `
                    <div style="background:rgba(0,0,0,0.2); padding:10px; border-radius:15px; text-align:center; border: 2px solid ${state.frame === f ? 'var(--main-color)' : 'transparent'}">
                        <div style="width:40px; height:40px; border:${Assets.frames[f]}; border-radius:50%; margin:auto;"></div>
                        <div style="font-size:10px; margin-top:5px;">${f}</div>
                    </div>
                `).join('')}
            </div>
        </div>`,

    achievements: () => `
        <div style="padding:20px;">
            <button class="blue-btn" onclick="navigate('profile')" style="margin-bottom:20px;">← Назад</button>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px;">
                <div class="shop-block" style="margin:0; text-align:center;">🏆<br>1K Steps</div>
                <div class="shop-block" style="margin:0; text-align:center; opacity:0.3;">👑<br>Winner</div>
            </div>
        </div>`
};

// НАВИГАЦИЯ
function navigate(page) {
    const view = document.getElementById('app-viewport');
    if (Pages[page]) {
        view.innerHTML = Pages[page]();
        document.querySelectorAll('.tab-item').forEach(i => i.classList.remove('active'));
        const tab = document.querySelector(`[onclick="navigate('${page}')"]`);
        if (tab) tab.classList.add('active');
    }
}

window.onload = () => navigate('home');
