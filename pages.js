// ПАНЕЛЬ УПРАВЛЕНИЯ ТУРНИРОМ (Меняет админ)
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
        const kcal = Math.round(state.steps * 0.04);
        const km = (state.steps * 0.0007).toFixed(1);
        const min = Math.round(state.steps / 100);
        // Расчет прогресса (база 10 000 шагов)
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
                    <h1>${state.steps.toLocaleString()}</h1>
                    <p>${t('steps', lang)}</p>
                </div>
            </div>
            <div class="stats-grid">
                <div class="stat-item"><span>${kcal}</span><label>${t('kcal', lang)}</label></div>
                <div class="stat-item"><span>${km}</span><label>${t('km', lang)}</label></div>
                <div class="stat-item"><span>${min}</span><label>${t('min', lang)}</label></div>
            </div>
            <button class="main-button" onclick="shareResult(${state.steps})">${t('shareBtn', lang)}</button>
        </div>`;
    },

    rank: (user, state, lang) => {
        const leader = { name: "Дмитрий", steps: 85400, photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop" };
        const topFriends = [
            { pos: 1, name: "Алексей", steps: 12400 },
            { pos: 2, name: "Мария", steps: 10200 },
            { pos: 3, name: "Иван К.", steps: 9800 }
        ];
        return `
        <div class="page-content rank-page">
            <div class="leader-banner" style="background-image: url('${leader.photo}')">
                <div class="leader-overlay">
                    <div class="leader-info-box">
                        <span class="crown-badge">👑 ${t('champion', lang)}</span>
                        <h2 class="leader-name-big">${leader.name}</h2>
                        <div class="leader-stat"><span class="stat-num">${leader.steps.toLocaleString()}</span><span class="stat-desc">${t('steps', lang)}</span></div>
                    </div>
                </div>
            </div>
            <div class="user-rank-bar">
                <div class="user-rank-info"><span class="user-rank-pos">#124</span><span class="user-rank-name">${user.first_name || 'User'}</span></div>
                <div class="user-rank-score"><strong>${state.steps.toLocaleString()}</strong><span>${t('steps', lang)}</span></div>
            </div>
            <div class="friends-rank-list">
                ${topFriends.map(f => `
                    <div class="rank-item">
                        <span class="rank-pos">${f.pos}</span>
                        <div class="rank-photo-mini"></div>
                        <span class="rank-name">${f.name}</span>
                        <span class="rank-steps">${f.steps.toLocaleString()}</span>
                    </div>
                `).join('')}
                <div class="invite-link-wrapper" onclick="inviteFriends()">
                    <span class="invite-icon">➕</span>
                    <span class="invite-text">${t('invite', lang)}</span>
                </div>
            </div>
        </div>`;
    },

    tour: (user, state, lang) => {
        const top10 = [
            { pos: 1, name: "Dmitry", steps: 12500 },
            { pos: 2, name: "Sarah", steps: 11800 },
            { pos: 3, name: "Mike", steps: 10200 },
            { pos: 4, name: "Anna", steps: 9500 },
            { pos: 5, name: "Ivan", steps: 8900 }
        ];

        return `
        <div class="page-content tour-page">
            <div class="last-winner-section">
                <div class="winner-avatar-container">
                    <div class="crown-icon">👑</div>
                    <img src="${currentTournament.lastWinner.photo}" class="winner-img-big">
                </div>
                <div class="winner-label">${t('winner', lang)}</div>
                <div class="winner-name">${currentTournament.lastWinner.name}</div>
            </div>

            <div class="join-tournament-card">
                <div class="join-controls">
                    <button class="participate-btn" onclick="processTournamentJoin(${currentTournament.fee})">
                        ${lang === 'uk' ? 'Брати участь' : (lang === 'ru' ? 'Участвовать' : 'Join')}
                    </button>
                    <div class="prize-pool-badge">
                        <span class="coin-icon">💰</span>
                        <span class="prize-amount">${currentTournament.prize.toLocaleString()}</span>
                    </div>
                </div>
                <p class="tour-hint">${lang === 'uk' ? 'Вхід за' : 'Вход за'} ${currentTournament.fee} 💰</p>
            </div>

            <div class="user-rank-mini">
                <span class="u-pos">#452</span>
                <span class="u-name">${user.first_name} (You)</span>
                <span class="u-steps">${state.steps.toLocaleString()}</span>
            </div>

            <div class="top-ten-list">
                <h4 class="table-title">TOP 10</h4>
                ${top10.map(p => `
                    <div class="table-row">
                        <span class="t-pos">${p.pos}</span>
                        <span class="t-name">${p.name}</span>
                        <span class="t-steps">${p.steps.toLocaleString()}</span>
                    </div>
                `).join('')}
            </div>
        </div>`;
    },

    prof: (user, state, lang) => `
        <div class="page-content">
            <h2 class="title-center">${t('prof', lang)}</h2>
            <div class="avatar-wrapper" style="width:110px; height:110px; margin: 0 auto;">
                <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                <img src="${user.photo_url || ''}" class="user-avatar" style="width:94px; height:94px; ${user.photo_url ? '' : 'display:none'}">
            </div>
            <h3 class="centered-name">${user.first_name || 'User'}</h3>

            <div class="wallet-mini-card">
                <div class="wallet-info">
                    <span class="wallet-label">${t('balance', lang)}</span>
                    <span class="wallet-amount">💰 ${state.coins}</span>
                </div>
                <button class="go-shop-btn" onclick="navigate('shop')">${t('shop', lang)} →</button>
            </div>

            <div class="info-list">
                <div class="info-item">🛡️ Статус: <span>Explorer</span></div>
                <div class="info-item">🌍 Регион: <span>Global</span></div>
            </div>
        </div>`,

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
            </div>
        </div>`
};
