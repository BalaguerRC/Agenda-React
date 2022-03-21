import React from "react";

function Enviar({nombre, apellido, telefono}){
    
    return (
        <div>
            Nombre: {nombre}, Apellido: {apellido} y Telefono: {telefono}
        </div>
    );
}

export default Enviar;