import starImg from "@/public/assets/svg/star.svg";
import Image from "next/image";

export default function ProductDetails({ product }) {
  const { thumbnail, title ,description,price,category,discountPercentage} = product;
  const actualPrice =  (price - price*discountPercentage/100).toFixed(2)
  return (
    <section className="bg-[#fafaf2] h-full py-20">
      <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
        <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
          <Image
            src={thumbnail}
            width={500}
            height={500}
            className="w-[400px] h-[500px] mx-auto object-cover"
            alt="Picture of the product"
          />

          <div className="flex gap-4 mt-4">
            <Image
              src={thumbnail}
              width={100}
              height={100}
              className="w-[100px] h-[100px] mx-auto border object-cover"
              alt="Picture of the product"
            />
            <Image
              src={thumbnail}
              width={100}
              height={100}
              className="w-[100px] h-[100px] mx-auto border object-cover"
              alt="Picture of the product"
            />
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
            {title}
          </h1>
          <span className="text-[#919090] my-3">{category}</span>
          <div className="mt-3 flex items-center justify-start gap-1">
            <Image src={starImg} width="20px" alt="star" />
            <Image src={starImg} width="20px" alt="star" />
            <Image src={starImg} width="20px" alt="star" />
            <Image src={starImg} width="20px" alt="star" />
            <Image src={starImg} width="20px" alt="star" />
          </div>
          <hr className="my-5 bg-black" />

          <div>
            <p className="my-3">
              <span className="text-rose-600 opacity-60 line-through">
                ${price}
              </span>
              <span className="font-bold text-2xl">${actualPrice}</span>
            </p>
          </div>
          <div>
            <p className="leading-7">
              {description}
            </p>

            <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
              Add To Cart - ${actualPrice}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
