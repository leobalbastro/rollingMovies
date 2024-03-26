
function toggleMenu() {
	var menu = document.getElementById("menu");
	menu.classList.toggle("active");
}



const AdminUser = document.getElementById('AdminUser')

if (localStorage.getItem('userLogged') !== undefined) {
	const AdminLogged = JSON.parse(localStorage.getItem('userLogged'));

	if (AdminLogged !== null) {
		const isAdminLogged = AdminLogged.userRol == 0 ? true : false;
		if (isAdminLogged) {
			AdminUser.style.display = "block";
		} else {
			AdminUser.style.display = "none";
		}
	}
};
let movies = [{
	id: "1711164302393",
	nombre: "Interstellar",
	categoria: "Sci Fi",
	descripcion: "Un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con las condiciones necesarias para reemplazar a la Tierra y comenzar una nueva vida allí. La Tierra está llegando a su fin y este grupo necesita encontrar un planeta más allá de nuestra galaxia que garantice el futuro de la raza humana.",
	urlImagen: "../../assets/img/Interstellar.png",
	urlVideo: "https://www.youtube.com/watch?v=1TfbWbTBSHo",
	isPublicado: false,
	isDestacado: false
},
{
	id: "1711182312629",
	nombre: "Breaking-Bad",
	categoria: "Accion",
	descripcion: "Un profesor de Química de secundaria con cáncer terminal se asocia a un exestudiante para asegurar el futuro de su familia al fabricar y vender metanfetamina",
	urlImagen: "../../assets/img/Breaking-Bad.png",
	urlVideo: "https://www.youtube.com/watch?v=mXd1zTwcQ18",
	isPublicado: false,
	isDestacado: false
},
{
	id: "1711184041174",
	nombre: "Scarface",
	categoria: "Crimen",
	descripcion: "Tony Montana es un emigrante cubano frío y sanguinario que se instala en Miami con el propósito de convertirse en un gángster importante. Con la colaboración de su amigo Manny Rivera inicia una fulgurante carrera delictiva con el objetivo de acceder a la cúpula de una organización de narcos.",
	urlImagen: "../../assets/img/Scarface.png",
	urlVideo: "https://www.youtube.com/watch?v=bypNxoc7uM0",
	isPublicado: false,
	isDestacado: false
},
{
	id: "1711185328718",
	nombre: "BayWatch",
	categoria: "Comedia",
	descripcion: "El socorrista Mitch Buchannon, un héroe para todos los habituales de la playa de Emerald Bay, se ve obligado a aceptar a un nuevo miembro en su equipo: el insolente y poco disciplinado nadador olímpico Matt Brody.",
	urlImagen: "../../assets/img/BayWatch.png",
	urlVideo: "https://www.youtube.com/watch?v=ZUvxMRm6rEo",
	isPublicado: false,
	isDestacado: false
},
{
	id: "1711186083129",
	nombre: "Espia y medio",
	categoria: "Comedia",
	descripcion: "El socorrista Mitch Buchannon, un héroe para todos los habituales de la playa de Emerald Bay, se ve obligado a aceptar a un nuevo miembro en su equipo: el insolente y poco disciplinado nadador olímpico Matt Brody.",
	urlImagen: "../../assets/img/Espia%20y%20medio.png",
	urlVideo: "https://www.youtube.com/watch?v=7GLPHJU8uaM",
	isPublicado: false,
	isDestacado: false
},
{
	id: "1711186173993",
	nombre: "jack y jill",
	categoria: "Comedia",
	descripcion: "Un padre de familia llamado Jack debe enfrentarse a un enorme problema: la llegada por Navidad de su odiada hermana Jill. La visita se alarga más de la cuenta, lo que les obligará a limar asperezas.",
	urlImagen: "../../assets/img/jack y jill.png",
	urlVideo: "https://www.youtube.com/watch?v=ESOA6SW3lRA",
	isPublicado: false,
	isDestacado: false
},
{
	id: "1711186352534",
	nombre: "kickass",
	categoria: "Comedia",
	descripcion: "Dave un estudiante de instituto aficionado a los cómics y que siempre pasa desapercibido, decide un día convertirse en superhéroe aunque no tenga superpoderes, no haya seguido un duro entrenamiento y ni siquiera tenga una significativa razón para ello.",
	urlImagen: "../../assets/img/kickass.png",
	urlVideo: "https://www.youtube.com/watch?v=jpouBsIVlII",
	isPublicado: false,
	isDestacado: false
},
{
	id: "1711186473726",
	nombre: "malditos vecinos",
	categoria: "Comedia",
	descripcion: "Mac y Kelly acaban de tener una niña adorable y se han comprado una preciosa casa en las afueras. Pero estos exjuerguistas descubren de pronto que sus nuevos vecinos son los miembros de la fraternidad Delta Psi Beta, con el presidente Teddy Sanders.",
	urlImagen: "../../assets/img/malditos vecinos.png",
	urlVideo: "https://www.youtube.com/watch?v=iNMj0dc1og4",
	isPublicado: false,
	isDestacado: false
},
{
	id: "1711186595404",
	nombre: "son como niños",
	categoria: "Comedia",
	descripcion: "La muerte de su entrenador de baloncesto durante su infancia provoca la reunión de algunos viejos amigos, quienes se ven en el lugar en el que celebraron un campeonato años atrás. Los compañeros hablan sobre sus esposas y sus hijos, y descubren que la edad no necesariamente va de la mano con la madurez.",
	urlImagen: "../../assets/img/son como niños.png",
	urlVideo: "https://www.youtube.com/watch?v=yMEDiKD7cyE",
	isPublicado: false,
	isDestacado: false
},
{
	id: "1711186654289",
	nombre: "vacaciones",
	categoria: "Comedia",
	descripcion: "Siguiendo las huellas de su padre y con la esperanza de construir ese vínculo familiar que tanto ansía, un Rusty Griswold ya mayor decide dar una sorpresa a su mujer y a sus dos hijos con un viaje: atravesar el país hasta llegar al parque de atracciones favorito de las familias estadounidenses, Walley World.",
	urlImagen: "../../assets/img/vacaciones.png",
	urlVideo: "https://www.youtube.com/watch?v=OIVp2F9uoRI",
	isPublicado: false,
	isDestacado: false
},
{
	id: "1711187320476",
	nombre: "Ted",
	categoria: "Comedia",
	descripcion: "John Bennett y su oso de peluche Ted han sido siempre inseparables, pero su amistad se pondrá a prueba cuando Lori, la novia de John de cuatro años, pida más de su relación.",
	urlImagen: "../../../assets/img/Ted.png",
	urlVideo: "https://www.youtube.com/watch?v=ukWF-N3hVfc",
	isPublicado: false,
	isDestacado: false
}]
localStorage.setItem('movies', JSON.stringify(movies));





