"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectData = [
    {
        id: 1,
        title: "Liquid Duck Software Challenge",
        gitUrl: "https://github.com/Srujani4/Liquid-Duck-Software-Challenge",
        image: "p3",
    },
    {
        id: 2,
        title: "Trajectory Tracking to avoid accidents",
        gitUrl: "https://github.com/Srujani4/Trajectory-tracking-to-avoid-accidents",
        image: "p3",
    },
    {
        id: 3,
        title: "Image Analysis",
        gitUrl: "https://github.com/Srujani4/Image-Classification-using-CNN",
        image: "p2",
    },
    {
        id: 4,
        title: "Sentiment Analysis",
        gitUrl: "https://github.com/Srujani4/Sentiment-Analysis-on-IMDB-Movie-Reviews",
        image: "p4",
    },
    {
        id: 5,
        title: "Clickbait challenge",
        gitUrl: "https://github.com/Srujani4/Clickbait-challenge",
        image: "p5",
    },
    // {
    //     id: 6,
    //     title: "Pharmacy Management Software",
    //     gitUrl: "https://github.com/jayanth122/Secure-pharmacy-managment-software",
    //     image: "p6",
    // },
]

const ProjectSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };
    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectData.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.5 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            gitUrl={project.gitUrl}
                            imageName={project.image}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectSection;