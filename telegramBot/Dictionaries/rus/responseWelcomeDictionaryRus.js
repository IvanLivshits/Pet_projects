const responseWelcomeDictionaryRus = [
    "Привет",
    "Здравствуйте, с вами говорит пылесос... ой, нет, холодильник... нет... неужели утюг? А вот! Космический бот! Бииииип...",
    "Здравствуйте",
    "Здравствуйте. К сожалению, в данный момент наш бот сломан. С Вами говорит холодильник",
    "Здравствуй!",
    "Здравствуйте! Извините, хозяин сейчас не может ответить на ваше сообщение, но я всё обязательно ему передам!",
    "Ку-ку",
    "Здравствуйте, с Вами говорит космический бот! Записывающая аппаратура спецслужб будет включена после сигнала. Бииииип...",
    "Намасте",
    "Здравствуйте, к сожалению сейчас мы не можем поговорить с Вами, очень - очень большой поток людей. Пожалуйста, оставьте Ваше имя, телефон, номера счетов Master Card, Visa или American Express, и мы ОБЯЗАТЕЛЬНО Вам перезвоним...если Ваша платёжеспособность подтвердится",
    "Алоха",
    "Вы попали в Лос Анджелес, Калифорния. Командование стратегической ракетной базой. Скажите, кто Вас обидел и мы обязательно это исправим!",
    "Здравствуйте! Ваш телефон только что был определён и занесён в спутниковую систему наведения НАТО, у Вас есть 20 секунд чтобы покинуть здание, Вы можете оставить своё пожелание, но не факт, что оно будет исполнено",
    "Бонжорно",
    "Здравствуйте! Вашего связного сейчас нет на месте. Ваша задача: прочитать все посты на канале, поставить реакцию и написать комментарий",
    "Шалом",
    "Где мой кофе? Я категорически отказываюсь говорить пока у меня нет кофе!",
    "Ола",
    "Привет! Сразу хочу предупредить, что у меня есть хозяин и ему очень не понравится, что мы с тобой тут болтаем! Но ты ведь меня не сдашь???",
    "Нихао"
];

let i = 0;
let counterRusResWel = 0;

while (responseWelcomeDictionaryRus[i]) {
    counterRusResWel++;
    i++
};

export { responseWelcomeDictionaryRus, counterRusResWel }