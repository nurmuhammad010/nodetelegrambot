const TelegramBot = require('node-telegram-bot-api');

// Bot tokeni
require('dotenv').config()
const TOKEN =  process.env.TOKEN
const bot = new TelegramBot(TOKEN, { polling: true });

// 30 ta savol ro'yxati
const questions = [
  { question: "1️⃣ HTML nimani anglatadi?", options: ["🅰️ Hyper Text Markup Language", "🅱️ Home Tool Markup Language", "🆎 Hyperlinks and Text Markup Language"], answer: "🅰️ Hyper Text Markup Language" },
  { question: "2️⃣ Sarlavha qanday kiritiladi?", options: ["🅰️ <head>", "🅱️ <title>", "🆎 <header>"], answer: "🅱️ <title>" },
  { question: "3️⃣ <br> nima qiladi?", options: ["🅰️ Bo'sh joy qo'shadi", "🅱️ Yangi qatorga tushiradi", "🆎 Matnni katta qiladi"], answer: "🅱️ Yangi qatorga tushiradi" },
  { question: "4️⃣ Sahifaga sarlavha?", options: ["🅰️ <title>", "🅱️ <head>", "🆎 <h1>"], answer: "🆎 <h1>" },
  { question: "5️⃣ Paragraf tegi?", options: ["🅰️ <paragraph>", "🅱️ <p>", "🆎 <pg>"], answer: "🅱️ <p>" },
  { question: "6️⃣ <a> tegi nimani bildiradi?", options: ["🅰️ Rasm", "🅱️ Link", "🆎 Matn"], answer: "🅱️ Link" },
  { question: "7️⃣ Rasmni kiritish?", options: ["🅰️ <picture>", "🅱️ <img>", "🆎 <image>"], answer: "🅱️ <img>" },
  { question: "8️⃣ Matnni quyuqlashtirish?", options: ["🅰️ <b>", "🅱️ <bold>", "🆎 <strong>"], answer: "🅰️ <b>" },
  { question: "9️⃣ Bullet-point ro‘yxat?", options: ["🅰️ <list>", "🅱️ <ul>", "🆎 <ol>"], answer: "🅱️ <ul>" },
  { question: "🔟 Tartiblangan ro‘yxat?", options: ["🅰️ <ul>", "🅱️ <list>", "🆎 <ol>"], answer: "🆎 <ol>" },
  { question: "1️⃣1️⃣ Kursiv matn?", options: ["🅰️ <i>", "🅱️ <italic>", "🆎 <em>"], answer: "🅰️ <i>" },
  { question: "1️⃣2️⃣ Asosiy qism?", options: ["🅰️ <main>", "🅱️ <body>", "🆎 <section>"], answer: "🅱️ <body>" },
  { question: "1️⃣3️⃣ Link atributi?", options: ["🅰️ href", "🅱️ src", "🆎 link"], answer: "🅰️ href" },
  { question: "1️⃣4️⃣ target='_blank'?", options: ["🅰️ Yangi oynada", "🅱️ Asosiy oynada", "🆎 Yuklash"], answer: "🅰️ Yangi oynada" },
  { question: "1️⃣5️⃣ Fon rangini o'rnatish?", options: ["🅰️ bgcolor", "🅱️ background-color", "🆎 color"], answer: "🅰️ bgcolor" },
  { question: "1️⃣6️⃣ Rasm URL atributi?", options: ["🅰️ src", "🅱️ link", "🆎 url"], answer: "🅰️ src" },
  { question: "1️⃣7️⃣ Multimedia uchun teg?", options: ["🅰️ <audio>", "🅱️ <media>", "🆎 <file>"], answer: "🅰️ <audio>" },
  { question: "1️⃣8️⃣ Asosiy teg?", options: ["🅰️ <document>", "🅱️ <html>", "🆎 <main>"], answer: "🅱️ <html>" },
  { question: "1️⃣9️⃣ Eng katta sarlavha?", options: ["🅰️ <head>", "🅱️ <h1>", "🆎 <heading>"], answer: "🅱️ <h1>" },
  { question: "2️⃣0️⃣ Joy ajratish?", options: ["🅰️ <space>", "🅱️ <br>", "🆎 <sp>"], answer: "🅱️ <br>" },
  { question: "2️⃣1️⃣ Oxirgi qism?", options: ["🅰️ <footer>", "🅱️ <end>", "🆎 <bottom>"], answer: "🅰️ <footer>" },
  { question: "2️⃣2️⃣ <form> nima uchun?", options: ["🅰️ Rasm qo‘shish", "🅱️ Ma'lumot to'plash", "🆎 Matnni tahrirlash"], answer: "🅱️ Ma'lumot to'plash" },
  { question: "2️⃣3️⃣ Shrift hajmi?", options: ["🅰️ font-size", "🅱️ text-size", "🆎 size"], answer: "🆎 size" },
  { question: "2️⃣4️⃣ Video teg?", options: ["🅰️ <media>", "🅱️ <movie>", "🆎 <video>"], answer: "🆎 <video>" },
  { question: "2️⃣5️⃣ Blok element xususiyati?", options: ["🅰️ To‘liq kenglik", "🅱️ Yangi qator", "🆎 Ikkalasi ham"], answer: "🆎 Ikkalasi ham" },
  { question: "2️⃣6️⃣ Matn ostiga chizish?", options: ["🅰️ <underline>", "🅱️ <u>", "🆎 <ul>"], answer: "🅱️ <u>" },
  { question: "2️⃣7️⃣ Yuqori va pastki matn?", options: ["🅰️ <sup> va <sub>", "🅱️ <up> va <down>", "🆎 <high> va <low>"], answer: "🅰️ <sup> va <sub>" },
  { question: "2️⃣8️⃣ Audio qo'shish teg?", options: ["🅰️ <media>", "🅱️ <audio>", "🆎 <sound>"], answer: "🅱️ <audio>" },
  { question: "2️⃣9️⃣ Ma'lumot uchun teg?", options: ["🅰️ <article>", "🅱️ <content>", "🆎 <data>"], answer: "🅰️ <article>" },
  { question: "3️⃣0️⃣ <section> nima uchun?", options: ["🅰️ Katta bloklar", "🅱️ Rasm qo'shish", "🆎 Yangi sahifa"], answer: "🅰️ Katta bloklar" }
];


