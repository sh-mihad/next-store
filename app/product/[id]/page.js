import ProductDetails from "@/components/ProductDetails";
import { findProductById } from "@/utils/findProductById";

export default function ProductPage({params: {id}}) {

    const getProduct = findProductById(id)
  return (
   <>
   {
    getProduct ? <ProductDetails product={getProduct}/> : <h1>No Product Found</h1>
   }
   </>
  )
}
