import React from "react";
import "./card.css";

const PlayerCard = (props) => {
  return (
    <>
      <div className="container outline">
        <div className="wrapper">
          <img src={props.url} alt="Player Image" />
          {props.name}
          {props.playerrn}
          <img src={props.rankImg} alt="Player Rank" />
          <p>K/D</p>
          {props.playerkd}
          <p>COMPETITIVE WINS</p>
          {props.playercw}
          {props.playerlg}

          <a href={props.playersteam} target="_blank" rel="noopener noreferrer">
            <button>STEAM</button>
          </a>
          <a
            href={props.playerinstagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="instagram">INSTAGRAM</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default PlayerCard;
