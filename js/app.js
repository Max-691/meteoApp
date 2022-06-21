const section = document.getElementById('villes');

const tb_villes =  ["Lyon", "Paris", "Marseille", "Lille", "Nice", "Dijon", "Mions", "Toussieu", "Oullin", "Vaulx"];

const tb_temps = [15, 18, 14, 28, 12, 5, 32, 25, 17, 21];

const villes = [
    {
        tb_villes: `${tb_villes}`,
        tb_temps: `${tb_temps}`,
        ville: `${tb_villes[0]}`,
        img: "img/sun.jpg",
        temp: `${tb_temps[0]}`
    }
]
for(let i = 0; i < villes.length; i++){
    section.innerHTML += `<article class="ville">
    <h2></h2>
    <img src="img/wind.png" alt="wind">
    <p>15°</p>
</article>
<article class="ville">
    <h2>Lyon</h2>
    <img src="img/sun.jpg" alt="sun">
    <p>25°</p>
</article>
<article class="ville">
    <h2>Lyon</h2>
    <img src="img/rain.jpg" alt="rain">
    <p>14°</p>
</article>
<article class="ville">
    <h2>Lyon</h2>
    <img src="img/sun.jpg" alt="sun">
    <p>18°</p>
</article>
<article class="ville">
    <h2>Lyon</h2>
    <img src="img/cloudy.jpg" alt="cloudy">
    <p>13°</p>
</article>`
}