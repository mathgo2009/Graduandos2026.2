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
*/


const graduandos = [

    {
        nombre: "Graduando 1",
        foto: "imagenes/foto1.jpeg",
        frase: "Un capítulo termina y otro comienza."
    },

    {
        nombre: "Graduando 2",
        foto: "imagenes/foto2.jpeg",
        frase: "Siempre recordaré esta etapa."
    },

    {
        nombre: "Graduando 3",
        foto: "imagenes/foto3.jpeg",
        frase: "Los mejores recuerdos quedan para siempre."
    },

    {
        nombre: "Graduando 4",
        foto: "imagenes/foto4.jpeg",
        frase: "Todo esfuerzo tiene su recompensa."
    },

    {
        nombre: "Graduando 5",
        foto: "imagenes/foto5.jpeg",
        frase: "El futuro comienza hoy."
    },

    {
        nombre: "Graduando 6",
        foto: "imagenes/foto6.jpeg",
        frase: "Nunca olvidaremos esta historia."
    },

    {
        nombre: "Graduando 7",
        foto: "imagenes/foto7.jpeg",
        frase: "Los recuerdos siempre nos acompañarán."
    },

    {
        nombre: "Graduando 8",
        foto: "imagenes/foto8.jpeg",
        frase: "Esto apenas comienza."
    },

    {
        nombre: "Graduando 9",
        foto: "imagenes/foto9.jpeg",
        frase: "Muchos sueños comienzan desde aquí."
    },

    {
        nombre: "Graduando 10",
        foto: "imagenes/foto10.jpeg",
        frase: "Cada momento valió la pena."
    },

    {
        nombre: "Graduando 11",
        foto: "imagenes/foto11.jpeg",
        frase: "Nunca olvidaremos de dónde venimos."
    },

    {
        nombre: "Graduando 12",
        foto: "imagenes/foto12.jpeg",
        frase: "El camino continúa."
    },

    {
        nombre: "Graduando 13",
        foto: "imagenes/foto13.jpeg",
        frase: "Gracias por cada recuerdo."
    },

    {
        nombre: "Graduando 14",
        foto: "imagenes/foto14.jpeg",
        frase: "Todo gran sueño comienza con un primer paso."
    },

    {
        nombre: "Graduando 15",
        foto: "imagenes/foto15.jpeg",
        frase: "Nos llevamos mucho más que recuerdos."
    },

    {
        nombre: "Graduando 16",
        foto: "imagenes/foto16.jpeg",
        frase: "Nunca dejemos de soñar."
    },

    {
        nombre: "Graduando 17",
        foto: "imagenes/foto17.jpeg",
        frase: "Un día recordaremos todo esto."
    },

    {
        nombre: "Graduando 18",
        foto: "imagenes/foto18.jpeg",
        frase: "Los buenos momentos siempre regresan en forma de recuerdos."
    },

    {
        nombre: "Graduando 19",
        foto: "imagenes/foto19.jpeg",
        frase: "La historia continúa."
    },

    {
        nombre: "Graduando 20",
        foto: "imagenes/foto20.jpeg",
        frase: "Gracias por haber formado parte de este capítulo."
    },

    {
        nombre: "Graduando 21",
        foto: "imagenes/foto21.jpeg",
        frase: "Nunca fue solamente llegar a la meta."
    },

    {
        nombre: "Graduando 22",
        foto: "imagenes/foto22.jpeg",
        frase: "Lo mejor todavía está por llegar."
    },

    {
        nombre: "Graduando 23",
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
   MENSAJES
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



function obtenerMensajes(indice) {

    const guardados =
        localStorage.getItem(
            `mensajes_graduando_${indice}`
        );


    if (!guardados) {

        return [];

    }


    try {

        return JSON.parse(
            guardados
        );

    }

    catch {

        return [];

    }

}



function guardarMensajes(
    indice,
    mensajes
) {

    localStorage.setItem(

        `mensajes_graduando_${indice}`,

        JSON.stringify(mensajes)

    );

}



function mostrarMensajes(indice) {

    const mensajes =
        obtenerMensajes(indice);


    listaMensajes.innerHTML = "";


    if (mensajes.length === 0) {

        listaMensajes.innerHTML = `

            <div class="sin-mensajes">

                Todavía no hay mensajes.
                Puedes ser la primera persona
                en dejar unas palabras 💙

            </div>

        `;

        return;

    }


    mensajes.forEach(mensaje => {

        const tarjeta =
            document.createElement("div");


        tarjeta.className =
            "tarjeta-mensaje";


        const texto =
            document.createElement("p");


        texto.textContent =
            `“${mensaje.texto}”`;


        const firma =
            document.createElement("div");


        firma.className =
            "mensaje-firma";


        firma.textContent =
            `${mensaje.autor} · ${mensaje.relacion}`;


        tarjeta.appendChild(texto);

        tarjeta.appendChild(firma);

        listaMensajes.appendChild(
            tarjeta
        );

    });

}



function abrirMensajes(indice) {

    graduandoSeleccionado =
        indice;


    const graduando =
        graduandos[indice];


    modalFotoGraduando.src =
        graduando.foto;


    modalNombreGraduando.textContent =
        graduando.nombre;


    mostrarMensajes(indice);


    modalMensajes.classList.add(
        "activo"
    );


    document.body.classList.add(
        "modal-abierto"
    );

}



function cerrarMensajes() {

    modalMensajes.classList.remove(
        "activo"
    );


    document.body.classList.remove(
        "modal-abierto"
    );


    formMensaje.reset();

}



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



formMensaje.addEventListener(
    "submit",

    event => {

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


        const mensajes =
            obtenerMensajes(
                graduandoSeleccionado
            );


        mensajes.push({

            autor,
            relacion,
            texto

        });


        guardarMensajes(

            graduandoSeleccionado,

            mensajes

        );


        mostrarMensajes(
            graduandoSeleccionado
        );


        formMensaje.reset();


        mensajeConfirmacion.textContent =
            "♥ Tu mensaje fue guardado.";


        setTimeout(() => {

            mensajeConfirmacion.textContent =
                "";

        }, 3000);

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

    indiceImagen = indice;


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

                mostrarImagen(indice);

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

            cerrarGaleria();
            cerrarMensajes();

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
