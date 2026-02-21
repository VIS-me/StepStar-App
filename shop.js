const Shop = {
    render: (user, state, lang) => `
        <div class="page-content">
            <div class="shop-block" style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <div style="opacity:0.6">${t('balance', lang)}</div>
                    <div style="font-size:22px; font-weight:bold;">${state.coins} 💰</div>
                </div>
                <button class="blue-btn" onclick="openGetCoinsModal()">${t('get', lang)}</button>
            </div>
            <div class="shop-block">
                <h4 style="margin-top:0">Рамки аватара</h4>
                <div class="shop-grid">
                    <div class="item-card active"><div style="width:40px; height:40px; border:2px solid #248bcf; border-radius:50%; margin:auto;"></div><span class="check-mark">✓</span></div>
                    <div class="item-card"><div style="width:40px; height:40px; border:2px solid #ff00ff; border-radius:50%; margin:auto;"></div><div style="font-size:10px; margin-top:5px;">50 💰</div></div>
                </div>
            </div>
            <div class="shop-block">
                <h4 style="margin-top:0">Фоны</h4>
                <div class="shop-grid"><div class="item-card active">Dark Night <span class="check-mark">✓</span></div><div class="item-card">Ocean 🌊</div></div>
            </div>
            <div class="shop-block">
                <h4 style="margin-top:0">Аксессуары</h4>
                <div class="shop-grid"><div class="item-card">👑 Корона</div><div class="item-card">🎓 Шапка</div></div>
            </div>
        </div>`
};

function openGetCoinsModal() {
    Telegram.WebApp.showPopup({
        title: 'Пополнение',
        message: 'Выберите действие',
        buttons: [
            {id: 'daily', type: 'default', text: 'Награда (+10 💰)'},
            {id: 'stars', type: 'default', text: 'Купить 200 (100 ⭐)'},
            {type: 'cancel'}
        ]
    }, (id) => { if(id === 'daily') alert('Монеты начислены!'); });
}
