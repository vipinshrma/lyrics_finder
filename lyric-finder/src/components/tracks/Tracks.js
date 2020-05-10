import React from 'react';
import {Consumer} from '../../context';
import Spinner from '../Spinner';
import Track2 from '../tracks/Track2';
class Tracks extends React.Component{
    render(){
        return (
            <Consumer>
                {value=>{
                    const {track_list,heading} = value;
                    if(track_list===undefined || track_list.length===0){
                        return <Spinner/>
                    }else{
                        return(
                        <React.Fragment>
                            <h3 className="text-center mb-4">{heading}</h3>
                            <div className="row">
                                {track_list.map(list=>(
                                <Track2 key={list.track.track_id} track={list.track} />
                                ))}
                            </div>
                            </React.Fragment>
                        );
                    }
                    }}
                </Consumer>
        )}
}

export default Tracks;