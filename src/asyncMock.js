const products = [
    { id: '1', name: 'Reductor SEW', price: 3500, category: 'reductor', img:'https://master.sew-eurodrive.com/media/sew_eurodrive/produkte/industriegetriebe/stirnradgetriebe_kegelstirnradgetriebe/industrial_gear_unit_bevel_helical_gear_unit_mc_600x338.jpg', stock: 25, description:'Descripcion de Iphone 12'},
    { id: '2', name: 'Reductor Flender', price: 2500, category: 'reductor', img:'https://www.flender.com/medias/20170928-165944-ATN002.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NDg1NDF8aW1hZ2UvanBlZ3xpbWFnZXMvaDUyL2g1OC85NDU0MzgyNzQzNTgyLmpwZ3xlNWIyMGZkZTY4ZDE2ZDhiNDMxOTgxNTkzYTI4Zjk4MjM3NzlhYzI4OWUwMmJlNzczYzQ3NmU4NmNkMmZjZTg1', stock: 16, description:'Descripcion de Samsung s21'},
    { id: '3', name: 'Warom', price: 1000, category: 'luminarias', img:'https://cdn.shopify.com/s/files/1/2241/3179/products/j5-fixture-warom-bat86-explosion-proof-led-flood-lights-light-fitting-atex-approved-for-zone-1-2-14312479162417_1445x.jpg?v=1621370412', stock: 10, description:'Descripcion de Ipad'},
    { id:'4', name:'Motor Weg W22',price:2500,category:'motor',img:'https://static.weg.net/medias/images/ha6/h69/MKT_WMO_MX_IMAGE_3PHASE_W22_RAL5009_143-5_B3D_NEMAPREMIUM_1200Wx1200H.jpg'},
    { id:'5', name:'Motor SEW Eurodrive',price:2400,category:'motor',img:'https://induexcedentes.com/wp-content/uploads/2020/09/mgd0306_aanbouwmotor-sew-pinl-nl.jpg'},
    { id:'6', name:'Philips',price:800,category:'luminarias',img:'https://www.megatone.net/images/Articulos/zoom2x/333/MKT0161OBJ_8.jpg',stock:10}
]


export const getProducts = (categoryId) => {
    console.log(categoryId)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}