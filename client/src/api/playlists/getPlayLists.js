// Get playlists function

export function getPlayLists(vueThis, user, token) {
  vueThis.spotify.setAccessToken(token);

  return new Promise((resolve, reject) => {
    vueThis.spotify.getUserPlaylists(user).then(data => resolve(data.body), err => reject(err));
  });
}
