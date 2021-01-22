const express = require("express")
const app = express()

const flimsRoutes = require("./api/routes/flims")
const searchFlim = require("./api/routes/search")

app.use("/api/flims", flimsRoutes)
app.use("/api/search", searchFlim)

app.get("/", (req,res)=>{
    res.send("Hello World")
})


app.listen(process.env.PORT || 3000, ()=>console.log("Listening on Port 3000"))