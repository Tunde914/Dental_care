let mynavbar = document.querySelector(".navbar");
let mybars = document.querySelector(".bar");

mybars.onclick = () =>{
    mybars.classList.toogle('fa-times')
    mynavbar.classList.toogle('active')
}