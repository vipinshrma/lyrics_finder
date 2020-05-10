import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../Spinner';
import Moment from 'react-moment';
class Lyrics extends Component{
    state={
        track:{},
        Lyric:{}
    }

        componentDidMount(){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=69a5a277c1a507c18dae6976be4e894b`)
        .then(res=>res.json())
        .then(data=>{
            
            this.setState({Lyric:data.message.body.lyrics})

            return fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=69a5a277c1a507c18dae6976be4e894b`)
        
        })
        .then(res=>res.json())
        .then(track=>{
            console.log(track);
            this.setState({track:track.message.body.track})
        })
        .catch(err=>console.log(err))
    }
    render()
    {
        const {track , Lyric}= this.state;
        
        if(track===undefined || Lyric===undefined || Object.keys(track).length===0 ||Object.keys(Lyric).length=== 0){
            return <Spinner/>
        }
        else{
            return (
                <div>
                <Link to="/" className="btn btn-dark  btn-sm mb-4 ">Go Back</Link>
                <div className="card">
                    <h5 className="card-header">
                        {track.track_name} By {''} 
                        <span className="text-secondary">{track.artist_name}</span>
                    </h5>
                    <div className="card-body">
                        <p className="card-text">{Lyric.lyrics_body}</p>
                    </div>
                </div>
                <ul className="list-group mt-3">
                    <li className="list-group-item">
                        <strong>Album ID</strong>:{track.album_id}
                    </li>
                    <li className="list-group-item">
                        <strong>Song Genre</strong>:{track.primary_genres.music_genre_list[0].music_genre.music_genre_name
                    }
                    </li>
                    <li className="list-group-item">
                        <strong>Explicit Words</strong>: {''}
                        {track.explicit===0?'NO':'Yes'}
                    </li>
                    <li className="list-group-item">
                        <strong>Release Date</strong>: {''}
                        <Moment format="DD/MM/YYYY">{track.updated_time}</Moment>
                    </li>
                </ul>
            </div>
            )
        }
    }
}

export default Lyrics;



