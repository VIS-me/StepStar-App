const Tour = {
    config: { fee: 50, prize: 10000 },
    render: (user, state, lang) => {
        return `
        <div class="page-content tour-page">
            <div class="last-winner-section">
                <div class="winner-avatar-container">
                    <div class="crown-icon">👑</div>
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" class="winner-img-big">
                </div>
                <div class="winner-label">${t('winner', lang)}</div>
                <div class="winner-name">Alexander</div>
            </div>
            <div class="join-tournament-card">
                <div class="join-controls">
                    <button class="participate-btn" onclick="processTournamentJoin(${Tour.config.fee})">
                        ${t('joinBtn', lang)} ${Tour.config.fee} 💰
                    </button>
                    <div class="prize-pool-badge">💰 <span class="prize-amount">${Tour.config.prize.toLocaleString()}</span></div>
                </div>
            </div>
            <div class="top-ten-list">
                <h4 class="table-title">TOP 3 WEEKLY</h4>
                <div class="table-row"><span class="t-pos">1</span><span class="t-name">Dmitry</span><span class="t-steps">12,500</span></div>
                <div class="table-row"><span class="t-pos">2</span><span class="t-name">Sarah</span><span class="t-steps">11,800</span></div>
                <div class="table-row"><span class="t-pos">3</span><span class="t-name">Mike</span><span class="t-steps">10,200</span></div>
            </div>
        </div>`;
    }
};
