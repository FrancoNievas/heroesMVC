const express= require("express")
const app = express()
const routerMain = require("./routes/main")
const routerHeroes = require("./routes/heroes")


app.listen(3030,()=>console.log("Servidor Corriendo En El puerto 3030"))

app.use("/heroes",routerHeroes)
app.use("/",routerMain)
