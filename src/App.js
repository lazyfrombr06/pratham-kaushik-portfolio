import React, { useState } from "react";
import ParticleBackground from "./Components/ParticalBackground"; //Calling partical js code
import ImageWithHoverEffect from "./Components/ImageWithHoverEffect/ImageWithHoverEffect"; //code for hover image effect
import "./App.css";
import "./Responsive.css";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed"; // use for animated typing effect on website
import { Link, animateScroll as scroll } from "react-scroll";
import { useInView } from "react-intersection-observer"; //Trigger Animation on Scroll
// import Brajeshimg from "./Media/brajesh.jpg";
import prathamKaushikImage from "./Media/pratham.jpg";
import {
  FaUserTie,
  FaLaptopCode,
  FaGraduationCap,
  FaCertificate,
  FaProjectDiagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaHeadset,
  FaHome,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowCircleDown,
  FaTelegramPlane,
  FaYoutube
} from "react-icons/fa"; //React icons
import dpsru from "./Media/dpsru image.jpg";
import pgims from "./Media/pt-bhagwat-dayal-sharma-post-graduate-institute-of-medical-sciences-rohtak-universities-wiaexi0.avif";

// Skill image calling
import python from "./Media/Skills Logo/python--v1.png";
import groovy from "./Media/Skills Logo/Groovy-logo.svg.png";
import scikitLearm from "./Media/Skills Logo/Scikit_learn_logo_small.svg.png";
import numpy from "./Media/Skills Logo/numpy.png";
import pandas from "./Media/Skills Logo/pandas.png";
import matplotlib from "./Media/Skills Logo/matplotlib.png";
import seaborn from "./Media/Skills Logo/seaborn.png";
import keras from "./Media/Skills Logo/keras.png";
import tenserflow from "./Media/Skills Logo/tenserflow.png";
import nextflow from "./Media/Skills Logo/Nextflow.png";
import aws from "./Media/Skills Logo/amazon-web-services.png";
import azure from "./Media/Skills Logo/azure-icon-512x396-6fn0yfat.png";
import opencv from "./Media/Skills Logo/opencv.png";
import html5 from "./Media/Skills Logo/html-5--v1.png";
import mysql from "./Media/Skills Logo/mysql-logo.png";
import opneai from "./Media/Skills Logo/openAi.png";
import huggingFace from "./Media/Skills Logo/hugging face.png";
import langchain from "./Media/Skills Logo/langchain.png";
import git from "./Media/Skills Logo/git.png";
import github from "./Media/Skills Logo/github.png";
import powerBI from "./Media/Skills Logo/Power-BI-Logo-2013.png";
// import amazonsegmaker from './Media/Skills Logo/aws s3.webp'
import awsglue from "./Media/Skills Logo/aws_glue_logo.webp";
import awss3 from "./Media/Skills Logo/aws s3.webp";
import xception from "./Media/Skills Logo/Xception.png";
import msoffice from "./Media/Skills Logo/Microsoft_Office_2007-Logo.wine.png";
import css3 from "./Media/Skills Logo/css3.png";
import contactmeclipart from "./Media/contact me.webp";

// certificates
import certificate1 from "./Media/Certificate/Certificate 1.jpg";
import certificate2 from "./Media/Certificate/Certificate 2.jpg";
import certificate3 from "./Media/Certificate/Certificate 3.jpg";
import certificate4 from "./Media/Certificate/Certificate 4.jpg";
import certificate5 from "./Media/Certificate/Certificate 5.jpg";
import certificate6 from "./Media/Certificate/Certificate 6.jpg";
import certificate7 from "./Media/Certificate/Certificate 7.jpg";
import certificate8 from "./Media/Certificate/Certificate 8.jpg";
import certificate9 from "./Media/Certificate/Certificate 9.jpg";
import certificate10 from "./Media/Certificate/Certificate 10.jpg";
import certificate11 from "./Media/Certificate/Certificate 11.jpg";
import certificate12 from "./Media/Certificate/Certificate 12.jpg";
import certificate13 from "./Media/Certificate/Certificate 13.jpg";
import whatsappCertificate1 from "./Media/Certificate/WhatsApp Certificate 1.jpeg";
import whatsappCertificate2 from "./Media/Certificate/WhatsApp Certificate 2.jpeg";
import whatsappCertificate3 from "./Media/Certificate/WhatsApp Certificate 3.jpeg";
import whatsappCertificate4 from "./Media/Certificate/WhatsApp Certificate 4.jpeg";
import whatsappCertificate5 from "./Media/Certificate/WhatsApp Certificate 5.jpeg";
import whatsappCertificate6 from "./Media/Certificate/WhatsApp Certificate 6.jpeg";

