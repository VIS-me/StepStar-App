const Prof = {
    render: (user, state, lang) => {
        // Рассчитываем статистику на основе текущих шагов (для примера)
        const stats = {
            today: state.steps || 0,
            week: (state.steps || 0) * 7,
            month: (state.steps || 0) * 30
        };

        return `
        <div class="page-content prof-page">
            <div class="profile-header-spacer"></div>
            
            <div class="avatar-wrapper main-prof-avatar">
                <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                <img src="${user.photo_url || ''}" class="user-avatar" style="${user.photo_url ? '' : 'background: #333;'}">
            </div>
            
            <h3 class="centered-name prof-name">${user.first_name || 'Ivan'}</h3>

            <div class="status-container">
                <span class="status-icon">🛡️</span>
                <span class="status-label">Status:</span>
                <span class="status-value">Active</span>
            </div>

            <div class="stats-history">
                <div class="history-item">
                    <span>Прошел сегодня:</span>
                    <span class="val">${stats.today.toLocaleString()}</span>
                </div>
                <div class="history-item">
                    <span>Прошел за неделю:</span>
                    <span class="val">${stats.week.toLocaleString()}</span>
                </div>
                <div class="history-item">
                    <span>Прошел за месяц:</span>
                    <span class="val">${stats.month.toLocaleString()}</span>
                </div>
            </div>

            <div class="balance-card-horizontal">
                <div class="balance-content">
                    <div class="bal-title">Balance</div>
                    <div class="bal-amount-row">
                        <span class="bal-number">${state.coins}</span>
                        <span class="bal-coin-icon">💰</span>
                    </div>
                </div>
                <button class="shop-action-btn" onclick="navigate('shop')">Магазин</button>
            </div>

            <div class="region-info">
                🌍 Region: <span>Global</span>
            </div>
        </div>`;
    }
};
