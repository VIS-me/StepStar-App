// --- СТРАНИЦА ТУРНИРА ---
    tour: (user, state, lang) => {
        const players = [
            { pos: 1, name: "Dmitry", steps: 25400 }, { pos: 2, name: "Sarah", steps: 21800 },
            { pos: 3, name: "Mike", steps: 19200 }, { pos: 4, name: "Anna", steps: 15500 },
            { pos: 5, name: "Ivan", steps: 12900 }, { pos: 6, name: "Alex", steps: 11000 },
            { pos: 7, name: "Elena", steps: 9800 }, { pos: 8, name: "Pavel", steps: 8500 },
            { pos: 9, name: "Oleg", steps: 7200 }, { pos: 10, name: "Marta", steps: 6100 }
        ];

        return `
        <div class="page-content tour-page">
            <div class="leader-banner" style="background-image: url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000')">
                <div class="leader-overlay">
                    <div class="leader-info">
                        <span class="crown-badge">👑 ${t('winner', lang)}</span>
                        <h2 class="leader-name-big">Champion_2026</h2>
                    </div>
                </div>
            </div>

            <div class="join-tournament-card" style="margin: 0 20px 20px;">
                <div class="join-controls" style="display: flex; gap: 10px; align-items: stretch; width: 100%;">
                    <button class="main-button" style="flex: 2; margin: 0; height: auto; padding: 12px; font-size: 15px;" onclick="processTournamentJoin(50)">
                        ${t('joinBtn', lang)} 50 💰
                    </button>
                    <div class="prize-pool-badge" style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255,215,0,0.1); border: 1px solid rgba(255,215,0,0.2); border-radius: 16px; padding: 5px;">
                        <span style="font-size: 10px; opacity: 0.6; text-transform: uppercase;">Prize</span>
                        <span class="prize-amount" style="font-weight: bold; color: var(--accent-gold); font-size: 16px;">5,000</span>
                    </div>
                </div>
            </div>

            <div class="top-ten-list">
                <div style="padding: 15px 20px; opacity: 0.5; font-size: 12px; font-weight: bold;">TOP 10 PLAYERS</div>
                ${players.map(p => `
                    <div class="table-row">
                        <span class="t-pos">${p.pos}</span>
                        <div class="rank-photo-mini"></div>
                        <span class="t-name">${p.name}</span>
                        <span class="t-steps">${p.steps.toLocaleString()}</span>
                    </div>
                `).join('')}
            </div>
        </div>`;
    },
