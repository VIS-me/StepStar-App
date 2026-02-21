// ПАНЕЛЬ УПРАВЛЕНИЯ ТУРНИРОМ
const currentTournament = {
    isActive: true, 
    fee: 50,        
    prize: 10000,   
    lastWinner: {
        name: "Alexander",
        photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop"
    }
};

const Pages = {
    home: (user, state, lang) => {
        const goal = 10000;
        const offset = 628 - (628 * Math.min(state.steps / goal, 1));
        
        return `
        <div class="page-content home-center">
            <div class="user-main-info">
                <div class="avatar-wrapper">
                    <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                    <img src="${user.photo_url || ''}" class="user-avatar" style="${user.photo_url ? '' : 'display:none'}">
                </div>
                <h3 class="centered-name">${user.first_name || 'User'}</h3>
            </div>

            <div class="progress-container">
                <svg width="230" height="230" class="progress-ring">
                    <circle stroke="rgba(255,255,255,0.1)" stroke-width="14" fill="transparent" r="100" cx="115" cy="115"/>
                    <circle class="progress-ring__circle" stroke="#248bcf" stroke-width="14" fill="transparent" r="100" cx="115" cy="115" style="stroke-dashoffset: ${offset}"/>
                </svg>
                <div class="steps-content">
                    <div class="steps-number">${state.steps.toLocaleString()}</div>
                    <div class="steps-label">${t('steps', lang)}</div>
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-item"><span>${Math.round(state.steps * 0.04)}</span><label>${t('kcal', lang)}</label></div>
                <div class="stat-item"><span>${(state.steps * 0.0007).toFixed(1)}</span><label>${t('km', lang)}</label></div>
                <div class="stat-item"><span>${Math.round(state.steps / 100)}</span><label>${t('min', lang)}</label></div>
            </div>
            <button class="main-button" onclick="shareResult(${state.steps})">${t('shareBtn', lang)}</button>
        </div>`;
    },

    rank: (user, state, lang) => {
        const topFriends = [
            { pos: 1, name: "Алексей", steps: 12400 },
            { pos: 2, name: "Мария", steps: 10200 },
            { pos: 3, name: "Иван К.", steps: 9800 }
        ];

        return `
        <div class="page-content">
            <div class="leader-banner" style="background-image: url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000')">
                <div class="leader-overlay"> 
                    <div class="leader-info-box">
                        <span class="crown-badge">👑 ${t('champion', lang)}</span>
                        <h2 class="leader-name-big">Дмитрий</h2>
                    </div>
                </div>
            </div>
            <div class="user-rank-bar">
                <span>#124 ${user.first_name}</span>
                <strong>${state.steps.toLocaleString()}</strong>
            </div>
            <div class="top-ten-list">
                <h4 class="table-title">FRIENDS</h4>
                ${topFriends.map(f => `
                    <div class="table-row">
                        <span class="t-pos">${f.pos}</span>
                        <div class="rank-photo-mini"></div>
                        <span class="t-name">${f.name}</span>
                        <span class="t-steps">${f.steps.toLocaleString()}</span>
                    </div>
                `).join('')}
                <div class="invite-link-row" onclick="inviteFriends()">
                    <span class="invite-icon">➕</span>
                    <span class="invite-text">${t('invite', lang)}</span>
                </div>
            </div>
        </div>`;
    },

    tour: (user, state, lang) => {
        const top10 = [
            { pos: 1, name: "Dmitry", steps: 25400 }, { pos: 2, name: "Sarah", steps: 21800 },
            { pos: 3, name: "Mike", steps: 19200 }, { pos: 4, name: "Anna", steps: 15500 },
            { pos: 5, name: "Ivan", steps: 12900 }, { pos: 6, name: "Alex", steps: 11000 },
            { pos: 7, name: "Elena", steps: 9800 }, { pos: 8, name: "Pavel", steps: 8500 },
            { pos: 9, name: "Oleg", steps: 7200 }, { pos: 10, name: "Marta", steps: 6100 }
        ];

        return `
        <div class="page-content">
            <div class="leader-banner" style="background-image: url('${currentTournament.lastWinner.photo}')">
                <div class="leader-overlay">
                    <div class="leader-info-box">
                        <span class="crown-badge">👑 ${t('winner', lang)}</span>
                        <h2 class="leader-name-big">${currentTournament.lastWinner.name}</h2>
                    </div>
                </div>
            </div>
            <div class="join-tournament-card">
                <div class="join-controls">
                    <button class="participate-btn" onclick="processTournamentJoin(${currentTournament.fee})">
                        ${t('joinBtn', lang)} ${currentTournament.fee} 💰
                    </button>
                    <div class="prize-pool-badge">💰 ${currentTournament.prize.toLocaleString()}</div>
                </div>
            </div>
            <div class="top-ten-list">
                <h4 class="table-title">TOP 10 PLAYERS</h4>
                ${top10.map(p => `
                    <div class="table-row">
                        <span class="t-pos">${p.pos}</span>
                        <div class="rank-photo-mini"></div>
                        <span class="t-name">${p.name}</span>
                        <span class="t-steps">${p.steps.toLocaleString()}</span>
                    </div>
                `).join('')}
            </div>
        </div>`;
    },

    prof: (user, state, lang) => `
        <div class="page-content">
            <div class="profile-header">
                <div class="avatar-wrapper">
                    <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                    <img src="${user.photo_url || ''}" class="user-avatar" style="${user.photo_url ? '' : 'display:none'}">
                </div>
                <h3 class="centered-name">${user.first_name || 'User'}</h3>
            </div>

            <div class="info-block">
                <div class="info-item">📅 ${lang === 'ru' ? 'За день' : 'Day'}: <span>${state.steps}</span></div>
                <div class="info-item">🗓️ ${lang === 'ru' ? 'За неделю' : 'Week'}: <span>${state.steps * 7}</span></div>
                <div class="info-item">📊 ${lang === 'ru' ? 'За месяц' : 'Month'}: <span>${state.steps * 30}</span></div>
            </div>

            <div class="info-block wallet-row">
                <div class="wallet-left">
                    <label>${t('balance', lang)}</label>
                    <div class="wallet-amount">💰 ${state.coins}</div>
                </div>
                <button class="go-shop-btn" onclick="navigate('shop')">${t('shop', lang)} →</button>
            </div>

            <div class="info-block achievement-item" onclick="tg.showAlert('${lang === 'ru' ? 'В разработке...' : 'In development...'}')">
                <span>🏆 Достижения</span>
                <span style="opacity: 0.5">→</span>
            </div>
        </div>`
};

    shop: (user, state, lang) => `
        <div class="page-content">
            <div class="shop-header">
                <button class="back-btn" onclick="navigate('prof', document.getElementById('btn-prof'))">←</button>
                <h2 class="title-shop">${t('shop', lang)}</h2>
                <div class="balance-badge">💰 ${state.coins}</div>
            </div>
            <div class="shop-grid-large">
                <div class="shop-card ${state.frame === 'blue' ? 'owned' : ''}" onclick="changeFrame('blue')">
                    <div class="preview-circle" style="border: 4px solid #248bcf"></div>
                    <span class="item-name">Blue Frame</span>
                    <span class="item-price">0 💰</span>
                </div>
                <div class="shop-card ${state.frame === 'pink' ? 'owned' : ''}" onclick="changeFrame('pink')">
                    <div class="preview-circle" style="border: 4px solid #ff69b4"></div>
                    <span class="item-name">Pink Frame</span>
                    <span class="item-price">50 💰</span>
                </div>
                <div class="shop-card ${state.frame === 'gold' ? 'owned' : ''}" onclick="changeFrame('gold')">
                    <div class="preview-circle" style="border: 5px solid #FFD700"></div>
                    <span class="item-name">Gold Frame</span>
                    <span class="item-price">150 💰</span>
                </div>
            </div>
        </div>`
};
