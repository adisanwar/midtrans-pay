import app from "./app.js"
const PORT = 1000

app.get("/", (req, res)=> {
res.send(`Server Running on port ${PORT}`);
}) 

app.listen(PORT, () => {
    // console.log('Server Running on port ' + PORT)
    console.log(`Server Running on port ${PORT}`);
})
