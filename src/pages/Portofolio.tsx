import Navbar from "../component/Navbar";
import React, { useState, useEffect } from "react";
import Gallery from "../component/porto/Gallery";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import axios from "axios";
import ProjectItem from "../component/porto/ProjectItem";

interface ImageData {
  id: number;
  imageSrc: string;
  altImage: string;
  category: string;
}

interface Project {
  id: number;
  year: string;
  title: string;
  description: string;
}

const Portofolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [images, setImages] = useState<ImageData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:3307/api/proyek");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:3307/api/images", {
          params: { category: "porto_proyek" },
        });
        setImages(response.data);
      } catch (err) {
        setError("Failed to fetch images");
      }
    };

    fetchImages();
  }, []);

  const visibleProjects = isVisible ? projects : projects.slice(0, 2);

  return (
    <>
      <Navbar />
      <Banner
        bgImage="./img/portofolio/banner_porto.jpg"
        headCaption="Portofolio"
        captionSection="Sekilas tentang proyek dan galeri foto kami"
      />
      <div className="my-10 bg-transparent text-center">
        <h1 className="inline-block text-3xl font-raleway font-medium text-ne02 sm:text-4xl">
          Proyek
        </h1>
        {visibleProjects.map((project, index) => {
          const image = images[index];
          return (
            <ProjectItem
              key={project.id}
              imageSrc={image?.imageSrc || ""}
              altImage={image?.altImage || project.title}
              year={project.year}
              title={project.title}
              description={project.description}
            />
          );
        })}
        <button
          className="font-semibold font-montserrat uppercase place-items-center px-6 py-3 text-sm my-2 inline-flex place-items-center bg-sc06 text-ne01 hover:bg-pr03"
          onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Ciutkan" : "Selengkapnya"}
        </button>
      </div>
      <Gallery />
      <Footer />
    </>
  );
};

export default Portofolio;
