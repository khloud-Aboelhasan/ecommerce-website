const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.counter-discount h3');
  
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
  // months are ZERO index based;
  const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
  
  // let futureDate = new Date(2020, 3, 24, 11, 30, 0);
  
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();
  
  let month = futureDate.getMonth();
  month = months[month];
  const weekday = weekdays[futureDate.getDay()];
  const date = futureDate.getDate();
  giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
  
  const futureTime = futureDate.getTime();
  function getRemaindingTime() {
    const today = new Date().getTime();
  
    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
  
    // set values array
    const values = [days, hours, minutes, seconds];
    function format(item) {
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    }
  
    items.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });
  
    if (t < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h3 class="expired">sorry, this giveaway has expired!</h3>`;
    }
  }
  // countdown;
  let countdown = setInterval(getRemaindingTime, 1000);
  //set initial values
  getRemaindingTime();
  
//Changes Color

  var offerrr = document.getElementById("offfer");
  var sideNav = document.querySelector(".sidenav");
  var progressOne = document.querySelector(".s1");
  var progressTwo = document.querySelector(".s2");
  var progressThree = document.querySelector(".s3");
  var progressFour = document.querySelector(".s4");
  var progressFive = document.querySelector(".s5");
  var tagsH1 = document.getElementsByTagName("h1");
  var tagsH2=document.getElementsByTagName("h2");
  var DaysDiscount =  document.querySelector(".days");
  var hoursDiscount =  document.querySelector(".hours");
  var minuteDiscount =  document.querySelector(".minute");
  var secondesDiscount =  document.querySelector(".secondes");
  var tables = document.getElementsByTagName("table");
  var BtnAnnoun = document.querySelectorAll(".BtnAnnoun");
  var TrAnnoun = document.querySelectorAll(".Tr-Announ");
  var itemsDashSpan = document.querySelectorAll(".items-Dash span");
  var itemsDashH4 = document.querySelectorAll(".items-Dash h4");
  var detailsadmin = document.querySelectorAll(".details-admin h4")
  var detailsadmin = document.querySelectorAll(".details-admin h4")
  var PURCHASESad = document.querySelectorAll(".PURCHASES-ad li");
    function changeColor(color){
    offerrr.style.color= color;
    sideNav.style.backgroundColor = color;
    progressOne.style.backgroundColor = color;
    progressTwo.style.backgroundColor = color;
    progressThree.style.backgroundColor = color;
    progressFour.style.backgroundColor = color;
    progressFive.style.backgroundColor = color;
    for(var u = 0 ; u <4; u++){
      tagsH1[u].style.color = color;
    }
    tagsH2[0].style.color = color;
    DaysDiscount.style.backgroundColor = color;
    hoursDiscount.style.backgroundColor = color;
    minuteDiscount.style.backgroundColor = color;
    secondesDiscount.style.backgroundColor = color;
    tables[0].style.color = color;
    tables[1].style.color = color;
    tables[2].style.color = color;
    for(var s = 0 ; s <3 ; s++){
      BtnAnnoun[s].style.backgroundColor = color;
    }

    for(var m = 0 ; m <4 ; m++){
      itemsDashSpan[m].style.color = color;
    }
    for(var c= 0 ; c<4 ; c++){
      itemsDashH4[c].style.color = color;
    }
    for(var n = 0 ; n <2 ; n++){
      detailsadmin[n].style.color = color;
    }

    for(var b = 0 ; b<4 ; b++){
      PURCHASESad[b].style.color = color;
    }
    }

    //Delete
      BtnAnnoun[0].addEventListener("click" , function(){
      TrAnnoun[0].classList.add('hidden');
      });
      BtnAnnoun[1].addEventListener("click" , function(){
        TrAnnoun[1].classList.add('hidden');
        });
        BtnAnnoun[2].addEventListener("click" , function(){
          TrAnnoun[2].classList.add('hidden');
          });
  

    //End