import axios from "axios";
import * as cheerio from "cheerio";

const vloneurl = "https://csgostats.gg/player/76561198259722252";
const vloneurlscope = "https://app.scope.gg/dashboard/299456524";

// CSGO Stats Variables
var vlonekill = [];
var globalVar3;
var vlonecw = [];
var globalcw3;
var vlonenick = [];
var globalnick3;
var vlonelg = [];
var globallg3;
//
//
//
//
//Scope GG Variables
var vlonerankname = [];
var globalrn3;

//////!!!!! SCOPE GG SCRAPE !!!!!//////
async function getvlonescope() {
  const { data: html } = await axios.get(vloneurlscope);
  return html;
}

async function mainvlonescope() {
  const res = await getvlonescope();
  const $ = cheerio.load(res);

  // Rank Adi Verisi
  $(".AccountInfo__RankName-d1dk6i-7").each(function () {
    const rank = $(this).text();
    vlonerankname.push(rank);
  });
  globalrn3 = vlonerankname.pop();
}

mainvlonescope().then(() => {
  document.getElementById("vlonern").textContent = globalrn3;
});

//
//
//
//

//////!!!!! CSGO STATS SCRAPE !!!!!//////
async function getvlone() {
  const { data: html } = await axios.get(vloneurl);
  return html;
}

async function mainvlone() {
  const res = await getvlone();
  const $ = cheerio.load(res);

  // KD verisi
  $("#kpd span", res).each(function () {
    const kd1 = $(this).text();
    vlonekill.push(kd1);
  });

  // Kazanilan Rekabetci Verisi
  $("#competitve-wins span", res).each(function () {
    const cw = $(this).text();
    vlonecw.push(cw);
  });

  // Nickname Verisi
  $("#player-name", res).each(function () {
    const nick = $(this).text();
    vlonenick.push(nick);
  });

  // Last Game Verisi
  $("#last-game", res).each(function () {
    const lg = $(this).text();
    vlonelg.push(lg);
  });

  globallg3 = vlonelg.pop();
  globalnick3 = vlonenick.pop();
  globalcw3 = vlonecw.pop();
  globalVar3 = vlonekill.pop();
}

mainvlone().then(() => {
  document.getElementById("vlonelg").textContent = globallg3;
  document.getElementById("vlonekd").textContent = globalVar3;
  document.getElementById("vlonenick").textContent = globalnick3;
  document.getElementById("vlonecw").textContent = globalcw3;
});

export default mainvlone;
