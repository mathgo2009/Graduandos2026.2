/* ======================================
   FIREBASE
====================================== */

import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    query,
    where,
    onSnapshot,
    serverTimestamp
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


/*
================================================
PEGA AQUÍ TU CONFIGURACIÓN DE FIREBASE
================================================

Firebase te dará algo parecido a esto.
Reemplaza solamente los textos entre comillas.
*/

const firebaseConfig = {
  apiKey: "AIzaSyByUwat6sUQOZSD1KmO4VRjaMP_nkIgbf4",
  authDomain: "graduandos2026-6035c.firebaseapp.com",
  projectId: "graduandos2026-6035c",
  storageBucket: "graduandos2026-6035c.firebasestorage.app",
  messagingSenderId: "1026419407470",
  appId: "1:1026419407470:web:9f97cc3f4517557b1e447f"
};

/* INICIAR FIREBASE */

const app =
    initializeApp(firebaseConfig);

const db =
    getFirestore(app);



/* ======================================
   MENÚ
====================================== */

const menuIcon =
    document.getElementById("menuIcon");

const navLinks =
    document.getElementById("navLinks");


menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("activo");

});


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("activo");

        });

    });



/* ======================================
   MÚSICA
====================================== */

const musica =
    document.getElementById("musica");

const botonMusica =
    document.getElementById("botonMusica");


let musicaActiva = false;


musica.volume = 0.30;


botonMusica.addEventListener(
    "click",

    async () => {

        if (!musicaActiva) {

            try {

                await musica.play();

                musicaActiva = true;

                botonMusica.textContent = "❚❚";

            }

            catch(error) {

                console.log(
                    "El navegador bloqueó la música."
                );

            }

        }

        else {

            musica.pause();

            musicaActiva = false;

            botonMusica.textContent = "♫";

        }

    }
);



/* ======================================
   28 GRADUANDOS
====================================== */

/*
foto1 = graduando 1
foto2 = graduando 2
...
foto28 = graduando 28

NO CAMBIÉ ESTA PARTE.
*/


