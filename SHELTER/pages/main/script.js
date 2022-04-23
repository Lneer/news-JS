const petsBase = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn?\’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];

//Burger
const BURGERBTN = document.querySelector("#burger");
const ASIDE = document.querySelector("#aside");
const LOGO = document.querySelector("#\\#logo");
const MAIN =document.querySelector("body > main");
const BODY = document.querySelector("body");
const SMOG = document.querySelector("#smog");

function burgerClick () { 
  if (BURGERBTN.classList.contains("burger_normal-pos")) {SideMenuAdd()}
  else {SideMenuRemove()} 
}

function LogoStylizer(copacity,cvisibility,ctime_transmition) {
  LOGO.style.opacity = `${copacity}`;
  LOGO.style.visibility = `${cvisibility}`;
  LOGO.style.transition = `opacity ${ctime_transmition}s`;
}

function SideMenuAdd() {
      LogoStylizer (0, "hidden", 0.2)
      SmogSwitcher("block");
      BURGERBTN.classList.add("burger_direct-rotate")
      ASIDE.classList.add ("aside_direct-slide")
      BODY.classList.add("scroll-off")
      ASIDE.addEventListener("click", SideMenuRemove);
      MAIN.addEventListener("click", SideMenuRemove);
      BURGERBTN.addEventListener ("animationend", () => {
        BURGERBTN.classList.remove("burger_normal-pos")
        ASIDE.classList.remove("aside_normal-pos")
        BURGERBTN.classList.add("burger_active-pos")
        ASIDE.classList.add("aside_active-pos")
        BURGERBTN.classList.remove("burger_direct-rotate")
        ASIDE.classList.remove("aside_direct-slide")
      })    
}

function SideMenuRemove() {
      LogoStylizer (100, "visible", 1);
      SmogSwitcher("none");
      BURGERBTN.classList.add("burger_reverse-rotate");
      ASIDE.classList.add("aside_reverse-slide");
      BODY.classList.remove("scroll-off");
      ASIDE.removeEventListener("click", SideMenuRemove);
      MAIN.removeEventListener("click", SideMenuRemove);
      BURGERBTN.addEventListener ("animationend", () => {
        BURGERBTN.classList.remove("burger_active-pos")
        ASIDE.classList.remove("aside_active-pos")
        BURGERBTN.classList.add("burger_normal-pos")
        ASIDE.classList.add("aside_normal-pos")
        BURGERBTN.classList.remove("burger_reverse-rotate")
        ASIDE.classList.remove("aside_reverse-slide")
      })
}

function SmogSwitcher(state) {SMOG.style.display = `${state}`}

BURGERBTN.addEventListener ("click", burgerClick)


//SLAIDER

  const PETSALBUM = document.querySelector("#pets__album");
  const RIGHTBTN = document.querySelector("#btn-right");
  const LEFTBTN = document.querySelector("#btn-left");
  let cardName = document.querySelector("#card__description");
  let cardImg = document.querySelector("#pets-card > div.card__background > img");
  const randomArr =[];
  let elem;
  

function CardSet(currentElem,randomArr){
        let PetInBase = Math.floor(7 * Math.random());
        while (randomArr.indexOf(PetInBase) !== -1){
            PetInBase = Math.floor(7 * Math.random());
        }
        randomArr.push(PetInBase);
        currentElem.children[1].children[0].textContent = petsBase[PetInBase].name;
        currentElem.children[0].children[0].setAttribute("Src",petsBase[PetInBase].img);
        currentElem.children[0].children[0].setAttribute("Alt",petsBase[PetInBase].name); 
    return(currentElem)
}

/*function CardSet(cldnum, randomArr){
        let PetInBase = Math.floor(7 * Math.random());
        while (randomArr.indexOf(PetInBase) !== -1){
            PetInBase = Math.floor(7 * Math.random());
        }
        randomArr.push(PetInBase);

        PETSALBUM.children[cldnum].children[1].children[0].textContent = petsBase[PetInBase].name;
        PETSALBUM.children[cldnum].children[0].children[0].setAttribute("Src",petsBase[PetInBase].img);
        PETSALBUM.children[cldnum].children[0].children[0].setAttribute("Alt",petsBase[PetInBase].name);     
};
*/



for (let i = 0; i < PETSALBUM.childElementCount ; i++){
  elem = PETSALBUM.children[i]
  elem = CardSet(elem,randomArr)
}

function copyCard(direction , cardCount){
  if(direction==="left") {
    for (let i=0; i<cardCount; i++){
      let elem = PETSALBUM.firstElementChild.cloneNode(true)
      elem = CardSet(elem,randomArr)
      PETSALBUM.append(elem)
    }
  }
  else if(direction==="right"){
    for (let i=0; i<cardCount; i++){
      let elem = PETSALBUM.lastElementChild.cloneNode(true)
      elem = CardSet(elem,randomArr)
      PETSALBUM.prepend(elem)
    }
  }
}

function deleteCard(direction , cardCount){
  if(direction==="left") {
    for (let i=0; i<cardCount; i++){
      PETSALBUM.firstElementChild.remove()
    }
  }
  else if(direction==="right"){
    for (let i=0; i<cardCount; i++){
      PETSALBUM.lastElementChild.remove()
    }
  }
}


function pickLeft(){
  copyCard("left",1)
  PETSALBUM.classList.add("moveleft")
  PETSALBUM.addEventListener("animationend", () =>{PETSALBUM.classList.remove("moveleft") 
  deleteCard("left",1)
})
}

function pickRight(){
  copyCard("right" , 1)
  PETSALBUM.classList.add("moveright")
  PETSALBUM.addEventListener("animationend", () =>{PETSALBUM.classList.remove("moveright")
  deleteCard("right" , 1) 
})
}

LEFTBTN.addEventListener("click", pickLeft)

RIGHTBTN.addEventListener("click", pickRight)


   
 