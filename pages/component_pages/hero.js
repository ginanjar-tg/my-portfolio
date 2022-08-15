import Image from "next/image";
import ginanjarPic from "../../public/ginanjar.png";
import pixelPic from "../../public/pixel.png";
import bahan from "../../public/projects/bahan/bahan.png";

export default function Hero() {
  return (
    <div>
      <section id="home">
        <div className="bg-gray-900 text-white mt-20 w-screen h-full">
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
        <div className="bg-white h-full font-poppins text-gray-800 -mt-5">
          <div className="text-center font-bold text-xl md:text-4xl">
            Let Me Introduce Myself
          </div>
          <div className="text-xs md:text-lg py-10 md:py-20 px-10 md:grid md:grid-cols-2 grid-cols-none mx-auto place-content-center place-items-center">
            <p>
              Hi There! 👋
              <br />
              <br />
              I fell in love with programming and I have at least learnt
              something, I think... <br />
              My field of Interests are building new Web Technologies and
              Products. <br />
              I am quite confident with my PHP skills, both PHP Native or PHP
              frameworks like CodeIgniter. <br />
              Whenever possible, I also apply my passion for developing products
              with Modern JavaScript Library and Frameworks like NextJS.
            </p>
            <div className="h-32 w-32 md:h-64 md:w-64 relative mx-auto md:block hidden">
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
      {/* SVG WAVE */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,192L40,181.3C80,171,160,149,240,122.7C320,96,400,64,480,85.3C560,107,640,181,720,202.7C800,224,880,192,960,186.7C1040,181,1120,203,1200,208C1280,213,1360,203,1400,197.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <section id="projects">
        <div className="bg-gray-900 h-full font-poppins text-white -mt-5">
          <br />
          <div className="text-center font-bold text-xl md:text-4xl">
            Stuff I Have Done
          </div>
          <div className="text-xs md:text-lg py-10 md:py-20">
            <p className="text-center">
              Here are some cool website projects I have created using PHP and
              JavaScript. Some of them use CodeIgniter and NextJS frameworks.
            </p>
            <div className="p-10">
              <div className="text-xs md:text-lg py-10 md:py-20 px-10 md:grid md:grid-cols-2 grid-cols-none block bg-gray-900 rounded-lg border-4 border-gray-500">
                <div className="relative mx-auto">
                  <Image
                    src={bahan}
                    alt="Meatball ingridients stock CRUD System"
                  />
                </div>
                <p className="p-5 md:p-10 text-center">
                  <h5 className="md:text-2xl text-xl font-bold mb-5 md:mt-0 mt-5 text-center">
                    CRUD Bakso
                  </h5>
                  A CRUD systems to save the data of meatball ingredients stock.
                  This app using CodeIgniter framework and also has been
                  equipped with a login system.
                  <br />
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SVG WAVE */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,160L40,154.7C80,149,160,139,240,144C320,149,400,171,480,197.3C560,224,640,256,720,224C800,192,880,96,960,80C1040,64,1120,128,1200,176C1280,224,1360,256,1400,272L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <section id="resume">
        <div className="text-center bg-white h-full font-poppins text-gray-800 -mt-5">
          <br />
          <div className="py-20">
            <div className="font-bold text-xl md:text-4xl">More About Me</div>
            <div className="text-xs md:text-lg py-10 md:py-20">
              <p>
                Here is my CV to know more about me. Like the old saying… <br />
                <br />
                <div className="shadow-xl w-full md:w-1/2 h-full p-5 bg-white rounded-lg text-lg md:text-2xl font-semibold m-auto text-center">
                  <i> &quot; Out of sight, out of mind &quot;</i>
                </div>
                <br />
                <a
                  href="https://ginanjartg.me/resume/cv.pdf"
                  className="font-bold mt-10 inline-flex items-center p-3 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Download My CV
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        {/* SVG WAVE */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L34.3,192C68.6,160,137,96,206,69.3C274.3,43,343,53,411,74.7C480,96,549,128,617,133.3C685.7,139,754,117,823,117.3C891.4,117,960,139,1029,170.7C1097.1,203,1166,245,1234,245.3C1302.9,245,1371,203,1406,181.3L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        <div className="bg-gray-900 h-full font-poppins text-white -mt-5 py-14">
          <br />
          <div className="text-center font-bold text-xl md:text-4xl">
            Let&apos;s Work Together!
          </div>
          <div className="text-xs md:text-lg py-10 md:py-20">
            <p className="text-center">
              Keep in touch with me for any kind of project or just to say hi.
              <br />
              📧 Email :{" "}
              <a href="mailto:ginanjar0822@gmail.com">ginanjar0822@gmail.com</a>
              <br />
              📞 Telephone : +62 813-6135-4486
              <br />
              👨‍💼 LinkedIn :{" "}
              <a href="https://www.linkedin.com/in/ginanjar-tubagus-gumilar-a4638b1b6/">
                Ginanjar Tubagus Gumilar
              </a>
              <br />
              🌐 Website : <a href="https://ginanjartg.me">ginanjartg.me</a>
              <br />
            </p>
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