const graduandos = [

    {
        nombre: "Nathalie Rodriguez",
        foto: "imagenes/foto1.jpeg",
        frase: "Un capítulo termina y otro comienza."
    },

    {
        nombre: "Rita Ceijas",
        foto: "imagenes/foto2.jpeg",
        frase: "Siempre recordaré esta etapa."
    },

    {
        nombre: "Mafer de Paz",
        foto: "imagenes/foto3.jpeg",
        frase: "Los mejores recuerdos quedan para siempre."
    },

    {
        nombre: "Emily Navas",
        foto: "imagenes/foto4.jpeg",
        frase: "Todo esfuerzo tiene su recompensa."
    },

    {
        nombre: "Avril López",
        foto: "imagenes/foto5.jpeg",
        frase: "El futuro comienza hoy."
    },

    {
        nombre: "Fatima Gramajo",
        foto: "imagenes/foto6.jpeg",
        frase: "Nunca olvidaremos esta historia."
    },

    {
        nombre: "Daniela Abal",
        foto: "imagenes/foto7.jpeg",
        frase: "Los recuerdos siempre nos acompañarán."
    },

    {
        nombre: "Fernanda Rivas",
        foto: "imagenes/foto8.jpeg",
        frase: "Esto apenas comienza."
    },

    {
        nombre: "Samantha Alvarado",
        foto: "imagenes/foto9.jpeg",
        frase: "Muchos sueños comienzan desde aquí."
    },

    {
        nombre: "Adriana Garcia",
        foto: "imagenes/foto10.jpeg",
        frase: "Cada momento valió la pena."
    },

    {
        nombre: "Dayana Vega",
        foto: "imagenes/foto11.jpeg",
        frase: "Nunca olvidaremos de dónde venimos."
    },

    {
        nombre: "Libny Muñoz",
        foto: "imagenes/foto12.jpeg",
        frase: "El camino continúa."
    },

    {
        nombre: "Majo Meda",
        foto: "imagenes/foto13.jpeg",
        frase: "Gracias por cada recuerdo."
    },

    {
        nombre: "Ashley Castillo",
        foto: "imagenes/foto14.jpeg",
        frase: "Todo gran sueño comienza con un primer paso."
    },

    {
        nombre: "Adian Cano",
        foto: "imagenes/foto15.jpeg",
        frase: "Nos llevamos mucho más que recuerdos."
    },

    {
        nombre: "Mathias Gomez",
        foto: "imagenes/foto16.jpeg",
        frase: "Nunca dejemos de soñar."
    },

    {
        nombre: "Sophia Morales",
        foto: "imagenes/foto17.jpeg",
        frase: "Un día recordaremos todo esto."
    },

    {
        nombre: "Vannia Velásquez ",
        foto: "imagenes/foto18.jpeg",
        frase: "Los buenos momentos siempre regresan en forma de recuerdos."
    },

    {
        nombre: "Daniela Us",
        foto: "imagenes/foto19.jpeg",
        frase: "La historia continúa."
    },

    {
        nombre: "Sophia Gomez",
        foto: "imagenes/foto20.jpeg",
        frase: "Gracias por haber formado parte de este capítulo."
    },

    {
        nombre: "Hilary Vásquez",
        foto: "imagenes/foto21.jpeg",
        frase: "Nunca fue solamente llegar a la meta."
    },

    {
        nombre: "Antonio Navarijo",
        foto: "imagenes/foto22.jpeg",
        frase: "Lo mejor todavía está por llegar."
    },

    {
        nombre: "Pablo Guzman",
        foto: "imagenes/foto23.jpeg",
        frase: "Cada final trae un nuevo comienzo."
    },

    {
        nombre: "Graduando 24",
        foto: "imagenes/foto24.jpeg",
        frase: "Que nunca falten nuevas metas."
    },

    {
        nombre: "Graduando 25",
        foto: "imagenes/foto25.jpeg",
        frase: "Un recuerdo puede durar para siempre."
    },

    {
        nombre: "Graduando 26",
        foto: "imagenes/foto26.jpeg",
        frase: "El futuro nos espera."
    },

    {
        nombre: "Graduando 27",
        foto: "imagenes/foto27.jpeg",
        frase: "Una promoción, muchas historias."
    },

    {
        nombre: "Graduando 28",
        foto: "imagenes/foto28.jpeg",
        frase: "Promoción 2026."
    }

];



/* ======================================
   CREAR TARJETAS
====================================== */

const graduandosGrid =
    document.getElementById(
        "graduandosGrid"
    );


graduandos.forEach(
    (graduando, indice) => {

        const tarjeta =
            document.createElement("article");


        tarjeta.className =
            "graduando";


        tarjeta.innerHTML = `

            <div class="graduando-imagen">

                <img
                    src="${graduando.foto}"
                    alt="${graduando.nombre}"
                    loading="lazy"
                >

            </div>


            <div class="graduando-info">

                <h3>
                    ${graduando.nombre}
                </h3>


                <p class="graduando-frase">

                    “${graduando.frase}”

                </p>


                <button
                    class="boton-mensajes"
                    data-indice="${indice}"
                >

                    Ver mensajes ♥

                </button>

            </div>

        `;


        graduandosGrid.appendChild(
            tarjeta
        );

    }
);



/* ======================================
   MENSAJES CON FIREBASE
====================================== */

const modalMensajes =
    document.getElementById(
        "modalMensajes"
    );

const cerrarModalMensajes =
    document.getElementById(
        "cerrarModalMensajes"
    );

const modalFotoGraduando =
    document.getElementById(
        "modalFotoGraduando"
    );

const modalNombreGraduando =
    document.getElementById(
        "modalNombreGraduando"
    );

const listaMensajes =
    document.getElementById(
        "listaMensajes"
    );

const formMensaje =
    document.getElementById(
        "formMensaje"
    );

const autorMensaje =
    document.getElementById(
        "autorMensaje"
    );

const relacionMensaje =
    document.getElementById(
        "relacionMensaje"
    );

