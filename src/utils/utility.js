import React from 'react'

export default function CalCulateTotalPrice(cartList) {
    if (cartList.length === 0)
        return 0
    let amount = 0
    for (let i = 0; i < cartList.length; i++) {
        amount = amount + cartList[i].count * cartList[i].price
    }
    return amount

}