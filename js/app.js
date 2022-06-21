const section = document.getElementById('villes');
const button = document.querySelector('.lang');
const h1 = document.querySelector('h1');
button.addEventListener('click', ()=>{
    h1.innerHTML="Weather APP";
})
console.log(h1)
const villes = [
    {
        ville: "Lyon",
        img: "img/sun.jpg",
        temp: 35
    },
    {
        ville: "Paris",
        img: "img/sun.jpg",
        temp: 40
    },
    {
        ville: "Nice",
        img: "img/wind.png",
        temp: 35
    },
    {
        ville: "Lille",
        img: "img/cloudy.jpg",
        temp: 30
    },
    {
        ville: "Orléans",
        img: "img/wind.png",
        temp: 25
    },
]
for(let i = 0; i < villes.length; i++){
    section.innerHTML += `<article class="ville">
    <h2>${villes[i].ville}</h2>
    <img src="${villes[i].img}" alt="wind">
    <p>${villes[i].temp}°</p>
</article>

`}
