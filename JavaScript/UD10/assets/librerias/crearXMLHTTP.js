"use strict";

const crearConexion = () => {
    let objeto;
    if (window.XMLHttpRequest) {
        objeto = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try {
            objeto = new ActiveXObject("MSXML2.XMLHTTP");;
        } catch (e) {
            objeto = new ActiveXObject("Microsoft.XMLHTTP");;
        }
    }
    return objeto;
}