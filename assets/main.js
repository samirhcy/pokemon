//PokeSearch Codes

//Quick facts Section
const facts = [
    "Rhydon was the first Pokémon ever created by the developers.",
    "Chansey is a female-only species with no male counterpart.",
    "Kangaskhan are born with a baby already in their pouch, which is not a separate Pokémon.",
    "Goldeen and its evolved form Seaking are the only Pokémon that can learn the move Waterfall through leveling up.",
    "Eelektross and its pre-evolutions (Tynamo, Eelektrik) have no type weaknesses due to their Levitate ability, which grants immunity to Ground-type moves.",
    "Slowbro is the only Pokémon that can devolve back into Slowpoke if the Shellder attached to its tail is removed."
  ];//sourced from online (Google Search)
let factIndex = 0;

function rotateFact() {
    document.getElementById("facts-show").textContent = facts[factIndex];
    factIndex = (factIndex + 1) % facts.length;
}
rotateFact();
setInterval(rotateFact, 4500);


//preText loop (copy of Quick facts)
const pokemons = [ "Pikachu", "Charizard","Jigglypuff", "Squirtle", "Charmander", "Charmeleon", "Mew", "MewTwo", " Ivysaur", "Bulbasaur", "Wartortle", "Blastoise"];
let pokeIndex = 0

function rotatePokemon() {
    document.getElementById("show").textContent = pokemons[pokeIndex];
    pokeIndex = (pokeIndex + 1) % pokemons.length;

}
rotatePokemon();
setInterval(rotatePokemon, 2000)

//PokeSearch
    //Changing theme/card color:
const typeColors = {
    fire: "#FF6B35",    water: "#4FC3F7",   grass: "#66BB6A",
    electric: "#FFD54F", psychic: "#CE93D8", ice: "#80DEEA",
    dragon: "#7E57C2",  dark: "#5D4037",    fairy: "#F48FB1",
    fighting: "#EF5350", poison: "#AB47BC",  ground: "#BCAAA4",
    flying: "#90CAF9",  bug: "#AED581",     rock: "#BDBDBD",
    ghost: "#7986CB",   steel: "#90A4AE",   normal: "#EEEEEE"
};

function pokeSearch(){

    let pokemon = $(".pokemon").val().toLowerCase().trim();
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    if (!pokemon) return;

    let request = new XMLHttpRequest();
    request.open("GET", url);

    request.onload = function() {

        if (request.status === 404){
            alert("Please enter a valid Pokemon name!")
            return;
        }

        if (request.status >= 200 && request.status < 400){
            let data = JSON.parse(this.response);
            let pokeID = data.id;
            let frontImg = data.sprites.front_default;
            let backImg = data.sprites.back_default;
            let shinyImg = data.sprites.front_shiny;
            let pokeName = data.name;
            let pokeHeight = data.height;
            let pokeWeight = data.weight;
            let pokeXP = data.base_experience;
            let hp = data.stats[0].base_stat;
            let attack = data.stats[1].base_stat;
            let defense = data.stats[2].base_stat;
            let speed = data.stats[5].base_stat;
            let primaryType = data.types[0].type.name;
            let themeColor = typeColors[primaryType] || "#4FC3F7";
            
            //Card Titles
            $("#res1").text(`Flip the Card`);
            $("#res2").text(`Pokemon: ${pokemon}`);
            //Infos
            $("#pokeName").text(`Poke Name: ${pokeName}`);
            $("#pokeID").text(`Poke ID: ${pokeID}`);
            $("#pokeHeight").text(`Height: ${pokeHeight}`);
            $("#pokeWeight").text(`Weight: ${pokeWeight}`);
            $("#pokeXP").text(`Base XP: ${pokeXP}`);
            //sprites
            $("#front").attr("src", frontImg);
            $("#back").attr("src", backImg);
            $("#shiny").attr("src", shinyImg);
            //rogress bar data
            $("#bar-hp").css("width", (hp / 255 * 100) + "%");
            $("#bar-hp").text(hp);
            $("#bar-atk").css("width", (attack / 255 * 100) + "%");
            $("#bar-atk").text(attack);
            $("#bar-def").css("width", (defense / 255 * 100) + "%");
            $("#bar-def").text(defense);
            $("#bar-spd").css("width", (speed / 255 * 100) + "%");
            $("#bar-spd").text(speed);
            $("#preText").hide();
            $("#result-card").show();
            
            //themes
            $(".flip-card-back").css("background-color", themeColor)

        }
    };
    request.send();
    $(".pokemon").val("");


};

$(".pokemon").focus(function(){
        $("#result-card").hide();
        $("#preText").show();
    });

//PokeSearch Code ends her!
// My method/code can be copied to make the about page's API Usage.

//About Page-this code has been shifted to about.js due to errors from this file.

//const favorites = ["mewtwo","kyogre","zeraora","rayquaza"];

//favorites.forEach(function(name, index){
//    let request = new XMLHttpRequest();
//    request.open("GET", `https://pokeapi.co/api/v2/pokemon/${name}`);

//    request.onload = function() {
//        if (request.status !== 200) return;
//        let data = JSON.parse(this.response);
//       document.getElementById("fav-" + index).src = data.sprites.front_default;
//    };
//    request.send();
//});