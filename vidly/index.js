const debug = require("debug")("app:startup")
const morgan = require("morgan")
const logger = require("./middleware/logger")
const express = require("express")
const authenticator = require("./middleware/authenticator")
const genres = require("./routes/genres")
const home = require("./routes/home")
const { default: helmet } = require("helmet")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(helmet())
app.use("./api/genres", genres)
app.use("./", home)
app.use(logger)
app.use(authenticator)

if (app.get("env") === "development") {
	app.use(morgan("tiny"))
	debug("Morgan enabled... ")
}

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
