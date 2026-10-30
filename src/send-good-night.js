const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

/**
 * Sends a good night message through the Telegram Bot API.
 * @returns {Promise<void>}
 */
async function sendGoodNightMessage() {
  if (!BOT_TOKEN || !CHAT_ID) {
    throw new Error('Telegram credentials are missing.');
  }

  const response = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: 'Boa noite! 🌙 Que você tenha bons sonhos!',
      }),
    }
  );

  const result = await response.json();

  if (!result.ok) {
    throw new Error(`Telegram API error: ${result.description}`);
  }

  console.log('Good night message sent successfully!');
}

sendGoodNightMessage().catch((error) => {
  console.error(error);
  process.exit(1);
});
