const proyectos = [
    {
        id: 1,
        nombre: "Eugenia",
        addres: "CDMX",
        fIni: "2022-02-08",
        fFin: "2022-11-08",
        imgRw: "/build/img/euge-",
        imgRj: "/build/img/euge-",
    },
    {
        id: 2,
        nombre: "Banquetas y Guarniciones",
        addres: "Av. Chapultepec",
        fIni: "2022-01-04",
        fFin: "2022-11-08",
        imgRw: "/build/img/banq-",
        imgRj: "/build/img/banq-",
    },
    {
        id: 3,
        nombre: "Edificio",
        addres: "Polanco",
        fIni: "2022-07-06",
        fFin: "2023-01-02",
        imgRw: "/build/img/pol-",
        imgRj: "/build/img/pol-",
    },
    {
        id: 4,
        nombre: "Impermeabilización y Pintura",
        addres: "Paseo de Lilas",
        fIni: "2021-01-12",
        fFin: "2022-06-16",
        imgRw: "/build/img/loze-",
        imgRj: "/build/img/loze-",
    }
    ,
    {
        id: 5,
        nombre: "Fosa Septica",
        addres: "Sierra de la Breña, CdMx",
        fIni: "2022-04-04",
        fFin: "2022-04-04",
        imgRw: "/build/img/fose-",
        imgRj: "/build/img/fose-",
    },
    {
        id: 6,
        nombre: "Remodelacion Jacuzzi",
        addres: "Bosques de las Lomas, CDMX",
        fIni: "2022-09-26",
        fFin: "2022-11-11",
        imgRw: "/build/img/jasa-",
        imgRj: "/build/img/jasa-",
    },
    {
        id: 7,
        nombre: "Rehabilitación del Edificio de Protección Civil",
        addres: "San Antonio La Isla, México",
        fIni: "2022-11-14",
        fFin: "2022-12-05",
        imgRw: "/build/img/sala-",
        imgRj: "/build/img/sala-",
    },
    {
        id: 8,
        nombre: "Remodelación de Pisos Univar Solutions",
        addres: "Xalostoc, Ecatepec, México",
        fIni: "2022-09-06",
        fFin: "2022-11-08",
        imgRw: "/build/img/xalo-",
        imgRj: "/build/img/xalo-",
    }
]

//crear obras
const cont = document.getElementById("cont");
const obras = document.getElementById('obras');
proyectos.forEach((proyectos) => {
    let obras = document.createElement("section");
    obras.classList.add("pading-top");
    obras.setAttribute("id", "obras")
    cont.append(obras);
    let obra = document.createElement("div");
    obra.classList.add("obra");
    obra.classList.add("glass");
    obras.append(obra);
    let datos = document.createElement("div");
    datos.classList.add("datos");
    datos.innerHTML = `
        <h3>Nombre:${proyectos.nombre}</h3>
        <label>Direción:${proyectos.addres}</label>
        <label>Fecha de Inicio:${proyectos.fIni}</label>
        <label>Fecha de Finalización:${proyectos.fFin}</label>
    `
    obra.append(datos);
    let galery = document.createElement("div")
    galery.classList.add("galery");
    obra.append(galery);

    for (let i = 1; i <= 10; i++) {
        const imagen = document.createElement("galery");
        imagen.classList.add("galery-i")
        imagen.innerHTML = ` 
        <picture>
        <source srcset="${proyectos.imgRw}${i}.webp" type="image/webp">
        <source srcset="${proyectos.imgRj}${i}.jpeg" type="image/jpeg">
        <img loading="lazy" src="${proyectos.imgRj}${i}.webp" alt="imagen obra" id=${i}>
        </picture>
        `;

        galery.appendChild(imagen);
       
        const overlay = document.querySelector('.overlay');
        const imgSlide = document.querySelector('.img_slideshow');
        imagen.addEventListener('click',function(e){
            //obetner imagen
            const imgId = e.target.id;
            const imgSrc = e.target.getAttribute('src');
            //mostrar overlayt al escuhar el evento clic
            overlay.style.opacity = 1;
            overlay.style.visibility = 'visible';
            //asignar imagen al elemento img del overlay
            imgSlide.setAttribute("src",imgSrc);
            imgSlide.setAttribute("id",imgId);
            //boton cerrar overlay
            document.querySelector('.btn_cerrar').addEventListener('click',()=>{
            overlay.style.opacity = 0;
            overlay.style.visibility = 'hidden';
            });
        })
        
    } 
});
