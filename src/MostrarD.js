import React from "react";

function App(){
    fetch('http://www.raydelto.org/agenda.php')
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error))
  
  const mostrarData = (data)=> {
    let body = ''
    for (let i = 0; i < data.length; i++) {
      body+= `<tr><td>${data[i].nombre}</td><td>${data[i].apellido}</td><td>${data[i].telefono}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
  }
  return (
    <div id="div2">
      <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                </tr>
            </thead>
            <tbody id="data">
              
            </tbody>
        </table>
    </div>
  );
}
export default App;