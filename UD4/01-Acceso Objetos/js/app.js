"use strict"

const acceso=()=>{
    //acceder al objeto cuyo id es nombreId
    const nombre=document.getElementById("nombreId");
    console.log({nombre});
    // nombre.type="button"
    console.log(nombre.value);
    console.log(document.getElementById("nombreId"));
    //acceder por el attributo name
    const nombres=document.getElementsByName("nombre")
    console.log({nombres});
    //mostrar el value de apellidos

    console.log(nombres.value);

    //acceder por el tag
    const nombreTag=document.getElementsByTagName("input");
    //mostrar elementos
    console.log(`Los elementos de nombreTag son ${nombreTag.length}`);
    //acceder al value de apellidos
    console.log(nombreTag[1].value);
}

//script
acceso();