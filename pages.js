const Pages = {
    // --- ГЛАВНАЯ СТРАНИЦА ---
    home: (user, state, lang) => {
        const goal = 10000;
        const offset = 628 - (628 * Math.min(state.steps / goal, 1));
        
        return `
        <div class="page-content home-center">
            <div class="avatar-section">
                <div class="avatar-wrapper">
                    <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                    <img src="${user.photo_url || ''}" class="user-avatar" onerror="this.style.display='none'">
                </div>
                <h3 class="centered-name">${user.first_name || 'User'}</h3>
            </div>

            <div class="progress-container">
                <svg width="230" height="230" class="progress-ring">
                    <circle stroke="rgba(255,255,255,0.1)" stroke-width="12" fill="transparent" r="100" cx="115" cy="115"/>
                    <circle class="progress-ring__circle" stroke="var(--main-color)" stroke-width="12" fill="transparent" r="100" cx="115" cy="115" 
                            style="stroke-dashoffset: ${offset}; stroke-dasharray: 628;"/>
                </svg>
                <div class="steps-content">
                    <h1>${state.steps.toLocaleString()}</h1>
                    <div class="steps-label">${t('steps', lang)}</div>
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-item">
                    <span>${Math.round(state.steps * 0.04)}</span>
                    <label>${t('kcal', lang)}</label>
                </div>
                <div class="stat-item">
                    <span>${(state.steps * 0.0007).toFixed(1)}</span>
                    <label>${t('km', lang)}</label>
                </div>
                <div class="stat-item">
                    <span>${Math.round(state.steps / 100)}</span>
                    <label>${t('min', lang)}</label>
                </div>
            </div>

            <button class="main-button" onclick="shareResult(${state.steps})">${t('shareBtn', lang)}</button>
        </div>`;
    },

    // --- СТРАНИЦА РЕЙТИНГА ---
    rank: (user, state, lang) => {
        const friends = [
            { pos: 1, name: "Алексей", steps: 12400 },
            { pos: 2, name: "Мария", steps: 10200 },
            { pos: 3, name: "Иван К.", steps: 9800 }
        ];

        return `
        <div class="page-content rank-page">
            <div class="leader-banner" style="background-image: url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000')">
                <div class="leader-overlay">
                    <div class="leader-info">
                        <span class="crown-badge">👑 ${t('champion', lang)}</span>
                        <h2 class="leader-name-big">Дмитрий</h2>
                    </div>
                </div>
            </div>

            <div class="user-rank-bar" style="display: flex; justify-content: space-between; align-items: center; padding: 15px 25px; background: rgba(36, 139, 207, 0.15); margin: 10px 20px; border-radius: 15px;">
                <span style="font-weight: 600;">#124 ${user.first_name}</span>
                <strong style="color: var(--main-color); font-size: 18px;">${state.steps.toLocaleString()}</strong>
            </div>

            <div class="top-ten-list">
                <div style="padding: 15px 20px; opacity: 0.5; font-size: 12px; font-weight: bold;">${lang === 'ru' ? 'ДРУЗЬЯ' : 'FRIENDS'}</div>
                ${friends.map(f => `
                    <div class="table-row">
                        <span class="t-pos">${f.pos}</span>
                        <div class="rank-photo-mini"></div>
                        <span class="t-name">${f.name}</span>
                        <span class="t-steps">${f.steps.toLocaleString()}</span>
                    </div>
                `).join('')}
                <div class="invite-row-btn" onclick="inviteFriends()">
                    <span style="margin-right: 10px;">➕</span> ${t('invite', lang)}
                </div>
            </div>
        </div>`;
    },

    // --- СТРАНИЦА ТУРНИРА ---
    tour: (user, state, lang) => {
        const players = [
            { pos: 1, name: "Dmitry", steps: 25400 }, { pos: 2, name: "Sarah", steps: 21800 },
            { pos: 3, name: "Mike", steps: 19200 }, { pos: 4, name: "Anna", steps: 15500 },
            { pos: 5, name: "Ivan", steps: 12900 }, { pos: 6, name: "Alex", steps: 11000 },
            { pos: 7, name: "Elena", steps: 9800 }, { pos: 8, name: "Pavel", steps: 8500 },
            { pos: 9, name: "Oleg", steps: 7200 }, { pos: 10, name: "Marta", steps: 6100 }
        ];

        return `
        <div class="page-content tour-page">
            <div class="leader-banner" style="background-image: url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000')">
                <div class="leader-overlay">
                    <div class="leader-info">
                        <span class="crown-badge">👑 ${t('winner', lang)}</span>
                        <h2 class="leader-name-big">Champion_2026</h2>
                    </div>
                </div>
            </div>

            <div class="join-tournament-card" style="margin: 0 20px 20px;">
                <div class="join-controls" style="display: flex; gap: 10px; align-items: stretch; width: 100%;">
                    <button class="main-button" style="flex: 2; margin: 0; height: auto; padding: 12px; font-size: 15px;" onclick="processTournamentJoin(50)">
                        ${t('joinBtn', lang)} 50 💰
                    </button>
                    <div class="prize-pool-badge" style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255,215,0,0.1); border: 1px solid rgba(255,215,0,0.2); border-radius: 16px; padding: 5px;">
                        <span style="font-size: 10px; opacity: 0.6; text-transform: uppercase;">Prize</span>
                        <span class="prize-amount" style="font-weight: bold; color: var(--accent-gold); font-size: 16px;">5,000</span>
                    </div>
                </div>
            </div>

            <div class="top-ten-list">
                <div style="padding: 15px 20px; opacity: 0.5; font-size: 12px; font-weight: bold;">TOP 10 PLAYERS</div>
                ${players.map(p => `
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

    // --- СТРАНИЦА ПРОФИЛЯ ---
    prof: (user, state, lang) => `
        <div class="page-content">
            <div class="profile-header">
                <div class="avatar-wrapper">
                    <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                    <img src="${user.photo_url || ''}" class="user-avatar" onerror="this.style.display='none'">
                </div>
                <h3 class="centered-name">${user.first_name || 'User'}</h3>
            </div>

            <div class="info-block">
                <div class="info-item">
                    ${lang === 'ru' ? 'За день' : (lang === 'uk' ? 'За день' : 'Today')} 
                    <span>${state.steps.toLocaleString()}</span>
                </div>
                <div class="info-item">
                    ${lang === 'ru' ? 'За неделю' : (lang === 'uk' ? 'За тиждень' : 'Week')} 
                    <span>${(state.steps * 7).toLocaleString()}</span>
                </div>
                <div class="info-item">
                    ${lang === 'ru' ? 'За месяц' : (lang === 'uk' ? 'За місяць' : 'Month')} 
                    <span>${(state.steps * 30).toLocaleString()}</span>
                </div>
            </div>

            <div class="info-block wallet-row">
                <div class="wallet-info">
                    <div class="wallet-label">${t('balance', lang)}</div>
                    <div class="wallet-amount">💰 ${state.coins.toLocaleString()}</div>
                </div>
                <button class="go-shop-btn" onclick="navigate('shop')">
                    ${t('shop', lang)} →
                </button>
            </div>

            <div class="info-block achievement-row" onclick="tg.showAlert('${lang === 'ru' ? 'Раздел в разработке' : 'Coming soon'}')">
                <div style="display: flex; align-items: center;">
                    <span style="font-size: 20px; margin-right: 15px;">🏆</span>
                    <span style="font-weight: 600;">${lang === 'ru' ? 'Достижения' : (lang === 'uk' ? 'Досягнення' : 'Achievements')}</span>
                </div>
                <span style="opacity: 0.3;">→</span>
            </div>
        </div>`,

    // --- МАГАЗИН ---
    shop: (user, state, lang) => `
        <div class="page-content">
            <h2 class="title-center" style="text-align:center; margin: 20px 0;">${t('shop', lang)}</h2>
            <div class="shop-grid-large" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; padding: 0 20px;">
                <div class="shop-card ${state.frame === 'blue' ? 'owned' : ''}" onclick="changeFrame('blue')" style="background: var(--secondary-bg); padding: 20px; border-radius: 20px; text-align: center; border: 1px solid rgba(255,255,255,0.05);">
                    <div class="avatar-wrapper" style="width:60px; height:60px; margin: 0 auto;">
                        <div class="profile-frame" style="border: ${Assets.frames.blue}; border-radius: 50%;"></div>
                    </div>
                    <p style="margin-top: 10px; font-size: 13px;">Blue Frame</p>
                </div>
                <div class="shop-card ${state.frame === 'gold' ? 'owned' : ''}" onclick="changeFrame('gold')" style="background: var(--secondary-bg); padding: 20px; border-radius: 20px; text-align: center; border: 1px solid rgba(255,255,255,0.05);">
                    <div class="avatar-wrapper" style="width:60px; height:60px; margin: 0 auto;">
                        <div class="profile-frame" style="border: ${Assets.frames.gold}; border-radius: 50%;"></div>
                    </div>
                    <p style="margin-top: 10px; font-size: 13px;">Gold Frame</p>
                </div>
            </div>
            <button class="main-button" onclick="navigate('prof')">Back</button>
        </div>`
};
