'use client'

import React from 'react';
import {LuExternalLink} from 'react-icons/Lu'
import styles from './Cards.module.css';
import Link from 'next/link';

export function Cards() {

  const proyectos = [
    {
      titulo: 'Generador de perfiles',
      descripcion: 'Genera perfiles consumiendo de una api',
      imagen: 'generadorPerfiles.png',
      url: 'https://stalwart-gnome-b94e4a.netlify.app/'
    },
    {
      titulo: 'Tienda',
      descripcion: 'Tienda ficticia para crear compras, consumiendo una api',
      imagen: 'portafolio2tienda.png',
      url: 'https://stalwart-gnome-b94e4a.netlify.app/'
    },
    {
      titulo: 'Tareas pendientes',
      descripcion: 'Aplicación creada con React. Podés agregar, editar y eliminar tareas. ',
      imagen: 'workpending3.png',
      url: 'https://stalwart-gnome-b94e4a.netlify.app/'
    },
    {
      titulo: 'Login de usuarios',
      descripcion: 'Creada para realizar el login y registro de usuarios',
      imagen: 'login1.jpg',
      url: 'https://stalwart-gnome-b94e4a.netlify.app/'
    },
    {
      titulo: 'Detek',
      descripcion: 'Página web creada para empresa de productos electronicos',
      imagen: 'detek2.png',
      url: 'https://detek.com.ar/'
    },
    
  ]

  return(
    <>
    <section className={styles.sectionCards}>
    <div className={styles.containerCards}>
  {proyectos.map((proyecto, index) => (
    <div key={index} className={styles.card}>
      <figure className={styles.containerImage}>
        <img className={styles.image} src={proyecto.imagen} alt={proyecto.titulo} />
      </figure>

      <div className={styles.description}>
        <h1 className={styles.title}>{proyecto.titulo}</h1>
        <p className={styles.textCard}>{proyecto.descripcion}</p>
      </div>

      <div className={styles.link}>
        <a href={proyecto.url} className={styles.url}>
          <LuExternalLink className={styles.goUrl} />
        </a>
      </div>
    </div>
  ))}
</div>
</section>

      {/* <section className={styles.cardArriba}>

        <div className={styles.card1}>
          <div className={styles.img}>
          <img src="generadorPerfiles.png" className={styles.imgCard1} alt='random profile' />
          </div>
          <div className={styles.descripcion}>
          <h1 className={styles.titleCard}>Generador de perfiles</h1>
          <p className={styles.textCard}>
            Genera perfiles atravez de una api  
          </p>
          </div>
          </div>
          <div className={styles.ContenedorLink}>
            <div className={styles.Link}>
            <LuExternalLink className={styles.deploy}/>
            <a className={styles.linkDeploy} href="https://stalwart-gnome-b94e4a.netlify.app/">Ir al link </a>
            </div>
          </div>
        


        <div className={styles.card2}>
        <div className={styles.img}>
          <img src="portafolio2tienda.png" className={styles.imgCard2} alt='Tu Shop' />
          
          </div>
          <div className={styles.descripcion}>
          <h1 className={styles.titleCard}>Tienda</h1>
            <p className={styles.textCard}>Tienda fictisia para crear compras
          </p>
          </div>
        </div>

        <div className={styles.card3}>
        <div className={styles.img}>
          <img src="workpending3.png" className={styles.imgCard1} alt='work pending' />
          </div>
          <div>
          <h1 className={styles.titleCard}>Work pending</h1>
          <p className={styles.textCard}>
          Agregar, editar y eliminar tareas. 
          </p>
          </div>
        </div>

      </section>
      
      <section className={styles.cardAbajo}>
      <div className={styles.card4}>
        
          <img src="login1.jpg" className={styles.imgCard1} alt='App login' />
          <a href="">
          <h1 className={styles.titleCard}></h1>
          <p className={styles.textCard}>
            Lorem ipsum dolor sit ameae provident dicta numquam. Hic, incidunt.
          </p>
          </a>
        </div>
        <div className={styles.card5}>
          
          <img src="detek2.png" className={styles.imgCard1} alt='Detek' />
          <a href="">
          <h1 className={styles.titleCard}></h1>
          <p className={styles.textCard}>
            Lorem ipsum dolor sit ameae provident dicta numquam. Hic, incidunt.
          </p>
          </a>
        </div>
        <div className={styles.card6}>
          
          <img src="" alt='#' />
          <a href="">
          <h1 className={styles.titleCard}></h1>
          <p className={styles.textCard}>
            Lorem ipsum dolor sit ameae provident dicta numquam. Hic, incidunt.
          </p>
          </a>
        </div>
      </section> */}
    
    </>
  )
}