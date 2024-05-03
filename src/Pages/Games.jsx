import React from 'react';
import 'C:/Users/Shalu Khanna/pet-well/src/Pages/CSS/Games.css';
import CatPad1 from '../Components/Assets/catpad1.png';
import CatMouse1 from '../Components/Assets/catandmouse1.png';
import Designer1 from '../Components/Assets/Designer (3).png';
import Designer2 from '../Components/Assets/Designer (4).png';
import CatPad2 from '../Components/Assets/catpad2.png';
import CatMouse2 from '../Components/Assets/catandmouse2.png';
import Designer3 from '../Components/Assets/Designer (5).png';
import Designer4 from '../Components/Assets/Designer (6).png';
import CatPad3 from '../Components/Assets/catpad3.png';


const Games = () => {
    // Define an array of game objects with image URLs
    const games = [
        { id: 1, imageUrl: CatPad1, gameUrl: 'https://poki.com/en/g/catpad' },
        { id: 2, imageUrl: CatMouse1, gameUrl: 'https://www.santagames.net/games/cat-and-mouse.htm' },
        { id: 3, imageUrl: Designer1, gameUrl: 'https://poki.com/en/g/elixpur-idle' },
        { id: 4, imageUrl: Designer2, gameUrl: 'https://poki.com/en/g/kitty-cats' },
        { id: 5, imageUrl: CatPad2, gameUrl: 'https://poki.com/en/g/catpad' },
        { id: 6, imageUrl: CatMouse2, gameUrl: 'https://www.santagames.net/games/cat-and-mouse.htm' },
        { id: 7, imageUrl: Designer3, gameUrl: 'https://www.crazygames.com/game/funny-food-duel' },
        { id: 8, imageUrl: Designer4, gameUrl: 'https://www.crazygames.com/game/funny-food-duel' },
        { id: 9, imageUrl: CatMouse2, gameUrl: 'https://www.santagames.net/games/cat-and-mouse.htm' },
        { id: 10, imageUrl: CatPad3, gameUrl: 'https://poki.com/en/g/catpad' },
        { id: 11, imageUrl: CatPad1, gameUrl: 'https://poki.com/en/g/kitty-cats' },
        { id: 12, imageUrl: CatMouse1, gameUrl: 'https://poki.com/en/g/elixpur-idle'},
    ];

    const handleClick = (gameUrl) => {
        // Redirect to the provided game URL
        window.location.href = gameUrl;
    };

    return (
        <div className="games-container">
            {games.map(game => (
                <div key={game.id} className="game-box" onClick={() => handleClick(game.gameUrl)}>
                    <div className="game-layout">
                    <img src={game.imageUrl} alt={`Game ${game.id}`} />
                    {/* You can add additional layout elements here */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Games;