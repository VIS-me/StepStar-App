const Pages = {
    home: (user, state, lang) => {
        const kcal = Math.round(state.steps * 0.04);
        const km = (state.steps * 0.0007).toFixed(1);
        const min = Math.round(state.steps / 100);
        const offset = 628 - (628 * Math.min(state.steps / 10000, 1));
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
                <div class="steps-content"><h1>${state.steps.toLocaleString()}</h1><p>${t('steps', lang)}</p></div>
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
                <div class="user-rank-info"><span class="user-rank-pos">#124</span><span class="user-rank-name">${user.first_name}</span></div>
                <div class="user-rank-score"><strong>${state.steps.toLocaleString()}</strong><span>${t('steps', lang)}</span></div>
            </div>
            <div class="friends-rank-list">
                <div class="rank-item"><span class="rank-pos">1</span><div class="rank-photo-mini"></div><span class="rank-name">Алексей</span><span class="rank-steps">12,400</span></div>
            </div>
        </div>`;
    },

    tour: (user, state, lang) => `
        <div class="page-content center-flex">
            <div style="font-size:60px; margin-bottom:20px;">🏁</div>
            <p style="color:gray;">${t('noTour', lang)}</p>
        </div>`,

    prof: (user, state, lang) => `
        <div class="page-content">
            <h2 class="title-center">${t('prof', lang)}</h2>
            <div class="avatar-wrapper" style="width:110px; height:110px;">
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

            <div class="user-stats-list">
                <div class="list-item"><span>ID:</span> <span>${user.id || '---'}</span></div>
                <div class="list-item"><span>Status:</span> <span>Active</span></div>
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
