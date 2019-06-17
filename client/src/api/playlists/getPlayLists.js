// Get playlists function

export function getPlayLists(vueThis, user, token) {
  vueThis.spotify.setAccessToken(token);

  return new Promise((resolve, reject) => {
    vueThis.spotify.getUserPlaylists(user, { limit: 50 }).then(data => {
      resolve(data.body.items)
    }, err => reject(err));
  });
}

// Get playlist's tracks

export function getPlaylistTracks(vueThis, idPlaylist, token) {
  vueThis.spotify.setAccessToken(token);

  return new Promise((resolve, reject) => {
    vueThis.spotify.getPlaylist(idPlaylist).then(data => {
      resolve(data.body)
    }, err => reject(err));
  });
}
