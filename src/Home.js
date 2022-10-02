import React, { useContext } from 'react'
import CartContext from './CartContext'

const Home = () => {

    const CartStore = useContext(CartContext)

    const item = [
        {
            id: 1,
            product: "Microphone",
            price: 500
        },
        {
            id: 2,
            product: "Mouse",
            price: 300
        },
        {
            id: 3,
            product: "Keyboard",
            price: 100
        },
        {
            id: 4,
            product: "Monitor",
            price: 600
        }
    ]

    return (
        <div>
            <p>Home</p>
            <div className='each'>
                {item && item.length > 0 ? item.map((item) => {
                    return (
                        <div key={item.id} className='product'>
                            <p>{item.product}</p>
                            <button onClick={()=>{

                                let SelectItem = {
                                    id: item.id,
                                    product: item.product,
                                    price: item.price,
                                    quantity: 1
                                }

                                CartStore.AddProduct(SelectItem)
                            }}>Click</button>
                        </div>
                    )
                }) : null}
            </div>
        </div>
    )
}

export default Home