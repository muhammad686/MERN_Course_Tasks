import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
// import { name } from "ej";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}&offset=0`
    );
    const result = response.data;
    const matchesList = result.data;
    res.render("Home.pug", { matches: matchesList });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("Home.pug", {
      error: error.message,
    });
  }
});

app.get("/Series", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.cricapi.com/v1/series?apikey=${apiKey}&offset=0&search=`
    );
    const result = response.data;
    const series_infoList = result.data;
    res.render("Series.pug", { data1: series_infoList });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("Series.pug", {
      error: error.message,
    });
  }
});

app.get("/Player", async (req, res) => {
  res.render("Player.pug");
});

app.post("/submitPlayerName", async (req, res) => {
  try {
    const playerName = req.body["playerName"];

    if (!playerName || playerName.length === 0) {
      throw new Error("Player name is required.");
    }
    const response = await axios.get(
      `https://api.cricapi.com/v1/players?apikey=${apiKey}&offset=0&search=${playerName}`
    );
    const result = response.data;
    const players = result.data;
    // console.log(players);
    if (players.length === 0) {
      throw new Error("No player found for the given name.");
    }

    res.render("Player.pug", {
      data: players,
      playerName: playerName,
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("Player.pug", {
      error: error.message,
    });
  }
});

app.get("/Scored", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.cricapi.com/v1/cricScore?apikey=${apiKey}`
    );
    const scores = response.data;
    const scoreCard = scores.data;
    // console.log(scoreCard);
    res.render("Scored.pug", {
      scoreData: scoreCard,
    });
  } catch (err) {
    console.error("Failed to make request:", err.message);
    res.render("Scored.pug", {
      error: err.message,
    });
  }
});

app.get("/Teams", async (req, res) => {
  try {
    res.render("Teams.pug");
  } catch (err) {
    console.error("Failed to make request:", err.message);
    res.render("Teams.pug", {
      error: err.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
