import axios from "axios";
import * as cheerio from "cheerio";

const cynapsxurl = "https://csgostats.gg/player/76561198258021346";
const cynapsxurlscope = "https://app.scope.gg/dashboard/297755618";
var cynapsxkill = [];
var globalVar2;
var cynapsxcw = [];
var globalcw2;
var cynapsxnick = [];
var globalnick2;
var cynapsxlg = [];
var globallg2;

//
//
//
//
//Scope GG Variables
var cynapsxrankname = [];
var globalrn2;

//////!!!!! SCOPE GG SCRAPE !!!!!//////
async function getcynapsxscope() {
  const { data: html } = await axios.get(cynapsxurlscope);
  return html;
}

async function maincynapsxscope() {
  const res = await getcynapsxscope();
  const $ = cheerio.load(res);

  // Rank Adi Verisi
  $(".AccountInfo__RankName-d1dk6i-7").each(function () {
    const rank = $(this).text();
    cynapsxrankname.push(rank);
  });
  globalrn2 = cynapsxrankname.pop();
}

maincynapsxscope().then(() => {
  document.getElementById("cynapsxrn").textContent = globalrn2;
});

//
//
//
//
//////!!!!! CSGO STATS SCRAPE !!!!!//////
async function getcynapsx() {
  const { data: html } = await axios.get(cynapsxurl);
  return html;
}

async function maincynapsx() {
  const res = await getcynapsx();
  const $ = cheerio.load(res);

  // KD Verisi
  $("#kpd span", res).each(function () {
    const kd1 = $(this).text();
    cynapsxkill.push(kd1);
  });

  // KAZANILAN REKABETCI VERISI
  $("#competitve-wins span", res).each(function () {
    const cw = $(this).text();
    cynapsxcw.push(cw);
  });

  // Nickname Verisi
  $("#player-name", res).each(function () {
    const nick = $(this).text();
    cynapsxnick.push(nick);
  });

  // Last Game Verisi
  $("#last-game", res).each(function () {
    const lg = $(this).text();
    cynapsxlg.push(lg);
  });

  globallg2 = cynapsxlg.pop();
  globalnick2 = cynapsxnick.pop();
  globalcw2 = cynapsxcw.pop();
  globalVar2 = cynapsxkill.pop();
}

maincynapsx().then(() => {
  document.getElementById("cynapsxlg").textContent = globallg2;
  document.getElementById("cynapsxkd").textContent = globalVar2;
  document.getElementById("cynapsxnick").textContent = globalnick2;
  document.getElementById("cynapsxcw").textContent = globalcw2;
});

export default maincynapsx;
