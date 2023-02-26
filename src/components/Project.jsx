import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.png";
// import project_person from "../assets/images/project_person1.png";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Mini Blogging Site",
      github_link: "https://github.com/functionupjkg/Project-1-Mini-BlogSites",
      live_link: "/",
    },
    {
      img: project2,
      name: "Open To Intern",
      github_link: "https://github.com/functionupjkg/Project-2-Open-to-Intern",
      live_link: "/",
    },
    {
      img: project3,
      name: "Book Management",
      github_link: "https://github.com/functionupjkg/Project-3-Books-Management",
      live_link: "/",
    },
    {
      img: project4,
      name: "Url Shortener",
      github_link:
        "https://github.com/functionupjkg/Project-4-URL-Shortner",
      live_link: "/",
    },
    {
      img: project5,
      name: "Product Managment",
      github_link: "https://github.com/functionupjkg/Project-5-Product-Management",
      live_link: "/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w w-full">
          <Swiper
            slidesPerview={1.4}
            spaceBetween={10}
            breakpoints={{
              360: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-3 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-2">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>

            ))}
            <br></br>
            <br></br>
          </Swiper>
        </div>
        {/* <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Project;
