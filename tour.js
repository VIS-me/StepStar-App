const Tour = {
    render: (user, state, lang) => `
        <div class="page-content">
            <div class="hero-winner">
                <div style="position:relative">
                    <span style="position:absolute; top:-20px; left:50%; transform:translateX(-50%); font-size:24px;">👑</span>
                    <img src="https://via.placeholder.com/150" class="hero-img" style="border-color:var(--gold)">
                </div>
                <div style="color:var(--gold); font-weight:bold; margin-top:10px;">TOURNAMENT WINNER</div>
                <div style="font-size:20px; font-weight:bold;">Alexander</div>
            </div>
            <div class="shop-block" style="display:flex; justify-content:space-between; align-items:center;">
                <button class="blue-btn" style="flex:1; margin-right:10px; padding:15px;">Join Tournament</button>
                <div style="background:rgba(255,215,0,0.1); padding:10px; border-radius:12px; border:1px solid var(--gold); color:var(--gold); font-weight:bold;">10,000 💰</div>
            </div>
            <div style="padding:0 20px;">
                <h4 style="opacity:0.5;">${t('topPlayers', lang)}</h4>
                <div class="shop-block" style="margin:0; padding:10px;">
                    ${[1,2,3,4,5,6,7,8,9,10].map(i => `<div class="history-item"><span>${i}. Player ${i}</span><b>${(15000 - i*800).toLocaleString()}</b></div>`).join('')}
                </div>
            </div>
        </div>`
};
