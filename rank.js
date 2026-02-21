const Rank = {
    render: (user, state, lang) => {
        const topFriends = [
            { pos: 1, name: "Алексей", steps: 12400 },
            { pos: 2, name: "Мария", steps: 10200 },
            { pos: 3, name: "Иван К.", steps: 9800 }
        ];

        return `
        <div class="page-content rank-page">
            <div class="last-winner-section">
                <div class="winner-avatar-container">
                    <img src="https://via.placeholder.com/150" class="winner-img-big" style="border-color: var(--main-color)">
                </div>
                <div class="winner-label" style="color: var(--main-color)">WEEKLY CHAMPION</div>
                <div class="winner-name">Дмитрий</div>
                <div style="opacity: 0.6; font-size: 14px;">85,400 steps</div>
            </div>

            <div class="user-tour-rank" style="background: rgba(36, 139, 207, 0.1); border-color: rgba(36,139,207,0.2)">
                <span class="u-pos" style="color: var(--main-color)">#124</span>
                <span class="u-name">${user.first_name} | (You)</span>
                <span class="u-steps">6,420 steps</span>
            </div>

            <div class="tournament-list-container">
                <div class="top-ten-list">
                    ${topFriends.map(f => `
                        <div class="table-row">
                            <span style="width: 30px; font-weight: bold; color: var(--main-color)">${f.pos}</span>
                            <div style="width: 32px; height: 32px; background: #333; border-radius: 50%; margin-right: 12px;"></div>
                            <span style="flex: 1;">${f.name}</span>
                            <span style="font-weight: bold;">${f.steps.toLocaleString()}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="invite-link-wrapper" onclick="inviteFriends()" style="display: flex; justify-content: center; padding: 30px;">
                <div style="display: flex; align-items: center; gap: 10px; color: var(--main-color); font-weight: bold; cursor: pointer;">
                    <span style="background: var(--main-color); color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">+</span>
                    Invite Friends
                </div>
            </div>
        </div>`;
    }
};

function inviteFriends() {
    const text = "Присоединяйся к StepStar и зарабатывай монеты за шаги!";
    const url = "https://t.me/твой_бот";
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
}
