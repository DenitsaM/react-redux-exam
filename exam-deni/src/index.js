import './main.scss';
import "babel-polyfill";
import "whatwg-fetch";
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './js/common/Header';
import Sidebar from './js/common/Sidebar';
import HomeView from './js/Views/HomeView';
import FoundSongsView from './js/common/FoundSong';
import songsReducer from './js/reducers/songs-reducer';
import playlistReducer from './js/reducers/playlist-reducer';
import CreatePlaylistEngine from './js/common/CreatePlaylist';
import PlayListSongs from './js/common/PlayListSongs';

const AppState = {
  /* Reducers and state go here */
  songs: songsReducer,
  playlists: playlistReducer
};

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(combineReducers(AppState),applyMiddleware(middleware));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Header />
            <div className="row no-gutters main-content-wrapper">
              <div className="col-3">
                <Sidebar />
              </div>
              <div className="col-9">
                <Route path="/" component={HomeView} exact />
                <Route path="/song" component={FoundSongsView} exact/>
                <Route path="/create-playlist" component={CreatePlaylistEngine} exact/>
                <Route path="/playlist" component={PlayListSongs}/>
              </div>
            </div>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
