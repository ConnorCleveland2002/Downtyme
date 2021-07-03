const router = require("express").Router();
const express = require("express");
const { Song } = require("../../Models");
var SpotifyWebAPI = require("spotify-web-api-node");
const axios = require("axios").default;

router.get("/", async (req, res) => {
  try {
    console.log("testing songs");
    const token =
      "BQDQb7kLUa5xu_q7JgeesntBo7bgs4Yi3p3TrwdjcSzsw4HIvm0VRhUUolvuzRnlyvehSOgXFdlOrSIrJtG8G6f3vFyx5_C_iAhbSXewSWtF-tAiJoW2A7-jBiKETVoJqocBbJY2kPjm8_h5qOYn0OeIWsxjbKwzdMuclDWK49RXJhQTc4SCaca_rw";
    const songsRaw = await axios({
      method: "GET",
      url: "https://api.spotify.com/v1/playlists/5fT9VLQwUxQOqwpNjK3ga5",
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log(songsRaw.data.tracks.items);
    const songs = songsRaw.data.tracks.items.map((song) => {
      // console.log(song.track.name)
      // console.log(song.track.artists[0].name)
      // console.log(song.track.album.name)
      // console.log(song.track.external_urls.spotify)
      // console.log(song.track)
      //   try {
      const newSong = {
        song_title: song.track.name,
        artist: song.track.artists[0].name,
        album: song.track.album.name,
        song_link: song.track.external_urls.spotify,
      };
      //   } catch (err) {
      //     console.log(err)
      //   };
      // console.log(newSong);
      return newSong;
    });
    console.log(songs);
    // spotifyModel
    //   .findAll({})
    //   .then((spotifyData) => res.json(spotifyData))
    //   .catch((err) => {
    //     console.log(err);
    //     res.status(500).json(err);
    //   });
      Song.bulkCreate(songs, {
          individualHooks: true,
          returning: true
      })
    res.json(songs);
  } catch (error) {
    res.json(error);
  }
});
module.exports = router;
