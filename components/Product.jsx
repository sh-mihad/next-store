import Image from "next/image";
import Link from "next/link";

export default function Product({product}) {
  const  {thumbnail,title,category,description,discountPercentage,price,id} = product
  return (
    <div>
    <Image
      src={thumbnail}
      width={500}
      height={500}
      alt="Picture of the author"
    />
    <h2 className="text-sm lg:text-base mt-2">
      <Link className="text-base font-bold" href={`/product/${id}`}>
        {title}
      </Link>
      <span className="text-[#919090]">
        <a href="./category.html">({category})</a>
      </span>
    </h2>
    <p className="text-[#919090] text-sm ">
     {`${description.slice(0,30)}...`}
    </p>

    <p className="text-rose-600 text-sm mt-4">
      <span className="text-[#919090] line-through">${price}</span> ${(price - price*discountPercentage/100).toFixed(2)}
    </p>
  </div>
  );
}
