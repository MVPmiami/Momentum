// DOM Elements
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  date = document.querySelector('.date'),
  focus = document.querySelector('.focus'),
  image = document.querySelector('.change-image-button'),
  quote = document.querySelector('.quote-of-the-day'),
  quoteBtn = document.querySelector('.change-quote');


// Options
const showAmPm = true;

// Show Date
function showDate() {
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let today = new Date(),
  day = today.getDay(),
  dateNum = today.getDate(),
  month = today.getMonth();
 
  for(let i = 0; i < days.length; i++){
    if(i === day){
      day = days[i];
    }
  }

  for(let i = 0; i < months.length; i++){
    if(i === month){
      month = months[i];
    }
  }

  date.innerHTML = `${day} ${dateNum} ${month}`
}

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // 24hr Format
  hour = hour % 24 || 24;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}


// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//change background

const listOfBackgroundsMorning = ["url(assets/images/morning/01.jpg)",
                                  "url(assets/images/morning/02.jpg)",
                                  "url(assets/images/morning/03.jpg)",
                                  "url(assets/images/morning/04.jpg)",
                                  "url(assets/images/morning/05.jpg)",
                                  "url(assets/images/morning/06.jpg)",
                                  "url(assets/images/morning/07.jpg)",
                                  "url(assets/images/morning/08.jpg)",
                                  "url(assets/images/morning/09.jpg)",
                                  "url(assets/images/morning/10.jpg)",
                                  "url(assets/images/morning/11.jpg)",
                                  "url(assets/images/morning/12.jpg)",
                                  "url(assets/images/morning/13.jpg)",
                                  "url(assets/images/morning/14.jpg)",
                                  "url(assets/images/morning/15.jpg)",
                                  "url(assets/images/morning/16.jpg)",
                                  "url(assets/images/morning/17.jpg)",
                                  "url(assets/images/morning/18.jpg)",
                                  "url(assets/images/morning/19.jpg)",
                                  "url(assets/images/morning/20.jpg)",];

const listOfBackgroundsDay = ["url(assets/images/day/01.jpg)",
"url(assets/images/day/02.jpg)",
"url(assets/images/day/03.jpg)",
"url(assets/images/day/04.jpg)",
"url(assets/images/day/05.jpg)",
"url(assets/images/day/06.jpg)",
"url(assets/images/day/07.jpg)",
"url(assets/images/day/08.jpg)",
"url(assets/images/day/09.jpg)",
"url(assets/images/day/10.jpg)",
"url(assets/images/day/11.jpg)",
"url(assets/images/day/12.jpg)",
"url(assets/images/day/13.jpg)",
"url(assets/images/day/14.jpg)",
"url(assets/images/day/15.jpg)",
"url(assets/images/day/16.jpg)",
"url(assets/images/day/17.jpg)",
"url(assets/images/day/18.jpg)",
"url(assets/images/day/19.jpg)",
                              "url(assets/images/day/20.jpg)",];

const listOfBackgroundsEvening = ["url(assets/images/evening/01.jpg)",
"url(assets/images/evening/02.jpg)",
"url(assets/images/evening/03.jpg)",
"url(assets/images/evening/04.jpg)",
"url(assets/images/evening/05.jpg)",
"url(assets/images/evening/06.jpg)",
"url(assets/images/evening/07.jpg)",
"url(assets/images/evening/08.jpg)",
"url(assets/images/evening/09.jpg)",
"url(assets/images/evening/10.jpg)",
"url(assets/images/evening/11.jpg)",
"url(assets/images/evening/12.jpg)",
"url(assets/images/evening/13.jpg)",
"url(assets/images/evening/14.jpg)",
"url(assets/images/evening/15.jpg)",
"url(assets/images/evening/16.jpg)",
"url(assets/images/evening/17.jpg)",
"url(assets/images/evening/18.jpg)",
"url(assets/images/evening/19.jpg)",
                                  "url(assets/images/evening/20.jpg)",];
