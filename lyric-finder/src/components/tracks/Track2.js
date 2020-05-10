import React from 'react';
import {Link} from 'react-router-dom'

function Track2(props){
    const {track} = props;

    return(
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{track.artist_name}</h5>
                    <p>
                    <strong><i class="fas fa-play"></i>Track:{track.track_name}</strong><br/>
                    <strong><i class="fas fa-compact-disc"></i>Album:{track.album_name}</strong><br/>
                    </p>

                    <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block"><strong><i class="fas fa-chevron-right"></i>View lyrics</strong></Link>
                </div>
            </div>


        </div>
    )
}

export default Track2;