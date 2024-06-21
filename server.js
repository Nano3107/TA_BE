const express = require('express')
const app = express()
const users = require("./routers/route.user")
const paket = require("./routers/route.paket")
const transaksi = require("./routers/route.transaksi")



app.use("/api/users", users)
app.use("/api/paket", paket)
app.use("/api/transaksi", transaksi)


app.listen(8000,() => {
    console.log(`Server run on port 8000`);
})