const router = require("express").Router();
const express = require("express");
const { Song } = require("../../Models");
var SpotifyWebAPI = require("spotify-web-api-node");
const axios = require("axios").default;

router.get("/", async (req, res) => {
  try {
    console.log("testing songs");
    const token =
      "BQDSVXXH8Kpwu8B3PnMIWpzEq324bCJbKiIn5UbIImNz0Fjy_Fmy97jCzmhwjR85-k4mlqRBQawot8JZK4xMAiuHj9sB0lmb-6FlE83JL94WFCKwuY7aRROKhUoLOObFx-My5sz9C9ItOK8ZcnJzjUY5Jq0a_L5caC6cfEisJPKw1Ib8DZ7zBZ67nw";
    const songsRaw = await axios({
      method: "GET",
      url: "https://api.spotify.com/v1/playlists/4f7Z4a4jtI9ow3tGAX200y",
      headers: { Authorization: `Bearer ${token}` },
    });
    const songs = songsRaw.data.tracks.items.map((song) => {
      const newSong = {
        song_title: song.track.name,
        artist: song.track.artists[0].name,
        album: song.track.album.name,
        song_link: song.track.external_urls.spotify,
      };
      return newSong;
    });
    console.log(songs);
    Song.bulkCreate(songs, {
      individualHooks: true,
      returning: true,
    });
    res.json(songs);
  } catch (error) {
    res.json(error);
  }
});

router.get("/songs/:id", async (req, res) => {
  try {
    const singleSongData = await Song.findOne(req.params.id);
    console.log(singleSongData);
    res.render("song", singleSongData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
