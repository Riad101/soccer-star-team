import React from 'react';

import "./Players.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const Players = (props) => {
    
    const {url,full_name,country,salary}= props.players;
    return (
        
        <div className="player-info " >
            <div className="card rounded border border-warning shadow p-3 mb-5 bg-white rounded" >
                <img src={url} alt="" srcSet=""/>
                <div className="card-body text-center">
                    <h3 className="card-title font-weight-bolder ">{full_name}</h3>
                    <h4 className="card-text">${salary}</h4>
                    <h5 className="card-text blockquote">{country}</h5>
                    <button  onClick={()=> props.handleAddPlayers(props.players)} type="button" 
                        className="btn btn-warning btn-md btn-block font-weight-bold">
                        <FontAwesomeIcon icon={faFutbol}/> Add Players
                    </button>
                </div>
            </div>
            
            {/* <div>
                <img src={url} alt="" srcset=""/>
            </div>
            <h1>{full_name}</h1>
            <h2>{country}</h2>
            <h3>${salary}</h3> */}
        </div>
    );
};

export default Players;