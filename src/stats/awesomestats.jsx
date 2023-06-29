import axios from "axios";
import * as cheerio from "cheerio";

const awesomeurl = "https://csgostats.gg/player/76561198201042147";
const awesomeurlscope = "https://app.scope.gg/dashboard/240776419";
var awesomekill = [];
var globalVar6;
var awesomecw = [];
var globalcw6;
var awesomenick = [];
var globalnick6;
var awesomelg = [];
var globallg6;

//
//
//
//
//Scope GG Variables
var awesomerankname = [];
var globalrn6;

//////!!!!! SCOPE GG SCRAPE !!!!!//////
async function getawesomescope() {
  const { data: html } = await axios.get(awesomeurlscope);
  return html;
}

async function mainawesomescope() {
  const res = await getawesomescope();
  const $ = cheerio.load(res);

  // Rank Adi Verisi
  $(".AccountInfo__RankName-d1dk6i-7").each(function () {
    const rank = $(this).text();
    awesomerankname.push(rank);
  });
  globalrn6 = awesomerankname.pop();
}

mainawesomescope().then(() => {
  document.getElementById("awesomern").textContent = globalrn6;
});

//
//
//
//
//////!!!!! CSGO STATS SCRAPE !!!!!//////

async function getawesome() {
  const { data: html } = await axios.get(awesomeurl);
  return html;
}

async function mainawesome() {
  const res = await getawesome();
  const $ = cheerio.load(res);

  // KD Verisi
  $("#kpd span", res).each(function () {
    const kd1 = $(this).text();
    awesomekill.push(kd1);
  });

  // KAZANILAN REKABETCI VERISI
  $("#competitve-wins span", res).each(function () {
    const cw = $(this).text();
    awesomecw.push(cw);
  });

  // Nickname Verisi
  $("#player-name", res).each(function () {
    const nick = $(this).text();
    awesomenick.push(nick);
  });

  // Last Game Verisi
  $("#last-game", res).each(function () {
    const lg = $(this).text();
    awesomelg.push(lg);
  });

  globallg6 = awesomelg.pop();

  globalnick6 = awesomenick.pop();
  globalcw6 = awesomecw.pop();
  globalVar6 = awesomekill.pop();
}

mainawesome().then(() => {
  document.getElementById("awesomelg").textContent = globallg6;
  document.getElementById("awesomenick").textContent = globalnick6;
  document.getElementById("awesomekd").textContent = globalVar6;
  document.getElementById("awesomecw").textContent = globalcw6;
});

export default mainawesome;
