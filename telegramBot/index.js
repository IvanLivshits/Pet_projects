"use strict"

import { counterChinaResWel, responseWelcomeDictionaryChina } from './Dictionaries/china/responceWelcomeDictionaryChina.js';
import { counterEngResWel, responseWelcomeDictionaryEng } from './Dictionaries/eng/responseWelcomeDictionaryEng.js';
import { counterRusResWel, responseWelcomeDictionaryRus } from './Dictionaries/rus/responseWelcomeDictionaryRus.js';
import { counterRusResFar, responseFarewellDictionaryRus } from './Dictionaries/rus/responseFarewellDictionaryRus.js';
import { counterEngResFar, responseFarewellDictionaryEng } from './Dictionaries/eng/responseFarewellDictionaryEng.js';
import { counterChinaResFar, responseFarewellDictionaryChina } from './Dictionaries/china/responseFarewellDictionaryChina.js';
import { counterChina, interestingFactChina } from './Dictionaries/china/interestingFactChina.js';
import { counterEng, interestingFactEng } from './Dictionaries/eng/interestingFactEng.js';
import { counterRus, interestingFactRus } from './Dictionaries/rus/interestingFactRus.js';
import { welcomeDictionaryChina } from './Dictionaries/china/welcomeDictionaryChina.js';
import { welcomeDictionaryEng } from './Dictionaries/eng/welcomeDictionaryEng.js';
import { welcomeDictionaryRus } from './Dictionaries/rus/welcomeDictionaryRus.js';
import { farewellDictionaryChina } from './Dictionaries/china/farewellDictionaryChina.js';
import { farewellDictionaryEng } from './Dictionaries/eng/farewellDictionaryEng.js';
import { farewellDictionaryRus } from './Dictionaries/rus/farewellDictionaryRus.js';
import randomNumber from './Functions/randomNumber.js';
import { Telegraf } from 'telegraf';
import { Keyboard } from 'telegram-keyboard';
import { articles } from './article.js';

//Connect new bot with @FatherBot token
const token = "5137491627:AAFbWn8GL7V5VfhiQo0s0dTQgRPrqmeMV9Y";
const bot = new Telegraf(token);

//Main keyboard
const keyboardStart = Keyboard.make([
  ['I know English'], //First row
  ['我说中文'], //second row
  ['Я знаю русский'] //third row
]);

//Number Keyboard
const keyboardNumber = Keyboard.make([
  ['1', '2'], 
  ['🔙']
]);

//Keyboard English
const keyboardEng = Keyboard.make([
  ['Fact', 'Articles'], //First row
  ['🔄'] //Second row
]);

//Execute command /start
bot.command('start', async (ctx) => {
  await ctx.reply(
    `Hello, ${ctx.from.first_name}. Now I use English, but you can choose language =)`,
    keyboardStart.reply()
  );
});

//Execute command /help
bot.command('help', (ctx) => {

  ctx.reply(`Hello, ${ctx.from.first_name}! You can send me a sticker and in return you will see an amazing green wolf. Also, you can talk to me a little, say hello or goodbye, and I will try to come up with an original answer (support 3 languages!). And yet, you can select /start in the drop-down menu of commands, then select a language convenient for you and I will share my knowledge with you!`)});

//Response for sticker
bot.on('sticker', (ctx) => {

  ctx.replyWithPhoto('https://github.com/IvanLivshits/telegramBot/blob/main/media/green_wolf.jpeg?raw=true');

});

//Response for message on keyboard
bot.hears(async (data, ctx) => {

  switch(data) {

    //For English
    case 'I know English':
      await ctx.reply('Okay, I will use English for you =)', keyboardEng.reply());
      break;

    case 'Fact':
      await ctx.reply(interestingFactEng[randomNumber(counterEng)]);
      break;
    
    case 'Articles':
      await ctx.reply('You can find all materials on my telegram chanel in English! It is a big luck. Follow the link soon! https://t.me/IvanSpaceDreamer', keyboardEng.reply());
      break;

    //For Chinese
    case '我说中文':
      const keyboardChina = Keyboard.make([
        ['事实', '文章'],
        ['🔄']
      ]);
      await ctx.reply('好的，现在我会和你说中文。=)', keyboardChina.reply());
      break;

    case '事实':
      await ctx.reply(interestingFactChina[randomNumber(counterChina)]);
      break;

    case '文章':
      await ctx.reply('好的，请选择您要阅读的文章。', keyboardNumber.reply());
      break;


    //For Russian
    case 'Я знаю русский':
      const keyboardRus = Keyboard.make([
        ['Факт', 'Статьи'],
        ['🔄']
      ]);
      await ctx.reply('Хорошо, теперь я буду говорить с тобой на русском =)', keyboardRus.reply());
      break;
    
    case 'Факт':
      await ctx.reply(interestingFactRus[randomNumber(counterRus)]);
      break;
    
    case 'Статьи':
      await ctx.reply('Хорошо, пожалуйста выбери статью, которую хочешь прочитать', keyboardNumber.reply());
      break;
    
    
    
    //For changes
    case '🔄':
      await ctx.reply('Okay, you can choose another language =)', keyboardStart.reply());
      break; 
    
    case '🔙':
      await ctx.reply('Let me once again make sure which language you need, please choose a more convenient one (◕‿◕)', keyboardStart.reply());
      break;

    //For articles
    case '1':
      await ctx.reply(articles[0], keyboardNumber.reply());
      break;

    case '2':
      await ctx.reply(articles[1], keyboardNumber.reply());
      break;
  }
});

//Response for all messages
bot.hears((data, ctx) => {

  //Russian language
  if (welcomeDictionaryRus.includes(data.toLowerCase())) {
    ctx.reply(responseWelcomeDictionaryRus[randomNumber(counterRusResWel)]);
  } 
  else if (farewellDictionaryRus.includes(data.toLowerCase())) {
    ctx.reply(responseFarewellDictionaryRus[randomNumber(counterRusResFar)]);
  }

  //English language
  else if (welcomeDictionaryEng.includes(data.toLowerCase())) {
    ctx.reply(responseWelcomeDictionaryEng[randomNumber(counterEngResWel)]);
  }
  else if (farewellDictionaryEng.includes(data.toLowerCase())) {
    ctx.reply(responseFarewellDictionaryEng[randomNumber(counterEngResFar)]);
  }

  //Chinese language
  else if (welcomeDictionaryChina.includes(data.toLowerCase())) {
    ctx.reply(responseWelcomeDictionaryChina[randomNumber(counterChinaResWel)]);
  }
  else if (farewellDictionaryChina.includes(data.toLowerCase())) {
    ctx.reply(responseFarewellDictionaryChina[randomNumber(counterChinaResFar)]);
  }
});

bot.launch()