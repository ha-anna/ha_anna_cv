import React from "react";
import data from "./data";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Languages from "./components/Languages";
import Clause from "./components/Clause";
import Sns from "./components/Sns";

export default function App() {
  let [currentLang, setCurrentLang] = React.useState(data[0]);

  function toggleLanguage() {
    if (currentLang === data[0]) {
      setCurrentLang((prevCurrentLang) => data[1]);
    } else if (currentLang === data[1]) {
      setCurrentLang((prevCurrentLang) => data[2]);
    } else if (currentLang === data[2]) {
      setCurrentLang((prevCurrentLang) => data[0]);
    }
  }

  const {
    cv,
    cvFile,
    name,
    position,
    location,
    webpage,
    email,
    phone,
    about,
    skills,
    projects,
    experience,
    education,
    certificates,
    languages,
    sns,
    clause,
  } = currentLang;

  return (
    <>
      <Header cv={cv} toggleLanguage={toggleLanguage} cvFile={cvFile} />
      <main>
        <Introduction
          name={name}
          position={position}
          location={location}
          webpage={webpage}
          email={email}
          phone={phone}
          about={about}
        />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Education education={education} />
        <Certification certificates={certificates} />
        <Languages languages={languages} />
        <Clause clause={clause} />
        <Sns sns={sns} />
      </main>
    </>
  );
}
