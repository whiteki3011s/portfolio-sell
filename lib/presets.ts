export const AVATAR_PRESETS = [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Zack",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Willow",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Bear",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Bandit",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Misty",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Shadow",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Leo",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Bella",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie"
];

export const getRandomPreset = () => {
    return AVATAR_PRESETS[Math.floor(Math.random() * AVATAR_PRESETS.length)];
};
