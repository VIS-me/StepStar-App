const Pages = {
    home: (user, state, lang) => {
        const kcal = Math.round(state.steps * 0.04);
        const km = (state.steps * 0.0007).toFixed(1);
        const min = Math.round(state.steps / 100);

        return `
        <div class="page-content home-center">
            <div class="user-main-info">
                <div class="avatar-wrapper">
                    <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                    <img src="${user.photo_url || ''}" class="user-avatar" style="${user.photo_url ? '' : 'display:none'}">
                </div>
                <h3 class="centered-name">${user.first_name}</h3>
            </div>

            <div class="progress-container">
                <svg width="230" height="230" class="progress-ring">
                    <circle stroke="rgba(255,255,255,0.1)" stroke-width="14" fill="transparent" r="100" cx="115" cy="115"/>
                    <circle id="ring-progress" class="progress-ring__circle" stroke="var(--main-color)" stroke-width="14" fill="transparent" r="100" cx="115" cy="115" 
                        style="stroke-dashoffset: ${628 - (628 * (state.steps / 10000))}"/>
                </svg>
                <div class="steps-content">
                    <h1>${state.steps.toLocaleString()}</h1>
                    <p>${t('steps', lang)}</p>
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-item"><span>${kcal}</span><label>${t('kcal', lang)}</label></div>
                <div class="stat-item"><span>${km}</span><label>${t('km', lang)}</label></div>
                <div class="stat-item"><span>${min}</span><label>${t('min', lang)}</label></div>
            </div>

            <div class="button-container">
                <button class="main-button" onclick="tg.switchInlineQuery('${t('shareText', lang).replace('{n}', state.steps)}')">${t('shareBtn', lang)}</button>
            </div>
        </div>
    `;
    },

    rank: (user, state, lang) => `
        <div class="page-content">
            <h2 style="text-align:center;">${t('rank', lang)}</h2>
            <div class="winner-card">
                <div class="avatar-wrapper" style="width:110px; height:110px;">
                    <div class="profile-frame" style="border: var(--gold) 5px solid;"></div>
                    <img src="https://via.placeholder.com/100" class="user-avatar" style="width:94px; height:94px;">
                    <div class="winner-badge">👑</div>
                </div>
                <h3 style="text-align:center; margin-top:15px;">${t('champion', lang)}</h3>
                <p style="text-align:center; color:var(--main-color); font-weight:bold;">12,500 ${t('steps', lang)}</p>
            </div>
        </div>
    `,

    tour: (user, state, lang) => `
        <div class="page-content" style="text-align:center; padding-top:100px;">
            <span style="font-size:60px;">🏁</span>
            <p style="color:gray;">${t('noTour', lang)}</p>
        </div>
    `,

    prof: (user, state, lang) => `
        <div class="page-content">
            <h2 style="text-align:center;">${t('prof', lang)}</h2>
            <div class="avatar-wrapper" style="width:110px; height:110px;">
                <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                <img src="${user.photo_url || ''}" class="user-avatar" style="width:94px; height:94px; ${user.photo_url ? '' : 'display:none'}">
            </div>
            <h3 style="text-align:center; margin-top:15px;">${user.first_name}</h3>
            
            <div class="shop-container">
                <h4>${t('shop', lang)}</h4>
                <div class="shop-grid">
                    <div class="shop-item" onclick="changeFrame('blue')">
                        <div class="preview-circle" style="border: ${Assets.frames.blue}"></div>
                        <span>Blue</span>
                    </div>
                    <div class="shop-item" onclick="changeFrame('pink')">
                        <div class="preview-circle" style="border: ${Assets.frames.pink}"></div>
                        <span>Pink</span>
                    </div>
                </div>
            </div>
        </div>
    `
};
