import React from 'react'

// props are used to pass data from parent component to child component
// and also destructuring is used to extract the data from props and 
// use it in the component direclty without using props keyword
//we can set default value for props in case if we are not passing any value for that prop 
export default function Card({ name, price= '100', onViewDetails }) {
  return (
    <div className="w-64 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <img
        src="https://api.dicebear.com/7.x/micah/svg?seed=TechGuru"
        alt="avatar"
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-blue-800 truncate">
          {name}
        </h2>

        <p className="text-sm text-orange-500 mt-1">
          Price: <span className="font-medium text-black-700">{price}</span>
        </p>

        {/* Button */}
        <button
          onClick={onViewDetails}
          className="mt-4 w-full bg-blue-600 text-black py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Details ->
        </button>
      </div>
    </div>
  );
}
