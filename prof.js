const Prof = {
    render: (user, state, lang) => `
        <div class="page-content prof-page">
            <img src="${user.photo_url || ''}" class="main-avatar-big">
            <h3 class="home-name">${user.first_name}</h3>
            
            <div style="align-self: flex-start; margin-bottom: 20px;">🛡️ ${t('status', lang)}: <span style="color:#4CAF50">Active</span></div>
            
            <div class="stats-history">
                <div class="history-item"><span>${t('today', lang)}:</span><b>${state.steps}</b></div>
                <div class="history-item"><span>${t('week', lang)}:</span><b>${state.steps * 7}</b></div>
                <div class="history-item"><span>${t('month', lang)}:</span><b>${state.steps * 30}</b></div>
            </div>

            <div class="balance-card-horizontal">
                <div>
                    <div style="font-size:12px; opacity:0.6">${t('balance', lang)}</div>
                    <div style="font-size:24px; font-weight:800">${state.coins} 💰</div>
                </div>
                <div class="btn-column">
                    <button class="blue-btn" onclick="navigate('shop')">${t('shop', lang)}</button>
                    <button class="blue-btn" style="background:#444" onclick="navigate('achievements')">${t('achievements', lang)}</button>
                </div>
            </div>
        </div>`
};
