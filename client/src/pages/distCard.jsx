import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Star = ({ value }) => {
  const starColor = value <= 0 ? "text-gray-300" : "text-yellow-400";
  return (
    <svg
      className={`w-6 h-6 ${starColor}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {value <= 0 && (
        <path
          fillRule="evenodd"
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          clipRule="evenodd"
        />
      )}
      {value > 0 && value < 1 && (
        <>
          <defs>
            <linearGradient id="halfStar">
              <stop offset="50%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            fill="url(#halfStar)"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            clipRule="evenodd"
          />
        </>
      )}
      {value >= 1 && (
        <path
          fillRule="evenodd"
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          clipRule="evenodd"
        />
      )}
    </svg>
  );
};

const Rating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const decimalPart = rating - fullStars;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<Star key={i} value={1} />);
    } else if (i === fullStars + 1 && decimalPart > 0) {
      stars.push(<Star key={i} value={decimalPart} />);
    } else {
      stars.push(<Star key={i} value={0} />);
    }
  }

  return (
    <div className="flex items-center">
      {stars}
      <span className="ml-2 text-sm font-medium text-gray-500">
        ({rating.toFixed(1)})
      </span>
    </div>
  );
};

const DishCard = ({ dish }) => {
  if (!dish) {
    return null;
  }

  return (
    <motion.div
      className="product-card w-[300px] rounded-lg shadow-lg overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-6 px-4 bg-white flex flex-col items-center justify-center gap-3 group"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="para uppercase text-center leading-none z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="z-10 font-bold text-lg mb-1 tracking-wider text-gray-400">
          {dish.recipie?.dishName || "Dish Name"}
        </p>
        <p className="font-bold text-2xl tracking-wider text-[#495c48] z-30">
          {dish.recipie?.dishName || "Dish Name"}
        </p>
      </motion.div>
      <motion.div
        className="w-[220px] h-[220px] relative z-20 overflow-hidden rounded-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={dish.dishPictures[0]?.URL || "/api/placeholder/220/220"}
          alt={dish.recipie?.dishName || "Dish Image"}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-2xl font-semibold">
            ${dish.price?.toFixed(2) || "N/A"}
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Rating rating={dish.dishRatingAvg || 0} />
      </motion.div>
    </motion.div>
  );
};

const DishCardContainer = () => {
  const [dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios

      .get("http://localhost:3001/api/dishes/getDishes")

      .then((response) => {
        const fetchedDishes = response.data;
        if (Array.isArray(fetchedDishes)) {
          setDishes(fetchedDishes);
        } else {
          throw new Error("Unexpected data format");
        }
      })
      .catch((error) => {
        console.error("Error fetching dishes:", error);
        setError("Failed to fetch dishes. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <motion.div
        className="text-center text-2xl mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Loading dishes...
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className="text-center text-2xl mt-8 text-red-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {error}
      </motion.div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-[#495c48]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Delicious Menu
      </motion.h1>
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {dishes.length > 0 ? (
          dishes.map((dish, index) => (
            <motion.div
              key={dish._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DishCard dish={dish} />
            </motion.div>
          ))
        ) : (
          <p className="text-xl text-gray-600">No dishes available.</p>
        )}
      </motion.div>
    </div>
  );
};

export default DishCardContainer;
