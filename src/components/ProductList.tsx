import React from 'react'
import { ProductModel } from '../_core/models/ProductModel'


type Props = {
    arrSP:ProductModel[]
}

export default function ProductList(props: Props) {
    let {arrSP} = props;
    console.log(arrSP);
    
  return (
    <div>ProductList</div>
  )
}