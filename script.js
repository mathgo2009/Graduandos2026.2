/* ======================================
   FIREBASE
====================================== */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    query,
    where,
    onSnapshot,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyByUwat6sUQOZSD1KmO4VRjaMP_nkIgbf4",
    authDomain: "graduandos2026-6035c.firebaseapp.com",
    projectId: "graduandos2026-6035c",
    storageBucket: "graduandos2026-6035c.firebasestorage.app",
    messagingSenderId: "1026419407470",
    appId: "1:1026419407470:web:9f97cc3f4517557b1e447f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* ======================================
   MENÚ
====================================== */
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon?.addEventListener("click", () => {
    navLinks?.classList.toggle("activo");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => navLinks?.classList.remove("activo"));
});

/* ======================================
   MÚSICA
====================================== */
const musica = document.getElementById("musica");
const botonMusica = document.getElementById("botonMusica");
let musicaActiva = false;

if (musica) musica.volume = 0.30;

botonMusica?.addEventListener("click", async () => {
    if (!musica) return;

    if (!musicaActiva) {
        try {
            await musica.play();
            musicaActiva = true;
            botonMusica.textContent = "❚❚";
            botonMusica.setAttribute("aria-label", "Pausar música");
        } catch (error) {
            console.log("El navegador bloqueó la música.", error);
        }
        return;
    }

    musica.pause();
    musicaActiva = false;
    botonMusica.textContent = "♫";
    botonMusica.setAttribute("aria-label", "Reproducir música");
});

/* ======================================
   28 GRADUANDOS
   foto1 = graduando 1 ... foto28 = graduando 28
====================================== */
const graduandos = [
    { nombre: "Nathalie Rodriguez", foto: "imagenes/foto1.jpeg", frase: "A veces hay que perderse para encontrar el camino de vuelta a uno mismo." },
    { nombre: "Rita Ceijas", foto: "imagenes/foto2.jpeg", frase: "In Omnia Paratus" },
    { nombre: "Mafer de Paz", foto: "imagenes/foto3.jpeg", frase: "Future's gonna be okay" },
    { nombre: "Emily Navas", foto: "imagenes/foto4.jpeg", frase: "Encontramos el camino cuando nos perdemos." },
    { nombre: "Avril López", foto: "imagenes/foto5.jpeg", frase: "Demasiado soñadora para conformarme." },
    { nombre: "Fatima Gramajo", foto: "imagenes/foto6.jpeg", frase: "You are what you love" },
    { nombre: "Daniela Abal", foto: "imagenes/foto7.jpeg", frase: "Los recuerdos siempre nos acompañarán." },
    { nombre: "Fernanda Rivas", foto: "imagenes/foto8.jpeg", frase: "Esto apenas comienza." },
    { nombre: "Samantha Alvarado", foto: "imagenes/foto9.jpeg", frase: "Notes N words" },
    { nombre: "Adriana Garcia", foto: "imagenes/foto10.jpeg", frase: "Cada momento valió la pena." },
    { nombre: "Dayana Vega", foto: "imagenes/foto11.jpeg", frase: "Mejoraré por mí, para darles mi mejor versión" },
    { nombre: "Libny Muñoz", foto: "imagenes/foto12.jpeg", frase: "El camino continúa." },
    { nombre: "Majo Meda", foto: "imagenes/foto13.jpeg", frase: "No tengas miedo, porque yo estoy contigo..." },
    { nombre: "Ashley Castillo", foto: "imagenes/foto14.jpeg", frase: "Dudo, pero lo intento." },
    { nombre: "Adian Cano", foto: "imagenes/foto15.jpeg", frase: "Mente de estratega, disciplina constante y ambición sin límites." },
    { nombre: "Mathias Gomez", foto: "imagenes/foto16.jpeg", frase: "Todo llega cuando tiene que llegar." },
    { nombre: "Sophia Morales", foto: "imagenes/foto17.jpeg", frase: "Un día recordaremos todo esto." },
    { nombre: "Vannia Velásquez", foto: "imagenes/foto18.jpeg", frase: "Todo tiene su tiempo" },
    { nombre: "Daniela Us", foto: "imagenes/foto19.jpeg", frase: "Soft leaves, strong roots." },
    { nombre: "Sophia Gomez", foto: "imagenes/foto20.jpeg", frase: "Todo lo puedo en Cristo que me fortalece." },
    { nombre: "Pablo Guzman", foto: "imagenes/foto21.jpeg", frase: "Nunca fue solamente llegar a la meta." },
    { nombre: "Antonio Navarijo", foto: "imagenes/foto22.jpeg", frase: "Lo mejor todavía está por llegar." },
    { nombre: "Hilary Vásquez", foto: "imagenes/foto23.jpeg", frase: "Dove mi porta il cuore" },
    { nombre: "Marycielo Arana", foto: "imagenes/foto24.jpeg", frase: "Ya lo sabía, lo soñé" },
    { nombre: "Dulce Alvarez", foto: "imagenes/foto25.jpeg", frase: "Un recuerdo puede durar para siempre." },
    { nombre: "Marjorie Aragon", foto: "imagenes/foto26.jpeg", frase: "El futuro comienza hoy, con esperanza." },
    { nombre: "Sophia Garcia", foto: "imagenes/foto27.jpeg", frase: "Lorem Ipsum" },
    { nombre: "Michelle Rivas", foto: "imagenes/foto28.jpeg", frase: "Promoción 2026." }
];

