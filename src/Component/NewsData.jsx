import React from "react";


function NewsData({ data }) {
  console.log(data);

  if (!data || data.length === 0) {
    return <p className="text-4xl m-auto text-center">No news available.</p>;
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6 bg-gray-100">
  {data
    .filter((curtem) => curtem.urlToImage) // ✅ Only include items with images
    .map((curtem, index) => (
      <div
        key={curtem.id || index}
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 w-80 p-5 flex flex-col"
      >
        <div className="space-y-4 flex flex-col h-full">
          {/* Image */}
          <img
            src={curtem.urlToImage}
            alt={curtem.title}
            className="w-full h-48 object-cover rounded-md"
          />

          {/* Title */}
         <a> <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {curtem.title}
          </h3></a>

          {/* Description */}
          <p className="text-gray-600 text-sm line-clamp-3">
            {curtem.description}
          </p>

          {/* Button */}
          <button
            onClick={() => window.open(curtem.url, "_blank")}
            className="mt-auto bg-blue-600 text-white text-sm font-medium py-2 rounded-md hover:bg-blue-700 transition"
          >
            Show More
          </button>
        </div>
      </div>
    ))}
</div>


  );
}

export default NewsData;
