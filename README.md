# goodnight-bot

Script em Node.js que envia uma mensagem de boa noite pelo Telegram. O GitHub Actions roda todo dia às 23h no horário de Brasília.

## Secrets

No repositório, em **Settings → Secrets and variables → Actions**, crie:

| Nome | Valor |
| --- | --- |
| `TELEGRAM_BOT_TOKEN` | Token do bot, gerado pelo [@BotFather](https://t.me/BotFather) |
| `TELEGRAM_CHAT_ID` | ID do chat que vai receber a mensagem |

Para descobrir o chat id, mande uma mensagem para o bot e consulte `https://api.telegram.org/bot<TOKEN>/getUpdates`.

## Horário

O cron do Actions é em UTC. O workflow usa `0 2 * * *`, que corresponde a 23:00 em `America/Sao_Paulo` (UTC-3). O GitHub pode atrasar o disparo em alguns minutos.

Também dá para disparar na hora em **Actions → Boa noite → Run workflow**.
