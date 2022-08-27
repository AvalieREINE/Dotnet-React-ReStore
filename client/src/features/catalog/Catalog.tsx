 
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponents from "../../app/layout/LoadingComponents";
import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";

 

export default function Catalog() {
  const [products, setProducts]  = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
   agent.Catalog.list().then(products => setProducts(products))
   .catch(error => console.log(error))
   .finally(() => setLoading(false))
  },[]) 

 if (loading) return <LoadingComponents  />
  return (
    <>
    <ProductList products={products} /> 
 
    </>
  )
}