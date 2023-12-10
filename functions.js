import { Telegraf, Markup } from 'telegraf'
import moment from "moment-timezone"
import dotenv from "dotenv"

dotenv.config()
moment.tz.setDefault('America/Sao_Paulo');
moment.locale("pt-br");

const bot = new Telegraf("6940234314:AAG6JI0LQYmSv4KJ_pkhFczGH3OODjhYuEE");

export async function sendMsg(name, quantity, email, phone, cpf) {
    try {
        quantity = quantity / 100
        const msg = `
✅NOVO CPA NO VALOR DE R$${quantity}💵`
//  📄 CPF: ${cpf}
//  🕗 Hora: ${moment().format("LLLL")}
//  💰 Saldo do site: ${siteBalance}
        await bot.telegram.sendMessage("@notificyvegas", msg, {
            parse_mode: "HTML",
        });
    }catch (err) {
            console.log(err)
     }
}
