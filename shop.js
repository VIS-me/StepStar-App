const Shop = {
    render: (user, state, lang) => `
        <div class="page-content">
            <div class="shop-block" style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <div style="opacity:0.6">${t('balance', lang)}</div>
                    <div style="font-size:22px; font-weight:bold;">${state.coins} 💰</div>
                </div>
                <button class="blue-btn" onclick="openGetCoinsModal()">Получить</button>
            </div>

            <div class="shop-block">
                <h4 style="margin-top:0">Рамки аватара</h4>
                <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:10px;">
                    <div class="shop-item" onclick="changeFrame('blue')" style="background:rgba(0,0,0,0.2); padding:10px; border-radius:15px; text-align:center; border: 2px solid ${state.frame === 'blue' ? 'var(--main-color)' : 'transparent'}">
                        <div style="width:40px; height:40px; border:${Assets.frames.blue}; border-radius:50%; margin:auto;"></div>
                        <div style="font-size:10px; margin-top:5px;">0 💰</div>
                    </div>
                    <div class="shop-item" onclick="changeFrame('pink')" style="background:rgba(0,0,0,0.2); padding:10px; border-radius:15px; text-align:center; border: 2px solid ${state.frame === 'pink' ? 'var(--main-color)' : 'transparent'}">
                        <div style="width:40px; height:40px; border:${Assets.frames.pink}; border-radius:50%; margin:auto;"></div>
                        <div style="font-size:10px; margin-top:5px;">50 💰</div>
                    </div>
                    <div class="shop-item" onclick="changeFrame('gold')" style="background:rgba(0,0,0,0.2); padding:10px; border-radius:15px; text-align:center; border: 2px solid ${state.frame === 'gold' ? 'var(--main-color)' : 'transparent'}">
                        <div style="width:40px; height:40px; border:${Assets.frames.gold}; border-radius:50%; margin:auto;"></div>
                        <div style="font-size:10px; margin-top:5px;">150 💰</div>
                    </div>
                </div>
            </div>

            <div class="shop-block">
                <h4 style="margin-top:0">Фоны</h4>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                    <div style="background:rgba(255,255,255,0.05); padding:15px; border-radius:12px; text-align:center; border:1px solid var(--main-color);">Dark Night ✓</div>
                    <div style="background:rgba(255,255,255,0.05); padding:15px; border-radius:12px; text-align:center; opacity:0.5;">Ocean 🌊</div>
                </div>
            </div>
        </div>`
};
