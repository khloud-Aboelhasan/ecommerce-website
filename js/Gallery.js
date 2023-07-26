//start of slide show 
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
//end of slide show 






//start gallery 

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
