import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import "../estilos/seccionLecturas.css"



const Seccionlecturas = () =>{

    const [showMinijuegos, setShowMinijuegos] = useState(false);
    const [showVideos, setShowVideos] = useState(false);
    const[showInicioSesion, setInicioSesion] = useState(false);
    const[showInicio, setInicio] = useState(false);
  
  
   
    const handleMinijuegosClick = () =>{
        setShowMinijuegos(true);
    
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
  
  if(showMinijuegos){
    return<Navigate to = "/seccionjuegos"/>
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
        <div className="frame2">
        <div className="div">
          <div className="text-wrapper">¡Educacion del cambio climatico</div>
          <div className="overlap">
          <img className="control" />
          <button className='boton-minijuegos' onClick={handleMinijuegosClick}/>
         <img class = "libros" />
          <button class = "boton-videos" onClick={handleVideosClick}/>
          </div>
          <div className="text-wrapper-2">EcoEdVentures</div>
          <img className="usuario-name" alt="Usuario name" src="usuario-name.png" />
          <button class = "boton-sesion" onClick={handleInicioSesionClick}/>
          <div className="overlap-group">
            <div className="overlap-2">
              <div className="rectangulo" />
              <div className="minijuegos">EL CLIMA, MI AMIGO</div>
              <div className="rectangle" />
              <p className="texto-primerjueg">
              El cuento trata sobre cómo la contaminación atrapa el calor del sol en la atmósfera, causando problemas como escasez de agua, alimentos y eventos climáticos extremos. La "Comunidad Climática", que incluye bosques, ríos, mares, montañas y la atmósfera, se reúne para abordar estos problemas y nos enseña la importancia de proteger nuestro planeta.
              </p>
            </div>
            <img className="imagen-primerjuego" />
          </div>
          <div className="overlap-3">
            <div className="videos-interactivos-wrapper">
              <div className="videos-interactivos">¿QUE ES EL CAMBIO <br/> CLIMÁTICO?</div>
            </div>
            <img className="imagen-tercerjuego" />
            <div className="texto-tercerjuego-wrapper">
              <p className="texto-tercerjuego">
                <a href="http://www.strangeloopgames.com/eco/" rel="noopener noreferrer" target="_blank">
                  <span className="span"></span>
                </a>
                <span className="text-wrapper-3">
                  
                  En este libro -pensado para niñas y niños que se preguntan cómo cuidar el planeta y qué es cambio climático- busca explicar de la forma más sencilla posible por qué ha subido la temperatura de la Tierra, cuáles son las causas del calentamiento global que experimentamos hoy en día, cómo podemos contribuir de forma individual y cómo debemos actuar de forma colectiva -en la familia, en el colegio, en nuestra comunidad- para ayudar a reversar este problema.
                </span>
              </p>
            </div>
          </div>
          <div className="lecturas-wrapper">
            <div className="lecturas">EL ORIGEN DEL CAMBIO
            <br/> CLIMÁTICO HASTA AHORA </div>
          </div>
          <div className="minijuegos-2">¡Lecturas Educativas!</div>
          <img className="imagen-segundojuego"  />
          <img className="nios-jugando" />
          <p className="derechos-reservados">@2023 EcoEDVentures. All rights reserved</p>
          <div className="texto-segundojuego-wrapper">
            <p className="texto-segundojuego">
            Conoce el origen del cambio climático en un viaje a través del origen de la Tierra.Viaja en el tiempo y descubre cómo ha cambiado el clima desde el origen de la Tierra.Un primer libro sobre cómo ha evolucionado nuestro planeta desde los primeros signos del cambio climático hasta la actualidad, cuando el reciclaje, las energías renovables y los pequeños gestos de cada uno de nosotros son imprescindibles para cuidar del medio ambiente.
            </p>
          </div>
          <p className="texto-minijuegos">
          Lecturas adaptadas que utilizan un enfoque lúdico para transmitir información esencial.
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

export default Seccionlecturas;