const listOfBackgroundsNight = ["url(assets/images/night/01.jpg)",
"url(assets/images/night/02.jpg)",
"url(assets/images/night/03.jpg)",
"url(assets/images/night/04.jpg)",
"url(assets/images/night/05.jpg)",
"url(assets/images/night/06.jpg)",
"url(assets/images/night/07.jpg)",
"url(assets/images/night/08.jpg)",
"url(assets/images/night/09.jpg)",
"url(assets/images/night/10.jpg)",
"url(assets/images/night/11.jpg)",
"url(assets/images/night/12.jpg)",
"url(assets/images/night/13.jpg)",
"url(assets/images/night/14.jpg)",
"url(assets/images/night/15.jpg)",
"url(assets/images/night/16.jpg)",
"url(assets/images/night/17.jpg)",
"url(assets/images/night/18.jpg)",
"url(assets/images/night/19.jpg)",
                                "url(assets/images/night/20.jpg)",];                                            
let numberImage;
function randomImage(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  nextImage = numberImage;
  do{
    numberImage = Math.floor(Math.random() * (max - min + 1)) + min;
  }while(nextImage === numberImage);

  return numberImage;
}
randomImage(0,19);
console.log(numberImage);

function changeBackgroundMorning() {
  let today = new Date(),
  hour = today.getHours();
  if(hour < 12 && hour === 6){
    document.body.style.backgroundImage = listOfBackgroundsMorning[numberImage];
  }else if(hour < 12 && hour === 7){
    document.body.style.backgroundImage = listOfBackgroundsMorning[numberImage];
  }else if(hour < 12 && hour === 8){
    document.body.style.backgroundImage = listOfBackgroundsMorning[numberImage];
  }else if(hour < 12 && hour === 9){
    document.body.style.backgroundImage = listOfBackgroundsMorning[numberImage];
  }else if(hour < 12 && hour === 10){
    document.body.style.backgroundImage = listOfBackgroundsMorning[numberImage];
  }else if(hour < 12 && hour === 11){
    document.body.style.backgroundImage = listOfBackgroundsMorning[numberImage];
  }else if(hour < 12 && hour === 11){
    document.body.style.backgroundImage = listOfBackgroundsMorning[numberImage];
  }
};

function changeBackgroundDay() {
  let today = new Date(),
  hour = today.getHours();
  if(hour < 18 && hour === 12){
    document.body.style.backgroundImage = listOfBackgroundsDay[numberImage];
  }else if(hour < 18 && hour === 13){
    document.body.style.backgroundImage = listOfBackgroundsDay[numberImage];
  }else if(hour < 18 && hour === 14){
    document.body.style.backgroundImage = listOfBackgroundsDay[numberImage];
  }else if(hour < 18 && hour === 15){
    document.body.style.backgroundImage = listOfBackgroundsDay[numberImage];
  }else if(hour < 18 && hour === 16){
    document.body.style.backgroundImage = listOfBackgroundsDay[numberImage];
  }else if(hour < 18 && hour === 17){
    document.body.style.backgroundImage = listOfBackgroundsDay[numberImage];
  }
};
function changeBackgroundEvening(){
  let today = new Date(),
  hour = today.getHours();
  if(hour < 24 && hour === 18){
    document.body.style.backgroundImage = listOfBackgroundsEvening[numberImage];
  }else if(hour < 24 && hour === 19){
    document.body.style.backgroundImage = listOfBackgroundsEvening[numberImage];
  }else if(hour < 24 && hour === 20){
    document.body.style.backgroundImage = listOfBackgroundsEvening[numberImage];
  }else if(hour < 24 && hour === 21){
    document.body.style.backgroundImage = listOfBackgroundsEvening[numberImage];
  }else if(hour < 24 && hour === 22){
    document.body.style.backgroundImage = listOfBackgroundsEvening[numberImage];
  }else if(hour < 24 && hour === 23){
    document.body.style.backgroundImage = listOfBackgroundsEvening[numberImage];
  }
};
function changeBackgroundNight(){
  let today = new Date(),
  hour = today.getHours();
  if(hour < 6 && hour === 24){
    document.body.style.backgroundImage = listOfBackgroundsNight[numberImage];
  }else if(hour < 6 && hour === 1){
    document.body.style.backgroundImage = listOfBackgroundsNight[numberImage];
  }else if(hour < 6 && hour === 2){
    document.body.style.backgroundImage = listOfBackgroundsNight[numberImage];
  }else if(hour < 6 && hour === 3){
    document.body.style.backgroundImage = listOfBackgroundsNight[numberImage];
  }else if(hour < 6 && hour === 4){
    document.body.style.backgroundImage = listOfBackgroundsNight[numberImage];
  }else if(hour < 6 && hour === 5){
    document.body.style.backgroundImage = listOfBackgroundsNight[numberImage];
  }
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12 && hour >= 6) {
    // Morning
    changeBackgroundMorning();
    greeting.textContent = 'Good Morning, ';
    setTimeout(setBgGreet,3600000);
  } else if (hour < 18 && hour >= 12) {
    // Afternoon
    changeBackgroundDay();
    greeting.textContent = 'Good Afternoon, ';
    setTimeout(setBgGreet,3600000);
  }else if(hour < 24 && hour >= 18){
    // Evening
    changeBackgroundEvening();
    greeting.textContent = 'Good Evening, ';
    setTimeout(setBgGreet,3600000);
  }else {
    // Night
    changeBackgroundNight();
    greeting.textContent = 'Good Night, ';
    setTimeout(setBgGreet,3600000);
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null ) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
name.addEventListener('click', () => {

});

