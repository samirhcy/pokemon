//About Page

const favorites = ["mewtwo","kyogre","zeraora","rayquaza"];

favorites.forEach(function(name, index){
    let request = new XMLHttpRequest();
    request.open("GET", `https://pokeapi.co/api/v2/pokemon/${name}`);

    request.onload = function() {
        if (request.status !== 200) return;
        let data = JSON.parse(this.response);
        document.getElementById("fav-" + index).src = data.sprites.front_default;
    };
    request.send();
});