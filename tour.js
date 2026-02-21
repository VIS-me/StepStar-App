const Tour = {
    render: (user, state, lang) => {
        // Данные для примера (позже подтянем из базы)
        const lastWinner = { name: "Alexander", photo: "https://via.placeholder.com/150" };
        const prizePool = "10,000";
        const entryFee = 50;

        const topTournament = [
            { pos: 1, name: "Dmitry", steps: 12500 },
            { pos: 2, name: "Sarah", steps: 11800 },
            { pos: 3, name: "Mike", steps: 10200 },
            { pos: 4, name: "Anna", steps: 9500 }
        ];

        return `
        <div class="page-content tour-page">
            <div class="last-winner-section">
                <div class="winner-avatar-container">
                    <span class="crown-icon">👑</span>
                    <img src="${lastWinner.photo}" class="winner-img-big">
                </div>
                <div class="winner-label">WINNER</div>
                <div class="winner-name">${lastWinner.name}</div>
            </div>

            <div class="join-tournament-card">
                <div class="join-controls">
                    <button class="participate-btn" onclick="handleJoinTour(${entryFee})">
                        Join
                    </button>
                    <div class="prize-pool-badge">
                        <span class="prize-icon">💰</span>
                        <span class="prize-amount">${prizePool}</span>
                    </div>
                </div>
                <div class="tour-hint">Вход за ${entryFee} 💰</div>
            </div>

            <div class="user-tour-rank">
                <span class="u-pos">#452</span>
                <span class="u-name">${user.first_name} | (You)</span>
                <span class="u-steps">6,420</span>
            </div>

            <div class="tournament-list-container">
                <div class="table-header">TOP 10</div>
                <div class="top-ten-list">
                    ${topTournament.map(player => `
                        <div class="table-row">
                            <span class="t-pos">${player.pos}</span>
                            <span class="t-name">${player.name}</span>
                            <span class="t-steps">${player.steps.toLocaleString()}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>`;
    }
};

// Функция для обработки нажатия (заглушка)
function handleJoinTour(fee) {
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.showConfirm(`Списать ${fee} 💰 за участие?`, (ok) => {
            if (ok) window.Telegram.WebApp.showAlert("Вы участвуете!");
        });
    } else {
        alert(`Списание ${fee} монет...`);
    }
}
