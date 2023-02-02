import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Cart from './Cart'
import Orders from './Orders'
import PageNotFound from './PageNotFound'
import ProductPage from './ProductPage'
import SingleProductPage from './SingleProductPage'
function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path={"/"} element={<ProductPage/>}></Route>
            <Route path={"/product/:id"} element={<SingleProductPage/>}></Route>
            <Route path={"/cart"} element={<Cart/>}></Route>
            <Route path={"/order"} element={<Orders/>}></Route>
            <Route path={"*"} element={<PageNotFound/>}></Route>

        </Routes>
    </div>
  )
}

export default Allroutes