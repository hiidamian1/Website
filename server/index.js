const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

const connectSpotify = require("./routes/connectSpotify");
app.use("/connectSpotify", connectSpotify);

// If process.env.SPOTIFY_REFRESH_TOKEN is undefined, run authorization script. else, just call api to get songs

//handle production
if (process.env.NODE_ENV == "production") {
	//static folder
	app.use(express.static(__dirname + "/public"));

	//handle single page application
	app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));