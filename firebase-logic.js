import { db, doc, setDoc, getDoc, updateDoc, increment, arrayUnion } from "./firebase-config.js";

export async function syncUser(tgUser) {
    if (!tgUser) return null;
    const userRef = doc(db, "users", String(tgUser.id));
    const userSnap = await getDoc(userRef);

    const freshData = {
        name: tgUser.first_name || "Walker",
        photo_url: tgUser.photo_url || "",
        last_seen: new Date()
    };

    if (userSnap.exists()) {
        await updateDoc(userRef, freshData);
        return userSnap.data();
    } else {
        const newUser = {
    ...freshData,
    economy: { balance: 0, total_earned: 0 },
    inventory: { frames: ["white"] },
    selected: { frame: "white" },
    stats: { 
        steps_today: 0, 
        calories_today: 0, // Добавили
        steps_total: 0 
    },
    settings: { is_vip: false, privacy_mode: "public" },
    tournament: { is_registered: false }
};
        await setDoc(userRef, newUser);
        return newUser;
    }
}

export async function buyVip(userId) {
    const VIP_PRICE = 2500;
    const userRef = doc(db, "users", String(userId));
    const userSnap = await getDoc(userRef);
    
    if (userSnap.data().economy.balance < VIP_PRICE) return alert("Недостаточно монет!");

    await updateDoc(userRef, {
        "economy.balance": increment(-VIP_PRICE),
        "settings.is_vip": true,
        "selected.frame": "gold_vip_frame",
        "inventory.frames": arrayUnion("gold_vip_frame")
    });
}
