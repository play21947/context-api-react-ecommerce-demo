import React, { useContext } from 'react'
import './App.css'
import CartContext from './CartContext'
import { useNavigate } from 'react-router-dom'


const Nav=()=>{

    const CartStore = useContext(CartContext)

    let navigate = useNavigate()


    return(
        <div className='header'>
            <p>T-Shirt</p>
            <p onClick={()=>{
                navigate('/cart')
            }}>Cart : {CartStore.cart_item.length}</p>
        </div>
    )
}

export default Nav