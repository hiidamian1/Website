import axios from "axios";

const url = "/connectSpotify";

class SpotifyService {
  static authorize() {
    //return axios.get(url);
    window.location.href = url;
  }
  
  //Get recently played
  static getRecent() {

    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}/getRecent`);

        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default SpotifyService;