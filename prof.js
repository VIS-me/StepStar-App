const Prof = {
    render: (user, state, lang) => `
        <div class="page-content">
            <h2 class="title-center">${t('prof', lang)}</h2>
            <div class="avatar-wrapper" style="width:110px; height:110px; margin: 0 auto;">
                <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                <img src="${user.photo_url || ''}" class="user-avatar" style="width:94px; height:94px; ${user.photo_url ? '' : 'display:none'}">
            </div>
            <h3 class="centered-name">${user.first_name || 'User'}</h3>
            <div class="wallet-mini-card">
                <div class="wallet-info"><span class="wallet-label">${t('balance', lang)}</span><span class="wallet-amount">💰 ${state.coins}</span></div>
                <button class="go-shop-btn" onclick="navigate('shop')">${t('shop', lang)} →</button>
            </div>
            <div class="info-list">
                <div class="info-item">🛡️ Status: <span>Explorer</span></div>
                <div class="info-item">🌍 Region: <span>Global</span></div>
            </div>
        </div>`
};
