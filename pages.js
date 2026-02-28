const Pages = {
    home: (user, state, lang) => {
        const goal = 10000;
        const offset = 628 - (628 * Math.min(state.steps / goal, 1));
        return `
        <div class="page-content home-center">
            <div class="avatar-section">
                <div class="avatar-wrapper">
                    <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                    <img src="${user.photo_url || ''}" class="user-avatar" onerror="this.src='https://ui-avatars.com/api/?name=${user.first_name}'">
                </div>
                <h3 class="centered-name">${user.first_name}</h3>
            </div>
            <div class="progress-container">
                <svg width="230" height="230" class="progress-ring">
                    <circle stroke="rgba(255,255,255,0.1)" stroke-width="12" fill="transparent" r="100" cx="115" cy="115"/>
                    <circle class="progress-ring__circle" stroke="var(--main-color)" stroke-width="12" fill="transparent" r="100" cx="115" cy="115" 
                            style="stroke-dashoffset: ${offset}; stroke-dasharray: 628;"/>
                </svg>
                <div class="steps-content">
                    <h1>${state.steps.toLocaleString()}</h1>
                    <div class="steps-label">шагов сегодня</div>
                </div>
            </div>
            <button class="main-button" onclick="window.inviteFriends()">Пригласить друзей</button>
        </div>`;
    },

    rank: (user, state, lang) => `
        <div class="page-content">
            <div class="leader-banner" style="background-image: url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000')">
                <div class="leader-overlay"><h2>Общий рейтинг</h2></div>
            </div>
            <div class="top-ten-list">
                ${(window.topUsers || []).map(f => `
                    <div class="table-row">
                        <span class="t-pos">${f.pos}</span>
                        <img src="${f.photo_url}" class="rank-photo-mini" onerror="this.src='https://ui-avatars.com/api/?name=${f.name}'">
                        <span class="t-name">${f.name}</span>
                        <span class="t-steps">${(f.stats?.steps_total || 0).toLocaleString()}</span>
                    </div>
                `).join('')}
                <div class="main-button" onclick="window.inviteFriends()">Позвать друзей</div>
            </div>
        </div>`,

    tour: (user, state, lang) => `
        <div class="page-content">
            <div class="leader-banner" style="background-image: url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000')">
                <div class="leader-overlay" style="flex-direction:column; justify-content:center;">
                    <h1 style="color:#FFD700; font-size:40px; margin:0;">💰 1000</h1>
                    <p style="margin:0; opacity:0.8;">ПРИЗОВОЙ ФОНД</p>
                </div>
            </div>
            <div style="padding:15px;">
                <button class="main-button" onclick="window.joinTournament()">Присоединиться за 50 💰</button>
                <div style="padding:10px; opacity:0.5; font-size:12px; font-weight:bold;">ТОП-10 ТУРНИРА</div>
                <div class="top-ten-list">
                    ${(window.tourUsers || []).map(f => `
                        <div class="table-row">
                            <span class="t-pos">${f.pos}</span>
                            <img src="${f.photo_url}" class="rank-photo-mini" onerror="this.src='https://ui-avatars.com/api/?name=${f.name}'">
                            <span class="t-name">${f.name}</span>
                            <span class="t-steps">${(f.stats?.steps_today || 0).toLocaleString()}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>`,

    prof: (user, state, lang) => `
        <div class="page-content">
            <div class="profile-header" style="text-align:center; padding: 20px 0;">
                <div class="avatar-wrapper">
                    <div class="profile-frame" style="border: ${getFrameStyle(state.frame)}"></div>
                    <img src="${user.photo_url || ''}" class="user-avatar" onerror="this.src='https://ui-avatars.com/api/?name=${user.first_name}'">
                </div>
                <h3>${user.first_name}</h3>
            </div>
            <div class="info-block">
                <div class="info-item">Сегодня <span>${state.steps.toLocaleString()}</span></div>
                <div class="info-item">За неделю <span>${state.steps_week.toLocaleString()}</span></div>
                <div class="info-item">За месяц <span>${state.steps_month.toLocaleString()}</span></div>
                <div class="info-item">Всего <span>${state.steps_total.toLocaleString()}</span></div>
            </div>
            <div class="info-block" style="display:flex; justify-content:space-between; align-items:center; padding: 15px 20px;">
                <div><div style="font-size:12px; opacity:0.5;">Баланс</div><div style="font-weight:bold; font-size:18px;">💰 ${state.coins.toLocaleString()}</div></div>
                <button onclick="window.navigate('shop')" style="background:var(--main-color); border:none; color:white; padding:10px 20px; border-radius:10px; font-weight:bold;">В магазин</button>
            </div>
        </div>`,

    shop: (user, state, lang) => {
        const frames = [
            { id: 'white', p: 0 }, { id: 'green', p: 50 }, { id: 'lightblue', p: 50 }, { id: 'blue', p: 50 },
            { id: 'pink', p: 50 }, { id: 'purple', p: 50 }, { id: 'gold', p: 500 }, { id: 'gold_vip_frame', p: 2500 }
        ];
        return `
            <div class="page-content">
                <div style="padding:20px 20px 10px 20px; display:flex; justify-content:space-between; align-items:center;">
                    <button onclick="window.navigate('prof')" style="background:none; border:none; color:white; font-size:18px; padding:0;">← Назад</button>
                    <div style="font-weight:bold; color:var(--accent-gold); font-size:18px;">💰 ${state.coins}</div>
                    <button onclick="document.getElementById('earn-modal').style.display='flex'" style="background:var(--accent-gold); border:none; color:black; padding:8px 15px; border-radius:10px; font-weight:bold;">Получить</button>
                </div>
                
                <div class="shop-grid-4">
                    ${frames.map(f => {
                        const isOwned = state.inventoryFrames.includes(f.id);
                        const isSelected = state.frame === f.id;
                        return `
                        <div class="shop-item-mini" onclick="window.handleFrameAction('${f.id}', ${f.p})" style="${isSelected ? 'border-color:var(--main-color)' : ''}">
                            <div class="frame-preview" style="border:${getFrameStyle(f.id)}"></div>
                            <div style="font-size:10px; opacity:0.8;">${isSelected ? 'Уст.' : (isOwned ? 'Взять' : f.p + ' 💰')}</div>
                        </div>`;
                    }).join('')}
                </div>

                <div id="earn-modal" class="modal-overlay">
                    <div class="modal-content">
                        <h3 style="margin-top:0;">Заработать 💰</h3>
                        <button class="main-button" style="font-size:14px; margin: 10px 0;" onclick="window.claimDailyBonus()">🎁 Бонус за 10к шагов</button>
                        <div style="margin:15px 0; opacity:0.3; font-size:11px; letter-spacing:1px;">МАГАЗИН ЗВЕЗД</div>
                        <button class="main-button" style="background:#333; font-size:14px; margin: 5px 0;" onclick="window.buyStars(150, 300)">150 ⭐️ = 300 💰</button>
                        <button class="main-button" style="background:#333; font-size:14px; margin: 5px 0;" onclick="window.buyStars(250, 600)">250 ⭐️ = 600 💰</button>
                        <button class="main-button" style="background:#333; font-size:14px; margin: 5px 0;" onclick="window.buyStars(1000, 3000)">1000 ⭐️ = 3000 💰</button>
                        <button onclick="document.getElementById('earn-modal').style.display='none'" style="background:none; border:none; color:gray; margin-top:15px; font-size:14px;">Закрыть</button>
                    </div>
                </div>
            </div>`;
    }
};
