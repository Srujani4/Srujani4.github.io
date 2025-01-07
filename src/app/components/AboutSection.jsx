"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-6'>
        <li>Azure</li>
        <li>AWS</li>
        <li>GCP</li>
        <li>ETL</li>
        <li>Hadoop</li>
        <li>MongoDB</li>
        <li>Python</li>
        <li>SQL</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-6'>
        <li>University of Waterloo, Ontario <i>(Masters in System Design Engineering, Spec. in AI/ML)</i></li>
        <ul>
          <li>GPA: 3.7/4</li>
        </ul>
        <li>Jawaharlal Nehru Techmological University, Kakinada <i>(Bachelor of Technology)</i></li>
        <ul>
          <li>GPA: 8.9/10</li>
        </ul>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className='list-disc pl-6'>
        {/* <li><i><i>Full Stack Developer</i>, AI Focal, Canada</i></li> */}
        <li><i>Teaching Assistant</i>, University of Waterloo</li>
        <li><i><i>Data Engineer</i>,Cognizant, India</i></li>
        <li><i><i>Data Engineer</i>,Capgemini, India</i></li>
        <li><i><i>ETL Developer</i>,JDA Software, India</i></li>
      </ul>
    )
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className='list-disc pl-6'>
  //       <li><a href="">Meta - Front-end Developer Professional Certificate, Coursera </a></li>
  //       <li><a href="https://coursera.org/share/b1925ae06f00a6723f231886c62b55c5"> Google Cloud - Building Scalable Java Micro services with Spring Boot and Spring Cloud </a></li>
  //       <li><a href="https://coursera.org/share/3f06155f6b85d0ed5a29b19134e42ea3"> Interactivity with JavaScript - University of Michigan, Coursera </a></li>
  //     </ul>
  //   )
  // },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }
  // bg-gradient-to-br from-blue-600 via-purple-600 to-red-600
  return (
    <section className='text-white py-16' id="about">
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:px-16'>
        <Image className='rounded-full bg-[#181818]' src='/images/Mac.png' width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg text-justify'>
            I'm a skilled Data Engineer and Analyst with over 6 years of experience in building scalable data pipelines, optimizing SQL queries for large datasets, and delivering actionable insights through business intelligence tools like Power BI and Tableau. 
            I specialize in leveraging cloud platforms such as GCP, AWS, and Azure to design robust data solutions that drive business outcomes. 
            With a strong background in data engineering, analytics, and big data tools like Spark and Kafka, I thrive on solving complex data challenges and enabling data-driven decision-making. 
            Let's connect to create impactful solutions together!
          </p>
          <div className='flex flex-row mt-5'>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab == "skills"}>
              {" "}Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab == "education"}>
              {" "}Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab == "experience"}>
              {" "}Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab == "certifications"}>
              {" "}Certifications{" "}
            </TabButton>
          </div>
          <div className='mt-4'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

