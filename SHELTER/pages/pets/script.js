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

  //PAGINATION
  const ALBUM =document.querySelector("#paginationAlbum");
  const MAX_BACK_BTN=document.querySelector("#max-back");
  const STEP_BACK_BTN=document.querySelector("#step-back");
  const PAGE_VIEW=document.querySelector("#page-view");
  const STEP_DIRECT_BTN=document.querySelector("#step-direct");
  const MAX_DIRECT_BTN=document.querySelector("#max-direct");
  let ScreenWight = document.body.clientWidth;
  if(ScreenWight>=1280){
    petsGenerationNum = 8;
  }
  else if(ScreenWight>=768){
    petsGenerationNum = 6;
  } else if(ScreenWight>=320){
    petsGenerationNum = 3;
  }

  let paginationList = PetsArrCreate(petsGenerationNum)
function suffleArr(arrLength){
    arr=[]
    let n;
    while(arr.length < arrLength){
      n = Math.trunc(Math.random()*8)
      if(!arr.includes(n)){
         arr.push(n)
         }
    }
  return arr
}

function PetsArrCreate(PetsPerPage){
  let pages =  Math.trunc(48 / PetsPerPage);
  let book ={}
  let PosiblePetsArr=[]
  let buffArr =[]
  for (let i=0; i<6 ; i++) {PosiblePetsArr = PosiblePetsArr.concat(suffleArr(8)) }
  //console.log(PosiblePetsArr)
  for(let i = 1; i <= pages; i++){
   let PageIn=[] 
   for(let j = 0; j<PetsPerPage; j++){
     PosiblePetsArr = buffArr.concat(PosiblePetsArr)
     buffArr =[]
     for(let k = 0; k < PosiblePetsArr.length; k++){
             if (!PageIn.includes(PosiblePetsArr[k])){
                 PageIn[j] = PosiblePetsArr[k]
                 PosiblePetsArr.splice(k,1)
                 break
                 }
              else{
                buffArr.push(PosiblePetsArr[k])
                PosiblePetsArr.splice(k,1)
              }
        }
           
   }
   book[i] = PageIn;
 }
  return(book)
}

function CheckDisableUp(currentPage){
    if (currentPage === Object.keys(paginationList).length) {
        STEP_DIRECT_BTN.setAttribute("disabled",true)
        STEP_DIRECT_BTN.firstElementChild.classList.remove("color-dark-3xl")
        STEP_DIRECT_BTN.firstElementChild.classList.add("color-dark-s")
        STEP_DIRECT_BTN.removeEventListener("click",PageUp)
        MAX_DIRECT_BTN.setAttribute("disabled",true) 
        MAX_DIRECT_BTN.firstElementChild.classList.remove("color-dark-3xl")
        MAX_DIRECT_BTN.firstElementChild.classList.add("color-dark-s")
        MAX_DIRECT_BTN.removeEventListener("click",PageUpMax)   
    }
    else{
        STEP_DIRECT_BTN.removeAttribute("disabled")
        STEP_DIRECT_BTN.firstElementChild.classList.remove("color-dark-s")
        STEP_DIRECT_BTN.firstElementChild.classList.add("color-dark-3xl")
        STEP_DIRECT_BTN.addEventListener("click",PageUp)
        MAX_DIRECT_BTN.addEventListener("click",PageUpMax)
        MAX_DIRECT_BTN.removeAttribute("disabled")
        MAX_DIRECT_BTN.firstElementChild.classList.remove("color-dark-s")
        MAX_DIRECT_BTN.firstElementChild.classList.add("color-dark-3xl")
    }
}
function CheckDisableDawn(currentPage){
    if (currentPage === 1) {
        STEP_BACK_BTN.setAttribute("disabled",true)
        STEP_BACK_BTN.firstElementChild.classList.remove("color-dark-3xl")
        STEP_BACK_BTN.firstElementChild.classList.add("color-dark-s")
        STEP_BACK_BTN.removeEventListener("click",PageDawn)
        MAX_BACK_BTN.setAttribute("disabled",true) 
        MAX_BACK_BTN.firstElementChild.classList.remove("color-dark-3xl")
        MAX_BACK_BTN.firstElementChild.classList.add("color-dark-s") 
        MAX_BACK_BTN.removeEventListener("click",PageDawnMax)  
    }
    else if(currentPage !== 1){
        STEP_BACK_BTN.removeAttribute("disabled")
        STEP_BACK_BTN.firstElementChild.classList.remove("color-dark-s")
        STEP_BACK_BTN.firstElementChild.classList.add("color-dark-3xl")
        STEP_BACK_BTN.addEventListener("click",PageDawn)
        MAX_BACK_BTN.removeAttribute("disabled")
        MAX_BACK_BTN.firstElementChild.classList.remove("color-dark-s")
        MAX_BACK_BTN.firstElementChild.classList.add("color-dark-3xl")
        MAX_BACK_BTN.addEventListener("click",PageDawnMax)
    }

}


function CardSet(currentElem,PetInBase){
    currentElem.children[1].children[0].textContent = petsBase[PetInBase].name;
    currentElem.children[0].children[0].setAttribute("Src",petsBase[PetInBase].img);
    currentElem.children[0].children[0].setAttribute("Alt",petsBase[PetInBase].name); 
return(currentElem)
}

function CreateRandomTemplate (paginationList, pageNum, targetParant) {
    let card = document.createElement("div");
    let elem = ALBUM.firstElementChild.cloneNode(true);
    targetParant.innerHTML ="";
    targetParant.innerHTML = card.innerHTML;
    for (let i = 0; i < paginationList[pageNum].length; i++ ) {
      elem = CardSet(elem, paginationList[pageNum][i])
      card.append(elem);
      targetParant.innerHTML += card.innerHTML;
    }
    return (targetParant)
  } 
function PaginationAction(paginationPage){
  PAGE_VIEW.textContent = paginationPage;
  CreateRandomTemplate(paginationList,paginationPage,ALBUM)
  CheckDisableUp(paginationPage)
  CheckDisableDawn(paginationPage)
}
function PageUp(){
        currentPage++ 
        PaginationAction(currentPage)
}

function PageUpMax(){
        currentPage = +(Object.keys(paginationList).length);
        PaginationAction(currentPage)
}

function PageDawnMax(){
        currentPage = 1 
        PaginationAction(currentPage)
}

function PageDawn(){
        currentPage-- 
        PaginationAction(currentPage)
}

  let currentPage = 1;
  CreateRandomTemplate(paginationList,currentPage,ALBUM)


  STEP_DIRECT_BTN.addEventListener("click",PageUp)
  MAX_DIRECT_BTN.addEventListener("click",PageUpMax)
  STEP_BACK_BTN.addEventListener("click",PageDawn)
  MAX_BACK_BTN.addEventListener("click",PageDawnMax)


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


