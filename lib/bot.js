require("dotenv").config();
if (!process.env.TOKEN) {
  throw new Error("No hay configuración de TOKEN");
}
const { response } = require("express");
const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const mensaje = msg.text;
  if (mensaje == "node" || mensaje == "java") {
    const respuesta = ExplorerController.getExplorersByMission(mensaje);
    let resp = JSON.stringify(respuesta);
    const responsebot = `La lista de explorers en la mision ${mensaje} es: ${resp}`;
    bot.sendMessage(chatId, responsebot);
  } else {
    const numberToApplyFb = parseInt(mensaje);
    if (!isNaN(numberToApplyFb)) {
      const fizzbuzzTrick = ExplorerController.applyFizzBuzz(numberToApplyFb);
      const responseBot = `Tu número es ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
      bot.sendMessage(chatId, responseBot);
    } else {
      bot.sendMessage(chatId, "Ingrese un número válido.");
    }
  }
});
bot.on("polling_error", console.log);
