const express = require("express");
const fetch = require('node-fetch');


const router = express.Router();

const spotifyAPIBaseUri = "https://api.spotify.com";
const spotifyAccountsBaseUri = "https://accounts.spotify.com";

const clientId = "a6b475f7b8d24041916ff7c928860b0e";
const clientSecret = "a40641c30caf4eb08291ec2ac909153d";

const refreshToken = "AQDueMX1f0otmm93YhZWWKEea3B0Os-asVtrkypkB4WuPEDDjgTpF-5qyGONWo0YgSKUSreSpCnQIpWcLCxVUMHc4b6OjE3VRcfuN_4YfK4NTa50_ZDHSaawUEGAmwb0PO3Dkw";
let accessToken = "";

const refreshAccessToken = () => {
  return fetch(`${spotifyAccountsBaseUri}/api/token`, {
    method: "POST",
    body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
    headers: {
      "Authorization": `Basic ${new Buffer(`${clientId}:${clientSecret}`).toString('base64')}`,
      "Content-type": "application/x-www-form-urlencoded"
    }
  })
}

const getRecentlyPlayed = () => {
  return fetch(`${spotifyAPIBaseUri}/v1/me/player/recently-played?limit=12`, {
    headers: {
      "Authorization": `Bearer ${accessToken}`
    }
  })
}

router.get("/getRecent", (req, res) => {
  refreshAccessToken()
    .then((refreshResponse) => refreshResponse.json())
    .then((refreshResponseJSON) => {
      accessToken = refreshResponseJSON['access_token'];
      getRecentlyPlayed()
        .then((recentlyPlayedResponse) => recentlyPlayedResponse.json())
        .then((recentlyPlayedResponseJSON) => {
          res.send(recentlyPlayedResponseJSON.items)
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send('Failed to get recently played tracks');
        })
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Failed to refresh Spotify token')
    });
});

module.exports = router;