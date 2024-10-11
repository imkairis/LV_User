import React from "react";

const PetList = () => {
  // Danh sách dịch vụ
  const pets = [
    {
      id: 1,
      name: "Chó corgi",
      description: "Chó corgi 2 tuổi",
      image: "/images/list/pet1.jpg",
    },
    {
      id: 2,
      name: "Chó pull",
      description: "Chó pull pháp 1 tuổi",
      image: "/images/list/pet2.jpg",
    },
    {
      id: 3,
      name: "Mèo",
      description: "Mèo 3 tuổi",
      image: "/images/list/pet3.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {pets.map((pet) => (
        <div
          key={pet.id}
          className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={pet.image}
            alt={pet.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-bold">{pet.name}</h3>
          <p className="text-gray-600">{pet.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PetList;
