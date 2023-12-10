import express  from "express"
import http from "http"
import { sendMsg } from "./functions.js"

const app = express()
const server = http.createServer(app)

app.post("/hook", async (req, res) => {
    console.log(req)
    const data = req.body.data
    
    if (data.status === "paid") {
        try {
           await sendMsg(data.customer.name, data.amount, data.customer.email, data.customer.phone, data.customer.document.number)
           res.status(200).send("ok")
        }catch(err) {
            console.log(err)
            res.status(200).send("ok")
        }
    }
})

app.get("/*", (req, res) => {
    res.send("Rota inexistente")
})

server.listen(process.env.PORT, () => {
    console.log(`Api de sinais rodando na porta: ${process.env.PORT}`)
})