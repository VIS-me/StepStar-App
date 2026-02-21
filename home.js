const Home = {
    render: (user, state, lang) => {
        const goal = 10000;
        const offset = 628 - (628 * Math.min(state.steps / goal, 1));
        return `
        <div class="home-page">
            <div class="avatar-container">
                <img src="${user.photo_url || ''}" class="main-avatar-big" style="border: ${getFrameStyle(state.frame)}">
            </div>
            <div class="home-name">${user.first_name}</div>
            <div style="position:relative; width:240px; height:240px; display:flex; align-items:center; justify-content:center; margin: auto;">
                <svg width="240" height="240" style="transform: rotate(-90deg);">
                    <circle stroke="rgba(255,255,255,0.05)" stroke-width="12" fill="transparent" r="100" cx="120" cy="120"/>
                    <circle stroke="var(--main-color)" stroke-width="12" fill="transparent" r="100" cx="120" cy="120" 
                        style="stroke-dasharray: 628; stroke-dashoffset: ${offset}; transition: 0.8s; stroke-linecap: round;"/>
                </svg>
                <div style="position:absolute; text-align:center;">
                    <div style="font-size:44px; font-weight:800;">${state.steps.toLocaleString()}</div>
                    <div style="opacity:0.5; font-size:12px; text-transform:uppercase;">${t('steps', lang)}</div>
                </div>
            </div>
            <button class="blue-btn" style="width:calc(100% - 40px); margin: 40px 20px 0;" onclick="shareResult(${state.steps})">${t('shareBtn', lang)}</button>
        </div>`;
    }
};
