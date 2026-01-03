const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/api/profile", (req, res) => {
  console.log("API HIT")
  res.json({
    name: "Adhikari Chandra Vamsi",
    role: "Computer Science Undergraduate",
    email: "chandravamsi.105@gmail.com",
    github: "https://github.com/AdhikariChandraVamsi"
  })
})

const PORT = process.env.PORT || 5050

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`)
})
