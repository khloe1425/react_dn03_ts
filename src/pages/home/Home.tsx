// tsrfc
import React, { useState } from 'react'
import ProductList from '../../components/ProductList';
import { ProductModel } from '../../_core/models/ProductModel'

type Props = {}

let arrSP:ProductModel[] = [
    {id:1, name:"SP1", avatar:"https://i.pravatar.cc/?u=77", price:200},
    {id:2, name:"SP2", avatar:"https://i.pravatar.cc/?u=78", price:200}
]

export default function Home({}: Props) {
    // generic
    let [number,setNumber] =   useState<number>(1);

  return (
    <div>Home
        <ProductList arrSP={arrSP} />


    </div>
  )
}