//Projects
import project1 from "./Media/Projects/project 1.jpeg";
import project2 from "./Media/Projects/project 2.jpeg";
import project3 from "./Media/Projects/project 3.jpeg";
import project4 from "./Media/Projects/project 4.jpeg";
import project5 from "./Media/Projects/project 5.jpeg";
import project6 from "./Media/Projects/project 6.jpeg";
import project7 from "./Media/Projects/project 7.jpeg";
import project8 from "./Media/Projects/project 8.jpeg";
import project9 from "./Media/Projects/project 9.jpeg";
import project10 from "./Media/Projects/project 10.jpeg";
import project11 from "./Media/Projects/project 11.jpeg";
import project12 from "./Media/Projects/project 12.jpeg";
import project13 from "./Media/Projects/project 13.jpeg";
import project14 from "./Media/Projects/project 14.jpeg";
import project15 from "./Media/Projects/project 15.jpeg";
import project16 from "./Media/Projects/project 16.jpeg";
import project17 from "./Media/Projects/project 17.jpeg";
import project18 from "./Media/Projects/project 18.jpeg";
import project19 from "./Media/Projects/project 19.jpeg";
import project20 from "./Media/Projects/project 20.jpeg";
import project21 from "./Media/Projects/project 21.jpeg";
import project22 from "./Media/Projects/project 22.jpeg";
import project23 from "./Media/Projects/project 23.jpeg";
import project24 from "./Media/Projects/project 24.jpeg";
import project25 from "./Media/Projects/project 25.jpeg";
import project26 from "./Media/Projects/project 26.jpeg";

