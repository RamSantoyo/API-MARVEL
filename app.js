
const url =`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e1bea05c09bc555218f08cd306bfeee5&hash=3ba1e7d6235aae54066b38c61996e7cc`;
fetch(url).then((res) =>{
    return res.json();
}).then((data) => {
    for(let personaje of data.data.results){          
        let numero = personaje.comics.available; //numero de comic en los que parece
        let nombre = personaje.name; //nombre del personaje
        let img = personaje.thumbnail.path; // url de la imageN
        let extension = personaje.thumbnail.extension;// extension de la imagen
        let url = personaje.urls[0].url;// url del personaje

        crear(numero, nombre, img, extension, url);//llamar funcion para crear el personaje
    }
})

function crear (numero, nombre, img, extension, url){//pasar parametros a la funcion

    const seccion = document.querySelector('#card');// seleccionar la seccion
    
    //Generar div
    const card = document.createElement('A');
    card.href = url;
    card.className = 'card';
    
    //Generar img
    const imgCard = document.createElement('IMG');
    imgCard.src = img + '.' + extension;
    imgCard.alt = nombre;

    //Generar a
    const a = document.createElement('A');
    a.href = url;
    a.innerHTML = nombre;

    seccion.appendChild(card);
    card.appendChild(imgCard);
    card.appendChild(a);
}
