import axios from "axios";

const url = "/connectSpotify/";

class SpotifyService {
  static authorize() {
    return axios.get(url);
  }
  
  //Get recently played
  static getRecent() {
    const limit = 5;
    const token = "BQAfdFDoSRFNa8D8aekcblnH_H81aOvizlhnHmP78w5GzgpeEsTWuO6fSSKqL9RyaO2SWBU9Oi4IvCJGKol1Ybixa7WWj8uSuo6zRSC8AsrEije8NMjvGkjl6UeRF6xyChwkbOBD73FvdjvJsvA";

    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default SpotifyService;