import Product from "@/components/Product"
import { getProductsByCategories } from "@/utils/findProductById"

export default function CategoryPage({params:{categoryName}}) {
const filteredProducts = getProductsByCategories(categoryName)
  return (
    <div class="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
      {
        filteredProducts?.map(product=>(<Product key={product.id} product={product}/>))
      }
      </div>
  )
}
