// src/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

import backgroundImage from '../assets/black.jpg'; // Make sure the path matches your file structure

// import userReg from '../src/userReg.jsx'

function Home() {
    return (
     
      <div className="container">
       
        <p class="text-center text-amber-900  max-w-lg mx-auto leading-relaxed font-serif font-bold mb-16">
  Experience the art of artisanal bread with our daily handcrafted loaves. Crafted with care and premium ingredients, each loaf delivers unmatched quality and flavor. Enjoy freshly baked excellence in every slice.
</p>
<section >
  <div
    className="relative w-screen h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-white text-4xl text-center font-serif italic font-semibold mb-12 mt-20">
        learn about the history <p><span className="text-[#FFC4C4]">of baking</span></p> 
      </p>
      
      {/* Grid layout with 4 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mx-24">
        {/* Column 1 */}
        <div className="text-[#FFC4C4] p-4 rounded text-center">
          <h3 className="text-xl font-semibold mb-2">3000 BC</h3>
          <p className="text-gray-200">
            The Birth of Bread:<p>Ancient Egyptians bake the earliest known leavened bread, using natural fermentation.</p>
          </p>
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="max-w-[280px] h-[210px] rounded mt-52"
          />
        </div>

        {/* Column 2 */}
        <div className="text-[#FFC4C4] p-4 rounded text-center">
          <h3 className="text-xl font-semibold mb-2">1800 AD</h3>
          <p className="text-gray-200">
            Industrial Baking Begins: <p>The invention of commercial yeast and mechanized milling transforms bread production and accessibility.</p>
          </p>
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className=" max-w-[280px] h-[210px] rounded mt-52"
          />
        </div>

        {/* Column 3 */}
        <div className="text-[#FFC4C4] p-4 rounded text-center relative">
          <h3 className="text-xl font-semibold mb-2">1800 AD</h3>
          <p className="text-gray-200 mb-4">
            Industrial Baking Begins:<br />
            The invention of commercial yeast and mechanized milling transforms bread production and accessibility.
          </p>
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="max-w-[280px] h-[210px] rounded mx-auto mt-52"
          />
        </div>

        {/* Column 4 */}
        <div className="text-[#FFC4C4] p-4 rounded text-center">
          <h3 className="text-xl font-semibold mb-2">2000 AD</h3>
          <p className="text-gray-200 m-0">
            Artisanal Revival: <span className="m-0">A resurgence of artisanal baking celebrates traditional methods, quality ingredients, and the rich heritage of bread-making.</span>
          </p>
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="max-w-[280px] h-[210px] rounded mt-52"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<section className='mt-[230px]'>
    <div>
        <p className='text-center text-[#FFC4C4] text-5xl  max-w-lg mx-auto leading-relaxed'>What we Produce?</p>
        <p className="text-center text-amber-900 text-2xl  max-w-lg mx-auto leading-relaxed font-serif font-bold">
        Meet our original products<p>made</p> 
       <p>with love</p></p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 w-[850px] mx-auto ">
      {/* Column 1 */}
      <div className="bg-white p-4 rounded text-center">
      <img
    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    alt="card-image"
    className="mb-0 mt-24 max-w-[280px] h-[210px] rounded  mx-auto"
  />
        <h3 className="text-xl font-semibold mb-2">Wheat cookies</h3>
        <p className="text-gray-700 w-[300px] mx-auto">
        Duis vehicula, enim vel fermentum porta, augue enim
ullamcorper metus, vel pellentesque libero est sit amet
velit. Nullam sit amet velit dictum, vehicula purus ac,
posuere nibh. Proin maximus maximus odio.
        </p> <button class="bg-amber-900 h-12 w-30 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">
  Show info
</button>
       
      </div>
     

      {/* Column 2 */}
      <div className="bg-white p-4 rounded  text-center ">
      <img
    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    alt="card-image"
    className="mb-0 mt-24 max-w-[250px] h-[210px] rounded  mx-auto"
  />
        <h3 className="text-xl font-semibold mb-2">Sesame cookies</h3>
        <p className="text-gray-700 w-[300px] mx-auto">
        Stet clita kasd gubergren, no sea takimata sanctus est
Lorem ipsum dolor sit amet. Duis autem vel eum iriure
dolor in hendrerit in vulputate velit esse molestie
consequat accumsan et iusto odio dignissim.
        </p>
        <button class="bg-amber-900 h-12 w-30 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">
        Show info
</button>
      </div>
      
</div>
</section>

<section className="relative">
  <div className="relative">
    <img
      src="../src/assets/contact3.jpg" // Replace with your image path
      alt="Decorative"
      className="w-screen max-w-full h-auto rounded"
    />

    {/* Overlay Text Container */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4" style={{ marginLeft: '9%' }}>
      <p className="text-amber-950 text-4xl font-serif italic font-semibold">
        Our speciality - <br />
        <span>traditional donuts!</span>
      </p>

      <p className="text-amber-900 max-w-lg leading-relaxed font-serif font-bold mt-8">
        Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl
        suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh,
        tincidunt ut eros a, vulputate consequat odio.
      </p>
      <button className="bg-amber-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-12 w-33">
  Contact us 
</button>
    </div>
    
  </div>
</section>




      </div>
      
      
    );
  };
  
  export default Home;
  


