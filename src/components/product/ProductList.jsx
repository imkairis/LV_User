import React from "react";

const ProductList = () => {
  // Danh sách sản phẩm
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      image: "/images/list/image1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$20",
      image: "/images/list/image2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$30",
      image: "/images/list/image3.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$10",
      image: "/images/list/image4.jpg",
    },
    {
      id: 5,
      name: "Product 1",
      price: "$20",
      image: "/images/list/image1.jpg",
    },
    {
      id: 6,
      name: "Product 2",
      price: "$30",
      image: "/images/list/image2.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-600">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
