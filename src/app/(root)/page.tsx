import ProductsLists from "@/components/ProductsLists";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-10 space-y-10 max-w-[1200px] border mx-auto">
      <div className="">
        <Link className="text-2xl font-bold text-blue-500" href={"/addProduct"}>
          Add Product
        </Link>
      </div>
      <ProductsLists />
    </div>
  );
};

export default page;
