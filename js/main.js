
let slide = document.querySelectorAll('.slide');
var current = 0;

function cls(){
    for(let i = 0; i < slide.length; i++){
          slide[i].style.display = 'none';
    }
}

function next(){
    cls();
    if(current === slide.length-1) current = -1;
    current++;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function(){
        x+=0.1;
        slide[current].style.opacity = x;
        if(x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);

}

function prev(){
    cls();
    if(current === 0) current = slide.length;
    current--;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function(){
        x+=0.1;
        slide[current].style.opacity = x;
        if(x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);

}

function start(){
    cls();
    slide[current].style.display = 'block';
}
start();
// start javascript of  Gallery //
let ourGallery =document.querySelectorAll(".gallery img");

    ourGallery.forEach(img =>{

        img.addEventListener('click',()=>{

            let overlay =document.createElement("div");

            overlay.className ='popup-overlay';

            document.body.appendChild(overlay);
            let popupBox =document.createElement("div");
            if(img.alt !==null)
            {
                let imgHeading =document.createElement("h3");
                let  imgtext =document.createTextNode(img.alt);
                imgHeading.appendChild(imgtext);
                popupBox.appendChild(imgHeading);
            }
            popupBox.className ='popup-box';
            let popupImage = document.createElement("img");

            popupImage.src =img.src;
            popupBox.appendChild(popupImage);
            document.body.appendChild(popupBox);
           
            let closeButton =document.createElement("span");
            let closeButtonText= document.createTextNode("X");
            closeButton.appendChild(closeButtonText);
            closeButton.className='close-button';
            popupBox.appendChild(closeButton);
        });
    });
    document.addEventListener("click", function(e){
        if(e.target.className =='close-button'){
            e.target.parentNode.remove();

            document.querySelector(".popup-overlay").remove();
        }
    });

// end javascript of  Gallery //



//Reviews
const reviews = [{
    id :1,
    name : "Dorian Kelvin",
    job:"Mechanical Engineer",
    img:"image/person_2.jpg",
    txt:"This Agency is great.  The style of fashion is special and unique.  Every customer will love it"
},
{
    id :2,
    name : "Andrea Alex",
    job:"Software Developer",
    img:"image/client3.jpg",

    txt:"This agency meets all my needs!  And the support of their staff is wonderful.  I highly recommend it!"
},
{
    id :3,
    name : "Ashley Bernard",
    job:"Dentist ",
    img:"image/client1.jpg",
    txt:"The agency is beautiful and the support of its staff is amazing, you can ask them for everything you need and they will deliver for you."
},
{
    id :4,
    name : "Cecilia Robert",
    job:"Financial Advisor",
    img:"image/tm8.jpg",
    txt:"Best customer support in the business.  Do not hesitate to ask anything from them and pay for the support.  The support team is very professional and friendly and got things done in a fast manner."
}
];
//select img
const img = document.getElementById("p-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const infoo = document.getElementById("info-review");
//select button
const prevBtn = document.querySelector(".prev-btn");
const nextvBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//geet index array
let currentItem = 0;
function showPerson(){
    const item =  reviews[currentItem];
    img.src = item.img;
    author.textContent  = item.name;
    job.textContent = item.job;
    infoo.textContent = item.txt;
}
nextvBtn.addEventListener('click' ,function(){
    currentItem++;
    if(currentItem > reviews.length-1){
    currentItem = 0;
    }
showPerson();
});

prevBtn.addEventListener('click' ,function(){
    currentItem--;

    if(currentItem < 0){
        currentItem = reviews.length-1;
        }
    showPerson();
    
});
//random
randomBtn.addEventListener("click" ,()=>{
 currentItem=Math.floor(Math.random()*reviews.length);
 showPerson();

});



