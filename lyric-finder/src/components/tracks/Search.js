import React, { Component } from 'react';
import {Consumer} from '../../context';

class Search extends Component{
    state={
        tracktitle:''
    }
     onchange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
        }
    onsubmit=(dispatch,e)=>{
        e.preventDefault();

        fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.tracktitle}&page_size=10&page=1&s_track_rating=desc&apikey=69a5a277c1a507c18dae6976be4e894b`)
        .then(res=>res.json())
        .then(data=>{
            dispatch({
                type:'SEARCH_TRACKS',
                payload:data.message.body.track_list
            });
            this.setState({
                tracktitle:''
            })
           
        })
        .catch(err=>console.log(err))
     }


    render(){
        return(
                <Consumer>
                    {value=>{
                         const {dispatch} =value;
                        return(
                            <div className="card card-body mb-4 p-4" >
                                
                                <h1 className="display-4 text-center">
                                    <i className="fas fa-music"></i>Search for a song
                                </h1>
                                
                                <p className="lead text-center"><strong>Get the lyrics for any songs </strong></p>
                                
                                <form onSubmit={this.onsubmit.bind(this,dispatch)}>
                                
                                <input className="form-control form-contol-lg" type="text" placeholder="song title" name="tracktitle" value={this.state.tracktitle} onChange={this.onchange} />  
                                
                                <button className="btn btn-primary btn-block mt-4" type="submit" >Search the lyrics</button>
                                
                
                                </form>
                            


                                 </div>
                             )
                    }}
                    </Consumer>
                )
        }
    }
export default Search;
