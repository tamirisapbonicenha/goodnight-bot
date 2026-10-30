# goodnight-bot

Script em Node.js que envia uma mensagem de boa noite pelo Telegram. O GitHub Actions roda a cada 5 minutos.

## Secrets

No repositório, em **Settings → Secrets and variables → Actions**, crie:

| Nome | Valor |
| --- | --- |
| `TELEGRAM_BOT_TOKEN` | Token do bot, gerado pelo [@BotFather](https://t.me/BotFather) |
| `TELEGRAM_CHAT_ID` | ID do chat que vai receber a mensagem |

Para descobrir o chat id, mande uma mensagem para o bot e consulte `https://api.telegram.org/bot<TOKEN>/getUpdates`.

## Horário

O workflow usa `*/5 * * * *`, então dispara a cada 5 minutos. O GitHub pode atrasar o disparo em alguns minutos.

Também dá para disparar na hora em **Actions → Boa noite → Run workflow**.