/* ======================================
   CREAR TARJETAS
====================================== */
const graduandosGrid = document.getElementById("graduandosGrid");

if (graduandosGrid) {
    graduandos.forEach((graduando, indice) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "graduando";
        tarjeta.innerHTML = `
            <div class="graduando-imagen">
                <img src="${graduando.foto}" alt="${graduando.nombre}" loading="lazy">
            </div>
            <div class="graduando-info">
                <h3>${graduando.nombre}</h3>
                <p class="graduando-frase">“${graduando.frase}”</p>
                <button class="boton-mensajes" data-indice="${indice}" type="button">
                    Ver mensajes ♥
                </button>
            </div>
        `;
        graduandosGrid.appendChild(tarjeta);
    });
}

/* ======================================
   MENSAJES CON FIREBASE
====================================== */
const modalMensajes = document.getElementById("modalMensajes");
const cerrarModalMensajes = document.getElementById("cerrarModalMensajes");
const modalFotoGraduando = document.getElementById("modalFotoGraduando");
const modalNombreGraduando = document.getElementById("modalNombreGraduando");
const listaMensajes = document.getElementById("listaMensajes");
const formMensaje = document.getElementById("formMensaje");
const autorMensaje = document.getElementById("autorMensaje");
const relacionMensaje = document.getElementById("relacionMensaje");
const textoMensaje = document.getElementById("textoMensaje");
const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");

const relacionesPermitidas = new Set([
    "Familia", "Mamá", "Papá", "Hermano/a", "Amigo/a", "Compañero/a", "Maestro/a", "Otro"
]);

let graduandoSeleccionado = 0;
let cancelarListenerMensajes = null;
let temporizadorConfirmacion = null;

function escucharMensajes(indice) {
    if (!listaMensajes) return;

    if (cancelarListenerMensajes) {
        cancelarListenerMensajes();
        cancelarListenerMensajes = null;
    }

    listaMensajes.innerHTML = '<div class="sin-mensajes">Cargando mensajes...</div>';

    const consulta = query(
        collection(db, "mensajes"),
        where("graduandoId", "==", indice)
    );

    cancelarListenerMensajes = onSnapshot(
        consulta,
        snapshot => {
            const mensajes = snapshot.docs.map(documento => ({
                id: documento.id,
                ...documento.data()
            }));

            mensajes.sort((a, b) => {
                const fechaA = a.creadoEn?.seconds ?? 0;
                const fechaB = b.creadoEn?.seconds ?? 0;
                return fechaA - fechaB;
            });

            listaMensajes.innerHTML = "";

            if (mensajes.length === 0) {
                listaMensajes.innerHTML = `
                    <div class="sin-mensajes">
                        Todavía no hay mensajes.<br>
                        Puedes ser la primera persona en dejar unas palabras 💙
                    </div>
                `;
                return;
            }

            mensajes.forEach(mensaje => {
                const tarjeta = document.createElement("div");
                tarjeta.className = "tarjeta-mensaje";

                const texto = document.createElement("p");
                texto.textContent = `“${mensaje.texto ?? ""}”`;

                const firma = document.createElement("div");
                firma.className = "mensaje-firma";
                firma.textContent = `${mensaje.autor ?? "Anónimo"} · ${mensaje.relacion ?? ""}`;

                tarjeta.append(texto, firma);
                listaMensajes.appendChild(tarjeta);
            });
        },
        error => {
            console.error("Error leyendo mensajes:", error);
            listaMensajes.innerHTML = '<div class="sin-mensajes">No fue posible cargar los mensajes.</div>';
        }
    );
}

function abrirMensajes(indice) {
    if (!Number.isInteger(indice) || indice < 0 || indice >= graduandos.length || !modalMensajes) return;

    graduandoSeleccionado = indice;
    const graduando = graduandos[indice];

    if (modalFotoGraduando) {
        modalFotoGraduando.src = graduando.foto;
        modalFotoGraduando.alt = graduando.nombre;
    }
    if (modalNombreGraduando) modalNombreGraduando.textContent = graduando.nombre;
    if (mensajeConfirmacion) mensajeConfirmacion.textContent = "";

    escucharMensajes(indice);
    modalMensajes.classList.add("activo");
    document.body.classList.add("modal-abierto");
}

function cerrarMensajes() {
    modalMensajes?.classList.remove("activo");
    document.body.classList.remove("modal-abierto");
    formMensaje?.reset();
    if (mensajeConfirmacion) mensajeConfirmacion.textContent = "";

    if (temporizadorConfirmacion) {
        clearTimeout(temporizadorConfirmacion);
        temporizadorConfirmacion = null;
    }

    if (cancelarListenerMensajes) {
        cancelarListenerMensajes();
        cancelarListenerMensajes = null;
    }
}

document.addEventListener("click", event => {
    const boton = event.target.closest?.(".boton-mensajes");
    if (!boton) return;
    abrirMensajes(Number(boton.dataset.indice));
});

cerrarModalMensajes?.addEventListener("click", cerrarMensajes);

modalMensajes?.addEventListener("click", event => {
    if (event.target === modalMensajes) cerrarMensajes();
});

formMensaje?.addEventListener("submit", async event => {
    event.preventDefault();

    const autor = autorMensaje?.value.trim() ?? "";
    const relacion = relacionMensaje?.value ?? "";
    const texto = textoMensaje?.value.trim() ?? "";

    if (!autor || autor.length > 40 || !relacionesPermitidas.has(relacion) || !texto || texto.length > 400) {
        if (mensajeConfirmacion) mensajeConfirmacion.textContent = "Revisa los datos del mensaje antes de enviarlo.";
        return;
    }

    const botonEnviar = formMensaje.querySelector("button[type='submit']");
    if (botonEnviar) {
        botonEnviar.disabled = true;
        botonEnviar.textContent = "Guardando...";
    }
    if (mensajeConfirmacion) mensajeConfirmacion.textContent = "";

    try {
        await addDoc(collection(db, "mensajes"), {
            graduandoId: graduandoSeleccionado,
            autor,
            relacion,
            texto,
            creadoEn: serverTimestamp()
        });

        formMensaje.reset();
        if (mensajeConfirmacion) mensajeConfirmacion.textContent = "♥ Tu mensaje fue enviado correctamente.";

        temporizadorConfirmacion = setTimeout(() => {
            if (mensajeConfirmacion) mensajeConfirmacion.textContent = "";
            temporizadorConfirmacion = null;
        }, 4000);
    } catch (error) {
        console.error("Error guardando mensaje:", error);
        if (mensajeConfirmacion) mensajeConfirmacion.textContent = "No se pudo enviar el mensaje. Intenta nuevamente.";
    } finally {
        if (botonEnviar) {
            botonEnviar.disabled = false;
            botonEnviar.textContent = "Dejar mensaje ♥";
        }
    }
});

/* ======================================
   GALERÍA
====================================== */
const imagenesGaleria = Array.from(document.querySelectorAll(".galeria img"));
const lightbox = document.getElementById("lightbox");
const imagenGrande = document.getElementById("imagenGrande");
const cerrarLightbox = document.getElementById("cerrarLightbox");
const fotoAnterior = document.getElementById("fotoAnterior");
const fotoSiguiente = document.getElementById("fotoSiguiente");
let indiceImagen = 0;

