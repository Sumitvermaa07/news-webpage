import React, { useEffect, useState } from 'react';
import NewsData from './NewsData';

function News() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [Search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);


  const getData = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${Search}&from=2025-08-15&sortBy=publishedAt&apiKey=732b8dabbbcc4ceebeb35351c50082d1`);
    const jsondata = await response.json();
    console.log(jsondata.articles);
    setNewsData(jsondata.articles);
  }
  useEffect(()=>{
    getData()
  },[])
  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    getData();

  }
  const userinput = (e)=>{
setSearch(e.target.value)
  }

  return (


   <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
  {/* Navbar */}
  <nav className="bg-white border-b border-gray-200 px-4 py-3 md:px-6 shadow-sm sticky top-0 z-50">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
      {/* Logo */}
      <a href="#" className="text-2xl font-bold text-gray-800">
        <span className="text-blue-600">New's Com</span>
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        type="button"
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
        aria-controls="navbar-menu"
        aria-expanded={menuOpen}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Menu Items */}
      <div className={`${menuOpen ? '' : 'hidden'} w-full md:flex md:items-center md:w-auto`} id="navbar-menu">
        <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 mt-4 md:mt-0 w-full md:w-auto">
          <li><a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Home</a></li>
          <li><a href="#" className="block py-2 text-gray-700 hover:text-blue-600">About</a></li>
          <li><a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Services</a></li>
          <li><a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a></li>

          {/* Search Bar */}
          <div className="flex items-center mt-3 md:mt-0 md:ml-6">
            <input
              value={Search}
              onChange={handleInput}
              type="text"
              placeholder="Search News"
              className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              onClick={getData}
              className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition"
            >
              Search
            </button>
          </div>
        </ul>
      </div>
    </div>
  </nav>

  {/* Tagline */}
  <div className="text-center mt-6">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-700">Stay Updated with Trendy News 📰</h2>
  </div>

  {/* Category Buttons */}
  <div className="flex flex-wrap justify-center gap-4 my-6 px-4">
    {['Sports', 'Fitness', 'Movies', 'Politics', 'Entertainment'].map((category) => (
      <button
        key={category}
        onClick={userinput}
        value={category.toLowerCase()}
        className="px-5 py-2 rounded-full bg-blue-600 text-white text-base hover:bg-blue-700 active:scale-95 transition-transform"
      >
        {category}
      </button>
    ))}
  </div>

  {/* News Section */}
  <div className="px-4 pb-10">
    <NewsData data={newsData} />
  </div>
</div>


  );
}

export default News;
