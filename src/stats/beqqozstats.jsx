import axios from "axios";
import * as cheerio from "cheerio";

const beqqozurl = "https://csgostats.gg/player/76561198827529046";
const beqqozurlscope = "https://app.scope.gg/dashboard/867263318";
var beqqozkill = [];
var globalVar4;
var beqqozcw = [];
var globalcw4;
var beqqoznick = [];
var globalnick4;
var beqqozlg = [];
var globallg4;

//
//
//
//
//Scope GG Variables
var beqqozrankname = [];
var globalrn4;

//////!!!!! SCOPE GG SCRAPE !!!!!//////
async function getbeqqozscope() {
  const { data: html } = await axios.get(beqqozurlscope);
  return html;
}

async function mainbeqqozscope() {
  const res = await getbeqqozscope();
  const $ = cheerio.load(res);

  // Rank Adi Verisi
  $(".AccountInfo__RankName-d1dk6i-7").each(function () {
    const rank = $(this).text();
    beqqozrankname.push(rank);
  });
  globalrn4 = beqqozrankname.pop();
}

mainbeqqozscope().then(() => {
  document.getElementById("beqqozrn").textContent = globalrn4;
});

//
//
//
//
//////!!!!! CSGO STATS SCRAPE !!!!!//////
async function getbeqqoz() {
  const { data: html } = await axios.get(beqqozurl);
  return html;
}

async function mainbeqqoz() {
  const res = await getbeqqoz();
  const $ = cheerio.load(res);

  // KD Verisi
  $("#kpd span", res).each(function () {
    const kd1 = $(this).text();
    beqqozkill.push(kd1);
  });

  // KAZANILAN REKABETCI VERISI
  $("#competitve-wins span", res).each(function () {
    const cw = $(this).text();
    beqqozcw.push(cw);
  });

  // Nickname Verisi
  $("#player-name", res).each(function () {
    const nick = $(this).text();
    beqqoznick.push(nick);
  });

  // Last Game Verisi
  $("#last-game", res).each(function () {
    const lg = $(this).text();
    beqqozlg.push(lg);
  });

  globallg4 = beqqozlg.pop();
  globalnick4 = beqqoznick.pop();
  globalcw4 = beqqozcw.pop();
  globalVar4 = beqqozkill.pop();
}
mainbeqqoz().then(() => {
  document.getElementById("beqqozlg").textContent = globallg4;
  document.getElementById("beqqozkd").textContent = globalVar4;
  document.getElementById("beqqoznick").textContent = globalnick4;
  document.getElementById("beqqozcw").textContent = globalcw4;
});

export default mainbeqqoz;