function mostrarImagen(indice) {
    if (!lightbox || !imagenGrande || imagenesGaleria.length === 0) return;
    indiceImagen = indice;
    imagenGrande.src = imagenesGaleria[indice].src;
    imagenGrande.alt = imagenesGaleria[indice].alt || "Fotografía ampliada";
    lightbox.classList.add("activo");
    document.body.classList.add("modal-abierto");
}

function cerrarGaleria() {
    lightbox?.classList.remove("activo");
    document.body.classList.remove("modal-abierto");
}

function siguienteImagen() {
    if (!imagenGrande || imagenesGaleria.length === 0) return;
    indiceImagen = (indiceImagen + 1) % imagenesGaleria.length;
    imagenGrande.src = imagenesGaleria[indiceImagen].src;
    imagenGrande.alt = imagenesGaleria[indiceImagen].alt || "Fotografía ampliada";
}

function anteriorImagen() {
    if (!imagenGrande || imagenesGaleria.length === 0) return;
    indiceImagen = (indiceImagen - 1 + imagenesGaleria.length) % imagenesGaleria.length;
    imagenGrande.src = imagenesGaleria[indiceImagen].src;
    imagenGrande.alt = imagenesGaleria[indiceImagen].alt || "Fotografía ampliada";
}

imagenesGaleria.forEach((imagen, indice) => {
    imagen.addEventListener("click", () => mostrarImagen(indice));
});

cerrarLightbox?.addEventListener("click", cerrarGaleria);
fotoSiguiente?.addEventListener("click", siguienteImagen);
fotoAnterior?.addEventListener("click", anteriorImagen);

/* ======================================
   FRASES GENERALES
====================================== */
const frases = [
    "Lo mejor de esta etapa fueron las personas que formaron parte de ella.",
    "No recordaremos todos los días, pero sí muchos de los momentos.",
    "Un día comenzamos juntos y ahora cada uno comienza un camino diferente.",
    "El colegio termina, pero muchas historias apenas comienzan.",
    "Los lugares cambian, las personas crecen y los recuerdos permanecen.",
    "Una promoción termina, pero algunos vínculos permanecen."
];

const fraseTexto = document.getElementById("fraseTexto");
let indiceFrase = 0;

if (fraseTexto) {
    setInterval(() => {
        fraseTexto.style.opacity = "0";
        setTimeout(() => {
            indiceFrase = (indiceFrase + 1) % frases.length;
            fraseTexto.textContent = `“${frases[indiceFrase]}”`;
            fraseTexto.style.opacity = "1";
        }, 400);
    }, 5500);
}

/* ======================================
   ÚLTIMO PASE DE LISTA
====================================== */
const nombreGraduando = document.getElementById("nombreGraduando");
let indiceNombre = 0;

if (nombreGraduando) {
    setInterval(() => {
        nombreGraduando.style.opacity = "0";
        setTimeout(() => {
            nombreGraduando.textContent = graduandos[indiceNombre].nombre;
            nombreGraduando.style.opacity = "1";
            indiceNombre = (indiceNombre + 1) % graduandos.length;
        }, 400);
    }, 2600);
}

/* ======================================
   CONTADORES
====================================== */
const contadores = document.querySelectorAll(".contador");

function animarContador(contador) {
    const objetivo = Number(contador.dataset.numero);
    if (!Number.isFinite(objetivo) || objetivo < 0) return;

    let actual = 0;
    const intervalo = setInterval(() => {
        actual += 1;
        contador.textContent = String(Math.min(actual, objetivo));
        if (actual >= objetivo) clearInterval(intervalo);
    }, 35);
}

if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver(entradas => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                animarContador(entrada.target);
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.5 });

    contadores.forEach(contador => observador.observe(contador));
} else {
    contadores.forEach(animarContador);
}

/* ======================================
   TECLADO
====================================== */
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        if (lightbox?.classList.contains("activo")) cerrarGaleria();
        if (modalMensajes?.classList.contains("activo")) cerrarMensajes();
        return;
    }

    if (!lightbox?.classList.contains("activo")) return;
    if (event.key === "ArrowRight") siguienteImagen();
    if (event.key === "ArrowLeft") anteriorImagen();
});
