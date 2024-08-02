import Anchor from "@/components/Anchor";
import { getAllCategory } from "@/utils/findProductById";

export default function categoryLayout({children}) {
  const productsCategories = getAllCategory()
  return (
    <section class="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
      <div class="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
        <Anchor href="/category/all">
        <button class="hover:border-b border-black block h-6 box-border mt-4">All</button>
        </Anchor>
        {
          productsCategories?.map(category=>(
            <Anchor key={category} href={`/category/${category}`}> <button class="hover:border-b border-black block h-6 box-border mt-4">{category}</button></Anchor>
          ))
        }
       
       
      </div>
      {
        children
      }
    </section>
  )
}
