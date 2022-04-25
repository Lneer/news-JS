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

  let PETSALBUM = document.querySelector("#pets__album");
  const ITEM_ACTIVE = document.querySelector("#active-slide");
  const ITEM_LEFT = document.querySelector("#right-slide");
  const ITEM_RIGHT = document.querySelector("#left-slide");
  const RIGHTBTN = document.querySelector("#btn-right");
  const LEFTBTN = document.querySelector("#btn-left");
  let cardName = document.querySelector("#card__description");
  let cardImg = document.querySelector("#pets-card > div.card__background > img");
  let ScreenWight = document.body.clientWidth;
  let petsGenerationNum;
  let randomArr = [];
  let previousArr =[];
  
if(ScreenWight>=1280){
  petsGenerationNum = 3;
}
else if(ScreenWight>=768){
  petsGenerationNum = 2;
} else if(ScreenWight>=320){
  petsGenerationNum = 1;
}

function CardSet(currentElem,randomArr){
        let PetInBase = Math.floor(7 * Math.random());
        while ((randomArr.indexOf(PetInBase) !== -1) || (previousArr.indexOf(PetInBase) !== -1)){
            PetInBase = Math.floor(7 * Math.random());
        }
        randomArr.push(PetInBase);
        currentElem.children[1].children[0].textContent = petsBase[PetInBase].name;
        currentElem.children[0].children[0].setAttribute("Src",petsBase[PetInBase].img);
        currentElem.children[0].children[0].setAttribute("Alt",petsBase[PetInBase].name); 

    return(currentElem)
}

function CreateRandomTemplate (elemcount, targetParant) {
  let card = document.createElement("div");
  let elem = ITEM_ACTIVE.firstElementChild.cloneNode(true);
  targetParant.innerHTML ="";
  targetParant.innerHTML = card.innerHTML;
  for (let i = 0; i < elemcount; i++ ) {
    elem = CardSet(elem,randomArr)
    card.append(elem);
    targetParant.innerHTML += card.innerHTML;
  }
  return (targetParant)
}

CreateRandomTemplate( petsGenerationNum, ITEM_ACTIVE)
previousArr = randomArr.slice(0,randomArr.length)
randomArr.length = 0


function pushLeft(){
  CreateRandomTemplate (petsGenerationNum, ITEM_LEFT);
  previousArr = randomArr.slice(0,randomArr.length);
  randomArr.length = 0;
  PETSALBUM.classList.add("moveleft");
  LEFTBTN.removeEventListener("click", pushLeft);
  RIGHTBTN.removeEventListener("click", pushRight);
}

function pushRight(){
  CreateRandomTemplate (petsGenerationNum, ITEM_RIGHT);
  previousArr = randomArr.slice(0,randomArr.length)
  randomArr.length = 0;
  PETSALBUM.classList.add("moveright");
  LEFTBTN.removeEventListener("click", pushLeft);
  RIGHTBTN.removeEventListener("click", pushRight);
}

LEFTBTN.addEventListener("click", pushLeft)
RIGHTBTN.addEventListener("click", pushRight)

PETSALBUM.addEventListener("animationend",(animationEvent) => {
  if (animationEvent.animationName === "moveleft"){
    
    PETSALBUM.classList.remove("moveleft");
    ITEM_ACTIVE.innerHTML = ITEM_LEFT.innerHTML ;
  }
  else if (animationEvent.animationName === "moveright") {
    PETSALBUM.classList.remove("moveright") ;
    ITEM_ACTIVE.innerHTML = ITEM_RIGHT.innerHTML; 
  }

  LEFTBTN.addEventListener("click", pushLeft)
  RIGHTBTN.addEventListener("click", pushRight)
})

// POPUP - EVENT
const POPUP_WINDOW = document.querySelector("#popup-window")
const POPUP_IMAGE=document.querySelector("#image")
const POPUP_NAME =document.querySelector("#name")
const POPUP_TYPE =document.querySelector("#type")
const POPUP_DESCRIPTION =document.querySelector("#description")
const POPUP_AGE=document.querySelector("#Age")
const POPUP_INOCULATION=document.querySelector("#Inoculations")
const POPUP_DISEASES=document.querySelector("#Diseases")
const POPUP_PARASITES=document.querySelector("#Parasites")
const POPUP_CLOSE = document.querySelector("#close-popup-btn")


function PopupCreate(chosedname){
  for(let i=0; i<petsBase.length; i++)
  if (petsBase[i].name == chosedname) {

    POPUP_IMAGE.setAttribute("Src",petsBase[i].img)
    POPUP_IMAGE.setAttribute("Alt",petsBase[i].name)
    POPUP_NAME.textContent = petsBase[i].name;
    POPUP_TYPE.textContent = `${petsBase[i].type} - ${petsBase[i].breed} `;
    POPUP_DESCRIPTION.textContent = petsBase[i].description;
    POPUP_AGE.innerHTML = `<b>Age</b>: ${petsBase[i].age}`
    POPUP_INOCULATION.innerHTML = `<b>Inoculations</b>: ${petsBase[i].inoculations.join(", ")}`
    POPUP_DISEASES.innerHTML = `<b>Diseases</b>: ${petsBase[i].diseases.join(", ")}`
    POPUP_PARASITES.innerHTML = `<b>Parasites</b>: ${petsBase[i].parasites.join(", ")}`
    
  }
}

function Lernmore (event) {

  //const target = event.target;
  //target.getElementbyID()
 //const petName = target.querySelector(".card__description").textContent;
 const petName = event.target.querySelector(".card__description").textContent;
 console.log(petName)
  PopupCreate(petName)
  //let cardName = target.ALBUM
}
//PopupCreate("Charly");

PETSALBUM.addEventListener("click",(event) =>{
  const petName = event.target.querySelector("#card__description").textContent;
  PopupCreate(petName)
  POPUP_WINDOW.classList.remove("popup_NoNdisplay")
  BODY.classList.add("scroll-off")
  POPUP_CLOSE.addEventListener("click", () =>{
    POPUP_WINDOW.classList.add("popup_NoNdisplay")
    BODY.classList.remove("scroll-off")
  } )
} )
