import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { getSong } from '../services/getCreateSongs';

class SongsSearchEngine extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.displayResults = this.displayResults.bind(this);
        this.backSearch = this.backSearch.bind(this);
        this.state = {
        title: "",
        id: "",
        songsLoaded: false,
        songNotFound: false
        };
    }

    handleChange({ target }) {
        this.setState({ title: target.value });
    }

    displayResults(e) {
        e.preventDefault();
        const { title, id } = this.state;

        let props_songs = this.props.songs[0].song;
        let _this = this;

        var result = props_songs.filter(function( obj ) {
            return obj.title.toLowerCase() == _this.state.title.toLowerCase();
        });
        if(result.length){
            this.setState({ songsLoaded: true });
        }else{
            this.setState({ songNotFound: true });
        };

    }
    backSearch(){
        this.setState({ songNotFound: false });
    }
    render() {
        const { title, songsLoaded, songNotFound } = this.state;

        if (songsLoaded) {
            return <Redirect to={`/song?title=${title}`} />;
        }
        else if(songNotFound){
            return(
                    <div>
                        <h3>Song not found!</h3>
                        <button onClick={this.backSearch}>back to search</button>
                    </div>
                );
        }
        return (
            <section className="home-view container">
            <div className="row justify-center">
                <div className="col-12">
                <form onSubmit={this.displayResults}>
                    <div className="form-group">
                    <label>Search songs:</label>
                    <input
                        type="text"
                        id="song"
                        className="form-control"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    </div>
                    <button className="btn btn-primary">
                        Search
                    </button>
                </form>
                </div>
            </div>
            </section>
        );
    }
}

function mapStateToProps(songs) {
    return songs;
}

export default connect(mapStateToProps, null)(SongsSearchEngine);
