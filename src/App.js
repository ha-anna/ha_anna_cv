import React from "react";
import './style.css'
import data from './data'
import Header from './components/Header'
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Sns from "./components/Sns";

export default function App() {
  let [currentLang, setCurrentLang] = React.useState(data[0])

  function toggleLanguage() {
    if (currentLang === data[0]) {
      setCurrentLang(prevCurrentLang => data[1])
    } else if (currentLang === data[1]) {
      setCurrentLang(prevCurrentLang => data[0])
    }
  }

  const { cv, cvFIle, langButton, name, position, location, webpage, email, phone, about, skills, projects, experience, education, languages, sns } = currentLang

  return (
    <>
      <Header
        cv={cv}
        toggleLanguage={toggleLanguage}
        cvFIle={cvFIle}
        langButton={langButton}
      />
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
        <Skills
          skills={skills}
        />
        <Projects
          projects={projects}
        />
        <Experience
          experience={experience}
        />
        <Education
          education={education}
        />
        <Languages
          languages={languages}
        />
        <Sns
          sns={sns}
        />
      </main>
    </>
  )
}