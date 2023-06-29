import axios from "axios";
import * as cheerio from "cheerio";

const kuzguniurl = "https://csgostats.gg/player/76561199087384169";
const kuzguniurlscope = "https://app.scope.gg/dashboard/1127118441";

var kuzgunikill = [];
var globalVar1;
var kuzgunicw = [];
var globalcw1;
var kuzguninick = [];
var globalnick1;
var kuzgunilg = [];
var globallg1;

//
//
//
//
//Scope GG Variables
var kuzgunirankname = [];
var globalrn1;

//////!!!!! SCOPE GG SCRAPE !!!!!//////
async function getkuzguniscope() {
  const { data: html } = await axios.get(kuzguniurlscope);
  return html;
}

async function mainkuzguniscope() {
  const res = await getkuzguniscope();
  const $ = cheerio.load(res);

  // Rank Adi Verisi
  $(".AccountInfo__RankName-d1dk6i-7").each(function () {
    const rank = $(this).text();
    kuzgunirankname.push(rank);
  });
  globalrn1 = kuzgunirankname.pop();
}

mainkuzguniscope().then(() => {
  document.getElementById("kuzgunirn").textContent = globalrn1;
});

//
//
//
//
//////!!!!! CSGO STATS SCRAPE !!!!!//////
async function getkuzguni() {
  const { data: html } = await axios.get(kuzguniurl);
  return html;
}

async function mainkuzguni() {
  const res = await getkuzguni();
  const $ = cheerio.load(res);

  // KD Verisi
  $("#kpd span", res).each(function () {
    const kd1 = $(this).text();
    kuzgunikill.push(kd1);
  });

  // KAZANILAN REKABETCI VERISI
  $("#competitve-wins span", res).each(function () {
    const cw = $(this).text();
    kuzgunicw.push(cw);
  });

  // Nickname Verisi
  $("#player-name", res).each(function () {
    const nick = $(this).text();
    kuzguninick.push(nick);
  });

  // Last Game Verisi
  $("#last-game", res).each(function () {
    const lg = $(this).text();
    kuzgunilg.push(lg);
  });

  globallg1 = kuzgunilg.pop();
  globalnick1 = kuzguninick.pop();
  globalcw1 = kuzgunicw.pop();
  globalVar1 = kuzgunikill.pop();
}

mainkuzguni().then(() => {
  document.getElementById("kuzgunilg").textContent = globallg1;
  document.getElementById("kuzgunikd").textContent = globalVar1;
  document.getElementById("kuzguninick").textContent = globalnick1;
  document.getElementById("kuzgunicw").textContent = globalcw1;
});

export default mainkuzguni;
