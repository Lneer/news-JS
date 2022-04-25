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
  let PetsArr =[];
  let paginationList = {
      1:[3,6,1,5,7,2,0,4],
      2:[1,6,0,2,4,5,7,3],
      3:[5,4,1,3,6,2,0,7],
      4:[6,3,5,4,2,1,0,7],
      5:[3,6,4,1,0,5,2,7],
      6:[7,3,0,5,2,6,4,1],
  }
function PetsListCreate(unicPetsNum, PetsListLength){
    let resultArr=[];
    let unicPetArr =[];

    for (i=0; resultArr.length < PetsListLength; i++) {
        let n= Math.round(7 * Math.random());
      
        if(!unicPetArr.includes(n) && (unicPetArr.length < unicPetsNum)){
            unicPetArr.push(n)
            resultArr.push(n);
            }
        else if ((unicPetArr.length >= unicPetsNum)){
            unicPetArr.length=0 ;
            console.log(unicPetArr.length)
            unicPetArr.push(n);
            resultArr.push(n);
            }
        }
    console.log(i)
    return(resultArr)
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