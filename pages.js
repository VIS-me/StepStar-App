const Pages = {
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
                <div class="stat-item"><span>${Math.round(state.steps * 0.04)}</span><label>${t('kcal', lang)}</label></div>
                <div class="stat-item"><span>${(state.steps * 0.0007).toFixed(1)}</span><label>${t('km', lang)}</label></div>
                <div class="stat-item"><span>${Math.round(state.steps / 100)}</span><label>${t('min', lang)}</label></div>
            </div>
            <button class="main-button" onclick="shareResult(${state.steps})">${t('shareBtn', lang)}</button>
        </div>`;
    },

    rank: (user, state, lang) => {
        const friends = [
            { pos: 1, name: "Алексей", steps: 12400 },
            { pos: 2, name: "Мария", steps: 10200 },
            { pos: 3, name: "Иван К.", steps: 9800 }
        ];
        return `
        <div class="page-content rank-page">
            <div class="leader-banner" style="background-image: url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000')">
                <div class="leader-overlay"><div class="leader-info"><span class="crown-badge">👑 ${t('champion', lang)}</span><h2 class="leader-name-big">Дмитрий</h2></div></div>
            </div>
            <div class="user-rank-bar" style="display:flex; justify-content:space-between; padding:15px 25px; background:rgba(36,139,207,0.15); margin:10px 20px; border-radius:15px;">
                <span>#124 ${user.first_name}</span>
                <strong style="color:var(--main-color);">${state.steps.toLocaleString()}</strong>
            </div>
            <div class="top-ten-list">
                <div style="padding:15px 20px; opacity:0.5; font-size:12px; font-weight:bold;">ДРУЗЬЯ</div>
                ${friends.map(f => `<div class="table-row"><span class="t-pos">${f.pos}</span><div class="rank-photo-mini"></div><span class="t-name">${f.name}</span><span class="t-steps">${f.steps.toLocaleString()}</span></div>`).join('')}
                <div class="invite-row-btn" onclick="inviteFriends()" style="text-align:center; padding:15px; cursor:pointer;">➕ ${t('invite', lang)}</div>
            </div>
        </div>`;
    },

    tour: (user, state, lang) => `
        <div class="page-content tour-page">
            <div class="leader-banner" style="background-image: url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000')">
                <div class="leader-overlay"><div class="leader-info"><span class="crown-badge">👑 ${t('winner', lang)}</span><h2 class="leader-name-big">Champion_2026</h2></div></div>
            </div>
            <div class="join-tournament-card" style="margin:20px; background:rgba(255,255,255,0.05); padding:20px; border-radius:20px; text-align:center;">
                <p style="margin-bottom:15px; opacity:0.7;">Регистрация с 20-го числа</p>
                <button class="main-button" onclick="window.tg.showAlert('Регистрация откроется 20 марта!')">${t('joinBtn', lang)} 50 💰</button>
            </div>
        </div>`,

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
                <div class="info-item">${lang === 'ru' ? 'Шаги' : 'Steps'} <span>${state.steps.toLocaleString()}</span></div>
                <div class="info-item">${lang === 'ru' ? 'Калории' : 'Calories'} <span>${Math.round(state.steps * 0.04)}</span></div>
            </div>
            <div class="info-block wallet-row" style="display:flex; justify-content:space-between; align-items:center; padding: 15px 20px;">
                <div><div class="wallet-label">${t('balance', lang)}</div><div class="wallet-amount">💰 ${state.coins.toLocaleString()}</div></div>
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

        const vipCard = state.isVip ? 
            `<div class="shop-card active-frame" style="grid-column: span 2; background: linear-gradient(45deg, #FFD700, #b8860b); color: #000; border:none;">
                <h3 style="margin:5px">👑 VIP ACTIVE</h3>
                <p style="font-size:10px">Privacy & Gold Frame On</p>
            </div>` :
            `<div class="shop-card" style="grid-column: span 2; border: 2px solid #FFD700; background: rgba(255,215,0,0.05);">
                <h3 style="margin:5px">👑 ${t('vip_status', lang)}</h3>
                <p style="font-size:10px; margin-bottom:10px;">${t('vip_desc', lang)}</p>
                <button class="buy-btn" style="background:#FFD700; color:#000; width:80%; padding:10px; border-radius:10px; border:none; font-weight:bold;" onclick="handleVipPurchase()">2500 💰</button>
            </div>`;

        const gridHtml = frames.map(item => {
            const isOwned = state.inventoryFrames.includes(item.id);
            const isSelected = state.frame === item.id;
            let btnText = isOwned ? 'Select' : `${item.price} 💰`;
            if (isSelected) btnText = 'Equipped';

            return `
                <div class="shop-card ${isSelected ? 'active-frame' : ''}">
                    <div class="avatar-wrapper" style="width:50px; height:50px;">
                        <div class="profile-frame" style="border: ${getFrameStyle(item.id)}"></div>
                        <img src="${user.photo_url || ''}" class="user-avatar" style="width:80%; height:80%;">
                    </div>
                    <p style="font-size:12px; margin:5px 0;">${item.name}</p>
                    <button class="shop-btn ${isOwned ? 'select-btn' : 'buy-btn'}" 
                            onclick="window.handleFrameAction('${item.id}', ${item.price})" ${isSelected ? 'disabled' : ''}>
                        ${btnText}
                    </button>
                </div>`;
        }).join('');

        return `
            <div class="page-content shop-page">
                <h2 style="text-align:center; margin-top:20px;">${t('shop', lang)}</h2>
                <div style="text-align:center; color:var(--accent-gold); font-size:20px; font-weight:800; margin-bottom:20px;">💰 ${state.coins}</div>
                <div class="shop-grid-large">${vipCard}${gridHtml}</div>
                <button class="main-button" style="background:rgba(255,255,255,0.05);" onclick="window.navigate('prof')">Back</button>
            </div>`;
    }
};