// Foydalanuvchi ma'lumotlarini saqlash uchun holat
const userAnswers = {};

// Buyruqlar ro'yxati
const commands = [
  "🚀 /start - Botni ishga tushirish",
  "📝 /test - HTML testini boshlash",
  "👤 /profile - Profilingizni ko‘rish",
  "📊 /stats - Statistikalaringizni ko‘rish",
  "ℹ️ /info - Bot haqida ma’lumot",
  "❓ /help - Barcha komandalar bo‘yicha yordam"
];

// Foydalanuvchini ro'yxatdan o'tkazish va kutib olish
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "👋 *Assalomu alaykum!* HTML bo'yicha bilimlaringizni sinash uchun tayyorlaning!", { parse_mode: "Markdown" });
  bot.sendMessage(chatId, "*Barcha buyruqlar:* \n" + commands.join("\n"), { parse_mode: "Markdown" });

  bot.sendMessage(chatId, "🔹 *Ismingizni yozing:*", { parse_mode: "Markdown" });
  bot.once('message', (msg) => {
    const username = msg.text;

    bot.sendMessage(chatId, "📞 *Telefon raqamingizni yuboring:*", {
      reply_markup: {
        keyboard: [[{ text: "Telefon raqamini jo'natish 📲", request_contact: true }]],
        one_time_keyboard: true
      },
      parse_mode: "Markdown"
    });

    bot.once('contact', (msg) => {
      const phoneNumber = msg.contact.phone_number;
      userAnswers[chatId] = { username, phoneNumber, score: 0, wrongAnswers: [], questionIndex: 0 };

      bot.sendMessage(chatId, "✅ *Siz ro'yxatdan muvaffaqiyatli o'tdingiz!*", { parse_mode: "Markdown" });
    });
  });
});

// Testni boshlash komandasini qayta ishlash
bot.onText(/\/test/, (msg) => {
  const chatId = msg.chat.id;

  if (userAnswers[chatId]) {
    sendQuestion(chatId);
  } else {
    bot.sendMessage(chatId, "⚠️ *Iltimos, avval /start orqali ro'yxatdan o'ting.*", { parse_mode: "Markdown" });
  }
});