function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

console.log(image.classList)
// button change image
let numberImageForButtonMorning = 0;
let numberImageForButtonDay = 0;
let numberImageForButtonEvening = 0;
let numberImageForButtonNight = 0;
let count = 0;

image.addEventListener('click', () => {
  if(count <= 19){
    document.body.style.backgroundImage = listOfBackgroundsMorning[numberImageForButtonMorning];
    numberImageForButtonMorning++;
    count++;
    console.log(numberImageForButtonMorning)
  }else if(count > 19 && count <=39){
    document.body.style.backgroundImage = listOfBackgroundsDay[numberImageForButtonDay];
    numberImageForButtonDay++;
    count++;
    console.log(numberImageForButtonDay)
  }else if(count > 39 && count <=59){
    document.body.style.backgroundImage = listOfBackgroundsEvening[numberImageForButtonEvening];
    numberImageForButtonEvening++;
    count++;
    console.log(numberImageForButtonEvening)
  }else if(count > 59 && count <=79){
    document.body.style.backgroundImage = listOfBackgroundsNight[numberImageForButtonNight];
    numberImageForButtonNight++;
    count++;
    console.log(numberImageForButtonNight)
  }
});

// quote of the day

const quotes = ['All the world is made of faith, and trust, and pixie dust',
                'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',
                'Everything you can imagine is real.',
                'Success doesn’t come to you…you go to it.',
                'Those who cannot change their minds cannot change anything.',
                'Every English poet should master the rules of grammar before he attempts to bend or break them.',
                'Everything takes longer than you think.',
                'Being entirely honest with oneself is a good exercise.',
                'A dream you dream alone is only a dream. A dream you dream together is reality.',
                'The heart wants what it wants. There’s no logic to these things. You meet someone and you fall in love and that’s that.',
                'The heart wants what it wants. There’s no logic to these things. You meet someone and you fall in love and that’s that.',
                'Love is an irresistible desire to be irresistibly desired.',
                'Learning is a gift. Even when pain is your teacher',
                'You can never be overdressed or overeducated'];


console.log(quoteBtn);

function showQuote(){
  randomImage(0,13);
  quote.innerHTML = `<strong style = "font-size: 18px">Quote of the day:</strong> <br> ${quotes[numberImage]}`;
}

quoteBtn.addEventListener('click', () => {
  randomImage(0,13);
  quote.innerHTML = `<strong style = "font-size: 18px">Quote of the day:</strong> <br> ${quotes[numberImage]}`;
});


// Run
showTime();
setBgGreet();
getName();
getFocus();
showDate();
changeBackgroundMorning();
changeBackgroundDay();
changeBackgroundEvening();
changeBackgroundNight();
showQuote();


