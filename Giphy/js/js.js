/*
const search= (e)=>{
    e.preventDefault();
    console.log(e);
}

const inputSearch = document.getElementById('search');
inputSearch.onkeydown = (event) =>{
    console.log(event);
    if () {
        
    }
}*/

//contiene acceso de la api
const url = 'https://api.giphy.com/v1/gifs/search';
let busqueda ="?q=";
const key = '&api_key=f477G6MKLeUV6Jhki4xITpPGC9lsU4ox';
const lim = "&limit=50";

let q = "";
let urlComplete = "";

//acceso btn
const btnBus = document.getElementById('btnBus');

btnBus.onclick =() =>{
    document.getElementById("album").innerHTML = "";
    q = document.getElementById('busqueda').value;
    urlComplete = url + busqueda + q + key + lim;
    getData();
}

const getData = async () =>{
    //donde sale la info
    await fetch(urlComplete).then((response) =>{
        return response.json();
    }).then((giphy)=>{
        console.log(giphy);
    
    for (let i = 0; i < giphy.data.length; i++) {
        const gif = document.createElement('img');

        gif.src = giphy.data[i].images["original"].url;
        gif.className ="mb-3";
        document.getElementById("album").appendChild(gif);
    }
    })
}
getData();


