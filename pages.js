const Pages = {
    home: (user, state, lang) => {
        const goal = 10000;
        const offset = 628 - (628 * Math.min(state.steps / goal, 1));
        return `
        <div class="page-content" style="text-align:center; padding-top:20px;">
            <div class="avatar-wrapper">
                <div class="profile-frame" style="border: ${window.getFrameStyle(state.frame)}"></div>
                <img src="${user.photo_url || ''}" class="user-avatar" onerror="this.src='https://ui-avatars.com/api/?name=${user.first_name}'">
            </div>
            <h3 style="margin:10px 0;">${user.first_name}</h3>
            <div style="position:relative; width:220px; height:220px; margin:20px auto; display:flex; align-items:center; justify-content:center;">
                <svg width="220" height="220" style="transform: rotate(-90deg); position:absolute;">
                    <circle stroke="rgba(255,255,255,0.1)" stroke-width="12" fill="transparent" r="100" cx="110" cy="110"/>
                    <circle stroke="var(--main-color)" stroke-width="12" fill="transparent" r="100" cx="110" cy="110" 
                            style="stroke-dashoffset: ${offset}; stroke-dasharray: 628; transition: 0.5s; stroke-linecap: round;"/>
                </svg>
                <div>
                    <h1 style="margin:0; font-size:42px;">${state.steps.toLocaleString()}</h1>
                    <div style="font-size:12px; opacity:0.5;">шагов сегодня</div>
                </div>
            </div>
            <button class="main-button" onclick="window.inviteFriends()">${t('invite', lang)}</button>
        </div>`;
    },

    rank: (user, state, lang) => {
        const winner = window.topUsers[0] || { name: "Champion", photo_url: "" };
        return `
        <div class="page-content">
            <div style="background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); margin: 15px; border-radius: 20px; padding: 15px; display: flex; align-items: center; color: black;">
                <img src="${winner.photo_url}" style="width:55px; height:55px; border-radius:50%; border:3px solid white; margin-right:15px; object-fit:cover;" onerror="this.src='https://ui-avatars.com/api/?name=W'">
                <div><h4 style="margin:0; font-size:12px; opacity:0.7;">${t('week_winner', lang)}</h4><h2 style="margin:0;">${winner.name}</h2></div>
            </div>
            <div style="padding:0 15px 15px; display:flex; gap:10px;">
                <button onclick="document.getElementById('friend-rank').style.display='none'; document.getElementById('global-rank').style.display='block';" style="flex:1; background:var(--main-color); color:white; border:none; padding:10px; border-radius:12px; font-size:12px;">${t('global', lang)}</button>
                <button onclick="document.getElementById('global-rank').style.display='none'; document.getElementById('friend-rank').style.display='block';" style="flex:1; background:#333; color:white; border:none; padding:10px; border-radius:12px; font-size:12px;">${t('friends_tab', lang)}</button>
            </div>
            <div id="global-rank">${window.topUsers.map((f, i) => `<div class="table-row"><span style="width:25px; opacity:0.5;">${i+1}</span><img src="${f.photo_url}" class="rank-photo-mini" onerror="this.src='https://ui-avatars.com/api/?name=${f.name}'"><span style="flex:1;">${f.name}</span><b>${f.steps_total.toLocaleString()}</b></div>`).join('')}</div>
            <div id="friend-rank" style="display:none;">${window.friendUsers.length > 0 ? window.friendUsers.map((f, i) => `<div class="table-row"><span style="width:25px; opacity:0.5;">${i+1}</span><img src="${f.photo_url}" class="rank-photo-mini" onerror="this.src='https://ui-avatars.com/api/?name=${f.name}'"><span style="flex:1;">${f.name}</span><b style="color:var(--main-color);">${f.steps_today.toLocaleString()}</b></div>`).join('')} : <div style="text-align:center; padding:30px; opacity:0.5;">Пригласи друзей!</div>}</div>
        </div>`;
    },

    tour: (user, state, lang) => {
        const today = new Date().getDate();
        const isRegOpen = today >= 1 && today <= 7;
        const prize = (window.tourUsers.length * 50) + 1000;
        return `
        <div class="page-content">
            <div style="padding:40px 20px; text-align:center; background:rgba(255,215,0,0.05);">
                <h1 style="color:var(--accent-gold); margin:0; font-size:42px;">💰 ${prize}</h1>
                <div style="opacity:0.6; font-size:11px;">ПРИЗОВОЙ ФОНД</div>
            </div>
            ${!state.isRegistered && isRegOpen ? `<button class="main-button" style="background:var(--accent-gold); color:black;" onclick="window.joinTournament()">Вступить за 50 💰</button>` : `<div style="text-align:center; padding:20px; color:#00FF00;">${state.isRegistered ? '✅ ВЫ УЧАСТНИК' : 'Регистрация 1-7 числа'}</div>`}
            <div style="padding:10px 20px; opacity:0.4; font-size:11px;">УЧАСТНИКИ</div>
            ${window.tourUsers.map((f, i) => `<div class="table-row"><span style="width:25px; opacity:0.5;">${i+1}</span><img src="${f.photo_url}" class="rank-photo-mini" onerror="this.src='https://ui-avatars.com/api/?name=${f.name}'"><span style="flex:1;">${f.name}</span><b>${f.steps_today.toLocaleString()}</b></div>`).join('')}
        </div>`;
    },

    prof: (user, state, lang) => `
        <div class="page-content" style="padding-top:20px;">
            <div class="avatar-wrapper">
                <div class="profile-frame" style="border: ${window.getFrameStyle(state.frame)}"></div>
                <img src="${user.photo_url || ''}" class="user-avatar" onerror="this.src='https://ui-avatars.com/api/?name=${user.first_name}'">
            </div>
            <h3 style="text-align:center;">${user.first_name}</h3>
            <div style="background:var(--secondary-bg); margin:20px; border-radius:20px; padding:10px;">
                <div style="display:flex; justify-content:space-between; padding:15px; border-bottom:1px solid rgba(255,255,255,0.05);">Сегодня <span>${state.steps.toLocaleString()}</span></div>
                <div style="display:flex; justify-content:space-between; padding:15px; border-bottom:1px solid rgba(255,255,255,0.05);">Всего <span>${state.steps_total.toLocaleString()}</span></div>
                <div style="display:flex; justify-content:space-between; padding:15px;">Баланс <span>💰 ${state.coins}</span></div>
            </div>
            <button class="main-button" onclick="window.navigate('shop')">Магазин</button>
        </div>`,

    shop: (user, state, lang) => `
        <div class="page-content">
            <div style="padding:20px; display:flex; justify-content:space-between; align-items:center;">
                <button onclick="window.navigate('prof')" style="background:none; border:none; color:white; font-size:24px;">←</button>
                <div style="font-weight:bold; color:var(--accent-gold);">💰 ${state.coins}</div>
                <button onclick="document.getElementById('earn-modal').style.display='flex'" style="background:var(--accent-gold); border:none; color:black; padding:8px 15px; border-radius:10px; font-weight:bold; font-size:11px;">ДОБЫТЬ</button>
            </div>
            <div class="shop-grid-4">
                ${[{id:'white', p:0}, {id:'green', p:50}, {id:'lightblue', p:50}, {id:'blue', p:50}, {id:'pink', p:50}, {id:'purple', p:50}, {id:'gold', p:500}].map(f => `
                    <div class="shop-item-mini" onclick="window.handleFrameAction('${f.id}', ${f.p})" style="border-color:${state.frame === f.id ? 'var(--main-color)' : 'transparent'}">
                        <div class="frame-preview" style="border:${window.getFrameStyle(f.id)}"></div>
                        <div style="font-size:10px; opacity:0.8;">${state.frame === f.id ? 'Уст.' : (state.inventoryFrames.includes(f.id) ? 'Взять' : f.p)}</div>
                    </div>`).join('')}
            </div>
            <div id="earn-modal" class="modal-overlay">
                <div class="modal-content">
                    <h3>Заработать 💰</h3>
                    <button class="main-button" onclick="window.claimDailyBonus()">🎁 10к шагов (10 💰)</button>
                    <button onclick="document.getElementById('earn-modal').style.display='none'" style="background:none; border:none; color:gray; margin-top:15px;">Закрыть</button>
                </div>
            </div>
        </div>`
};
