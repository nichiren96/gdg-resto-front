import React from "react";

export const Card = () => {
  return (
    <div className="border">
      <img
        src="https://via.placeholder.com/300/09f.png/fffC/O https://placeholder.com/"
        alt=""
      />
      <div className="p-4">
        <h1 className="font-bold mb-2 text-xl">Installation de Flutter</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nemo
          consequatur non, distinctio dicta quis perferendis molestiae
          accusantium minus molestias id soluta cupiditate animi excepturi!
          Obcaecati blanditiis consectetur eveniet error!
        </p>
        <button className="bg-blue-400 text-white px-4 py-2 rounded-sm mt-4">
          Voir plus
        </button>
      </div>
    </div>
  );
};
