const TelegramBot = require('node-telegram-bot-api');

// Replace with your actual bot token
const token = '7626865613:AAFiz7RgoWiCgv8cWVgNxpRMyRl7763thWg';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello from GitHub hosted bot!');
});
