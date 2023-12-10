import { Telegraf, Markup } from 'telegraf'
import moment from "moment-timezone"
import dotenv from "dotenv"

dotenv.config()
moment.tz.setDefault('America/Sao_Paulo');
moment.locale("pt-br");

const bot = new Telegraf("6940234314:AAG6JI0LQYmSv4KJ_pkhFczGH3OODjhYuEE");

export async function sendMsg(name, quantity, email, phone, cpf) {
    try {
        // const keyboard = Markup.inlineKeyboard([
        //     Markup.button.url('📱 Você é novo aqui? CLIQUE AQUI!', 'https://t.me/c/2051127316/37'),
        // ]);
        quantity = quantity / 100
        const msg = `
✅ 💵NOVO CPA NO VALOR DE R$${quantity} ✅ 
✅ 💵NOVO CPA NO VALOR DE X 💵 ✅
💵 Valor: ${quantity}
 
🕗 Hora: ${moment().format("LLLL")}
⭐️ Nome: ${name}
🔥 E-mail: ${email}
📱 Numero: ${phone}
📄 CPF: ${cpf}
 `
//  💰 Saldo do site: ${siteBalance}
// 💰 Saldo do usuário: ${balance}
        await bot.telegram.sendMessage("@notificyvegas", msg, {
            parse_mode: "HTML", // Correção na sintaxe aqui
            // reply_markup: keyboard,
        });
    }catch (err) {
            console.log(err)
     }
     
}