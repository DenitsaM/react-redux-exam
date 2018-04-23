import { actionTypes } from '../actions/action-types';

export default function songsReducer(state = [], { type, song }) {
  if (type === actionTypes.LOAD_SONGS) {
    return [...state, { song }];
  }
  return state;
}