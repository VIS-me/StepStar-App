const Rank = {
    render: (user, state, lang) => `
        <div class="page-content rank-page">
            <div class="last-winner-section">
                <div class="winner-avatar-container">
                    <img src="https://via.placeholder.com/150" class="winner-img-big" style="border-color:var(--main-color)">
                </div>
                <div class="winner-label" style="color:var(--main-color)">TOP OF THE WEEK</div>
                <div class="winner-name">Dmitry</div>
            </div>

            <div class="tournament-list-container">
                <div class="table-row">
                    <span style="width:30px; font-weight:bold; color:var(--main-color)">1</span>
                    <span style="flex:1">Alex</span>
                    <span style="font-weight:bold;">15,200</span>
                </div>
                <div class="table-row">
                    <span style="width:30px; font-weight:bold; color:var(--main-color)">2</span>
                    <span style="flex:1">Maria</span>
                    <span style="font-weight:bold;">14,100</span>
                </div>
            </div>

            <div style="display:flex; justify-content:center; padding:30px;">
                <div onclick="alert('Invite link copied!')" style="color:var(--main-color); font-weight:bold; display:flex; align-items:center; gap:8px;">
                    <span style="background:var(--main-color); color:white; width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center;">+</span>
                    Invite Friends
                </div>
            </div>
        </div>`
};
