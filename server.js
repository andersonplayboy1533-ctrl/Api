const protocolo = require ('express')
const api = protocolo ()
const ejs = require ('ejs')
const nodemon = require ('nodemon')
const mongodb = require ('mongodb')
const dotenv = require ('dotenv')

api.listen(3000,function(){
    console.log("O nosso servidor está na porta 3000")
})

api.get('/ler', (request, res)=>{
res.send("Olá mundo")
})
