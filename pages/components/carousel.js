// this carousel will be used in contents.js
import React from "react";
import Bahan from "../../public/projects/bahan/bahan.png";
import Location from "../../public/projects/location/location.png";
import Isekai from "../../public/projects/isekai/isekaistore.png";
import Jajaneling from "../../public/projects/jajaneling/jajaneling.png";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide relative"
      data-bs-ride="carousel"
      data-bs-interval="false"
    >
      <div className="w-full flex">
        <div className="carousel-inner relative w-full md:w-1/2 overflow-hidden tex-center m-auto">
          <div className="carousel-item active relative float-left w-full">
            <div className="text-xs md:text-base block border-4 border-gray-500 rounded-xl bg-gray-900 text-center">
              <p className="p-5">
                <div
                  id="item1"
                  className="text-xl font-bold mb-5 md:mt-0 mt-5 text-center"
                >
                  Jajaneling
                </div>
                Made with PHP Native, this website is an official landing page
                of Jajaneling, which is a web that would make the transaction
                between street vendors and buyers so much easier than before.
                You can check the website{" "}
                <a
                  href="https://jajaneling.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  here
                </a>
                .
              </p>
              <div className="relative mx-auto p-5">
                <TransformWrapper initialScale={1}>
                  {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                      <TransformComponent>
                        <Image src={Jajaneling} className="rounded-lg" />
                      </TransformComponent>

                      <div className="tools space-x-3 text-center py-3 text-sm">
                        <button
                          onClick={() => zoomIn()}
                          className="btn-primary bg-blue-500 hover:bg-blue-700 p-2 rounded"
                        >
                          Zoom In
                        </button>
                        <button
                          onClick={() => zoomOut()}
                          className="btn-primary bg-blue-500 hover:bg-blue-700 p-2 rounded"
                        >
                          Zoom Out
                        </button>
                        <button
                          onClick={() => resetTransform()}
                          className="btn-primary bg-blue-500 hover:bg-blue-700 p-2 rounded"
                        >
                          Reset
                        </button>
                      </div>
                    </React.Fragment>
                  )}
                </TransformWrapper>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div className="text-xs md:text-base block border-4 border-gray-500 rounded-xl bg-gray-900 text-center">
              <p className="p-5">
                <div
                  id="item1"
                  className="text-xl font-bold mb-5 md:mt-0 mt-5 text-center"
                >
                  Isekai Store Landing Page
                </div>
                Made with NextJS, this website is an official landing page of
                Isekai Store, which is a web marketplace that sells stuff from
                other world, or known as Isekai. You can check the website{" "}
                <a
                  href="https://isekaistore.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  here
                </a>
                .
              </p>
              <div className="relative mx-auto p-5">
                <TransformWrapper initialScale={1}>
                  {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                      <TransformComponent>
                        <Image src={Isekai} className="rounded-lg" />
                      </TransformComponent>

                      <div className="tools space-x-3 text-center py-3 text-sm">
                        <button
                          onClick={() => zoomIn()}
                          className="btn-primary bg-blue-500 hover:bg-blue-700 p-2 rounded"
                        >
                          Zoom In
                        </button>
                        <button
                          onClick={() => zoomOut()}
                          className="btn-primary bg-blue-500 hover:bg-blue-700 p-2 rounded"
                        >
                          Zoom Out
                        </button>
                        <button
                          onClick={() => resetTransform()}
                          className="btn-primary bg-blue-500 hover:bg-blue-700 p-2 rounded"
                        >
                          Reset
                        </button>
                      </div>
                    </React.Fragment>
                  )}
                </TransformWrapper>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div className="text-xs md:text-base block border-4 border-gray-500 rounded-xl bg-gray-900 text-center">
              <p className="p-5">
                <div
                  id="item1"
                  className="text-xl font-bold mb-5 md:mt-0 mt-5 text-center"
                >
                  Mapbox Location Management System
                </div>
                Made with PHP Native and ReactJS, this app is a location
                management system that uses Mapbox API to display the location.
                This app also has a feature to detect weather.
              </p>
              <div className="relative mx-auto p-5">
                <TransformWrapper initialScale={1}>
                  {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                      <TransformComponent>
                        <Image src={Location} className="rounded-lg" />
                      </TransformComponent>

                      <div className="tools space-x-3 text-center py-3 text-sm">
                        <button
                          onClick={() => zoomIn()}
                          className="btn-primary bg-blue-500 hover:bg-blue-700 p-2 rounded"
                        >
                          Zoom In
                        </button>
                        <button
                          onClick={() => zoomOut()}
                          className="btn-primary bg-blue-500 hover:bg-blue-700 p-2 rounded"
                        >
                          Zoom Out
                        </button>
                        <button
                          onClick={() => resetTransform()}
                          className="btn-primary bg-blue-500 hover:bg-blue-700 p-2 rounded"
                        >
                          Reset
                        </button>
                      </div>
                    </React.Fragment>
                  )}
                </TransformWrapper>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div className="text-xs md:text-base block border-4 border-gray-500 rounded-xl bg-gray-900 text-center">
              <p className="p-5">
                <div
                  id="item1"
                  className="text-xl font-bold mb-5 md:mt-0 mt-5 text-center"
                >
                  Meatball Ingredients Management System
                </div>
                A CRUD system to save the data of meatball ingredients stock.
                This app using CodeIgniter framework and also has been equipped
                with a login system.
              </p>
              <div className="relative mx-auto p-5">
                <TransformWrapper initialScale={1}>
                  {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                      <TransformComponent>
                        <Image src={Bahan} className="rounded-lg" />
                      </TransformComponent>

                      <div className="tools space-x-3 text-center py-3 text-sm">
                        <button
                          onClick={() => zoomIn()}
                          className="btn-primary bg-blue-500 hover:bg-blue-700 p-2 rounded"
                        >
                          Zoom In
                        </button>
                        <button
                          onClick={() => zoomOut()}
                          className="btn-primary bg-blue-500 hover:bg-blue-700 p-2 rounded"
                        >
                          Zoom Out
                        </button>
                        <button
                          onClick={() => resetTransform()}
                          className="btn-primary bg-blue-500 hover:bg-blue-700 p-2 rounded"
                        >
                          Reset
                        </button>
                      </div>
                    </React.Fragment>
                  )}
                </TransformWrapper>
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
