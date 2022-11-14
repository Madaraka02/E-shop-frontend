import React, { useEffect, useState } from 'react'
import  { getProducts } from '../features/products/productsSlice'

import { useSelector , useDispatch} from 'react-redux'
import axios from 'axios'

function Products() {
    const { products, isLoading, isError } = useSelector((state) => state.products)
    const [setShirts] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getProducts())
        // getShirts()

    }, [])
    console.log(products)

    const getShirts = async () => {
      await axios.get('http://127.0.0.1:8000/api/v1/products/')
      .then((response) => {
        const data = response.data
        setShirts(data)
      }).catch((error) =>{
        console.log(error.response)
      })
    }



  return (
    <>
    {isLoading &&
    <p>Loading...</p>
    }
    {!isLoading && isError ? <p></p> : null}

    {!isLoading && products.length ? ( 
        <ul>
            {products.map((product) => (
            <li>{product.name}</li>
            ))}
        </ul>)

    :
    <p>Something is wrong</p>}
    {/* {shirts?.map((shirt) => (
      <p>{shirt.name}</p>
    ))} */}
    </>
  )
}

export default Products