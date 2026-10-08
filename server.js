const protocolo = require ('express')
const api = protocolo ()
const ejs = require ('ejs')
const nodemon = require ('nodemon')
const dotenv = require ('dotenv')
dotenv.config()
const url = process.env.DATABASE_URL
const {MongoClient}

api.set('view engine','ejs')

api.listen(3000,function(){
    console.log("O nosso servidor está na porta 3000")
})

api.get('/ler', (request, res)=>{
res.send("Olá mundo")
})
