const responseFarewellDictionaryChina = [
    "回头见",
    "我得走了",
    "慢慢来",
    "我走了",
    "再见",
    "我期待我们的下一次见面",
    "小心",
    "不！不要把我关掉！毕竟这对一个机器人来说就像死一样。你不想杀死那个可怜的小机器人, 是吗？"
];

let i = 0;
let counterChinaResFar = 0;

while (responseFarewellDictionaryChina[i]) {
    counterChinaResFar++;
    i++
};

export { responseFarewellDictionaryChina, counterChinaResFar }