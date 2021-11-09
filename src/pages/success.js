import React from "react";

import "../styles/Success.css";
import Navbar2 from "../components/Navbar2";

import { content } from "../content/languages";

const SuccessPage = (props) => {
  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  let languageStoredInLocalStorage = localStorage.getItem("language");

  // languageStoredInLocalStorage ? languageStoredInLocalStorage : "french";

  return (
    <div className="success-message">
      <Navbar2
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
      <div>
        <p> {languageToUse.success}</p>
        <p>
          <a href="/"> &#8592; {languageToUse.back}</a>
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
