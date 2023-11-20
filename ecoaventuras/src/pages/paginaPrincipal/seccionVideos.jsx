import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import "../estilos/seccionVideos.css"



const Seccionvideos = () =>{

    const [showMinijuegos, setShowMinijuegos] = useState(false);
    const [showLecturas, setShowLecturas] = useState(false);
    const[showInicioSesion, setInicioSesion] = useState(false);
    const[showInicio, setInicio] = useState(false);
  
  
   
    const handleMinijuegosClick = () =>{
        setShowMinijuegos(true);
    
      }
  
    const handleLecturasClick = () => {
      setShowLecturas(true);
    }
  
    const handleInicioSesionClick = () =>{
      setInicioSesion(true);
    }
  
    const handleInicioClick = () =>{
      setInicio(true);
    }
  
  if(showMinijuegos){
    return<Navigate to = "/seccionjuegos"/>
  }
  
    if(showLecturas){
      return <Navigate to = "/seccionlecturas"/>
    }
  
    if(showInicioSesion){
      return <Navigate to ="/inicio"/>
    }
  
    if(showInicio){
      return <Navigate to = "/ecoaventura"/>
    }
    return(
<div className="frame3">
        <div className="div">
          <div className="text-wrapper">¡Educacion del cambio climatico</div>
          <div className="overlap">
          <img className="control" />
          <button className='boton-minijuegos' onClick={handleMinijuegosClick}/>
          <button className='boton-lecturas' onClick={handleLecturasClick}/>
          <button class = "boton-videos"/>
          <img className='videos'/>
          </div>
          <div className="text-wrapper-2">EcoEdVentures</div>
          <img className="usuario-name" alt="Usuario name" src="usuario-name.png" />
          <button class = "boton-sesion" onClick={handleInicioSesionClick}/>
          <div className="overlap-group">
            <div className="overlap-2">
              <div className="rectangulo" />
              <div className="minijuegos">EL CAMBIO CLIMATICO</div>
              <div className="rectangle" />
              <p className="texto-primerjueg">
              El cuento trata sobre cómo la contaminación atrapa el calor del sol en la atmósfera, causando problemas como escasez de agua, alimentos y eventos climáticos extremos. La "Comunidad Climática", que incluye bosques, ríos, mares, montañas y la atmósfera, se reúne para abordar estos problemas y nos enseña la importancia de proteger nuestro planeta.
              </p>
            </div>
            <img className="imagen-primerjuego" />
          </div>
          <div className="overlap-3">
            <div className="videos-interactivos-wrapper">
              <div className="videos-interactivos">CAUSAS DEL CAMBIO <br/> CLIMÁTICO?</div>
            </div>
            <img className="imagen-tercerjuego" />
            <div className="texto-tercerjuego-wrapper">
              <p className="texto-tercerjuego">
                <a href="http://www.strangeloopgames.com/eco/" rel="noopener noreferrer" target="_blank">
                  <span className="span"></span>
                </a>
                <span className="text-wrapper-3">

Serie de animación educativa que tiene por protagonista a Darwin, una curiosa y preguntona ranita de Darwin. En cada capítulo, nuestro anfitrión aprenderá sobre distintos temas, que amenazan la vida y ponen en peligro el medio ambiente, además de entregar recomendaciones y consejos para enfrentar situaciones de catástrofe y los nuevos desafíos que surgen a raíz del cambio climático.
                </span>
              </p>
            </div>
          </div>
          <div className="lecturas-wrapper">
            <div className="lecturas">EL CAMBIO CLIMATICO</div>
          </div>
          <div className="minijuegos-2">¡Videos Interactivos!</div>
          <img className="imagen-segundojuego"  />
          <img className="nios-jugando" />
          <p className="derechos-reservados">@2023 EcoEDVentures. All rights reserved</p>
          <div className="texto-segundojuego-wrapper">
            <p className="texto-segundojuego">
            En este vídeo vamos a tratar el cambio climático, ¿cuales son los riesgos del cambio climático?, ¿Cuales son los cambios que se están produciendo en nuestro planeta a causa del cambio climático? ¿como podemos tratar el cambio climático?. Así con este vídeo también se pueden resolver las dudas sobre el efecto invernadero, ¿en que consiste el Efecto invernadero? ¿Cuales son las causas del efecto invernadero? y sobre el deshielo, ¿por que se produce el deshielo ártico? ¿que podemos hacer para ralentizar el deshielo de los polos?.
            </p>
          </div>
          <p className="texto-minijuegos">
          Videos visuales que explican la problemática del cambio climático de manera cautivadora..
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

export default Seccionvideos;