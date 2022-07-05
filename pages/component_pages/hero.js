import Image from "next/image";
import ginanjarPic from "../../public/ginanjar.png";
import pixelPic from "../../public/pixel.png";

export default function Hero() {
  return (
    <div>
      <section id="home">
        <div className="bg-gray-800 text-white mt-20">
          <br />
          <div className="h-32 w-32 md:h-64 md:w-64 relative mx-auto">
            <Image
              src={ginanjarPic}
              alt="Ginanjar's Photo"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <br />
          <div className="font-poppins text-lg md:text-3xl text-white text-center font-bold p-2 md:p-4">
            <h1>Ginanjar Tubagus Gumilar</h1>
          </div>
          <div className="font-poppins md:text-lg text-xs text-white text-center">
            <p>College Student | Website Developer</p>
            <br />
          </div>
        </div>
      </section>
      {/* MORE CONTENT */}
      <section id="about">
        {/* SVG WAVE */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,170.7C96,149,192,107,288,101.3C384,96,480,128,576,117.3C672,107,768,53,864,64C960,75,1056,149,1152,165.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="bg-white font-poppins text-gray-800 h-full md:h-screen md:-mt-10 -mt-3">
          <div className="text-center font-bold text-xl md:text-4xl">
            Let Me Introduce Myself
          </div>
          <div className="text-xs md:text-lg py-10 md:py-20 px-10 md:grid md:grid-cols-2 grid-cols-none mx-auto place-content-center place-items-center">
            <p className="mt-10">
              Hi There! 👋
              <br />
              <br />
              I fell in love with programming and I have at least learnt
              something, I think... <br />
              I am fluent in classics like Java and MySQL. <br />
              My field of Interests are building new Web Technologies and
              Products. <br />
              Whenever possible, I also apply my passion for developing products
              <br />
              with Modern PHP Library and Frameworks like CodeIgniter.
            </p>
            <div className="h-32 w-32 md:h-64 md:w-64 relative mx-auto">
              <Image
                src={pixelPic}
                alt="Ginanjar's Pixel Photo"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © Ginanjar Tubagus Gumilar</p>
        </div>
      </footer>
    </div>
  );
}
