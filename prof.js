const Prof = {
    render: (user, state, lang) => {
        // Проверка наличия фото пользователя
        const userPhoto = user.photo_url || 'https://via.placeholder.com/150';
        
        return `
        <div class="page-content prof-page">
            <h2 class="centered-name" style="margin-top: 30px; font-size: 24px;">${t('prof', lang)}</h2>
            
            <div class="avatar-wrapper" style="width: 120px; height: 120px; margin-bottom: 10px;">
                <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                <img src="${userPhoto}" class="user-avatar" style="width: 100px; height: 100px;">
            </div>
            
            <h3 class="centered-name" style="margin-bottom: 30px;">${user.first_name || 'User'}</h3>

            <div class="join-tournament-card" style="margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div class="wallet-info">
                        <div style="font-size: 12px; opacity: 0.6; margin-bottom: 4px;">${t('balance', lang)}</div>
                        <div style="font-size: 22px; font-weight: bold; color: var(--gold);">💰 ${state.coins.toLocaleString()}</div>
                    </div>
                    <button class="participate-btn" style="flex: none; padding: 10px 20px; border-radius: 12px;" onclick="navigate('shop')">
                        ${t('shop', lang)} →
                    </button>
                </div>
            </div>

            <div class="top-ten-list" style="margin: 0 20px; background: var(--secondary-bg); border-radius: 20px; padding: 10px 0;">
                <div class="table-row">
                    <span style="opacity: 0.7;">🛡️ Статус</span>
                    <span style="font-weight: 600; color: var(--main-color);">Explorer</span>
                </div>
                <div class="table-row" style="border-top: 1px solid rgba(255,255,255,0.05);">
                    <span style="opacity: 0.7;">🌍 Регион</span>
                    <span style="font-weight: 600;">Global</span>
                </div>
                <div class="table-row" style="border-top: 1px solid rgba(255,255,255,0.05);">
                    <span style="opacity: 0.7;">👟 Всего шагов</span>
                    <span style="font-weight: 600;">${(state.steps * 1.2).toLocaleString()}</span>
                </div>
            </div>

            <div class="invite-link-wrapper" onclick="inviteFriends()">
                <div class="invite-content">
                    <span class="invite-icon">＋</span>
                    <span class="invite-text">${t('invite', lang)}</span>
                </div>
            </div>
        </div>`;
    }
};
