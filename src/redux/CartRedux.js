import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:[],
        priceTotal:0,
        quantityTotal: 0,
    },
    reducers: {
       addToCart:(state,action) => {     
        console.log("color",action.payload)

if (state.products.findIndex((item) => item.product._id === action.payload.product._id) !== -1){
    const index = state.products.findIndex((el) => el.product._id === action.payload.product._id)
    if (state.products[index].product.qte < 0) {
        alert("stock finish")
    }else {
        state.products[index].product.qte--;
        state.products[index].quantity = state.products[index].quantity+ +action.payload.quantity;
        state.products[index].price = state.products[index].product.price * state.products[index].quantity;
    }
}else {
    state.products.push({
        product: action.payload.product,
        quantity: action.payload.quantity,
        price: action.payload.product?.price * action.payload.quantity,
        color: action.payload.color,
        size: action.payload.size
    })
}

        state.quantityTotal += action.payload.quantity
        state.priceTotal += action.payload.product?.price * action.payload.quantity
       },

    incrementQuantity: (state, action) => {
const index = state.products.findIndex((item) => item.product._id === action.payload.product._id);
if (state.products[index].product.qte === 0) {
    return alert("Stock finish !")

}
state.products[index].product.qte--;
state.products[index].quantity++;
state.products[index].price= state.products[index].product.price * state.products[index].quantity;

state.priceTotal= state.priceTotal+ +action.payload.product.price;
state.quantityTotal++;

    },

    decrementQuantity: (state, action) => {
        const index = state.products.findIndex((item) => item.product._id === action.payload.product._id);
        if (state.products[index].quantity > 0) {
          state.products[index].product.qte++;
          state.products[index].quantity -= 1;
          state.products[index].price = state.products[index].product.price * state.products[index].quantity;
          
          state.priceTotal = state.priceTotal - action.payload.product.price;
          state.quantityTotal--;
        
        }else if (state.products[index].quantity === 0) {
            const newProducts = state.products.filter((item) => item.product._id !== action.payload.product._id)
            state.products = newProducts
        }
       
        
            },


       removeFromCart: (state, action) => {
       state.products.map((p) => {
if (p.product._id === action.payload.product._id){
    const newProducts = state.products.filter((item) => item.product._id !== p.product._id)

    state.priceTotal = state.priceTotal - action.payload.price
    state.quantityTotal = state.quantityTotal - action.payload.quantity

    state.products = newProducts
}


       })


       },

       clearCart: (state) => {
        state.products = []
        state.priceTotal = 0
        state.quantityTotal = 0
       }

    }
})





export const {addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity} = cartSlice.actions
export default cartSlice.reducer
