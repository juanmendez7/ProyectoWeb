import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import "../estilos/seccionJuegos.css"



const Seccionjuegos = () =>{
  
  const [showLecturas, setShowLecturas] = useState(false);
  const [showVideos, setShowVideos] = useState(false);
  const[showInicioSesion, setInicioSesion] = useState(false);
  const[showInicio, setInicio] = useState(false);


 
  const handleLecturasClick = () =>{
    setShowLecturas(true);
  }

  const handleVideosClick = () => {
    setShowVideos(true);
  }

  const handleInicioSesionClick = () =>{
    setInicioSesion(true);
  }

  const handleInicioClick = () =>{
    setInicio(true);
  }


  if(showLecturas){
    return <Navigate to = "/seccionlecturas"/>
  }

  if(showVideos){
    return <Navigate to = "/seccionvideos"/>
  }

  if(showInicioSesion){
    return <Navigate to ="/inicio"/>
  }

  if(showInicio){
    return <Navigate to = "/ecoaventura"/>
  }


    return(
        <div className="frame1">
        <div className="div">
          <div className="text-wrapper">¡Educacion del cambio climatico</div>
          <div className="overlap">
          <img className="control" />
         <button class = "boton-libros" onClick={handleLecturasClick}/>
          <button class = "boton-videos" onClick={handleVideosClick}/>
          </div>
          <div className="text-wrapper-2">EcoEdVentures</div>
          <img className="usuario-name" alt="Usuario name" src="usuario-name.png" />
          <button class = "boton-sesion" onClick={handleInicioSesionClick}/>
          <div className="overlap-group">
            <div className="overlap-2">
              <div className="rectangulo" />
              <div className="minijuegos">Stardew Valley</div>
              <div className="rectangle" />
              <p className="texto-primerjueg">
                En este videojuego se debe cuidar una granja que pertenecía al abuelo del protagonista, replantando toda
                la huerta y cuidando al ganado, encontrando nuevos recursos para desarrollar el terreno y explorando
                cuevas y lugares misteriosos en los que encontrar tesoros y herramientas. Cada decisión que se tome
                influirá en el desarrollo y el estado de la granja, de modo que los niños deben valorar qué puede ser lo
                mejor en cada caso. Recomendado para mayores de 12 años.
              </p>
            </div>
            <img className="imagen-primerjuego" />
          </div>
          <div className="overlap-3">
            <div className="videos-interactivos-wrapper">
              <div className="videos-interactivos">Eco</div>
            </div>
            <img className="imagen-tercerjuego" />
            <div className="texto-tercerjuego-wrapper">
              <p className="texto-tercerjuego">
                <a href="http://www.strangeloopgames.com/eco/" rel="noopener noreferrer" target="_blank">
                  <span className="span">ECO</span>
                </a>
                <span className="text-wrapper-3">
                  {" "}
                  es una aventura gráfica impresionante donde los personajes se encuentran en un planeta imaginario que
                  está a punto de chocar con un meteorito. Es un juego de supervivencia y simulación en el que los
                  jugadores/as se abastecen del medio ambiente para fabricar sus propias creaciones. ¡Pero atención! Cada
                  acción que hacen afecta directamente al rico y diverso ecosistema que los rodea.
                </span>
              </p>
            </div>
          </div>
          <div className="lecturas-wrapper">
            <div className="lecturas">World Rescue</div>
          </div>
          <div className="minijuegos-2">¡Juega Ahora!</div>
          <img className="imagen-segundojuego"  />
          <img className="nios-jugando" />
          <p className="derechos-reservados">@2023 EcoEDVentures. All rights reserved</p>
          <div className="texto-segundojuego-wrapper">
            <p className="texto-segundojuego">
              World Rescue es un juego de aplicación para dispositivos móviles y tablets destinado a niños y adolescentes
              . En este juego, los jugadores
              eligen uno de los jóvenes héroes o heroínas y viajan por todo el mundo para abordar problemas comunitarios
              como enfermedades, deforestación, sequías, contaminación, desplazamientos forzados y pobreza. Su objetivo es
              ayudar a resolver estos desafíos y trabajar juntos para crear un mundo más sostenible.
            </p>
          </div>
          <p className="texto-minijuegos">
            Divertidos juegos que enseñan conceptos sobre el cambio climático mientras entretienen.
          </p>
          <button class = "boton-inicio" onClick={handleInicioClick}/>
          <div className="overlap-4">
            <div className="rectangle-2" />
            <div className="text-wrapper-4">Inicio</div>
          </div>
        </div>
      </div>
    )
}

export default Seccionjuegos;