const textoMensaje =
    document.getElementById(
        "textoMensaje"
    );

const mensajeConfirmacion =
    document.getElementById(
        "mensajeConfirmacion"
    );


let graduandoSeleccionado = 0;


/*
Esta variable sirve para cerrar
el listener anterior cuando cambias
de graduando.
*/

let cancelarListenerMensajes = null;



/* ======================================
   MOSTRAR MENSAJES DE FIREBASE
====================================== */

function escucharMensajes(indice) {

    /*
    Si ya había otro graduando
    abierto, detenemos su listener.
    */

    if (cancelarListenerMensajes) {

        cancelarListenerMensajes();

        cancelarListenerMensajes = null;

    }


    listaMensajes.innerHTML = `

        <div class="sin-mensajes">
            Cargando mensajes...
        </div>

    `;


    /*
    Buscamos solamente los mensajes
    pertenecientes al graduando seleccionado.
    */

    const consulta = query(

        collection(
            db,
            "mensajes"
        ),

        where(
            "graduandoId",
            "==",
            indice
        )

    );


    /*
    onSnapshot mantiene la información
    sincronizada en tiempo real.
    */

    cancelarListenerMensajes =
        onSnapshot(

            consulta,

            snapshot => {

                listaMensajes.innerHTML =
                    "";


                const mensajes = [];


                snapshot.forEach(
                    documento => {

                        mensajes.push({

                            id:
                                documento.id,

                            ...documento.data()

                        });

                    }
                );


                /*
                Ordenamos los mensajes
                del más antiguo al más nuevo.
                */

                mensajes.sort(
                    (a, b) => {

                        const fechaA =
                            a.creadoEn?.seconds || 0;

                        const fechaB =
                            b.creadoEn?.seconds || 0;


                        return fechaA - fechaB;

                    }
                );


                /*
                Si todavía no hay ninguno.
                */

                if (
                    mensajes.length === 0
                ) {

                    listaMensajes.innerHTML = `

                        <div class="sin-mensajes">

                            Todavía no hay mensajes.

                            Puedes ser la primera persona
                            en dejar unas palabras 💙

                        </div>

                    `;


                    return;

                }


                /*
                Crear las tarjetas.
                */

                mensajes.forEach(
                    mensaje => {

                        const tarjeta =
                            document.createElement(
                                "div"
                            );


                        tarjeta.className =
                            "tarjeta-mensaje";


                        const texto =
                            document.createElement(
                                "p"
                            );


                        texto.textContent =
                            `“${mensaje.texto}”`;


                        const firma =
                            document.createElement(
                                "div"
                            );


                        firma.className =
                            "mensaje-firma";


                        firma.textContent =
                            `${mensaje.autor} · ${mensaje.relacion}`;


                        tarjeta.appendChild(
                            texto
                        );


                        tarjeta.appendChild(
                            firma
                        );


                        listaMensajes.appendChild(
                            tarjeta
                        );

                    }
                );

            },


            error => {

                console.error(
                    "Error leyendo mensajes:",
                    error
                );


                listaMensajes.innerHTML = `

                    <div class="sin-mensajes">

                        No fue posible cargar
                        los mensajes.

                    </div>

                `;

            }

        );

}



/* ======================================
   ABRIR MENSAJES
====================================== */

function abrirMensajes(indice) {

    graduandoSeleccionado =
        indice;


    const graduando =
        graduandos[indice];


    modalFotoGraduando.src =
        graduando.foto;


    modalFotoGraduando.alt =
        graduando.nombre;


    modalNombreGraduando.textContent =
        graduando.nombre;


    mensajeConfirmacion.textContent =
        "";


    /*
    Comenzamos a escuchar los mensajes
    de este graduando.
    */

    escucharMensajes(indice);


    modalMensajes.classList.add(
        "activo"
    );


    document.body.classList.add(
        "modal-abierto"
    );

}



/* ======================================
   CERRAR MENSAJES
====================================== */

