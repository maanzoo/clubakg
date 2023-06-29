/* eslint-disable @typescript-eslint/no-unused-vars */
//jshint esversion: 6

import PlayerCard from "./components/PlayerCard";
import "./index.css";
import axios from "axios";
import * as cheerio from "cheerio";

// PLAYER STATS IMPORT
import main from "./stats/maanzostats";
import maincynapsx from "./stats/cynapsxstats";
import mainvlone from "./stats/vlonestats";
import mainbeqqoz from "./stats/beqqozstats";
import mainkuzguni from "./stats/kuzgunistats";
import mainawesome from "./stats/awesomestats";

function App() {
  return (
    <>
      <h1>CLUB AKG</h1>
      <div className="main">
        <PlayerCard
          name={<h1 id="cynapsxnick"></h1>}
          playerrn={<p id="cynapsxrn"></p>}
          url="https://avatars.cloudflare.steamstatic.com/58972e4b311bc6939e8fbbd7fb72ecafbcb131d1_full.jpg"
          rankImg="https://static.csgostats.gg/images/ranks/12.png"
          playerkd={<h1 id="cynapsxkd"></h1>}
          playercw={<h1 id="cynapsxcw"></h1>}
          playerlg={<p id="cynapsxlg"></p>}
          playersteam="https://steamcommunity.com/id/derturel41"
          playerinstagram="https://www.instagram.com/denizerturel/"
        />
        <PlayerCard
          name={<h1 id="vlonenick"></h1>}
          playerrn={<p id="vlonern"></p>}
          url="https://avatars.cloudflare.steamstatic.com/e1e8687993f379a88fbec69f96a931cad53374b4_full.jpg"
          rankImg="https://static.csgostats.gg/images/ranks/13.png"
          playerkd={<h1 id="vlonekd"></h1>}
          playercw={<h1 id="vlonecw"></h1>}
          playerlg={<p id="vlonelg"></p>}
          playersteam="https://steamcommunity.com/profiles/76561198259722252"
          playerinstagram="https://www.instagram.com/kayracansin/"
        />
        <PlayerCard
          name={<h1 id="beqqoznick"></h1>}
          playerrn={<p id="beqqozrn"></p>}
          url="https://avatars.cloudflare.steamstatic.com/9ae2808b48833174b889caf21c280ab03c03603e_full.jpg"
          rankImg="https://static.csgostats.gg/images/ranks/11.png"
          playerkd={<h1 id="beqqozkd"></h1>}
          playercw={<h1 id="beqqozcw"></h1>}
          playerlg={<p id="beqqozlg"></p>}
          playersteam="https://steamcommunity.com/profiles/76561198827529046"
          playerinstagram="https://www.instagram.com/bekir_karatepee/"
        />
        <PlayerCard
          name={<h1 id="awesomenick"></h1>}
          playerrn={<p id="awesomern"></p>}
          url="https://avatars.cloudflare.steamstatic.com/d3f930e6892b8e0b7feaa0e70a252cba8ea1b0da_full.jpg"
          rankImg="https://static.csgostats.gg/images/ranks/9.png"
          playerkd={<h1 id="awesomekd"></h1>}
          playercw={<h1 id="awesomecw"></h1>}
          playerlg={<p id="awesomelg"></p>}
          playersteam="https://steamcommunity.com/profiles/76561198201042147"
          playerinstagram="https://www.instagram.com/asmcetin/"
        />
        <PlayerCard
          name={<h1 id="kuzguninick"></h1>}
          playerrn={<p id="kuzgunirn"></p>}
          url="https://avatars.cloudflare.steamstatic.com/72dc214de77394aa0ff63e76e9748facbf1c15ef_full.jpg"
          rankImg="https://static.csgostats.gg/images/ranks/12.png"
          playerkd={<h1 id="kuzgunikd"></h1>}
          playercw={<h1 id="kuzgunicw"></h1>}
          playerlg={<p id="kuzgunilg"></p>}
          playersteam="https://steamcommunity.com/profiles/76561199087384169"
          playerinstagram="https://www.instagram.com/kodalomerr/"
        />
        <PlayerCard
          name={<h1 id="maanzonick"></h1>}
          playerrn={<p id="maanzorn"></p>}
          url="https://avatars.cloudflare.steamstatic.com/1fb9332866519f29d27704870659213caaa5c459_full.jpg"
          rankImg="https://static.csgostats.gg/images/ranks/12.png"
          playerkd={<h1 id="maanzokd"></h1>}
          playercw={<h1 id="maanzocw"></h1>}
          playerlg={<p id="maanzolg"></p>}
          playersteam="https://steamcommunity.com/profiles/76561199485439007/"
          playerinstagram="https://www.instagram.com/rropsnozbart/"
        />
      </div>
    </>
  );
}

export default App;
