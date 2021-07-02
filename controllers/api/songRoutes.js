const router = require("express").Router();
const express = require("express");
// const { spotifyModel } = require("../../../Models");
var SpotifyWebAPI = require("spotify-web-api-node");
const axios = require("axios").default;

router.get("/", async (req, res) => {
  try {
    console.log("testing songs");
    const token =
      "BQBkN4D5VkKZa-GWaUAPJCS3gEKLBB6Zylk2NP2ghEms_Lr-ZXyN7Ajj__KDThqiZU0PT_zlZBIPgm2P76P2nDrxnU5NAWttVGiXd6JOlBkaeimKn8AO4IfLqy-qH43uhMD-Nxuft1r8T7s5x4FFZs65HiQ2aAp3uGWwEG6hwpWzP4ZEfsL5Eo5F5g";
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
    res.json(songs);
  } catch (error) {
    res.json(error);
  }
});
module.exports = router;
