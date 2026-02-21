const Prof = {
    render: (user, state, lang) => `
        <div class="prof-page" style="padding: 20px 0;">
            <div class="avatar-container">
                <img src="${user.photo_url || ''}" class="main-avatar-big" style="border: ${getFrameStyle(state.frame)}">
            </div>
            <h3 class="home-name" style="text-align:center;">${user.first_name}</h3>
            
            <div style="padding: 0 20px;">
                <div style="margin-bottom: 20px; opacity: 0.8;">🛡️ Статус: <span style="color:#4CAF50">Active</span></div>
                
                <div class="stats-history">
                    <div class="history-item"><span>${t('today', lang)}:</span><b>${state.steps.toLocaleString()}</b></div>
                    <div class="history-item"><span>${t('week', lang)}:</span><b>${(state.steps * 7).toLocaleString()}</b></div>
                    <div class="history-item"><span>${t('month', lang)}:</span><b>${(state.steps * 30).toLocaleString()}</b></div>
                </div>

                <div class="balance-card-horizontal">
                    <div>
                        <div style="font-size:12px; opacity:0.6">${t('balance', lang)}</div>
                        <div style="font-size:24px; font-weight:800">${state.coins} 💰</div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <button class="blue-btn" onclick="navigate('shop')">${t('shop', lang).split(' ')[0]}</button>
                        <button class="blue-btn" style="background:#444" onclick="navigate('achievements')">Награды</button>
                    </div>
                </div>
            </div>
        </div>`
};
