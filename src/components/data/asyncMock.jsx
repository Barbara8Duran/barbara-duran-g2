export const products = [
    {
        id: 1,
        name: 'gato enojado',
        img: '/gato1.jpg',
        price: 1000,
        description: '¡Adopta un compañero peludo y lleno de amor! Nuestros adorables gatos buscan un hogar donde puedan recibir cariño y cuidado. Cada uno tiene su propia personalidad, desde los juguetones y curiosos hasta los tiernos y tranquilos. Al adoptar, no solo salvas una vida, sino que también te ganarás un amigo leal que te llenará de alegría. Ven y conoce a tus futuros amigos felinos hoy mismo.',
        stock: 5,
        category: 'poleras'
    },
    {
        id: 2,
        name: 'gato perdido',
        img: '/gato2.jpg',
        price: 1000,
        description: '¡Adopta un compañero peludo y lleno de amor! Nuestros adorables gatos buscan un hogar donde puedan recibir cariño y cuidado. Cada uno tiene su propia personalidad, desde los juguetones y curiosos hasta los tiernos y tranquilos. Al adoptar, no solo salvas una vida, sino que también te ganarás un amigo leal que te llenará de alegría. Ven y conoce a tus futuros amigos felinos hoy mismo.',
        stock: 7,
        category: 'pantalones'
    },
    {
        id: 3,
        name: 'gato triste',
        img: '/gato3.jpg',
        price: 1000,
        description: '¡Adopta un compañero peludo y lleno de amor! Nuestros adorables gatos buscan un hogar donde puedan recibir cariño y cuidado. Cada uno tiene su propia personalidad, desde los juguetones y curiosos hasta los tiernos y tranquilos. Al adoptar, no solo salvas una vida, sino que también te ganarás un amigo leal que te llenará de alegría. Ven y conoce a tus futuros amigos felinos hoy mismo.',
        stock: 5,
        category: 'poleras'
    },
    {
        id: 4,
        name: 'gato confundido',
        img: 'gato4.jpg',
        price: 1000,
        description: '¡Adopta un compañero peludo y lleno de amor! Nuestros adorables gatos buscan un hogar donde puedan recibir cariño y cuidado. Cada uno tiene su propia personalidad, desde los juguetones y curiosos hasta los tiernos y tranquilos. Al adoptar, no solo salvas una vida, sino que también te ganarás un amigo leal que te llenará de alegría. Ven y conoce a tus futuros amigos felinos hoy mismo.',
        stock: 7,
        category: 'pantalones'
    },
    {
        id: 5,
        name: 'gato enojado',
        img: '/gato1.jpg',
        price: 1000,
        description: '¡Adopta un compañero peludo y lleno de amor! Nuestros adorables gatos buscan un hogar donde puedan recibir cariño y cuidado. Cada uno tiene su propia personalidad, desde los juguetones y curiosos hasta los tiernos y tranquilos. Al adoptar, no solo salvas una vida, sino que también te ganarás un amigo leal que te llenará de alegría. Ven y conoce a tus futuros amigos felinos hoy mismo.',
        stock: 5,
        category: 'poleras'
    },
    {
        id: 6,
        name: 'gato perdido',
        img: '/gato2.jpg',
        price: 1000,
        description: '¡Adopta un compañero peludo y lleno de amor! Nuestros adorables gatos buscan un hogar donde puedan recibir cariño y cuidado. Cada uno tiene su propia personalidad, desde los juguetones y curiosos hasta los tiernos y tranquilos. Al adoptar, no solo salvas una vida, sino que también te ganarás un amigo leal que te llenará de alegría. Ven y conoce a tus futuros amigos felinos hoy mismo.',
        stock: 7,
        category: 'pantalones'
    },
    {
        id: 7,
        name: 'gato triste',
        img: '/gato3.jpg',
        price: 1000,
        description: '¡Adopta un compañero peludo y lleno de amor! Nuestros adorables gatos buscan un hogar donde puedan recibir cariño y cuidado. Cada uno tiene su propia personalidad, desde los juguetones y curiosos hasta los tiernos y tranquilos. Al adoptar, no solo salvas una vida, sino que también te ganarás un amigo leal que te llenará de alegría. Ven y conoce a tus futuros amigos felinos hoy mismo.',
        stock: 5,
        category: 'poleras'
    },
    {
        id: 8,
        name: 'gato confundido',
        img: 'gato4.jpg',
        price: 1000,
        description: '¡Adopta un compañero peludo y lleno de amor! Nuestros adorables gatos buscan un hogar donde puedan recibir cariño y cuidado. Cada uno tiene su propia personalidad, desde los juguetones y curiosos hasta los tiernos y tranquilos. Al adoptar, no solo salvas una vida, sino que también te ganarás un amigo leal que te llenará de alegría. Ven y conoce a tus futuros amigos felinos hoy mismo.',
        stock: 7,
        category: 'pantalones'
    },
    
]

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res(products); 
        }, 1000);
    })
}

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 1000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 1000);
    });
};