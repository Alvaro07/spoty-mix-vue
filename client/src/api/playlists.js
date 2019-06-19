/**
 * Get the user palylists
 * @param {Object} vueThis The "this" of the component
 * @param {string} user User ID
 * @param {string} token Access token
 * @returns {Object} Returns the playlists of the user
 * @throws {Error}
 */

export function getPlayLists(vueThis, user, token) {
  vueThis.spotify.setAccessToken(token);

  return new Promise((resolve, reject) => {
    vueThis.spotify.getUserPlaylists(user, { limit: 50 }).then(
      data => {
        resolve(data.body.items);
      },
      err => reject(err)
    );
  });
}

/**
 * Get the playlist tracks
 * @param {Object} vueThis The "this" of the component
 * @param {string} idPlaylist Playlist ID
 * @param {string} token Access token
 * @returns {Object} Returns the tracks of the playlist
 * @throws {Error}
 */

export function getPlaylistTracks(vueThis, idPlaylist, token) {
  vueThis.spotify.setAccessToken(token);

  return new Promise((resolve, reject) => {
    vueThis.spotify.getPlaylist(idPlaylist).then(
      data => {
        resolve(data.body.tracks.items);
      },
      err => reject(err)
    );
  });
}



/**
 * Async function to create playlist
 * @async
 * @param {Object} vueThis The "this" of the component
 * @param {string} userId User ID
 * @param {string} name Name of the new playlist
 * @param {Array} tracks  An array of the Uri code of the tracks
 * @param {string} token Access token
 * @throws {Error}
 */

export async function createMixList(vueThis, userId, name, tracks, token) {
  vueThis.spotify.setAccessToken(token);

  try {
    const data = await vueThis.spotify.createPlaylist(userId, name, { public: false });
    const playlistId = data.body.id;
    await vueThis.spotify.addTracksToPlaylist(playlistId, tracks);
  } catch (err) {
    console.log("error:", err);
  }
}