const miImagen = document.querySelectorAll("img.imgButton")
miImagen.forEach((imagen) => {
	imagen.addEventListener('click', () => {

		let title = imagen.alt
		let movies = JSON.parse(localStorage.getItem('movies'))
		let movieFound = movies.find((movie) => movie.nombre == title)
		let modalInfo = document.getElementById('modal-body')
		let modalContent = document.getElementById('bg-image')
		let buttonClose = document.createElement('button');
		let divBodyMovieDetail = document.createElement('div');
		let divInnerModalMovieDetail = document.createElement('div')
		let h1 = document.createElement('h1')
		let spanDescription = document.createElement('p')
		let videoLink = movieFound.urlVideo.substr(32)

		buttonClose.type = "button"
		buttonClose.className = "btn-close mt-3 me-3"
		buttonClose.setAttribute('data-bs-dismiss', 'modal')
		buttonClose.setAttribute('aria-label', 'Close')
		buttonClose.style.position = "absolute"
		buttonClose.style.top = 0;
		buttonClose.style.right = 0;
		buttonClose.style.backgroundColor = "white"
		buttonClose.style.zIndex = "3"
		buttonClose.id = "buttonClose"



		if (movieFound !== undefined) {
			modalInfo.className = "container-fluid d-flex align-items-center m-auto h-100 w-100 p-0"

			let video = `<iframe id="miVideo" src="https://www.youtube.com/embed/${videoLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
			divBodyMovieDetail.className = "modal-title"
			video.id = "video"
			h1.textContent = `${title.toUpperCase()}`
			h1.style.textAlign = "center"
			// h1.style.margin = "1rem";
			h1.style.marginBottom = "1rem"
			h1.style.textDecoration = "underline"
			spanDescription.textContent = `${movieFound.descripcion}`
			spanDescription.id = "descripcion"
			spanDescription.className = "d-none d-md-block"
			divInnerModalMovieDetail.className = "container-fluid p-5"
			divInnerModalMovieDetail.style.backgroundColor = "rgba(0,0,0,0.7)"
			divInnerModalMovieDetail.style.height = "100%"
			divBodyMovieDetail.style.color = "White"
			divBodyMovieDetail.className = "border rounded"
			divBodyMovieDetail.id = "modal-detail"
			divBodyMovieDetail.style.height = "100%"
			divBodyMovieDetail.style.width = "100%"
			divBodyMovieDetail.style.backgroundSize = "cover"
			divBodyMovieDetail.style.backgroundImage = `url('./assets/img/${title}.png')`;
			divBodyMovieDetail.style.backgroundRepeat = "no-repeat"
			divInnerModalMovieDetail.innerHTML = buttonClose.outerHTML
			divInnerModalMovieDetail.append(h1)
			divInnerModalMovieDetail.append(spanDescription)
			divInnerModalMovieDetail.innerHTML += video
			divBodyMovieDetail.appendChild(divInnerModalMovieDetail)
			modalInfo.innerHTML = divBodyMovieDetail.outerHTML
			// modalContent.style.height = "80vh"
			// modalContent.style.width = "80vw"
			// modalContent.style.backgroundImage = `url('./assets/img/${title}.png')`;
			// modalContent.style.backgroundPosition = "50% center"
			// modalContent.style.backgroundRepeat = "no-repeat"
			// modalContent.style.backgroundSize = "cover"
			// modalContent.id = "modal-content"
			modalContent.appendChild(modalInfo)


			// let isDetallePeliculaActivo = detallePelicula ? true : false;

			// Escuchar el evento hidden.bs.modal del modal
			document.getElementById('detallePelicula').addEventListener('hidden.bs.modal', function () {
				// Obtener el elemento de video
				let videoElement = document.getElementById('miVideo');
				// Verificar si el elemento de video existe
				if (videoElement) {
					// Eliminar el elemento de video del DOM
					videoElement.parentNode.removeChild(videoElement);
				}
			});
		}
	})
	imagen.setAttribute('data-bs-toggle', 'modal')
	imagen.setAttribute('data-bs-target', '#detallePelicula')
})

const adminHandler = () => {
	if (window.location.href.includes('index')) {
		window.location.href = "./pages/panel-admin/index.html"
	}
	if (window.location.href.includes('contacto') || window.location.href.includes('404') || window.location.href.includes('acercade')) {
		window.location.href = "./panel-admin/index.html"
	}
}

const to404 = () => {
	if (window.location.href.includes('index')) {
		window.location.href = "./pages/404.html"
	}
	if (window.location.href.includes('contacto') || window.location.href.includes('acercade')) {
		window.location.href = "./404.html"
	}
	if (window.location.href.includes('admin') || window.location.href.includes('panel-admin')) {
		window.location.href = "../404.html"
	}
}