const App = () => {
  const [seeMore, setSeeMore] = useState(false);
  const [seeMoreProject, setSeeMoreProject] = useState(false);

  return (
    <div className="App">
      {/* Navigation */}
      <div className="navigation-container">
        <div className="logo-and-nav-container">
          <div className="logo-nav-container">अहमस्मि योधः - I am a Warrior</div>
          <div className="nav-list-container">
            <ul className="nav-ul">
              <li className="nav-li">
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className="nav-li">
                <Link to="about-me" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li className="nav-li">
                <Link to="skills" smooth={true} duration={500}>
                  Skills
                </Link>
              </li>
              <li className="nav-li">
                <Link to="education" smooth={true} duration={500}>
                  Education
                </Link>
              </li>
              <li className="nav-li">
                <Link to="certificates" smooth={true} duration={500}>
                  Certificate
                </Link>
              </li>
              <li className="nav-li">
                <Link to="projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
              <li className="nav-li">
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Home container */}
      <div className="home-container" id="home">
        <ParticleBackground className="particalbg-home" />
        <motion.div
          className="content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="title">Pratham Kaushik</h1>
          <ReactTyped
            className="typed-text"
            strings={[
              "Artificial Intelligence",
              "Machine learning",
              "Healthcare data scientist",
              "Deep learning",

          
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <p className="description">
          I analyze health data to build innovative and impactful solutions using advanced tech.
          </p>
          <div className="social-media-link-container">
            <ul className="social-media-ul">
              <li className="social-media-li">
                <a href="https://wa.me/919999459710?text=Hi%20Pratham%20">
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-media-li">
                <a href="mailto:prathamkaushik955@gmail.com">
                  <FaEnvelope />
                </a>
              </li>
              <li className="social-media-li">
                <a href="https://github.com/bhopchi">
                  <FaGithub />
                </a>
              </li>
              <li className="social-media-li">
                <a href="https://www.linkedin.com/in/pratham-kaushik-615a77231">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-media-li">
                <a href="https://t.me/+919999459710">
                  <FaTelegramPlane />
                </a>
              </li>
              <li className="social-media-li">
                <a href="https://youtube.com/@prathamkaushik5942?si=dOzwNax5sGFKjdoM">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div> <br />
          <Link to="about-me" smooth={true} duration={500} className="about-me-button-home-page">
                  About Me{" "}<FaArrowCircleDown className="faarrowcircledownicon"/>
                </Link>
        </motion.div>
      </div>

      {/* About me container */}
      <div className="about-me-container" id="about-me">
        <div className="about-me-container-heading">
          <FaUserTie /> About{" "}
          <span className="different-color-span-text">Me</span>
        </div>
        <br />
        <br />
        <br />

        <div className="about-me-image-and-text-container">
          {/* Image effect with hover */}
          <div className="image-with-hover-effect-container">
            <ImageWithHoverEffect
              src={prathamKaushikImage}
              alt="Sample Image"
              className="image-with-hover-img"
            />
          </div>

          <div className="about-me-text-desc-container">
            <h2 className="about-me-text-description-heading">I'm Pratham</h2>

            <h2 className="about-me-text-description-sub-heading">
            Data Scientist in healthcare
            </h2>

            <div className="about-me-text-box">
              I am currently in the second year of my Master's degree in
              Artificial Intelligence in Medicine, with experience in related
              analytical skills. My professional journey combines expertise in
              AI, machine learning, and healthcare data science. My technical
              background includes deep learning, medical image analysis, natural
              language processing (NLP), and advanced data pipeline development.
              I have worked on projects involving breast cancer classification
              using hybrid deep learning models, retinal alteration detection in
              diabetes through automated systems, and pipeline optimization
              using tools like AWS SageMaker, Glue, and Nextflow. I am
              passionate about developing efficient AI solutions that drive
              advancements in medical diagnostics and healthcare research.
            </div>
            <div className="about-me-contact-details">
              <p className="about-me-details-para">
                <span className="different-color-span-text">Email: </span>
                prathamkaushik955@gmail.com
              </p>
              <p className="about-me-details-para">
                <span className="different-color-span-text">Place:</span> New
                Delhi, India
              </p>

              <a
                href="https://brajesh.tech"
                target="_blank"
                rel="noreferrer"
                className="resume-btn-of-about-me"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Skill and Abilities container */}
      <div className="skills-and-abiities-container" id="skills">
        <div className="about-me-container-heading skills-and-abiities-container-heading">
          <FaLaptopCode /> Skills &{" "}
          <span className="different-color-span-text">Abilities</span>
        </div>

        <div className="skills-and-abilities-boxes-container">
          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={python} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              Python
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={groovy} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              Groovy
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={scikitLearm} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              Scikit-Learn
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={numpy} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              Numpy
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={pandas} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              Pandas
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={matplotlib} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              Matplotlib
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={seaborn} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              Seaborn
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={keras} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              Kores
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={tenserflow} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              Tenserflow
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={nextflow} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              Nextflow
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={aws} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              AWS
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={azure} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              Azure
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={opencv} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              OpenCV
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={html5} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              HTML5
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={css3} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              CSS3
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={mysql} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              mySQL
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={opneai} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              openAI
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={huggingFace} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              Hugging Face
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={langchain} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              Langchain
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={git} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              Git
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={github} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              Git hub
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={powerBI} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              Power BI
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={awsglue} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              AWS Glue
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={awss3} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              AWS S3
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={xception} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              Xception
            </div>
          </div>

          {/* skill and ablities each box */}
          <div className="skills-and-abilities-box-each">
            <div className="skills-and-abilities-box-img-container">
              <img src={msoffice} alt="logo" />
            </div>
            <div className="skills-and-abilities-box-detail-text-container">
              MS Office
            </div>
          </div>
        </div>
      </div>

      {/* Education Container */}
      <div className="my-education-container" id="education">
        <div className="about-me-container-heading">
          <FaGraduationCap /> My{" "}
          <span className="different-color-span-text">Education</span>
        </div>

        <div className="my-education-box-container">
        <div className="my-education-box">
            <div className="unversity-image-container-in-my-education">
              <img src={dpsru} alt="Collage" />
            </div>
            <div className="university-and-education-details-container">
              <div className="university-name-my-education-heading">
                Master of Science in Artificial Intelligence in Medicine
              </div>
              <div className="university-name-my-education-sub-heading">
                Delhi Pharmaceutical Sciences And Research University
              </div>
              <div className="my-education-year-and-degree">
                Masters || (Pursuing)
              </div>
            </div>
          </div>

          <div className="my-education-box">
            <div className="unversity-image-container-in-my-education">
              <img src={pgims} alt="Collage" />
            </div>
            <div className="university-and-education-details-container">
              <div className="university-name-my-education-heading">
                Bachelor of Pharmacy (B.Pharm.)
              </div>
              <div className="university-name-my-education-sub-heading">
                Pandit Bhagwat Dayal Sharma Post Graduate Institute of Medical
                Sciences (PGIMS), Rohtak
              </div>
              <div className="my-education-year-and-degree">
                Graduate || 2023
              </div>
            </div>
          </div>
         
        </div>
      </div>

      {/* Certificate container */}
      <div
        className="my-education-container certificate-container"
        id="certificates"
      >
        <div className="about-me-container-heading">
          <FaCertificate /> My{" "}
          <span className="different-color-span-text">Certificates</span>
        </div>

        <div
          className={`certificates-list my-education-box-container ${
            seeMore ? "open" : ""
          }`}
        >
          {/* Certificate box */}
          <div className="my-education-box">
            <div className="unversity-image-container-in-my-education">
              <img src={certificate1} alt="Collage" />
            </div>
            <div className="university-and-education-details-container">
              <div className="university-name-my-education-heading">
                Artificial Intelligence in Medicine
              </div>
              <div className="university-name-my-education-sub-heading">
                Delhi Pharmaceutical Sciences And Research University
              </div>
              <div className="my-education-year-and-degree">
                Post Graduate || 2024
              </div>
            </div>
          </div>

          {/* Certificate box */}
          <div className="my-education-box">
            <div className="unversity-image-container-in-my-education">
              <img src={certificate2} alt="Collage" />
            </div>
            <div className="university-and-education-details-container">
              <div className="university-name-my-education-heading">
                Artificial Intelligence in Medicine
              </div>
              <div className="university-name-my-education-sub-heading">
                Delhi Pharmaceutical Sciences And Research University
              </div>
              <div className="my-education-year-and-degree">
                Post Graduate || 2024
              </div>
            </div>
          </div>

          {/* Certificate box */}
          <div className="my-education-box">
            <div className="unversity-image-container-in-my-education">
              <img src={certificate3} alt="Collage" />
            </div>
            <div className="university-and-education-details-container">
              <div className="university-name-my-education-heading">
                Artificial Intelligence in Medicine
              </div>
              <div className="university-name-my-education-sub-heading">
                Delhi Pharmaceutical Sciences And Research University
              </div>
              <div className="my-education-year-and-degree">
                Post Graduate || 2024
              </div>
            </div>
          </div>

          {seeMore ? (
            <div className="more-certificate-container">
              {/* Certificate box */}
              <div className="my-education-box">
                <div className="unversity-image-container-in-my-education">
                  <img src={certificate4} alt="Collage" />
                </div>
                <div className="university-and-education-details-container">
                  <div className="university-name-my-education-heading">
                    Artificial Intelligence in Medicine
                  </div>
                  <div className="university-name-my-education-sub-heading">
                    Delhi Pharmaceutical Sciences And Research University
                  </div>
                  <div className="my-education-year-and-degree">
                    Post Graduate || 2024
                  </div>
                </div>
              </div>

              {/* Certificate box */}
              <div className="my-education-box">
                <div className="unversity-image-container-in-my-education">
                  <img src={certificate5} alt="Collage" />
                </div>
                <div className="university-and-education-details-container">
                  <div className="university-name-my-education-heading">
                    Artificial Intelligence in Medicine
                  </div>
                  <div className="university-name-my-education-sub-heading">
                    Delhi Pharmaceutical Sciences And Research University
                  </div>
                  <div className="my-education-year-and-degree">
                    Post Graduate || 2024
                  </div>
                </div>
              </div>

              {/* Certificate box */}
              <div className="my-education-box">
                <div className="unversity-image-container-in-my-education">
                  <img src={certificate6} alt="Collage" />
                </div>
                <div className="university-and-education-details-container">
                  <div className="university-name-my-education-heading">
                    Artificial Intelligence in Medicine
                  </div>
                  <div className="university-name-my-education-sub-heading">
                    Delhi Pharmaceutical Sciences And Research University
                  </div>
                  <div className="my-education-year-and-degree">
                    Post Graduate || 2024
                  </div>
                </div>
              </div>

              {/* Certificate box */}
              <div className="my-education-box">
                <div className="unversity-image-container-in-my-education">
                  <img src={certificate7} alt="Collage" />
                </div>
                <div className="university-and-education-details-container">
                  <div className="university-name-my-education-heading">
                    Artificial Intelligence in Medicine
                  </div>
                  <div className="university-name-my-education-sub-heading">
                    Delhi Pharmaceutical Sciences And Research University
                  </div>
                  <div className="my-education-year-and-degree">
                    Post Graduate || 2024
                  </div>
                </div>
              </div>

              {/* Certificate box */}
              <div className="my-education-box">
                <div className="unversity-image-container-in-my-education">
                  <img src={certificate8} alt="Collage" />
                </div>
                <div className="university-and-education-details-container">
                  <div className="university-name-my-education-heading">
                    Artificial Intelligence in Medicine
                  </div>
                  <div className="university-name-my-education-sub-heading">
                    Delhi Pharmaceutical Sciences And Research University
                  </div>
                  <div className="my-education-year-and-degree">
                    Post Graduate || 2024
                  </div>
                </div>
              </div>

              {/* Certificate box */}
              <div className="my-education-box">
                <div className="unversity-image-container-in-my-education">
                  <img src={certificate9} alt="Collage" />
                </div>
                <div className="university-and-education-details-container">
                  <div className="university-name-my-education-heading">
                    Artificial Intelligence in Medicine
                  </div>
                  <div className="university-name-my-education-sub-heading">
                    Delhi Pharmaceutical Sciences And Research University
                  </div>
                  <div className="my-education-year-and-degree">
                    Post Graduate || 2024
                  </div>
                </div>
              </div>

              {/* Certificate box */}
              <div className="my-education-box">
                <div className="unversity-image-container-in-my-education">
                  <img src={certificate10} alt="Collage" />
                </div>
                <div className="university-and-education-details-container">
                  <div className="university-name-my-education-heading">
                    Artificial Intelligence in Medicine
                  </div>
                  <div className="university-name-my-education-sub-heading">
                    Delhi Pharmaceutical Sciences And Research University
                  </div>
                  <div className="my-education-year-and-degree">
                    Post Graduate || 2024
                  </div>
                </div>
              </div>

              {/* Certificate box */}
              <div className="my-education-box">
                <div className="unversity-image-container-in-my-education">
                  <img src={certificate11} alt="Collage" />
                </div>
                <div className="university-and-education-details-container">
                  <div className="university-name-my-education-heading">
                    Artificial Intelligence in Medicine
                  </div>
                  <div className="university-name-my-education-sub-heading">
                    Delhi Pharmaceutical Sciences And Research University
                  </div>
                  <div className="my-education-year-and-degree">
                    Post Graduate || 2024
                  </div>
                </div>
              </div>

              {/* Certificate box */}
              <div className="my-education-box">
                <div className="unversity-image-container-in-my-education">
                  <img src={certificate12} alt="Collage" />
                </div>
                <div className="university-and-education-details-container">
                  <div className="university-name-my-education-heading">
                    Artificial Intelligence in Medicine
                  </div>
                  <div className="university-name-my-education-sub-heading">
                    Delhi Pharmaceutical Sciences And Research University
                  </div>
                  <div className="my-education-year-and-degree">
                    Post Graduate || 2024
                  </div>
                </div>
              </div>

              {/* Certificate box */}
              <div className="my-education-box">
                <div className="unversity-image-container-in-my-education">
                  <img src={certificate13} alt="Collage" />
                </div>
                <div className="university-and-education-details-container">
                  <div className="university-name-my-education-heading">
                    Artificial Intelligence in Medicine
                  </div>
                  <div className="university-name-my-education-sub-heading">
                    Delhi Pharmaceutical Sciences And Research University
                  </div>
                  <div className="my-education-year-and-degree">
                    Post Graduate || 2024
                  </div>
                </div>
              </div>

              {/* Certificate box */}
              <div className="my-education-box">
                <div className="unversity-image-container-in-my-education">
                  <img src={whatsappCertificate1} alt="Collage" />
                </div>
                <div className="university-and-education-details-container">
                  <div className="university-name-my-education-heading">
                    Artificial Intelligence in Medicine
                  </div>
                  <div className="university-name-my-education-sub-heading">
                    Delhi Pharmaceutical Sciences And Research University
                  </div>
                  <div className="my-education-year-and-degree">
                    Post Graduate || 2024
                  </div>
                </div>
              </div>

              {/* Certificate box */}
              <div className="my-education-box">
                <div className="unversity-image-container-in-my-education">
                  <img src={whatsappCertificate2} alt="Collage" />
                </div>
                <div className="university-and-education-details-container">
                  <div className="university-name-my-education-heading">
                    Artificial Intelligence in Medicine
                  </div>
                  <div className="university-name-my-education-sub-heading">
                    Delhi Pharmaceutical Sciences And Research University
                  </div>
                  <div className="my-education-year-and-degree">
                    Post Graduate || 2024
                  </div>
                </div>
              </div>

              {/* Certificate box */}
              <div className="my-education-box">
                <div className="unversity-image-container-in-my-education">
                  <img src={whatsappCertificate3} alt="Collage" />
                </div>
                <div className="university-and-education-details-container">
                  <div className="university-name-my-education-heading">
                    Artificial Intelligence in Medicine
                  </div>
                  <div className="university-name-my-education-sub-heading">
                    Delhi Pharmaceutical Sciences And Research University
                  </div>
                  <div className="my-education-year-and-degree">
                    Post Graduate || 2024
                  </div>
                </div>
              </div>

              {/* Certificate box */}
              <div className="my-education-box">
                <div className="unversity-image-container-in-my-education">
                  <img src={whatsappCertificate4} alt="Collage" />
                </div>
                <div className="university-and-education-details-container">
                  <div className="university-name-my-education-heading">
                    Artificial Intelligence in Medicine
                  </div>
                  <div className="university-name-my-education-sub-heading">
                    Delhi Pharmaceutical Sciences And Research University
                  </div>
                  <div className="my-education-year-and-degree">
                    Post Graduate || 2024
                  </div>
                </div>
              </div>

              {/* Certificate box */}
              <div className="my-education-box">
                <div className="unversity-image-container-in-my-education">
                  <img src={whatsappCertificate5} alt="Collage" />
                </div>
                <div className="university-and-education-details-container">
                  <div className="university-name-my-education-heading">
                    Artificial Intelligence in Medicine
                  </div>
                  <div className="university-name-my-education-sub-heading">
                    Delhi Pharmaceutical Sciences And Research University
                  </div>
                  <div className="my-education-year-and-degree">
                    Post Graduate || 2024
                  </div>
                </div>
              </div>

              {/* Certificate box */}
              <div className="my-education-box">
                <div className="unversity-image-container-in-my-education">
                  <img src={whatsappCertificate6} alt="Collage" />
                </div>
                <div className="university-and-education-details-container">
                  <div className="university-name-my-education-heading">
                    Artificial Intelligence in Medicine
                  </div>
                  <div className="university-name-my-education-sub-heading">
                    Delhi Pharmaceutical Sciences And Research University
                  </div>
                  <div className="my-education-year-and-degree">
                    Post Graduate || 2024
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <button
            className="see-more-certificate-button"
            onClick={() => setSeeMore(!seeMore)}
          >
            {seeMore ? "View Less" : "View All"}
          </button>
        </div>
      </div>

      {/* Project Container*/}
      <div className="project-made-container" id="projects">
        <div className="about-me-container-heading">
          <FaProjectDiagram /> My{" "}
          <span className="different-color-span-text">Projects</span>
        </div>

        <div className="project-made-box-container">
          {/* Project-box-each */}
          <div className="project-made-box">
            <div className="project-image-container">
              <img src={project1} alt="Project" />
            </div>
            <div className="project-text-and-link-details-container">
             Get code:- <a href="https://github.com/bhopchi/-Nusrat_Fateh_Ali_Khan-s_lyrics-Text_Generation_with_an_RNN_LSTM">Click Here</a>
            </div>
          </div>

          {/* Project-box-each */}
          <div className="project-made-box">
            <div className="project-image-container">
              <img src={project2} alt="Project" />
            </div>
            <div className="project-text-and-link-details-container">
            Get code:- <a href="https://github.com/bhopchi/Parkinsons-Disease-Detection-using-Inception-and-Xception-with-Attention-Mechanism.ipynb">Click Here</a>
            </div>
          </div>

          {/* Project-box-each */}
          <div className="project-made-box">
            <div className="project-image-container">
              <img src={project3} alt="Project" />
            </div>
            <div className="project-text-and-link-details-container">
            Get code:- <a href="https://github.com/bhopchi/-Esophageal-Cancer-Detection-Using-Machine-Learning-Techniques-">Click Here</a>
            </div>
          </div>

          {seeMoreProject ? (
            <>
              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project4} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                {/* Get code:- <a href="https://github.com/bhopchi/Identifying_Brain_Tumors_with_Transfer_Learning_and_Attention_Based_Models">Click Here</a> */}
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project5} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                Get code:- <a href="https://github.com/bhopchi/Identifying_Brain_Tumors_with_Transfer_Learning_and_Attention_Based_Models">Click Here</a>
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project6} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                Get code:- <a href="https://github.com/bhopchi/Ovarian-Cancer-Subtypes-with-Enhanced-Pre-trained-Models-Using-Differential-Attention">Click Here</a>
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project7} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                  
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project8} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                 
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project9} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project10} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                Get code:- <a href="https://github.com/bhopchi/Pathological_Retinal_Alterations_in_Diabetes">Click Here</a>
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project11} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                 
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project12} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                Get code:- <a href="https://github.com/bhopchi/VGG16_and_Xception_Models_for_Breast_Cancer_Classification">Click Here</a>
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project13} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                  
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project14} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project15} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                 
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project16} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                 
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project17} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                Get code:- <a href="https://github.com/bhopchi/Deep-Learning-Based-White-Blood-Cell-Classification-using-Multi-Head-Attention-Mechanism">Click Here</a>
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project18} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                 
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project19} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                Get code:- <a href="https://github.com/bhopchi/Predicting_Prostate_Cancer_Risk_Based_on_PSA_and_Clinical_Factors">Click Here</a>
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project20} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                 
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project21} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                Get code:- <a href="https://github.com/bhopchi/Computational_intelligence_for_early_detection_of_infertility_in_women.ipynb">Click Here</a>
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project22} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                  
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project23} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                Get code:- <a href="https://github.com/bhopchi/Spine_X_ray_images_Classification_using_Pretrained_Models_with_Attention_Mechanism">Click Here</a>
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project24} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                 
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project25} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                Get code:- <a href="https://github.com/bhopchi/brain_tumor_MRI">Click Here</a>
                </div>
              </div>

              {/* Project-box-each */}
              <div className="project-made-box">
                <div className="project-image-container">
                  <img src={project26} alt="Project" />
                </div>
                <div className="project-text-and-link-details-container">
                 
                </div>
              </div>
            </>
          ) : null}
        </div>

        <button
          className="see-more-certificate-button"
          onClick={() => setSeeMoreProject(!seeMoreProject)}
        >
          {seeMoreProject ? "View Less" : "View All"}
        </button>
      </div>

      {/* Contact container */}
      <div className="contact-me-container" id="contact">
        <div className="about-me-container-heading">
          <FaHeadset /> Get in{" "}
          <span className="different-color-span-text">Touch</span>
        </div>

        <div className="contact-me-box-container">
          <div className="image-container-of-contact-me">
            <ImageWithHoverEffect src={contactmeclipart} alt="Clip art" />
          </div>
          <div className="form-container-of-contact-me">
            <form
              action="https://formsubmit.co/prathamkaushik955@gmail.com"
              method="POST"
            >
              <div class="input-box">
                <input type="text" placeholder="Name" name="name" />
              </div>
              <div class="input-box">
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div class="input-box">
                <input type="text" placeholder="Phone" name="phone" />
              </div>
              <div class="input-box">
                <input type="text" placeholder="Message" name="message" />
              </div>
              <input type="hidden" name="_captcha" value="false" />
              <button
                type="submit"
                class="btn"
                name="_next"
                value="https://brajeshthakur.netlify.app"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-container">
        <div className="footer-box-container">
          <div className="footer-box-2 footer-box">
            <h1 className="footer-box-heading">Quick Links</h1>
            <div className="footer-box-list-container">
              <ul className="footer-box-list-ul">
                <li className="footer-nav-li">
                  <Link to="home" smooth={true} duration={500}>
                    <span className="icon-in-list-footer">
                      {" "}
                      <FaHome />{" "}
                    </span>{" "}
                    Home
                  </Link>
                </li>
                <li className="footer-nav-li">
                  <Link to="about-me" smooth={true} duration={500}>
                    <span className="icon-in-list-footer">
                      {" "}
                      <FaUserTie />{" "}
                    </span>{" "}
                    About
                  </Link>
                </li>
                <li className="footer-nav-li">
                  <Link to="skills" smooth={true} duration={500}>
                    <span className="icon-in-list-footer">
                      {" "}
                      <FaLaptopCode />{" "}
                    </span>{" "}
                    Skills
                  </Link>
                </li>
                <li className="footer-nav-li">
                  <Link to="education" smooth={true} duration={500}>
                    <span className="icon-in-list-footer">
                      {" "}
                      <FaGraduationCap />{" "}
                    </span>{" "}
                    Education
                  </Link>
                </li>
                <li className="footer-nav-li">
                  <Link to="certificates" smooth={true} duration={500}>
                    <span className="icon-in-list-footer">
                      {" "}
                      <FaCertificate />{" "}
                    </span>{" "}
                    Certificate
                  </Link>
                </li>
                <li className="footer-nav-li">
                  <Link to="projects" smooth={true} duration={500}>
                    <span className="icon-in-list-footer">
                      {" "}
                      <FaProjectDiagram />{" "}
                    </span>{" "}
                    Projects
                  </Link>
                </li>
                <li className="footer-nav-li">
                  <Link to="contact" smooth={true} duration={500}>
                    <span className="icon-in-list-footer">
                      {" "}
                      <FaHeadset />{" "}
                    </span>{" "}
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-box-3 footer-box">
            <h1 className="footer-box-heading">Contact Info</h1>
            <div className="contact-details-in-footer-box">
              <ul className="footer-box-list-ul">
                <li className="footer-nav-li footer-contact-details-li">
                  <span className="icon-in-list-footer">
                    {" "}
                    <FaPhoneAlt />{" "}
                  </span>{" "}
                  +91 9999459710
                </li>
                <li className="footer-nav-li footer-contact-details-li">
                  <span className="icon-in-list-footer">
                    {" "}
                    <FaEnvelope />{" "}
                  </span>{" "}
                  prathamkaushik955@gmail.com
                </li>
                <li className="footer-nav-li footer-contact-details-li">
                  <span className="icon-in-list-footer">
                    {" "}
                    <FaMapMarkerAlt />{" "}
                  </span>{" "}
                  New Delhi, India
                </li>
                <li className="footer-nav-li footer-contact-details-li">
                  <div className="social-media-link-container">
                    <ul
                      className="social-media-ul"
                      style={{
                        justifyContent: "flex-start",
                        marginTop: "12px",
                      }}
                    >
                      <li className="social-media-li">
                        <a href="https://wa.me/919999459710?text=Hi%20Pratham%20">
                          <FaWhatsapp />
                        </a>
                      </li>
                      <li className="social-media-li">
                        <a href="mailto:prathamkaushik955@gmail.com">
                          <FaEnvelope />
                        </a>
                      </li>
                      <li className="social-media-li">
                        <a href="https://github.com/bhopchi">
                          <FaGithub />
                        </a>
                      </li>
                      <li className="social-media-li">
                        <a href="https://www.linkedin.com/in/pratham-kaushik-615a77231">
                          <FaLinkedinIn />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-box-1 footer-box">
            <h1 className="footer-box-heading">Pratham's Portfolio</h1>
            <div className="footer-box-1-paragrauph">
              Thank you for visiting my personal portfolio website. Kindly
              reload this webpage & scroll up if you couldn't view my project
              contents. <br /> <br />
              Discuss a project or just want to say Hi? Feel free to connect
              with me on LinkedIn or message me on WhatsApp. Keep Rising, I'll
              see you at the Top!
            </div>
          </div>
        </div>



        <hr style={{ width:'95%', margin:"1% auto", background:'#009688', color:'#009688',height:'.3px',border:'none'}} />

        <div className="developer-details-footer">
          Developed By <a href="https://brajesh.tech" target="_blank" rel="noreferrer">Brajesh Kumar Thakur</a>
        </div>
      </div>
    </div>
  );
};

export default App;
