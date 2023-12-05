"use strict"
let contRojo=0, contAzul=0
$(()=>{
    rojoDraggable()
    azulDraggable()
    rojoDroppable();
    azulDroppable()

})

const rojoDraggable=()=>{
    $(".rojo").draggable({
        //limitar el arrastre
        containment:"#principal",
        helper:"clone", //crear una copia
        opacity:0.35, //modifica la opacidad
        //axis:"x", //movimiento horizontal
        //axis:"y", //movimiento vertical
        revert:true, //retorna a la posición actual
        revertDuration:2000, //duración de retorno
        start: ((event, ui)=>{
            console.log('comienza draggable');
        }),
        drag: ((event, ui)=>{
            console.log('El objeto está siendo arrastrado');
        }),
        stop: ((event, ui)=>{
            console.log('Fin del draggable');
        })
    })

}
const azulDraggable=()=>{
    $(".azul").draggable({
        //limitar el arrastre
        containment:"#principal",
        revert:true //retorna a la posición actual

    })
}
const rojoDroppable=function(){
    $("#contRojo").droppable({
       classes:{
        "ui-droppable-hover": "ui-state-hover"
       },
       accept:".rojo", // solamente acepta los objetos cuya clase es rojo
       drop: function(event, ui){ //event es el objeto donde se realiza el drop (contenedor), ui es el objeto que se suelta (caja roja)
        $(event.target).append(ui.draggable);
        $(event.target).append(ui.draggable);
        //establecer las nuevas coordenadas
        $(this).find("div:last").css({
            top:ui.position.top,
            left:ui.position.left
        });
        //quitar el atributo revert al objeto que se arrastra
        $(ui.draggable).draggable("option", "revert", false);
        //quitar el draggable al cuadrado
        $(ui.draggable).draggable("disable");

        $(this).find("span").html(`Arrastra aquí elementos rojos<br><b>Contador= ${++contRojo}</b>`);

       },
       over:function(){
        $(this).find("span").text("Suelta el objeto rojo")
       },
       out:function(){
        $(this).find("span").text("Arrastra aquí elementos rojos")
       }

    })

}
const azulDroppable=function(){
    $("#contAzul").droppable({
        classes:{
         "ui-droppable-hover": "ui-state-hover"
        },
        accept:".azul", // solamente acepta los objetos cuya clase es azul
        drop: function(event, ui){ //event es el objeto donde se realiza el drop (contenedor), ui es el objeto que se suelta (caja roja)
         $(event.target).append(ui.draggable);
        
         //establecer las nuevas coordenadas
         
         //quitar el atributo revert al objeto que se arrastra
         $(ui.draggable).draggable("option", "revert", false);
         //quitar el draggable al cuadrado
         $(ui.draggable).draggable("disable");
 
         $(this).find("span").html(`Arrastra aquí elementos rojos<br><b>Contador= ${++contAzul}</b>`);
 
        },
        over:function(){
         $(this).find("span").text("Suelta el objeto azul")
        },
        out:function(){
         $(this).find("span").text("Arrastra aquí elementos azul")
        }
    })
}