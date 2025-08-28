import express from 'express'

const app=express()
const PORT = process.env.PORT ?? 8000;
app.get("/", (req, res) => {
  return res.json({ status: "Okay" });
})

app.listen(PORT,()=>{
    console.log("Server is up and running")
})