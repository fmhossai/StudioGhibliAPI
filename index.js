const express = require("express")
const app = express()

const flimsRoutes = require("./api/routes/flims")

app.use("/api/flims", flimsRoutes)

app.get("/", (req,res)=>{
    res.send("Hello World")
})


app.listen(process.env.PORT || 3000, ()=>console.log("Listening on Port 3000"))