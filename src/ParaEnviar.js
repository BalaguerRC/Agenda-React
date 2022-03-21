import React, {useState, useRef} from 'react';
import EnviarD from './EnviarD';

function ParaEnviar(){
    const [Pnombre, setNombre]= useState('NULL');
    const [Papelldio, setApellido]= useState('NULL');
    const [Ptelefono, setTelefono]= useState('NULL');
    const nombreRef = useRef();
    const apellidoRef = useRef();
    const telefonoRef = useRef();
  
    const EviarDatos =()=>{
      setNombre(nombreRef.current.value);
      setApellido(apellidoRef.current.value);
      setTelefono(telefonoRef.current.value);
      const datanew= {nombre: nombreRef.current.value, apellido: apellidoRef.current.value, telefono: telefonoRef.current.value};
  
  
      fetch('http://www.raydelto.org/agenda.php', {
          method: 'POST',
          body: JSON.stringify(datanew)
      }).then(res => res.json())
      .then(text => console.log(text))
    }
    return(
    <div id='envio'>
        <h1>Agenda React</h1>
        <div id='envio2'>
          Nombre:
          <input ref={nombreRef} type="text"></input>
          <p></p>
          Apellido:
          <input ref={apellidoRef} type="text"></input>
          <p></p>
          Telefono:
          <input ref={telefonoRef} type="text"></input>
          <p></p>
          <button onClick={EviarDatos}>Enviar</button>
          
        </div>
        <p></p>
        <EnviarD nombre={Pnombre} apellido={Papelldio} telefono={Ptelefono}/>
        <h5>Actualizar pagina para actualizar los datos de la tabla</h5>
      </div>
    );
}

export default ParaEnviar;