// Savolni yuborish funksiyasi
function sendQuestion(chatId) {
  const user = userAnswers[chatId];
  const questionData = questions[user.questionIndex];

  if (!questionData) {
    // Test tugagach natijalarni ko'rsatish
    showResults(chatId);
    return;
  }

  bot.sendMessage(chatId, questionData.question, {
    reply_markup: {
      keyboard: questionData.options.map(option => [option]),
      one_time_keyboard: true
    },
    parse_mode: "Markdown"
  }).then((sentMessage) => {
    startCountdown(chatId, sentMessage.message_id, 30);
  });
}

// Taymer funksiyasi
function startCountdown(chatId, messageId, seconds) {
  let countdown = seconds;

  const intervalId = setInterval(() => {
    if (countdown > 0) {
      countdown--;
    } else {
      clearInterval(intervalId);
      bot.deleteMessage(chatId, messageId).catch(() => {});
      userAnswers[chatId].questionIndex++;
      sendQuestion(chatId);
    }
  }, 1000);
}

// Foydalanuvchi javobini qayta ishlash
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (userAnswers[chatId] && msg.text) {
    const user = userAnswers[chatId];
    const questionData = questions[user.questionIndex];

    if (questionData.options.includes(msg.text)) {
      if (msg.text === questionData.answer) {
        user.score++;
      } else {
        user.wrongAnswers.push(questionData.question);
      }
    }

    user.questionIndex++;

    if (user.questionIndex % 10 === 0) {
      bot.sendMessage(chatId, `🔹 Siz hozirgacha *${user.score} ta* to'g'ri javob berdingiz.`, { parse_mode: "Markdown" });
    }

    sendQuestion(chatId);
  }
});

// Natijalarni ko'rsatish
function showResults(chatId) {
  const user = userAnswers[chatId];
  const correctCount = user.score;
  const totalCount = questions.length;

  // Noto'g'ri javoblarni ustun shaklida formatlaymiz
  let wrongAnswers = user.wrongAnswers.length 
    ? "❌ *Noto'g'ri javoblar:*\n\n" + user.wrongAnswers.map((question, index) => `${index + 1}. ${question}`).join("\n")
    : "🎉 *Siz barcha savollarga to'g'ri javob berdingiz!*";

  const resultMessage = `✅ *Test tugadi!* Natijalaringiz:\n\n🟢 *To'g'ri javoblar:* ${correctCount}\n🔵 *Umumiy savollar:* ${totalCount}\n\n${wrongAnswers}`;

  bot.sendMessage(chatId, resultMessage, { parse_mode: "Markdown" });
  delete userAnswers[chatId];
}

// Profilni ko'rsatish
bot.onText(/\/profile/, (msg) => {
  const chatId = msg.chat.id;

  if (userAnswers[chatId]) {
    const user = userAnswers[chatId];
    bot.sendMessage(chatId, `👤 *Profilingiz:* \n\nIsm: ${user.username}\nTelefon raqam: ${user.phoneNumber}`, { parse_mode: "Markdown" });
  } else {
    bot.sendMessage(chatId, "⚠️ *Iltimos, avval /start orqali ro'yxatdan o'ting.*", { parse_mode: "Markdown" });
  }
});

// Statistika ko'rsatish
bot.onText(/\/stats/, (msg) => {
  const chatId = msg.chat.id;

  if (userAnswers[chatId]) {
    const user = userAnswers[chatId];
    bot.sendMessage(chatId, `📊 *Statistikalar:* \n\nTo'g'ri javoblar: ${user.score}\nSavollar: ${questions.length}`, { parse_mode: "Markdown" });
  } else {
    bot.sendMessage(chatId, "⚠️ *Iltimos, avval /start orqali ro'yxatdan o'ting.*", { parse_mode: "Markdown" });
  }
});

// Bot haqida ma'lumot
bot.onText(/\/info/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "ℹ️ *Bot haqida:* Bu bot HTML bo'yicha bilimlaringizni sinash va o'zingizni sinovdan o'tkazishga yordam beradi.", { parse_mode: "Markdown" });
});

// Yordam
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "*Barcha buyruqlar:* \n" + commands.join("\n"), { parse_mode: "Markdown" });
});
