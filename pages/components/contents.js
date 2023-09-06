// this contents will be called in navbar.js
import Image from "next/image";
import ginanjarPic from "../../public/ginanjar.png";
import pixelPic from "../../public/pixel.png";
import Carousel from "./carousel";
import Wave1 from "./wave1";
import Wave2 from "./wave2";

export default function Contents() {
  return (
    <div className="overflow-x-hidden">
      <section id="home">
        <div className="bg-gray-900 text-white pt-14 w-screen h-full">
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
      <section id="about">
        <Wave1 />
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
              frameworks. <br />
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
      <Wave2 />
      <section id="projects">
        <div className=" py-10 bg-gray-900 h-full font-poppins text-white -mt-5">
          <br />
          <div className="text-xs md:text-lg p-10">
            <div className="text-center font-bold text-xl md:text-4xl py-10">
              Stuff I Have Done
            </div>
            <br />
            <Carousel />
          </div>
        </div>
      </section>
      <Wave1 />
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
                  href="https://drive.google.com/file/d/1enuzCfvusbBMRfH0KYiiLkB__5VjrbXA/view?usp=sharing"
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
        <Wave2 />
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
