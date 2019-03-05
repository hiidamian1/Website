const express = require("express");
//const request = require("request"); // "Request" library
//const querystring = require("querystring");
const fetch = require('node-fetch');

//const cors = require("cors");

const router = express.Router();
//router.use(cors());

const spotifyAPIBaseUri = "https://api.spotify.com";
const spotifyAccountsBaseUri = "https://accounts.spotify.com";

const clientId = "YOUR CLIENT ID";
const clientSecret = "YOUR CLIENT SECRET";

const refreshToken = "YOUR REFRESH TOKEN";
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
  return fetch(`${spotifyAPIBaseUri}/v1/me/player/recently-played?limit=5`, {
    headers: {
      "Authorization": `Bearer ${accessToken}`
    }
  })
}

router.get("/getRecent", (req, res) => {
  /*try {
    console.log("start");
    const refresh = await refreshAccessToken();
    console.log("refresh");
    const refreshJSON = await refresh.json();
    console.log("refresh json");
    accessToken = refreshJSON.access_token;
    console.log(accessToken);

    const recentlyPlayed = await getRecentlyPlayed();
    const recentlyPlayedJSON = await recentlyPlayed.json();
    res.send(recentlyPlayedJSON);
  } catch (err) {
    console.log(err);
  }*/

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





/*
const redirect_uri = "http://localhost:8080/connectSpotify/redirect";

const clientId = "YOUR CLIENT ID";
const clientSecret = "YOUR CLIENT SECRET";

const scope = "user-read-recently-played";

const generateRandomString = (length) => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const stateKey = "spotify_auth_state";

router.get("/", (req, res) => {
  console.log("need to authorize");
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  res.redirect("https://accounts.spotify.com/authorize?" +
  querystring.stringify({
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    redirect_uri: redirect_uri,
    state: state
  }));
});

// Get refresh and access token
router.get("/redirect", (req, res) => {
  //res.sendStatus(200);
  console.log("redirect");
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {

        const access_token = body.access_token,
            refresh_token = body.refresh_token;

        console.log(`refresh token: ${refresh_token}`);

        const options = {
          url: 'https://api.spotify.com/v1/me/player/recently-played?limit=5',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, (error, response, body) => {
          //console.log(body.items);
          res.send(body.items);
        
          
        });

        // we can also pass the token to the browser to make requests from there
        /*res.redirect('/#' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});
*/
module.exports = router;