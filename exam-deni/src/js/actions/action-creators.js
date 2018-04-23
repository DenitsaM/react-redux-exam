import { actionTypes } from './action-types';


export const loadSongsActionCreator = (songsArray) => ({
  type: actionTypes.LOAD_SONGS,
  song: songsArray,
});

export const createPlaylistActionCreator = (songsArray, songs_type) => ({
  type: actionTypes.CREATE_PLAYLIST,
  playlists: songsArray,
  songs_type: songs_type
});