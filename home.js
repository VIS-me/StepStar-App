const Home = {
    render: (user, state, lang) => {
        const goal = 10000;
        const steps = state.steps || 0;
        // Расчет прогресса для круга (2 * pi * R = 628)
        const offset = 628 - (628 * Math.min(steps / goal, 1));
        
        return `
        <div class="page-content home-center">
            <div class="user-main-info">
                <div class="avatar-wrapper">
                    <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                    <img src="${user.photo_url || 'https://via.placeholder.com/150'}" class="user-avatar">
                </div>
                <h3 class="centered-name">${user.first_name || 'User'}</h3>
            </div>

            <div class="progress-container">
                <svg width="230" height="230" class="progress-ring">
                    <circle stroke="rgba(255,255,255,0.1)" stroke-width="12" fill="transparent" r="100" cx="115" cy="115"/>
                    <circle class="progress-ring__circle" stroke="var(--main-color)" stroke-width="12" fill="transparent" r="100" cx="115" cy="115" 
                        style="stroke-dasharray: 628; stroke-dashoffset: ${offset};"/>
                </svg>
                <div class="steps-content">
                    <h1>${steps.toLocaleString()}</h1>
                    <p>${t('steps', lang)}</p>
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-item"><span>${Math.round(steps * 0.04)}</span><label>${t('kcal', lang)}</label></div>
                <div class="stat-item"><span>${(steps * 0.0007).toFixed(1)}</span><label>${t('km', lang)}</label></div>
                <div class="stat-item"><span>${Math.round(steps / 100)}</span><label>${t('min', lang)}</label></div>
            </div>

            <button class="main-button" onclick="shareResult(${steps})">${t('shareBtn', lang)}</button>
        </div>`;
    }
};
