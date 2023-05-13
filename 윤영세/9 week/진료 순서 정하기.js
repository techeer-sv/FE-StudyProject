// mine
function solution(emergency) {
  let order = new Map();
  let desc = [...emergency].sort((a, b) => b - a);
  for (let i = 0; i < desc.length; i++) {
    order.set(desc[i], i + 1);
  }
  return emergency.map((v) => order.get(v));
}

//other
function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}

function solution(emergency) {
  const rank = [...emergency];
  rank.sort((a, b) => b - a);
  return emergency.map((n) => rank.indexOf(n) + 1);
}

function whatsYourFavorite() {
  let fav = "javascript";
  return new Promise((resolve, reject) => resolve(fav));
}

function displaySubject(subject) {
  return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
}

whatsYourFavorite().then(displaySubject).then(console.log);

async function whatsYourFavorite() {
  let fav = "javascript";
  return fav;
}
async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

whatsYourFavorite().then(displaySubject).then(console.log);

async function whatsYourFavorite() {
  let fav = "javascript";
  return fav;
}
async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

async function init() {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
}

whatsYourFavorite().then(displaySubject).then(console.log);
