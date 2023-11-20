import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../estilos/ecoAventura.css"


const EcoAventura = () => {
  const [showMinijuegos, setShowMinijuegos] = useState(false);
  const [showLecturas, setShowLecturas] = useState(false);
  const [showVideos, setShowVideos] = useState(false);


  const handleMinijuegosClick = () =>{
    setShowMinijuegos(true);

  }

  const handleLecturasClick = () =>{
    setShowLecturas(true);
  }

  const handleVideosClick = () => {
    setShowVideos(true);
  }

  if(showMinijuegos){
    return <Navigate to = "/seccionjuegos"/>
  }

  return (
<div className="frame">
      <div className="div">
        <div className="text-wrapper">¡Educacion del cambio climatico</div>
        <div className="overlap">
        <button class = "boton-juegos" onClick={handleMinijuegosClick}/>
        <button class = "boton-libros" onClick={handleLecturasClick}/>
        <button class = "boton-videos" onClick={handleVideosClick}/>
        </div>
        <div className="text-wrapper-2">EcoEdVentures</div>
        <div className="overlap-group">
          <div className="eco-ed-ventures">EcoEdVentures</div>
          <p className="texto">
            El objetivo general de &#34;EcoEdVentures&#34; es fomentar la conciencia, el conocimiento y la acción en
            niños en relación con el cambio climático. A través de una experiencia educativa interactiva, participativa
            y divertida, se busca no solo informar, sino también inspirar y empoderar a los niños para que sean agentes
            de cambio en la lucha contra el cambio climático.
          </p>
        </div>
        <img className="usuario-name" alt="Usuario name" src="usuario-name.png" />
        <img className="cerrar-sesion" alt="Cerrar sesion" src="cerrar-sesion.png" />
        <div className="overlap-2">
          <div className="seccuib" />
          <img className="imagen-presentacion"/>
          <div className="rectangulo" />
          <p className="texto-minijuegos">
            En la sección de minijuegos, los niños podrán encontrar una emocionante variedad de actividades interactivas
            diseñadas específicamente para educar y concienciar sobre el cambio climático y la importancia de cuidar
            nuestro medio ambiente. Estos juegos están diseñados de manera divertida y atractiva para involucrar a los
            más jóvenes en temas ambientales.
          </p>
          <div className="minijuegos">Mini-juegos</div>
        </div>
        <div className="overlap-group-2">
          <div className="lecturas">Lecturas educativas</div>
          <p className="texto-lecturas">
            En la sección de lecturas educativas, los niños podrán encontrar una amplia variedad de artículos, historias
            y libros relacionados con la educación ambiental y el cambio climático. Estas lecturas están diseñadas para
            informar, inspirar y concienciar a los jóvenes sobre la importancia de cuidar el medio ambiente
          </p>
        </div>
        <div className="overlap-3">
          <div className="videos-interactivos">Videos Interactivos</div>
          <p className="texto-videos">
            En la sección de videos interactivos, los niños podrán disfrutar de contenidos audiovisuales diseñados para
            involucrarlos de manera activa en la educación ambiental y el cambio climático. Estos videos no solo son
            informativos, sino que también permiten a los jóvenes participar y tomar decisiones a lo largo de la
            experiencia.
          </p>
        </div>
        <img className="imagen-minijuegos" />
        <img className="imagen-lecturas"  />
        <img className="imagen-videos"  />
        <img className="nios-jugando" />
        <p className="derechos-reservados">@2023 EcoEDVentures. All rights reserved</p>
      </div>
    </div>
  );
};

export default EcoAventura;