function cerrarMensajes() {

    modalMensajes.classList.remove(
        "activo"
    );


    document.body.classList.remove(
        "modal-abierto"
    );


    formMensaje.reset();


    mensajeConfirmacion.textContent =
        "";


    /*
    Cerramos el listener para
    no mantener conexiones innecesarias.
    */

    if (cancelarListenerMensajes) {

        cancelarListenerMensajes();

        cancelarListenerMensajes = null;

    }

}



/* ======================================
   BOTÓN VER MENSAJES
====================================== */

document.addEventListener(
    "click",

    event => {

        const boton =
            event.target.closest(
                ".boton-mensajes"
            );


        if (!boton) {

            return;

        }


        abrirMensajes(

            Number(
                boton.dataset.indice
            )

        );

    }
);



cerrarModalMensajes.addEventListener(
    "click",
    cerrarMensajes
);



modalMensajes.addEventListener(
    "click",

    event => {

        if (
            event.target ===
            modalMensajes
        ) {

            cerrarMensajes();

        }

    }
);



/* ======================================
   GUARDAR NUEVO MENSAJE EN FIREBASE
====================================== */

formMensaje.addEventListener(
    "submit",

    async event => {

        event.preventDefault();


        const autor =
            autorMensaje.value.trim();


        const relacion =
            relacionMensaje.value;


        const texto =
            textoMensaje.value.trim();


        if (
            !autor ||
            !relacion ||
            !texto
        ) {

            return;

        }


        /*
        Bloquear botón mientras
        se guarda.
        */

        const botonEnviar =
            formMensaje.querySelector(
                "button[type='submit']"
            );


        botonEnviar.disabled =
            true;


        botonEnviar.textContent =
            "Guardando...";


        mensajeConfirmacion.textContent =
            "";


        try {

            /*
            Guardar el mensaje
            en Firestore.
            */

            await addDoc(

                collection(
                    db,
                    "mensajes"
                ),

                {

                    graduandoId:
                        graduandoSeleccionado,

                    autor:
                        autor,

                    relacion:
                        relacion,

                    texto:
                        texto,

                    creadoEn:
                        serverTimestamp()

                }

            );


            /*
            Limpiar formulario.
            */

            formMensaje.reset();


            mensajeConfirmacion.textContent =
                "♥ Tu mensaje fue enviado correctamente.";


            /*
            No tenemos que llamar manualmente
            a mostrarMensajes.

            onSnapshot detectará automáticamente
            el mensaje nuevo y lo mostrará.
            */


            setTimeout(
                () => {

                    mensajeConfirmacion.textContent =
                        "";

                },

                4000
            );

        }

        catch(error) {

            console.error(
                "Error guardando mensaje:",
                error
            );


            mensajeConfirmacion.textContent =
                "No se pudo enviar el mensaje. Intenta nuevamente.";

        }

        finally {

            botonEnviar.disabled =
                false;


            botonEnviar.textContent =
                "Dejar mensaje ♥";

        }

    }
);



/* ======================================
   GALERÍA
====================================== */

const imagenesGaleria =
    Array.from(

        document.querySelectorAll(
            ".galeria img"
        )

    );


const lightbox =
    document.getElementById(
        "lightbox"
    );

const imagenGrande =
    document.getElementById(
        "imagenGrande"
    );

const cerrarLightbox =
    document.getElementById(
        "cerrarLightbox"
    );

const fotoAnterior =
    document.getElementById(
        "fotoAnterior"
    );

const fotoSiguiente =
    document.getElementById(
        "fotoSiguiente"
    );


let indiceImagen = 0;



function mostrarImagen(indice) {

    indiceImagen =
        indice;


    imagenGrande.src =
        imagenesGaleria[indice].src;


    lightbox.classList.add(
        "activo"
    );


    document.body.classList.add(
        "modal-abierto"
    );

}



function cerrarGaleria() {

    lightbox.classList.remove(
        "activo"
    );


    document.body.classList.remove(
        "modal-abierto"
    );

}



function siguienteImagen() {

    indiceImagen++;


    if (
        indiceImagen >=
        imagenesGaleria.length
    ) {

        indiceImagen = 0;

    }


    imagenGrande.src =
        imagenesGaleria[
            indiceImagen
        ].src;

}



