import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const Recipe_dish_creation = () => {
  const [includesDish, setIncludesDish] = useState(false);
  const [recipeInputs, setRecipeInputs] = useState({
    dishName: '',
    ingredients: '',
    recipeOverview: '',
    steps: '',
    duration: '',
    overviewPicture: null,
    category: ''
  });
  const [dishInputs, setDishInputs] = useState({
    dishDescription: '',
    dishPictures: [],
    price: ''
  });

  const handleRecipeInputChange = (e) => {
    const { name, value } = e.target;
    setRecipeInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleDishInputChange = (e) => {
    const { name, value } = e.target;
    setDishInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e, inputName) => {
    const file = e.target.files[0];
    if (inputName === 'overviewPicture') {
      setRecipeInputs(prev => ({ ...prev, [inputName]: file }));
    } else if (inputName === 'dishPictures') {
      setDishInputs(prev => ({ ...prev, dishPictures: [...prev.dishPictures, file] }));
    }
  };

  const removeDishPicture = (index) => {
    setDishInputs(prev => ({
      ...prev,
      dishPictures: prev.dishPictures.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Recipe Data:', recipeInputs);
    if (includesDish) {
      console.log('Dish Data:', dishInputs);
    }
    // Reset form or show success message
  };

  return (
    <div className="min-h-screen bg-[#f8e5e1] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-[#c98d83] mb-8">Create New Recipe & Dish</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Recipe Inputs */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#c98d83]">Recipe Details</h2>
            
            <div>
              <label htmlFor="dishName" className="block text-sm font-medium text-gray-700">Dish Name</label>
              <input
                type="text"
                id="dishName"
                name="dishName"
                value={recipeInputs.dishName}
                onChange={handleRecipeInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#c98d83] focus:border-[#c98d83]"
                required
              />
            </div>

            <div>
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={recipeInputs.ingredients}
                onChange={handleRecipeInputChange}
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#c98d83] focus:border-[#c98d83]"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="recipeOverview" className="block text-sm font-medium text-gray-700">Recipe Overview</label>
              <textarea
                id="recipeOverview"
                name="recipeOverview"
                value={recipeInputs.recipeOverview}
                onChange={handleRecipeInputChange}
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#c98d83] focus:border-[#c98d83]"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="steps" className="block text-sm font-medium text-gray-700">Steps</label>
              <textarea
                id="steps"
                name="steps"
                value={recipeInputs.steps}
                onChange={handleRecipeInputChange}
                rows="5"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#c98d83] focus:border-[#c98d83]"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (in minutes)</label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={recipeInputs.duration}
                onChange={handleRecipeInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#c98d83] focus:border-[#c98d83]"
                required
              />
            </div>

            <div>
              <label htmlFor="overviewPicture" className="block text-sm font-medium text-gray-700">Overview Picture</label>
              <input
                type="file"
                id="overviewPicture"
                name="overviewPicture"
                onChange={(e) => handleFileUpload(e, 'overviewPicture')}
                className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-[#c98d83] file:text-white
                hover:file:bg-[#b17c73]"
                accept="image/*"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
              <select
                id="category"
                name="category"
                value={recipeInputs.category}
                onChange={handleRecipeInputChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-[#c98d83] focus:border-[#c98d83] sm:text-sm rounded-md"
                required
              >
                <option value="">Select a category</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Dessert</option>
                <option value="snack">Snack</option>
              </select>
            </div>
          </div>

          {/* Checkbox for including dish */}
          <div className="flex items-center">
            <input
              id="includesDish"
              name="includesDish"
              type="checkbox"
              checked={includesDish}
              onChange={(e) => setIncludesDish(e.target.checked)}
              className="h-4 w-4 text-[#c98d83] focus:ring-[#c98d83] border-gray-300 rounded"
            />
            <label htmlFor="includesDish" className="ml-2 block text-sm text-gray-900">
              Include Dish Details
            </label>
          </div>

          {/* Dish Inputs */}
          {includesDish && (
            <div className="space-y-4 mt-6">
              <h2 className="text-xl font-semibold text-[#c98d83]">Dish Details</h2>
              
              <div>
                <label htmlFor="dishDescription" className="block text-sm font-medium text-gray-700">Dish Description</label>
                <textarea
                  id="dishDescription"
                  name="dishDescription"
                  value={dishInputs.dishDescription}
                  onChange={handleDishInputChange}
                  rows="3"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#c98d83] focus:border-[#c98d83]"
                  required={includesDish}
                ></textarea>
              </div>

              <div>
                <label htmlFor="dishPictures" className="block text-sm font-medium text-gray-700">Dish Pictures</label>
                <input
                  type="file"
                  id="dishPictures"
                  name="dishPictures"
                  onChange={(e) => handleFileUpload(e, 'dishPictures')}
                  className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-[#c98d83] file:text-white
                  hover:file:bg-[#b17c73]"
                  accept="image/*"
                  multiple
                  required={includesDish}
                />
                {dishInputs.dishPictures.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {dishInputs.dishPictures.map((pic, index) => (
                      <div key={index} className="relative">
                        <img src={URL.createObjectURL(pic)} alt={`Dish picture ${index + 1}`} className="h-20 w-20 object-cover rounded" />
                        <button
                          type="button"
                          onClick={() => removeDishPicture(index)}
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={dishInputs.price}
                  onChange={handleDishInputChange}
                  step="0.01"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#c98d83] focus:border-[#c98d83]"
                  required={includesDish}
                />
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#c98d83] hover:bg-[#b17c73] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c98d83]"
            >
              <Plus className="mr-2" size={16} />
              Create Recipe {includesDish && '& Dish'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Recipe_dish_creation;