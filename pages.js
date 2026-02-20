const Pages = {
    // Вкладка ГЛАВНАЯ
    home: (user, state) => `
        <div class="page-content">
            <div class="user-main-info">
                <div class="avatar-wrapper">
                    <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                    <img src="${user.photo_url || ''}" class="user-avatar" style="${user.photo_url ? '' : 'display:none'}">
                </div>
                <h3>${user.first_name}</h3>
            </div>
            <div class="progress-container">
                <svg width="230" height="230" class="progress-ring">
                    <circle stroke="rgba(0,0,0,0.05)" stroke-width="14" fill="transparent" r="100" cx="115" cy="115"/>
                    <circle id="ring-progress" class="progress-ring__circle" stroke="var(--main-color)" stroke-width="14" fill="transparent" r="100" cx="115" cy="115" style="stroke-dashoffset: ${628 - (628 * (state.steps/10000))}"/>
                </svg>
                <div class="steps-content">
                    <h1>${state.steps.toLocaleString()}</h1>
                    <p>steps</p>
                </div>
            </div>
        </div>
    `,

    // Вкладка РЕЙТИНГ
    rank: (user, state) => `
        <div class="page-content">
            <h2 style="text-align:center;">Rank</h2>
            <div class="winner-card">
                <div class="avatar-wrapper" style="width:110px; height:110px;">
                    <div class="profile-frame" style="border: ${Assets.frames.gold}; border-width: 5px;"></div>
                    <img src="https://via.placeholder.com/100" class="user-avatar" style="width:94px; height:94px;">
                    <div class="winner-badge">👑</div>
                </div>
                <h3 style="margin-top:15px;">Weekly Champion</h3>
                <p style="color:var(--main-color); font-weight:bold;">12,500 steps</p>
            </div>
            <p style="text-align:center; color:gray; margin-top:20px;">Contacts ranking coming soon...</p>
        </div>
    `,

    // Вкладка ТУРНИР
    tour: () => `
        <div class="page-content" style="text-align:center; padding-top:100px;">
            <span style="font-size:60px;">🏁</span>
            <p style="color:gray;">No active tournaments</p>
        </div>
    `,

    // Вкладка ПРОФИЛЬ + МАГАЗИН
    prof: (user, state) => `
        <div class="page-content">
            <h2 style="text-align:center;">Profile</h2>
            <div class="avatar-wrapper" style="width:110px; height:110px;">
                <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                <img src="${user.photo_url || ''}" class="user-avatar" style="width:94px; height:94px; ${user.photo_url ? '' : 'display:none'}">
            </div>
            <h3 style="text-align:center; margin-top:15px;">${user.first_name}</h3>
            
            <div class="shop-container">
                <h4>Shop ✨</h4>
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
