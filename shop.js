const Shop = {
    items: [
        { id: 'blue', name: 'Blue Sky', price: 0, color: '#248bcf' },
        { id: 'pink', name: 'Pink Neon', price: 50, color: '#ff69b4' },
        { id: 'gold', name: 'Royal Gold', price: 500, color: '#FFD700' }
    ],
    render: (user, state, lang) => `
        <div class="page-content">
            <div class="shop-header">
                <button class="back-btn" onclick="navigate('prof', document.getElementById('btn-prof'))">←</button>
                <h2 class="title-shop">${t('shop', lang)}</h2>
                <div class="balance-badge">💰 ${state.coins}</div>
            </div>
            <div class="shop-grid-large">
                ${Shop.items.map(item => `
                    <div class="shop-card ${state.frame === item.id ? 'owned' : ''}" onclick="changeFrame('${item.id}')">
                        <div class="preview-circle" style="border: 4px solid ${item.color}"></div>
                        <span class="item-name">${item.name}</span>
                        <span class="item-price">${item.price === 0 ? 'FREE' : item.price + ' 💰'}</span>
                    </div>
                `).join('')}
            </div>
        </div>`
};
