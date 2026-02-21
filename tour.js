const Tour = {
    render: (user, state, lang) => {
        const prizePool = "10,000";
        const entryFee = 50;
        return `
        <div class="page-content tour-page">
            <div class="last-winner-section">
                <div class="winner-avatar-container">
                    <span class="crown-icon">👑</span>
                    <img src="https://via.placeholder.com/150" class="winner-img-big">
                </div>
                <div class="winner-label">LAST WINNER</div>
                <div class="winner-name">Alexander</div>
            </div>

            <div class="join-tournament-card">
                <div class="join-controls">
                    <button class="participate-btn" onclick="alert('Joining...')">Join</button>
                    <div class="prize-pool-badge">
                        <span class="prize-amount">${prizePool} 💰</span>
                    </div>
                </div>
                <div style="text-align:center; font-size:12px; opacity:0.4; margin-top:10px;">Entry: ${entryFee} coins</div>
            </div>

            <div class="user-tour-rank">
                <span>#452 You</span>
                <span style="font-weight:bold;">6,420 steps</span>
            </div>

            <div class="tournament-list-container">
                <div class="table-row">
                    <span style="width:30px; color:var(--main-color); font-weight:bold;">1</span>
                    <span style="flex:1">Dmitry</span>
                    <span style="font-weight:bold;">12,500</span>
                </div>
                <div class="table-row">
                    <span style="width:30px; color:var(--main-color); font-weight:bold;">2</span>
                    <span style="flex:1">Sarah</span>
                    <span style="font-weight:bold;">11,800</span>
                </div>
            </div>
        </div>`;
    }
};
