import React, { useState, useEffect } from 'react';
import { Search, Filter, Clock, DollarSign, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RecipeDishList = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    // Fetch items from the backend
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/recipes/getrecipes"
      );
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const filteredItems = items.filter(
    (item) =>
      item.dishName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCategory === "All" || item.category === filterCategory) &&
      (filterType === "All" ||
        (filterType === "recipe" ? !item.isDish : item.isDish))
  );

  const categories = ["All", ...new Set(items.map((item) => item.category))];
  const types = ["All", "recipe", "dish"];

  return (
    <div className="min-h-screen bg-[#f8e5e1] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#c98d83] mb-8">
          Recipe and Dish Catalog
        </h1>

        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="relative mb-4 md:mb-0 md:w-1/3">
            <input
              type="text"
              placeholder="Search recipes and dishes..."
              className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#c98d83]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2 text-gray-400" size={20} />
          </div>

          <div className="flex space-x-4">
            <div className="relative">
              <select
                className="appearance-none bg-white border rounded-full px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-[#c98d83]"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <Filter
                className="absolute right-2 top-2 text-gray-400"
                size={20}
              />
            </div>

            <div className="relative">
              <select
                className="appearance-none bg-white border rounded-full px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-[#c98d83]"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
              <Filter
                className="absolute right-2 top-2 text-gray-400"
                size={20}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.overviewPicture}
                alt={item.dishName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold text-[#c98d83]">
                    {item.dishName}
                  </h2>
                  <div className="flex space-x-2">
                    <Link to={`/recipe/${item._id}`}>
                      <button className="text-sm font-medium text-white bg-[#c98d83] px-2 py-1 rounded-full hover:bg-[#b67c73] transition-colors duration-300">
                        Recipe
                      </button>
                    </Link>
                    {item.isDish && (
                      <Link to={`/dish/${item._id}`}>
                        <button className="text-sm font-medium text-white bg-[#b67c73] px-2 py-1 rounded-full hover:bg-[#a56b62] transition-colors duration-300">
                          Dish
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 h-12 overflow-hidden">
                  {item.dishDescription}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">
                    {item.category}
                  </span>
                  <div className="flex items-center text-[#c98d83]">
                    <Clock size={16} className="mr-1" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-12 border-2 border-[#c98d83] rounded-lg p-8 flex justify-center items-center">
          <Link
            to="/recipe-dish-create"
            className="hover:text-rose-200 transition duration-300"
          >
            <button className="bg-[#c98d83] text-white px-6 py-3 rounded-full hover:bg-[#b67c73] transition-colors duration-300 flex items-center justify-center text-lg font-semibold">
              <Plus size={24} className="mr-2" />
              Add New Recipe or Dish
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};


export default RecipeDishList;
