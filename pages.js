const Pages = {
    home: (user, state, lang) => {
        const kcal = Math.round(state.steps * 0.04);
        const km = (state.steps * 0.0007).toFixed(1);
        const min = Math.round(state.steps / 100);
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
        const leader = { 
            name: "Дмитрий", 
            steps: 85400, 
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop" 
        };
        const topFriends = [
            { pos: 1, name: "Алексей", steps: 12400 },
            { pos: 2, name: "Мария", steps: 10200 },
            { pos: 3, name: "Иван К.", steps: 9800 }
        ];

        return `
        <div class="page-content rank-page">
            <div class="leader-banner" style="background-image: url('${leader.photo}')">
                <div class="leader-overlay" style="padding-bottom: 40px;"> 
                    <div class="leader-info-box">
                        <span class="crown-badge">👑 ${t('champion', lang)}</span>
                        <h2 class="leader-name-big">${leader.name}</h2>
                        <div class="leader-stat" style="opacity:0.8; font-size:14px;">
                            ${leader.steps.toLocaleString()} ${t('steps', lang)}
                        </div>
                    </div>
                </div>
            </div>

            <div style="padding: 0 20px 100px;">
                <div class="user-rank-bar" style="margin-top: -30px;">
                    <div class="user-rank-info">
                        <span class="user-rank-pos" style="font-weight:bold; color: var(--main-color); margin-right:10px;">#124</span>
                        <span class="user-rank-name">${user.first_name || 'User'}</span>
                    </div>
                    <div class="user-rank-score">
                        <strong>${state.steps.toLocaleString()}</strong> 
                        <span style="font-size:12px; opacity:0.7;">${t('steps', lang)}</span>
                    </div>
                </div>

                <div class="top-ten-list">
                    <h4 class="table-title">${lang === 'ru' ? 'ТОП 3 ДРУЗЕЙ' : (lang === 'uk' ? 'ТОП 3 ДРУЗІВ' : 'TOP 3 FRIENDS')}</h4>
                    ${topFriends.map(f => `
                        <div class="table-row">
                            <span class="t-pos">${f.pos}</span>
                            <div class="rank-photo-mini" style="width:30px; height:30px; background:#333; border-radius:50%; margin-right:12px;"></div>
                            <span class="t-name">${f.name}</span>
                            <span class="t-steps">${f.steps.toLocaleString()}</span>
                        </div>
                    `).join('')}
                    
                    <div class="invite-link-wrapper" onclick="inviteFriends()" style="border-top: 1px solid rgba(255,255,255,0.05); padding: 15px;">
                        <span class="invite-icon">➕</span>
                        <span class="invite-text">${t('invite', lang)}</span>
                    </div>
                </div>
            </div>
        </div>`;
    },

    tour: (user, state, lang) => {
        return `
        <div class="page-content tour-page">
            <div class="leader-banner" style="background-image: url('${currentTournament.lastWinner.photo}')">
                <div class="leader-overlay" style="padding-bottom: 40px;"> 
                    <div class="leader-info-box">
                        <span class="crown-badge">👑 ${t('winner', lang)}</span>
                        <h2 class="leader-name-big">${currentTournament.lastWinner.name}</h2>
                        <div class="leader-stat" style="opacity:0.8; font-size:14px;">
                            ${lang === 'uk' ? 'Переможець минулого турніру' : (lang === 'ru' ? 'Победитель прошлого турнира' : 'Previous tournament winner')}
                        </div>
                    </div>
                </div>
            </div>

            <div style="padding: 0 20px 100px;">
                <div class="join-tournament-card" style="margin-top: -30px; position: relative; z-index: 10; backdrop-filter: blur(15px); background: rgba(26, 28, 32, 0.8);">
                    <div class="join-controls">
                        <button class="participate-btn" onclick="processTournamentJoin(${currentTournament.fee})">
                            ${t('joinBtn', lang)} ${currentTournament.fee} 💰
                        </button>
                        <div class="prize-pool-badge">
                            <span class="coin-icon">💰</span>
                            <span class="prize-amount">${currentTournament.prize.toLocaleString()}</span>
                        </div>
                    </div>
                    <p class="tour-hint">
                        ${lang === 'uk' ? 'Призовий фонд турніру' : (lang === 'ru' ? 'Призовой фонд турнира' : 'Tournament prize pool')}
                    </p>
                </div>

                <div class="user-rank-mini">
                    <span class="u-pos">#452</span>
                    <span class="u-name">${user.first_name} (You)</span>
                    <span class="u-steps">${state.steps.toLocaleString()}</span>
                </div>

                <div class="top-ten-list">
                    <h4 class="table-title">TOP 10</h4>
                    <div class="table-row">
                        <span class="t-pos">1</span>
                        <span class="t-name">Dmitry</span>
                        <span class="t-steps">12,500</span>
                    </div>
                </div>
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

            <div style="padding: 0 20px 100px;">
                <div class="wallet-mini-card" style="margin: 0 0 15px 0;">
                    <div class="wallet-info">
                        <span class="wallet-label">${t('balance', lang)}</span>
                        <span class="wallet-amount">💰 ${state.coins}</span>
                    </div>
                    <button class="go-shop-btn" onclick="navigate('shop')">${t('shop', lang)} →</button>
                </div>

                <div class="info-list" style="margin: 0;">
                    <div class="info-item">🛡️ Статус: <span>Explorer</span></div>
                    <div class="info-item">🌍 Регион: <span>Global</span></div>
                </div>
            </div>
        </div>`
};
