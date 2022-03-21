import React from "react";


function App(){
    const formulario = document.getElementById('formulario');
    const nombre= document.getElementById('nombre');
    const apellido= document.getElementById('apellido');
    const telefono= document.getElementById('telefono');


    formulario.addEventListener('submit', function(e){
        e.preventDefault();
         
        /*no funciona
        var formData= new FormData(this);
        console.log(formData);
        console.log(JSON.stringify(formData));
        */
    
        const datanew= {nombre: nombre.value, apellido: apellido.value, telefono: telefono.value};
    
        //http://www.raydelto.org/agenda.php
        fetch('http://www.raydelto.org/agenda.php', {
            method: 'POST',
            //body: formData
            body: JSON.stringify(datanew)
        }).then(res => res.json())
        .then(text => console.log(text))
    })

    
}

export default App;