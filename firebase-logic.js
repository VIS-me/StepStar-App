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
            stats: { steps_today: 0, calories_today: 0, steps_total: 0 },
            settings: { is_vip: false, privacy_mode: "public" },
            tournament: { is_registered: false }
        };
        await setDoc(userRef, newUser);
        return newUser;
    }
}

export async function buyVipInDb(userId) {
    const VIP_PRICE = 2500;
    const userRef = doc(db, "users", String(userId));
    
    await updateDoc(userRef, {
        "economy.balance": increment(-VIP_PRICE),
        "settings.is_vip": true,
        "settings.privacy_mode": "private",
        "selected.frame": "gold_vip_frame",
        "inventory.frames": arrayUnion("gold_vip_frame")
    });
    return true;
}
