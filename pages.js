const Pages = {
    home: (user, state, lang) => {
        const goal = 10000;
        const currentSteps = state.steps || 0;
        const offset = 628 - (628 * Math.min(currentSteps / goal, 1));
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
                    <h1>${currentSteps.toLocaleString()}</h1>
                    <div class="steps-label">${t('steps', lang)}</div>
                </div>
            </div>
            <div class="stats-grid">
                <div class="stat-item"><span>${Math.round(currentSteps * 0.04)}</span><label>${t('kcal', lang)}</label></div>
                <div class="stat-item"><span>${(currentSteps * 0.0007).toFixed(1)}</span><label>${t('km', lang)}</label></div>
                <div class="stat-item"><span>${Math.round(currentSteps / 100)}</span><label>${t('min', lang)}</label></div>
            </div>
            <button class="main-button" onclick="window.shareResult(${currentSteps})">${t('shareBtn', lang)}</button>
        </div>`;
    },
    rank: (user, state, lang) => {
        return `
        <div class="page-content rank-page">
            <div class="leader-banner" style="background-image: url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000')">
                <div class="leader-overlay"><div class="leader-info"><span class="crown-badge">👑 ${t('champion', lang)}</span><h2 class="leader-name-big">Дмитрий</h2></div></div>
            </div>
            <div class="user-rank-bar" style="display:flex; justify-content:space-between; padding:15px 25px; background:rgba(36,139,207,0.15); margin:10px 20px; border-radius:15px;">
                <span>#124 ${user.first_name}</span>
                <strong style="color:var(--main-color);">${(state.steps || 0).toLocaleString()}</strong>
            </div>
            <div class="top-ten-list">
                <div style="padding:15px 20px; opacity:0.5; font-size:12px; font-weight:bold;">ДРУЗЬЯ</div>
                <div class="invite-row-btn" onclick="window.tg.showAlert('Coming soon')" style="text-align:center; padding:15px; cursor:pointer;">➕ ${t('invite', lang)}</div>
            </div>
        </div>`;
    },
    prof: (user, state, lang) => `
        <div class="page-content">
            <div class="profile-header" style="text-align:center; padding: 20px 0;">
                <div class="avatar-wrapper">
                    <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                    <img src="${user.photo_url || ''}" class="user-avatar" onerror="this.style.display='none'">
                </div>
                <h3 class="centered-name">${user.first_name || 'User'} ${state.isVip ? '👑' : ''}</h3>
            </div>
            <div class="info-block">
                <div class="info-item">${lang === 'ru' ? 'Шаги' : 'Steps'} <span>${(state.steps || 0).toLocaleString()}</span></div>
                <div class="info-item">${lang === 'ru' ? 'Калории' : 'Calories'} <span>${Math.round((state.steps || 0) * 0.04)}</span></div>
            </div>
            <div class="info-block wallet-row" style="display:flex; justify-content:space-between; align-items:center; padding: 15px 20px;">
                <div><div class="wallet-label">${t('balance', lang)}</div><div class="wallet-amount">💰 ${(state.coins || 0).toLocaleString()}</div></div>
                <button class="go-shop-btn" onclick="window.navigate('shop')" style="background:var(--main-color); border:none; color:white; padding:8px 15px; border-radius:10px;">${t('shop', lang)} →</button>
            </div>
        </div>`,
    shop: (user, state, lang) => {
        const frames = [
            { id: 'white', name: 'White', price: 0 },
            { id: 'green', name: 'Green', price: 50 },
            { id: 'lightblue', name: 'Azure', price: 50 },
            { id: 'blue', name: 'Blue', price: 50 },
            { id: 'pink', name: 'Pink', price: 50 },
            { id: 'purple', name: 'Purple', price: 50 }
        ];
        const vipCard = state.isVip ? `<div class="shop-card active-frame" style="grid-column: span 2; background: linear-gradient(45deg, #FFD700, #b8860b); color: #000; border:none;"><h3>👑 VIP ACTIVE</h3></div>` : `<div class="shop-card" style="grid-column: span 2; border: 2px solid #FFD700;"><h3 style="margin:5px">👑 ${t('vip_status', lang)}</h3><button class="buy-btn" onclick="window.handleVipPurchase()">2500 💰</button></div>`;
        const gridHtml = frames.map(item => {
            const isOwned = state.inventoryFrames.includes(item.id);
            const isSelected = state.frame === item.id;
            return `<div class="shop-card ${isSelected ? 'active-frame' : ''}"><div class="avatar-wrapper" style="width:50px; height:50px;"><div class="profile-frame" style="border: ${getFrameStyle(item.id)}"></div><img src="${user.photo_url}" class="user-avatar" style="width:80%; height:80%;"></div><p>${item.name}</p><button class="shop-btn" onclick="window.handleFrameAction('${item.id}', ${item.price})">${isSelected ? 'Equipped' : (isOwned ? 'Select' : item.price + ' 💰')}</button></div>`;
        }).join('');
        return `<div class="page-content shop-page"><h2 style="text-align:center;">${t('shop', lang)}</h2><div style="text-align:center; color:var(--accent-gold); font-size:20px; margin-bottom:20px;">💰 ${state.coins}</div><div class="shop-grid-large">${vipCard}${gridHtml}</div></div>`;
    },
    tour: (user, state, lang) => `<div class="page-content tour-page"><div class="leader-banner" style="background-image: url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000')"><div class="leader-overlay"><h2>Турниры</h2></div></div><div style="padding:20px; text-align:center;">${t('noTour', lang)}</div></div>`
};
