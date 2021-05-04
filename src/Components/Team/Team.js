import React, { useEffect, useState } from 'react';
import playerData from '../../data/data.json';
import Cart from '../Cart/Cart';
import Players from '../Players/Players';
import './Team.css'

const Team = () => {
    const [player, setPlayer] = useState([]);
    const [cart, setCart] = useState([]);
    

    useEffect(() => {
        setPlayer(playerData);
        //console.log(playerData);
    },[]);

    const handleAddPlayers = (players) => {
        console.log('Player info added', players);
        const newCart = [...cart,players];
        setCart(newCart);
    }
    return (
        <div className="d-flex">
            <div className="player-container ">
            {player.map(pl => <Players handleAddPlayers={handleAddPlayers} players={pl}> </Players>)}
            </div>            

            <div className="cart-container">
                
                <Cart cart={cart}></Cart>
            </div>
        </div>
        
    );
};

export default Team;