function anteriorImagen() {

    indiceImagen--;


    if (
        indiceImagen < 0
    ) {

        indiceImagen =
            imagenesGaleria.length - 1;

    }


    imagenGrande.src =
        imagenesGaleria[
            indiceImagen
        ].src;

}



imagenesGaleria.forEach(
    (imagen, indice) => {

        imagen.addEventListener(
            "click",

            () => {

                mostrarImagen(
                    indice
                );

            }
        );

    }
);


cerrarLightbox.addEventListener(
    "click",
    cerrarGaleria
);


fotoSiguiente.addEventListener(
    "click",
    siguienteImagen
);


fotoAnterior.addEventListener(
    "click",
    anteriorImagen
);



/* ======================================
   FRASES
====================================== */

const frases = [

    "Lo mejor de esta etapa fueron las personas que formaron parte de ella.",

    "No recordaremos todos los días, pero sí muchos de los momentos.",

    "Un día comenzamos juntos y ahora cada uno comienza un camino diferente.",

    "El colegio termina, pero muchas historias apenas comienzan.",

    "Los lugares cambian, las personas crecen y los recuerdos permanecen.",

    "Una promoción termina, pero algunos vínculos permanecen."

];


const fraseTexto =
    document.getElementById(
        "fraseTexto"
    );


let indiceFrase = 0;


setInterval(() => {

    fraseTexto.style.opacity =
        "0";


    setTimeout(() => {

        indiceFrase++;


        if (
            indiceFrase >=
            frases.length
        ) {

            indiceFrase = 0;

        }


        fraseTexto.textContent =
            `“${frases[indiceFrase]}”`;


        fraseTexto.style.opacity =
            "1";

    }, 400);

}, 5500);



/* ======================================
   ÚLTIMO PASE DE LISTA
====================================== */

const nombres =
    graduandos.map(
        graduando =>
            graduando.nombre
    );


const nombreGraduando =
    document.getElementById(
        "nombreGraduando"
    );


let indiceNombre = 0;


setInterval(() => {

    nombreGraduando.style.opacity =
        "0";


    setTimeout(() => {

        nombreGraduando.textContent =
            nombres[indiceNombre];


        nombreGraduando.style.opacity =
            "1";


        indiceNombre++;


        if (
            indiceNombre >=
            nombres.length
        ) {

            indiceNombre = 0;

        }

    }, 400);

}, 2600);



/* ======================================
   CONTADORES
====================================== */

const contadores =
    document.querySelectorAll(
        ".contador"
    );


function animarContador(
    contador
) {

    const objetivo =
        Number(
            contador.dataset.numero
        );


    let actual = 0;


    const intervalo =
        setInterval(() => {

            actual++;


            contador.textContent =
                actual;


            if (
                actual >= objetivo
            ) {

                contador.textContent =
                    objetivo;


                clearInterval(
                    intervalo
                );

            }

        }, 35);

}



const observador =
    new IntersectionObserver(

        entradas => {

            entradas.forEach(
                entrada => {

                    if (
                        entrada.isIntersecting
                    ) {

                        animarContador(
                            entrada.target
                        );


                        observador.unobserve(
                            entrada.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.5
        }

    );


contadores.forEach(
    contador => {

        observador.observe(
            contador
        );

    }
);



/* ======================================
   TECLADO
====================================== */

document.addEventListener(
    "keydown",

    event => {

        if (
            event.key === "Escape"
        ) {

            if (
                lightbox.classList.contains(
                    "activo"
                )
            ) {

                cerrarGaleria();

            }


            if (
                modalMensajes.classList.contains(
                    "activo"
                )
            ) {

                cerrarMensajes();

            }

        }


        if (
            lightbox.classList.contains(
                "activo"
            )
        ) {

            if (
                event.key ===
                "ArrowRight"
            ) {

                siguienteImagen();

            }


            if (
                event.key ===
                "ArrowLeft"
            ) {

                anteriorImagen();

            }

        }

    }
);
