export const show = "add"
export const getproduit = "produit"

export const getproduct = (prod) => {
    return {
        type: getproduit,
        payload: prod
    }


}
export const addproduct = (product) => {
    return {
        type: show,
        payload: product
    }

}

export const fethgetProduit = () => {
    return async (dispatch) => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data)
        dispatch(getproduct(data))
    }
}
