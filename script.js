const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
  sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
  sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
  body.classList.toggle("dark");

  if(body.classList.contains("dark")){
      modeText.innerText = "Light mode";
  }else{
      modeText.innerText = "Dark mode";
  
  }
});


const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector(".register-link");
const btnpopup = document.querySelector('btnLogin-popup');

registerlink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});

loginlink.addEventListener("click", ()=> {
  wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=> {
  wrapper.classList.add("active-popup");
});