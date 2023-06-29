import axios from "axios";
import * as cheerio from "cheerio";

const maanzourl = "https://csgostats.gg/player/76561199485439007";
const maanzourlscope = "https://app.scope.gg/dashboard/1525173279";

// CSGO Stats Variables
var maanzokill = [];
var globalVar;
var maanzocw = [];
var globalCW;
var maanzonick = [];
var globalNick;
var maanzolg = [];
var globallg;

//Scope GG Variables
var maanzorankname = [];
var globalrn;

//////!!!!! SCOPE GG SCRAPE !!!!!//////
async function getmaanzoscope() {
  const { data: html } = await axios.get(maanzourlscope);
  return html;
}

async function mainmaanzoscope() {
  const res = await getmaanzoscope();
  const $ = cheerio.load(res);

  // Rank Adi Verisi
  $(".AccountInfo__RankName-d1dk6i-7").each(function () {
    const rank = $(this).text();
    maanzorankname.push(rank);
  });

  globalrn = maanzorankname.pop();
}

mainmaanzoscope().then(() => {
  document.getElementById("maanzorn").textContent = globalrn;
});
//
//
//
//
//////!!!!! CSGO STATS SCRAPE !!!!!//////
async function getStats() {
  const { data: html } = await axios.get(maanzourl);
  return html;
}
async function main() {
  const res = await getStats();
  const $ = cheerio.load(res);

  // KD Verisi
  $("#kpd span", res).each(function () {
    var kd1 = $(this).text();
    maanzokill.push(kd1);
  });

  // Kazanilan Rekabetci Verisi
  $("#competitve-wins span", res).each(function () {
    var cw = $(this).text();
    maanzocw.push(cw);
  });

  // Nickname Verisi
  $("#player-name", res).each(function () {
    var nick = $(this).text();
    maanzonick.push(nick);
  });

  // Last Game Verisi
  $("#last-game", res).each(function () {
    var lg = $(this).text();
    maanzolg.push(lg);
  });

  globallg = maanzolg.pop();
  globalNick = maanzonick.pop();
  globalVar = maanzokill.pop();
  globalCW = maanzocw.pop();
}

window.onload = function () {
  main().then(() => {
    document.getElementById("maanzolg").textContent = globallg;
    document.getElementById("maanzokd").textContent = globalVar;
    document.getElementById("maanzonick").textContent = globalNick;
    document.getElementById("maanzocw").textContent = globalCW;
  });
};

export default main;
