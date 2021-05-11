/* axios: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> */

/* API: https://pokeapi.co/api/v2/pokemon/ */


let objetosPokemons;


function mostrapokedex(){
    let botao = document.querySelector(".show-poke");
    if(botao.classList.contains("inicio")){
        botao.innerHTML = "voltar início";
        botao.classList.remove("inicio");
        botao.classList.add("poke");
    }

    else if(botao.classList.contains("poke")){
        botao.innerHTML = "Mostrar pokedex";
        botao.classList.remove("poke");
        botao.classList.add("inicio");
    }
    document.querySelector(".pokedex.normal").classList.toggle("hidden");
    document.querySelector(".pokedex.favorites").classList.toggle("hidden");
    document.querySelector(".fav-text").classList.toggle("hidden")
    rodapokedex();
}

function rodapokedex(){
    /* Promise */
    const pokedexPromise = axios.get("https://pokeapi.co/api/v2/pokemon/");

    pokedexPromise.then((response) =>{
        setTimeout(()=>{
            colocapokemons(response.data.results);
            objetosPokemons = response.data.results;
            mostrarFavoritos();
            document.querySelector(".loading").classList.toggle("hidden");
        },2000);
    });
    document.querySelector(".loading").classList.toggle("hidden");
    pokedexPromise.catch((err)=>{
        console.log(err);
    });
}

function colocapokemons(pokemons){
    let pokedex = document.querySelector(".pokedex.normal");
    pokedex.innerHTML = "";
    for(let i = 0; i< pokemons.length; i++){
        const card = criaCard(pokemons[i], i);
        pokedex.innerHTML += card;
    }
}

function criaCard(pokemon, idx){
    const card = `<div class="card" onClick="adicionarFavorito(${idx})">
            <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx+1}.png"/>
            
            <h2>${pokemon.name}</h2>
        </div>`;
    return card;
}

function adicionarFavorito(idx){
    if(!localStorage.getItem("pokeFavoritos")){
        let pokeFavoritos = [idx];
        pokeFavoritos = JSON.stringify(pokeFavoritos);
        localStorage.setItem("pokeFavoritos", pokeFavoritos);
    }
    else{
        let pokeFavoritos = localStorage.getItem("pokeFavoritos");
        pokeFavoritos = JSON.parse(pokeFavoritos);
        if(!pokeFavoritos.includes(idx)){
            pokeFavoritos.push(idx);
        }
        pokeFavoritos = JSON.stringify(pokeFavoritos);
        localStorage.setItem("pokeFavoritos", pokeFavoritos);
    }
    mostrarFavoritos();
}

function mostrarFavoritos(){
    let favoritos = localStorage.getItem("pokeFavoritos");
    if(favoritos){
        favoritos = JSON.parse(favoritos);
        colocapokemonsFav(favoritos);
    }
}

function colocapokemonsFav(pokemons_indexes){
    let pokedex = document.querySelector(".pokedex.favorites");
    pokedex.innerHTML = "";
    pokemons = pokemons_indexes.map(index => {
        const obj = {
            name: objetosPokemons[index].name,
            url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
        };
        return obj;
    });
    console.log(pokemons);
    for(let i = 0; i< pokemons.length; i++){
        const card = criaCard(pokemons[i], pokemons_indexes[i]);
        pokedex.innerHTML += card;
    }
}

/*Set interval, settimeout e clearinterval */

let tempo = 0;

let intervalo = setInterval(()=>{
    tempo++;
    document.querySelector("p").innerHTML = tempo;
}, 1000);
document.querySelector("p").innerHTML = tempo;

function pauseTimer(){
    clearInterval(intervalo);
    setTimeout(()=>{
        intervalo = setInterval(()=>{
            tempo++;
            document.querySelector("p").innerHTML = tempo;
        }, 1000);
    }, 3000);
}

function stopTimer(){
    clearInterval(intervalo);
}