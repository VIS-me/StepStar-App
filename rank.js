const Rank = {
    render: (user, state, lang) => {
        const topFriends = [
            { pos: 1, name: "Алексей", steps: 12400 },
            { pos: 2, name: "Мария", steps: 10200 },
            { pos: 3, name: "Иван К.", steps: 9800 }
        ];
        return `
        <div class="page-content rank-page">
            <div class="leader-banner" style="background-image: url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500')">
                <div class="leader-overlay">
                    <div class="leader-info-box">
                        <span class="crown-badge">👑 ${t('champion', lang)}</span>
                        <h2 class="leader-name-big">Дмитрий</h2>
                        <div class="leader-stat"><span class="stat-num">85,400</span><span class="stat-desc">${t('steps', lang)}</span></div>
                    </div>
                </div>
            </div>
            <div class="user-rank-bar">
                <div class="user-rank-info"><span>#124</span> <b>${user.first_name || 'User'}</b></div>
                <div class="user-rank-score"><b>${state.steps.toLocaleString()}</b> ${t('steps', lang)}</div>
            </div>
            <div class="friends-rank-list">
                ${topFriends.map(f => `<div class="rank-item">
                    <span class="rank-pos">${f.pos}</span>
                    <div class="rank-photo-mini"></div>
                    <span class="rank-name">${f.name}</span>
                    <span class="rank-steps">${f.steps.toLocaleString()}</span>
                </div>`).join('')}
                <div class="invite-link-wrapper" onclick="inviteFriends()">
                    <span class="invite-icon">➕</span><span class="invite-text">${t('invite', lang)}</span>
                </div>
            </div>
        </div>`;
    }
};
