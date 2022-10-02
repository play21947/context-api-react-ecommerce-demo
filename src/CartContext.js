import { createContext, useEffect, useState } from "react";

const CartContext = createContext()


export const CartProvider=({children})=>{

    let local_cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

    const [cart, setCart] = useState(local_cart)

    const AddProduct=(product)=>{

        let FindDuplicate = cart.filter((item)=>{
            return item.id === product.id
        })

        if(FindDuplicate.length > 0){
            let Update = cart.map((item)=>{
                return{
                    ...item,
                    quantity: item.id === product.id ? item.quantity + 1 : item.quantity
                }
            })

            setCart(Update)
        }else{
            setCart([...cart, product])
        }


    }

    const DeleteProduct=(id)=>{
        let leftItem = cart.filter((item)=>{
            return item.id !== id
        })

        setCart(leftItem)

    }

    const Purchese=()=>{

        setCart([])
        local_cart.remove('cart')
    }

    localStorage.setItem('cart', JSON.stringify(cart))


    return(
        <CartContext.Provider value={{ AddProduct, cart_item: cart, DeleteProduct, Purchese }}>{children}</CartContext.Provider>
    )
}


export default CartContext