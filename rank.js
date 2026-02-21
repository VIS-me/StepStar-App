const Rank = {
    render: (user, state, lang) => `
        <div class="page-content">
            <div class="hero-winner">
                <img src="https://via.placeholder.com/150" class="hero-img">
                <div style="color:var(--main-color); font-weight:bold; margin-top:10px;">TOP OF THE WEEK</div>
                <div style="font-size:20px; font-weight:bold;">Dmitry</div>
            </div>
            
            <div style="padding:20px;">
                <div class="history-item" style="background:rgba(36,139,207,0.1); padding:15px; border-radius:15px; margin-bottom:15px; border-bottom:none;">
                    <span>#124 You</span>
                    <b>6,420 steps</b>
                </div>
                <h4 style="opacity:0.5; margin-bottom:10px;">${t('topFriends', lang)}</h4>
                <div class="shop-block" style="margin:0; padding:10px;">
                    <div class="history-item"><span>1. Alex</span><b>15,200</b></div>
                    <div class="history-item"><span>2. Maria</span><b>14,100</b></div>
                    <div class="history-item" style="border:none;"><span>3. Ivan</span><b>12,000</b></div>
                </div>
            </div>
        </div>`
};
