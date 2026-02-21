const Achievements = {
    render: (user, state, lang) => `
        <div class="page-content" style="padding:20px;">
            <div style="display:flex; align-items:center; margin-bottom:20px;">
                <button onclick="navigate('profile')" style="background:none; border:none; color:white; font-size:24px; margin-right:15px; cursor:pointer;">←</button>
                <h3 style="margin:0;">${t('achievements', lang)}</h3>
            </div>
            
            <div class="shop-grid" style="grid-template-columns: 1fr 1fr;">
                <div class="shop-block" style="margin:5px; text-align:center; border:1px solid var(--main-color);">
                    <div style="font-size:32px;">👟</div>
                    <div style="font-size:14px; font-weight:bold; margin-top:5px;">1K Steps</div>
                    <div style="color:var(--main-color); font-size:10px; font-weight:bold; margin-top:5px;">COMPLETED</div>
                </div>
                <div class="shop-block" style="margin:5px; text-align:center; opacity:0.4;">
                    <div style="font-size:32px;">🏆</div>
                    <div style="font-size:14px; font-weight:bold; margin-top:5px;">Winner</div>
                    <div style="font-size:10px; margin-top:5px;">LOCKED</div>
                </div>
            </div>
        </div>`
};
