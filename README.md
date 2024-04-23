<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox Responsive con Imágenes</title>
  <style>
    /* Estilos generales */
    body {
      margin: 25px;
      padding: 10px;
      font-family: Arial, sans-serif;
      display: flex;
    
    }
    .contenedor1 {

      padding: 80px; /* Espaciado interior del contenedor */
      background-color: #979595; /* Fondo gris */
      display: flex;
      flex: 2;
      align-content: flex-end;
      flex-wrap: nowrap;
      flex-direction: column;
      align-items: flex-end
    
     
        
          
           
           
      
    
      
    }
    .columna1 {
        .columna {
            display: flex;
            flex-direction: column;
            /* Organizar en columna */
            position: absolute;
            right: 100px;
            top: 20px;
            bottom: 0;
            width: auto;
            height: auto;
            align-items: flex-end
        }
      

           
            
      
    }
    /* Estilos para banderas en fila */
    .fila1 {
        display: flex;
            flex-direction: row;
            /* Organizar en columna */
            position: absolute;
            right: 100px;
            top: 20px;
            bottom: 0;
            width: auto;
            height: auto;
            align-items: flex-end
    }
    
    
    .imagen1 {
      width: 80%; /* Ocupa todo el ancho disponible */
      max-width: 80px; /* Ancho máximo de cada imagen */
      margin-bottom: 20px; /* Espacio entre las imágenes */
    }
    .contenedor2 {
        padding: 120px; /* Espaciado interior del contenedor */
        margin: 0px;
      
      display: flex;
      flex: 2;
      align-items: flex-start;
      align-self: flex-start;
      flex-wrap: nowrap;
      flex-direction: row;
      align-items: flex-start;
      position:fixed
      
    
      
    }
    .columna2 {
      display: flex;
      flex-direction: column; /* Organizar en columna */
      
    }
    /* Estilos para banderas en fila */
    .fila2 {
      display: flex;
      flex-direction: row; /* Organizar en fila */
      justify-content:flex-start; /* Centrar elementos horizontalmente */
      margin-bottom: 0px; /* Espacio abajo de la fila */
    }
    
    
    .imagen2 {
      width: 80%; /* Ocupa todo el ancho disponible */
      max-width: 80px; /* Ancho máximo de cada imagen */
      margin-bottom: 20px; /* Espacio entre las imágenes */

    }

    .bandera {
      width: 150px; /* Ancho de las banderas */
      height: auto; /* Altura automática para mantener la proporción */
      margin-right: 5px; /* Espaciado entre las banderas */
    }

  </style>
</head>
<body>
  <div class="contenedor1">
    <div class="columna1">
        <img src="multimedia/japon.png" alt="imagen1 5" class="bandera">
    </div>
    <div class="columna1">
        <img src="multimedia/PANAMA.jpg" alt="imagen1 6" class="bandera">
    </div>
    <div class="columna1">
        <img src="multimedia/republicaD.png" alt="imagen1 6" class="bandera">
    </div>
        <div class="columna1">
        <img src="multimedia/estadosU.png" alt="imagen1 6" class="bandera">
    </div>
    <div class="contenedor2">
        <div class="fila2">
            <img src="multimedia/costa rica.png" alt="imagen1 5" class="bandera">
        </div>
        <div class="fila2">
            <img src="multimedia/cataluna.jpg" alt="imagen1 6" class="bandera">
        </div>
        <div class="fila2">
            <img src="multimedia/guinea.jpg" alt="imagen1 6" class="bandera">
        </div>
            <div class="fila2">
            <img src="multimedia/emiratos.jpg" alt="imagen1 6" class="bandera">
        </div>
        
        
    </div>
    




    



  </div>


</body>
</html>

