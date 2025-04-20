import Image from "next/image";
import ginanjarPic from "../../public/ginanjar.png";
import pixelPic from "../../public/pixel.png";
import Carousel from "./carousel";
import { motion } from "framer-motion";

export default function Contents() {
  return (
    <div className="overflow-x-hidden">
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="h-40 w-40 md:h-64 md:w-64 relative mx-auto mb-8">
            <Image
              src={ginanjarPic}
              alt="Ginanjar&apos;s Photo"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-lg"
            />
          </div>
          <h1 className="font-poppins text-3xl md:text-5xl text-white font-bold mb-4">
            Ginanjar Tubagus Gumilar
          </h1>
          <p className="font-poppins text-xl md:text-2xl text-gray-300">
            Full Stack Developer
          </p>
        </motion.div>
      </section>

      <section id="about" className="min-h-screen flex items-center bg-gray-100 pt-16">
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2 className="font-bold text-3xl md:text-5xl mb-16 text-gray-800 text-center">
              Let me introduce myself
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <p className="text-base leading-relaxed text-gray-700 text-center md:text-justify">
                  A Full Stack Developer who adapts easily to various technologies to meet project demands with high delivery times. Experienced in web and desktop application development, with a focus on integrating geolocation and AI technologies. I am also often responsible for managing the production deployment process and training users to operate complex systems.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="h-64 w-64 relative">
                  <Image
                    src={pixelPic}
                    alt="Ginanjar&apos;s Pixel Photo"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section id="projects" className="min-h-screen flex items-center bg-gray-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-center font-bold text-3xl md:text-5xl mb-16 text-white">
              Stuff I Have Done
            </h2>
            <Carousel />
          </motion.div>
        </div>
      </section>

    <section id="resume" className="min-h-screen flex items-center bg-gray-100 pt-16">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-bold text-3xl md:text-5xl mb-16 text-gray-800">More About Me</h2>
          <p className="text-lg mb-8 text-gray-700">
            Here is my CV to know more about me. Like the old saying…
          </p>
          <div className="shadow-xl w-full md:w-1/2 mx-auto p-6 bg-white rounded-lg mb-8">
            <p className="text-2xl font-semibold italic text-gray-800">
              &quot;Out of sight, out of mind&quot;
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="https://drive.google.com/file/d/1MfUdZsTDGNjeHCIy8vI2rKkoUFjH-0lK/view?usp=sharing"
              className="inline-block font-bold px-8 py-3 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV [ENG]
            </a>
            <a
              href="https://drive.google.com/file/d/1WGJW0NrLxkYl5jALcoY8Nfep3hEOzhv7/view?usp=sharing"
              className="inline-block font-bold px-8 py-3 text-lg text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unduh CV [ID]
            </a>
          </div>
        </motion.div>
      </div>
    </section>

      <section id="contact" className="min-h-screen flex items-center bg-gray-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-bold text-3xl md:text-5xl mb-16 text-white">
              Let&apos;s Work Together!
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Keep in touch with me for any kind of project or just to say hi.
            </p>
            <div className="space-y-4 text-gray-300">
              <p>📧 Email: <a href="mailto:ginanjar0822@gmail.com" className="underline hover:text-blue-300">ginanjar0822@gmail.com</a></p>
              <p>📞 Telephone: +62 813-6135-4486</p>
              <p>👨‍💼 LinkedIn: <a href="https://www.linkedin.com/in/ginanjar-tubagus-gumilar-a4638b1b6/" className="underline hover:text-blue-300" target="_blank" rel="noopener noreferrer">Ginanjar Tubagus Gumilar</a></p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>Copyright © {new Date().getFullYear()} Ginanjar Tubagus Gumilar</p>
        </div>
      </footer>
    </div>
  );
}
