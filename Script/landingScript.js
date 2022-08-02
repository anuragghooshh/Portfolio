// Nav Bar
document.getElementById("ham").addEventListener("click",function(){
  document.querySelector(".navs").classList.toggle("showNav");
  document.getElementById("ham").classList.toggle("active");
  document.getElementById("dim").classList.toggle("active");
});
document.getElementById("dim").addEventListener("click",function(){
  document.querySelector(".navs").classList.remove("showNav");
  document.getElementById("ham").classList.remove("active");
  document.getElementById("dim").classList.remove("active");
})

//Message
try {
  document.getElementById("closeMessage").addEventListener("click",function(){
    document.getElementById("message").style.display="none";
  });
} catch (error) {
  console.log(error);
}

// Dark Mode
let mode = document.getElementById("mode");
let r = document.querySelector(":root");
let darkMode = localStorage.getItem("darkMode");

function setDarkMode(){
  try {
    document.getElementById("name").style.filter = "invert(1)";
  } catch (error) {
    console.log(error);
  }
  document.getElementById("modeHolder").classList.add("dark");
  document.getElementById("ham").style.filter = "invert(1)";
  document.getElementsByTagName("nav")[0].style.background = "linear-gradient(#0E0E0E,#0e0e0eef,#0E0E0E)";
  r.style.setProperty("--fontColor","#eeeeee");
  r.style.setProperty("--backgoundColor","#0E0E0E");
  r.style.setProperty("--specific","#00FF00");
  r.style.setProperty("--lighter","#aaaaaa");
  r.style.setProperty("--nav","#0E0E0Ef9");
  localStorage.setItem("darkMode","enabled"); 
}
function setLightMode(){
  try {
    document.getElementById("name").style.filter = "invert(0)";
  } catch (error) {
    console.log(error);
  }
  document.getElementById("modeHolder").classList.remove("dark");
  document.getElementById("ham").style.filter = "invert(0)";
  document.getElementsByTagName("nav")[0].style.background = "linear-gradient(#eeeeee,#ffffffd9,#eeeeee)";
  r.style.setProperty("--fontColor","#0E0E0E");
  r.style.setProperty("--backgoundColor","#eeeeee");
  r.style.setProperty("--specific","#001fa1");
  r.style.setProperty("--lighter","#525252");
  r.style.setProperty("--nav","#eeeeeee9");
  localStorage.removeItem("darkMode");
}
if(darkMode === "enabled"){
  setDarkMode();
}
mode.addEventListener("click",function(){
  darkMode = localStorage.getItem("darkMode");
  if(darkMode!== "enabled"){
    setDarkMode();
  }else{
    setLightMode();
  }
});

//Show
const showCase = document.querySelectorAll(".carousel");
const underLine = document.querySelector(".underline");
const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry=>{
    entry.target.classList.toggle("show",entry.isIntersecting);
    // if(entry.isIntersecting) 
    //   observer.unobserve(entry.target);
  })
  {
    threshold : 0;
  }
})

try {
  showCase.forEach(showcase=>{
    observer.observe(showcase);
  })
} catch (error) {
  console.log(error);
}

//Smooth Scroll
try {
  $('.scrollTo a').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
  
      const hash = this.hash;
  
      $('html, body')
        .animate({
          scrollTop: $(hash).offset().top
        },1000);
    }
  });
} catch (error) {
  console.log(error);
}


$('.goUp').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },1000);
  }
});

//Preloader
setTimeout(function(){
  $('#preloader').fadeToggle();
  try {
    observer.observe(underLine);  
  } catch (error) {
    console.log(error);
  }
},1500)
