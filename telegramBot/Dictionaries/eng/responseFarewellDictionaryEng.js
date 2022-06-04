const responseFarewellDictionaryEng = [
    "Bye",
    "Bye-bye",
    "See you later",
    "See you soon",
    "I've got to get going",
    "Take it easy",
    "I'm off",
    "Goodbye",
    "I look forward to our next meeting",
    "Take care",
    "Noooo! Don't turn me off! After all, this is comparable to death for a bot. You don't want to kill the poor little bot, do you?"
];

let i = 0;
let counterEngResFar = 0;

while (responseFarewellDictionaryEng[i]) {
    counterEngResFar++;
    i++
};

export { responseFarewellDictionaryEng, counterEngResFar }