export const mutations = {
  // Config and login/logout
  addConfig: (state, data) => {
    state.config.access_token = data.access_token;
    state.config.refresh_token = data.refresh_token;
    state.config.user_id = data.client_id;
    state.auth = true;
  },
  logOut: state => {
    state.auth = false;
  },

  // Playlists
  addPlaylists: (state, data) => {
    state.playlists = data;
  },
  addListToMix: (state, data) => {
    state.mixSelection.push(data);
  },
  resetPlaylistsSelection: state => {
    state.mixSelection = [];
  },
  removeListToMix: (state, data) => {
    state.mixSelection = state.mixSelection.filter(e => e !== data);
  },

  // Tracks
  addTracks: (state, data) => {
    state.tracks = data;
  },
  deleteTrack: (state, idTrack) => {
    state.tracks = state.tracks.filter(e => e.id !== idTrack);
  },

  // Audio player
  playSongTrack: (state, data) => {
    state.songTrack = {
      audio: data.preview_url,
      name: data.name,
      artist: data.artists[0].name
    };
  },
  removeSongTrack: state => {
    state.songTrack.audio = null;
  }
};
