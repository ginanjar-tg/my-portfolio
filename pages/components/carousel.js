import React, { useState } from "react";
import Bahan from "../../public/projects/bahan/bahan.png";
import Location from "../../public/projects/location/location.png";
import Isekai from "../../public/projects/isekai/isekaistore.png";
import Jajaneling from "../../public/projects/jajaneling/jajaneling.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Jajaneling",
    description: "Made with PHP Native, this website is an official landing page of Jajaneling, which is a website that would make the transaction between street vendors and buyers so much easier than before.",
    image: Jajaneling,
  },
  {
    title: "Isekai Store Landing Page",
    description: "Made with NextJS, this website is an official landing page of Isekai Store, which is a web marketplace that sells stuff from other world, or known as Isekai.",
    image: Isekai,
    link: "https://isekaistore.vercel.app/",
  },
  {
    title: "Mapbox Location Management System",
    description: "Made with PHP Native and ReactJS, this app is a location management system that uses Mapbox API to display the location. This app also has a feature to detect weather.",
    image: Location,
  },
  {
    title: "Meatball Ingredients Management System",
    description: "A CRUD system to save the data of meatball ingredients stock. This app using CodeIgniter framework and also has been equipped with a login system.",
    image: Bahan,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-6">
              <h3 className="text-2xl font-bold text-white mb-4">{projects[currentIndex].title}</h3>
              <p className="text-gray-300 mb-4">{projects[currentIndex].description}</p>
              {projects[currentIndex].link && (
                <a
                  href={projects[currentIndex].link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition duration-300"
                >
                  Visit Website
                </a>
              )}
            </div>
            <div className="md:w-1/2 p-6">
              <div className="cursor-pointer" onClick={openModal}>
                <Image 
                  src={projects[currentIndex].image} 
                  alt={projects[currentIndex].title} 
                  className="rounded-lg hover:opacity-80 transition duration-300"
                />
                <p className="text-center text-gray-300 mt-2">Click to enlarge</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r-lg hover:bg-opacity-75 transition duration-300"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l-lg hover:bg-opacity-75 transition duration-300"
      >
        &#10095;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Modal for enlarged image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="max-w-4xl max-h-full p-4">
            <Image 
              src={projects[currentIndex].image} 
              alt={projects[currentIndex].title} 
              className="rounded-lg"
              layout="responsive"
              width={1200}
              height={800}
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
