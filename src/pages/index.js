import React from "react";
import "../styles/App.css";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Suggestions from "../components/Suggestions";
import InstaFeed from "../components/InstaFeed";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

import banner from "../images/banner.jpg";
import bannerEN from "../images/bannerEN.jpg";
import banner2 from "../images/banner2.jpg";

const IndexPage = (props) => {
  let { language, setLanguage, languageToUse } = props;
  console.log(props);

  return (
    <div>
      <Hero
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
      <Welcome language={language} languageToUse={languageToUse} />

      {language == "french" ? (
        <img
          src={banner}
          className="banner"
          alt="Le partenaire gourmet pour vos évenéments"
        />
      ) : (
        <img
          src={bannerEN}
          className="banner"
          alt="Le partenaire gourmet pour vos évenéments"
        />
      )}

      <Suggestions language={language} languageToUse={languageToUse} />
      <InstaFeed language={language} languageToUse={languageToUse} />

      <Contact language={language} languageToUse={languageToUse} />
      <img
        src={banner2}
        className="banner banner2"
        alt="Le partenaire gourmet pour vos évenéments"
      />
      <Footer language={language} languageToUse={languageToUse} />
      <Copyright language={language} languageToUse={languageToUse} />
    </div>
  );
};

export default IndexPage;
