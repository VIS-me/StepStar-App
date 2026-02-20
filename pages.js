const Pages = {
    // ГЛАВНАЯ СТРАНИЦА
    home: (user, state, lang) => {
        const kcal = Math.round(state.steps * 0.04);
        const km = (state.steps * 0.0007).toFixed(1);
        const min = Math.round(state.steps / 100);
        const offset = 628 - (628 * Math.min(state.steps / 10000, 1));

        return `
        <div class="page-content home-center">
            <div class="user-main-info">
                <div class="avatar-wrapper">
                    <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                    <img src="${user.photo_url || ''}" class="user-avatar" style="${user.photo_url ? '' : 'display:none'}">
                </div>
                <h3 class="centered-name">${user.first_name || 'User'}</h3>
            </div>

            <div class="progress-container">
                <svg width="230" height="230" class="progress-ring">
                    <circle stroke="rgba(255,255,255,0.1)" stroke-width="14" fill="transparent" r="100" cx="115" cy="115"/>
                    <circle class="progress-ring__circle" stroke="#248bcf" stroke-width="14" fill="transparent" r="100" cx="115" cy="115" 
                        style="stroke-dashoffset: ${offset}"/>
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

            <button class="main-button" onclick="shareResult(${state.steps})">${t('shareBtn', lang)}</button>
        </div>`;
    },

    // СТРАНИЦА РЕЙТИНГА (Стиль WeRun)
    rank: (user, state, lang) => {
        const leader = { name: "Дмитрий", steps: 85400, photo: "https://via.placeholder.com/100" };
        const myRank = { pos: 124, steps: state.steps };
        const topFriends = [
            { pos: 1, name: "Алексей", steps: 12400, photo: "https://via.placeholder.com/50" },
            { pos: 2, name: "Мария", steps: 10200, photo: "https://via.placeholder.com/50" },
            { pos: 3, name: "Иван К.", steps: 9800, photo: "https://via.placeholder.com/50" }
        ];

        return `
        <div class="page-content">
            <div class="leader-header">
                <div class="leader-avatar-box">
                    <img src="${leader.photo}" class="leader-photo">
                </div>
                <h3 class="leader-name">${leader.name} ${t('winner', lang)}</h3>
                <p class="leader-steps">${leader.steps.toLocaleString()} ${t('steps', lang)}</p>
            </div>

            <div class="user-rank-bar">
                <div class="user-rank-info">
                    <span class="user-rank-pos">#${myRank.pos}</span>
                    <span class="user-rank-name">${user.first_name || 'User'}</span>
                </div>
                <div class="user-rank-score">
                    <strong>${myRank.steps.toLocaleString()}</strong>
                    <span>${t('steps', lang)}</span>
                </div>
            </div>

            <div class="friends-rank-list">
                ${topFriends.map(f => `
                    <div class="rank-item">
                        <span class="rank-pos">${f.pos}</span>
                        <img src="${f.photo}" class="rank-photo">
                        <span class="rank-name">${f.name}</span>
                        <span class="rank-steps">${f.steps.toLocaleString()}</span>
                    </div>
                `).join('')}
            </div>
        </div>`;
    },

    // СТРАНИЦА ТУРНИРОВ
    tour: (user, state, lang) => `
        <div class="page-content center-flex">
            <span style="font-size:60px; margin-bottom:20px;">🏁</span>
            <p style="color:gray;">${t('noTour', lang)}</p>
        </div>`,

    // СТРАНИЦА ПРОФИЛЯ + МАГАЗИН
    prof: (user, state, lang) => `
        <div class="page-content">
            <h2 class="title-center">${t('prof', lang)}</h2>
            <div class="avatar-wrapper" style="width:110px; height:110px;">
                <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                <img src="${user.photo_url || ''}" class="user-avatar" style="width:94px; height:94px; ${user.photo_url ? '' : 'display:none'}">
            </div>
            <h3 class="centered-name">${user.first_name || 'User'}</h3>
            
            <div class="shop-container">
                <h4 style="margin:0 0 15px 0;">${t('shop', lang)}</h4>
                <div class="shop-grid">
                    <div class="shop-item" onclick="changeFrame('blue')">
                        <div class="preview-circle" style="border: 4px solid #248bcf"></div>
                        <span>Blue</span>
                    </div>
                    <div class="shop-item" onclick="changeFrame('pink')">
                        <div class="preview-circle" style="border: 4px solid #ff69b4"></div>
                        <span>Pink</span>
                    </div>
                </div>
            </div>
        </div>`
};
