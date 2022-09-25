import React from "react";
import Image from "next/image";
import Bahan from "../../public/projects/bahan/bahan.png";
import Zoom from "next-image-zoom";
import "tw-elements";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="w-full flex">
        <div className="carousel-inner relative w-1/2 overflow-hidden tex-center m-auto">
          <div className="carousel-item active relative float-left w-full">
            <div className="text-xs md:text-base block border-4 border-gray-500 rounded-xl bg-gray-900">
              <p className="p-5">
                <div
                  id="item1"
                  className="text-xl font-bold mb-5 md:mt-0 mt-5 text-center"
                >
                  Sistem Manajemen Bahan Baku Bakso
                </div>
                A CRUD system to save the data of meatball ingredients stock.
                This app using CodeIgniter framework and also has been equipped
                with a login system.
              </p>
              <div className="relative mx-auto p-5">
                <Zoom src={Bahan} layout={"responsive"} />
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div className="text-xs md:text-base block border-4 border-gray-500 rounded-xl bg-gray-900">
              <p className="p-5">
                <div
                  id="item1"
                  className="text-xl font-bold mb-5 md:mt-0 mt-5 text-center"
                >
                  Sistem Manajemen Alamat
                </div>
                A CRUD system to save the data of meatball ingredients stock.
                This app using CodeIgniter framework and also has been equipped
                with a login system.
              </p>
              <div className="relative mx-auto p-5">
                <Zoom src={Bahan} layout={"responsive"} />
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div className="text-xs md:text-base block border-4 border-gray-500 rounded-xl bg-gray-900">
              <p className="p-5">
                <div
                  id="item1"
                  className="text-xl font-bold mb-5 md:mt-0 mt-5 text-center"
                >
                  Sistem Manajemen Kucing
                </div>
                A CRUD system to save the data of meatball ingredients stock.
                This app using CodeIgniter framework and also has been equipped
                with a login system.
              </p>
              <div className="relative mx-auto p-5">
                <Zoom src={Bahan} layout={"responsive"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
