//Data
let titles={
  0:{
    title:"Breaking Bad",
    subTitle:" Crime Drama",
    desc:"A high school chemistry teacher dying of cancer teams with a former student to secure his family's future by manufacturing and selling crystal ...",
    videoURL:""
  },
  1:{
    title:"The Walking Dead",
    subTitle:"Post-apocalyptic Horror Drama",
    desc:"Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.Sheriff Deputy Rick Grimes ...",
    videoURL:""
  },
  2:{
    title:"Game of Thrones",
    subTitle:"Fantasy Drama",
    desc:"It's the depiction of two powerful families -- kings and queens, knights and renegades, liars and honest men -- playing a deadly game for control of the Seven ...",
    videoURL:""
  },
  3:{
    title:"The Punisher",
    subTitle:"َAction",
    desc:"Frank Castle was an honest ex-Marine with a family he loved. But when that family was murdered, he became a vigilante with a uniquely brutal brand of justice...",
    videoURL:""
  },
  4:{
    title:"Squid Game",
    subTitle:"Thriller, Horror",
    desc:"It revolves around a secret contest where 456 players, all of whom are in deep financial hardship, risk their lives to play a series of deadly children's games ...",
    videoURL:""
  },
  5:{
    title:"Anne with an E",
    subTitle:"Drama",
    desc:"The adventures of a young orphan girl living in the late 19th century. Follow Anne as she learns to navigate her new life on Prince Edward Island, in this new ...",
    videoURL:""
  },
}



//Swiper 
// create thumbs swiper
let thumbsSwiper = new Swiper('.thumbsSwiper', {
  spaceBetween: 10,
  slidesPerView: 5,
  breakpoints: {
    200: {
      slidesPerView: 1.5
    },
    400: {
      slidesPerView: 1.5
    },
    600: {
      slidesPerView: 3
    },
    1100: {
      slidesPerView: 5
    },
  },
  freeMode: true,
  watchSlidesProgress: true,
});


const swiper = new Swiper('.bannerSwiper', {
  spaceBetween: 0,
  effect: "fade",
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //make thumbs slider 
  thumbs: {
    swiper: thumbsSwiper
  }

});




//Change titles
let changeTitles=(index)=>{
let title=document.querySelector("#title");
let subTitle=document.querySelector("#sub-title");
let desc=document.querySelector("#desc");

title.innerHTML=`<h1>${titles[index].title}</h1>`
}
//Show overlay
let overlay=document.querySelector(".overlay");
let showTrailer=()=>{
  overlay.classList.add("show");
}
// close overlay
let closeOverlay=()=>{
  overlay.classList.remove("show");
}