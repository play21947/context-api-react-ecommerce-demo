import React, { useContext } from 'react'
import CartContext from './CartContext'

const Cart = () => {

    let CartStore = useContext(CartContext)

    const count_quantity = CartStore.cart_item.reduce((init, current)=>{
        let result = init + current.quantity
        return result
    }, 0)

    const total_money = CartStore.cart_item.reduce((init, current)=>{
        let total = init + (current.price * current.quantity)
        return total
    }, 0)

    return (
        <div className='cart'>
            <p>Cart</p>
            {CartStore.cart_item && CartStore.cart_item.length > 0 ? CartStore.cart_item.map((item) => {
                return (
                    <div>
                        <div className='cart-flex'>
                            <p>{item.product}</p>
                            <p>{item.quantity}</p>
                            <p onClick={()=>{
                                CartStore.DeleteProduct(item.id)
                            }}>X</p>
                        </div>
                        <p>{item.price}฿</p>
                    </div>
                )
            }) : null}
            <p>รวมสินค้าทั้งหมด : {count_quantity} ชิ้น</p>
            <p>รวมราคาทั้งสิ้น : {total_money} บาท</p>
            <button onClick={()=>{
                CartStore.Purchese()
            }}>Purchese</button>
        </div>
    )
}

export default Cart