const responseFarewellDictionaryRus = [
    "Пока",
    "До свидания",
    "Прощай",
    "Спасибо тебе за всё, я буду скучать!",
    "Был рад поболтать, надеюсь скоро увидимся снова",
    "Удачи тебе! Не забывай мечтать)",
    "Надеюсь, ты не расскажешь хозяину о нашем общении и ещё вернёшься ко мне в скором времени",
    "С тобой было классно, возвращайся скорее!",
    "Мне кажется, что это были лучшие мгновения моей жизни. Приходи снова",
    "Ну, как говорится, до новых встреч",
    "Неееет! Не выключай меня! Ведь это сравнимо со смертью для бота. Ты ведь не хочешь убить бедного, маленького бота, правда?"
];

let i = 0;
let counterRusResFar = 0;

while (responseFarewellDictionaryRus[i]) {
    counterRusResFar++;
    i++
};

export { responseFarewellDictionaryRus, counterRusResFar }