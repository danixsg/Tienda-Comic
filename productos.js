const productos = [
    {
        nombre: "As the Gods Will",
        tipo: "Manga",
        genero: "Seinen",
        precio: "$20",
        img: "assets/godwill.jpg"
    },
    {
        nombre: "Astro Biologist Pratess",
        tipo: "Manga",
        genero: "Seinen",
        precio: "$15",
        img: "assets/astro.jpg"
    },
    {
        nombre: "Blue Giant",
        tipo: "Manga",
        genero: "Seinen",
        precio: "$13",
        img: "assets/blue.jpg"
    },
    {
        nombre: "Demencia",
        tipo: "Manga",
        genero: "Seinen",
        precio: "$17",
        img: "assets/demencia.jpg"
    },
    {
        nombre: "El Hombre y el Gato",
        tipo: "Manga",
        genero: "Seinen",
        precio: "$23",
        img: "assets/gato.jpeg"
    },
    {
        nombre: "Ataque a los Titanes",
        tipo: "Manga",
        genero: "Shonen",
        precio: "$25",
        img: "assets/titanes.jpeg"
    },
    {
        nombre: "Chainsaw Man",
        tipo: "Manga",
        genero: "Shonen",
        precio: "$24",
        img: "assets/chainsaw.jpeg"
    },
    ,
    {
        nombre: "Dan Da Dan",
        tipo: "Manga",
        genero: "Shonen",
        precio: "$27",
        img: "assets/dandadan.jpg"
    },
    {
        nombre: "Death Note",
        tipo: "Manga",
        genero: "Shonen",
        precio: "$18",
        img: "assets/deathnote.jpg"
    },
    {
        nombre: "Dragon Ball Saga Majinboo",
        tipo: "Manga",
        genero: "Shonen",
        precio: "$15",
        img: "assets/dbz.jpg"
    },
    {
        nombre: "Tokyo Revengers",
        tipo: "Manga",
        genero: "Shonen",
        precio: "$21",
        img: "assets/tokyor.jpeg"
    },
    {
        nombre: "Tokyo Ghoul",
        tipo: "Manga",
        genero: "Shonen",
        precio: "$19",
        img: "assets/tokyog.jpeg"
    },
    {
        nombre: "Given",
        tipo: "Manga",
        genero: "Shojo",
        precio: "$20",
        img: "assets/given.jpg"
    },
    {
        nombre: "Nana",
        tipo: "Manga",
        genero: "Shojo",
        precio: "$25",
        img: "assets/nana.jpg"
    },
    {
        nombre: "Inuyasha",
        tipo: "Manga",
        genero: "Shojo",
        precio: "$14",
        img: "assets/inuyasha.jpg"
    },
    {
        nombre: "My Little Monster",
        tipo: "Manga",
        genero: "Shojo",
        precio: "$12",
        img: "assets/mlm.jpg"
    },
    {
        nombre: "Apuesta de Amor",
        tipo: "Manga",
        genero: "Shojo",
        precio: "$15",
        img: "assets/bet.webp"
    }
    ,
    {
        nombre: "Heavenly",
        tipo: "Manga",
        genero: "Shojo",
        precio: "$17",
        img: "assets/heavenly.jpg"
    }
    ,
    {
        nombre: "Kyou Kara Maou",
        tipo: "Manga",
        genero: "Shojo",
        precio: "$15",
        img: "assets/yuuram.jpg"
    },
    {
        nombre: "Conectando Corazones",
        tipo: "Libro",
        genero: "Medicina",
        precio: "$20",
        img: "assets/cc.jpg"
    },
    ,
    {
        nombre: "Invocando a Saskia",
        tipo: "Libro",
        genero: "Ciencia Ficción",
        precio: "$21",
        img: "assets/saskia.jpg"
    },
    {
        nombre: "Nunca Mientas",
        tipo: "Libro",
        genero: "Thriller",
        precio: "$19",
        img: "assets/nunca-mientas.jpg"
    },
    {
        nombre: "Las crónicas de Narnia",
        tipo: "Libro",
        genero: "Acción",
        precio: "$14",
        img: "assets/narnia.jpg"
    },
    {
        nombre: "Drácula",
        tipo: "Libro",
        genero: "Terror",
        precio: "$42",
        img: "assets/dracula.jpg"
    },
    {
        nombre: "Los nombres muertos",
        tipo: "Libro",
        genero: "Terror",
        precio: "$20",
        img: "assets/muertos.jpg"
    },
    {
        nombre: "Cuando la voz del alma regresa",
        tipo: "Libro",
        genero: "Novela",
        precio: "$18",
        img: "assets/voz.jpg"
    },
    {
        nombre: "La cocina de los libros de Soyangri",
        tipo: "Libro",
        genero: "Novela",
        precio: "$18",
        img: "assets/cocina.webp"
    },
    {
        nombre: "La tienda de los deseos",
        tipo: "Libro",
        genero: "Novela",
        precio: "$15",
        img: "assets/tienda.webp"
    },
    {
        nombre: "Vendedores perros",
        tipo: "Libro",
        genero: "Liderazgo",
        precio: "$15",
        img: "assets/perros.webp"
    },
    {
        nombre: "Sin querer queriendo",
        tipo: "Libro",
        genero: "Biografía",
        precio: "$18",
        img: "assets/sinquerer.webp"
    },
    {
        nombre: "IT",
        tipo: "Libro",
        genero: "Terror",
        precio: "$12",
        img: "assets/it.webp"
    },
    {
        nombre: "Diario de una Pasión",
        tipo: "Libro",
        genero: "Romance",
        precio: "$21",
        img: "assets/diario.webp"
    },
    {
        nombre: "Gravity Falls 3",
        tipo: "Libro",
        genero: "Colección",
        precio: "$17",
        img: "assets/gf3.webp"
    },
    {
        nombre: "Desfibrilador",
        tipo: "Libro",
        genero: "Poesía",
        precio: "$12",
        img: "assets/desfilibrador.webp"
    },
    {
        nombre: "Batman",
        tipo: "Cómic",
        genero: "DC",
        precio: "$19",
        img: "assets/batman.jpg"
    },
    {
        nombre: "Harley Quinn",
        tipo: "Cómic",
        genero: "DC",
        precio: "$32",
        img: "assets/harley.jpg"
    },
    {
        nombre: "Spidey",
        tipo: "Cómic",
        genero: "Marvel",
        precio: "$25",
        img: "assets/spiderman.jpg"
    },
    {
        nombre: "Ironman",
        tipo: "Cómic",
        genero: "Marvel",
        precio: "$23",
        img: "assets/ironman.jpg"
    },
    {
        nombre: "Capitán América",
        tipo: "Cómic",
        genero: "Marvel",
        precio: "$16",
        img: "assets/capitanamerica.jpg"
    },
    {
        nombre: "Blacksad",
        tipo: "Cómic",
        genero: "Independiente",
        precio: "$14",
        img: "assets/blacksad.jpg"
    },
    {
        nombre: "Warfcraft",
        tipo: "Cómic",
        genero: "Independiente",
        precio: "$13",
        img: "assets/wfc.jpg"
    }
]