import Header from "@/components/Header";
import Product from "@/components/Product";
import data from "@/data/prodacts.json";

export default function Home() {
  return (
    <>
      <Header />
      <section class="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
         {
          data.products?.slice(0,12)?.map(product=>(
            <Product key={product.id} product={product} />
          ))
         }
         
        </div>
      </section>
    </>
  );
}
