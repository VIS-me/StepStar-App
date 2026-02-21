const Home = {
    render: (user, state, lang) => {
        const goal = 10000;
        const steps = state.steps || 0;
        const offset = 628 - (628 * Math.min(steps / goal, 1));
        
        return `
        <div class="page-content home-page">
            <div class="user-info-mini">
                <div class="avatar-mini-wrapper">
                    <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                    <img src="${user.photo_url || ''}" class="user-avatar-mini" style="${user.photo_url ? '' : 'background:#333'}">
                </div>
                <span class="user-name-mini">${user.first_name || 'User'}</span>
            </div>

            <div class="progress-container">
                <svg width="240" height="240" class="progress-ring">
                    <circle stroke="rgba(255,255,255,0.05)" stroke-width="12" fill="transparent" r="100" cx="120" cy="120"/>
                    <circle class="progress-ring__circle" stroke="var(--main-color)" stroke-width="12" fill="transparent" r="100" cx="120" cy="120" 
                        style="stroke-dasharray: 628; stroke-dashoffset: ${offset};"/>
                </svg>
                <div class="steps-data">
                    <h1 class="steps-count">${steps.toLocaleString()}</h1>
                    <p class="steps-label">${t('steps', lang)}</p>
                </div>
            </div>

            <div class="stats-grid-home">
                <div class="stat-box">
                    <span class="stat-v">${Math.round(steps * 0.04)}</span>
                    <label class="stat-l">${t('kcal', lang)}</label>
                </div>
                <div class="stat-box">
                    <span class="stat-v">${(steps * 0.0007).toFixed(1)}</span>
                    <label class="stat-l">${t('km', lang)}</label>
                </div>
                <div class="stat-box">
                    <span class="stat-v">${Math.round(steps / 100)}</span>
                    <label class="stat-l">${t('min', lang)}</label>
                </div>
            </div>

            <button class="share-btn-main" onclick="shareResult(${steps})">${t('shareBtn', lang)}</button>
        </div>`;
    }
};
