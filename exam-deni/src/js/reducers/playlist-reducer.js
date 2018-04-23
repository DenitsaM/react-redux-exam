import { actionTypes } from '../actions/action-types';

export default function playlistReducer(state = [], { type, playlists, songs_type }) {
  if (type === actionTypes.CREATE_PLAYLIST) {
    return [...state, { playlists, songs_type }];
  }
  return state;
}