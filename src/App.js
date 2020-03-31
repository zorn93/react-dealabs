import React, { Fragment } from "react";
import Navbar from "./components/navBar";
import BlocListe from "./components/blocListe";
import BlocArticle from "./components/blocArticle";

function App() {
  return (
    <div>
      <Fragment>
        <Navbar />
        <BlocListe>
          <BlocArticle />
        </BlocListe>
      </Fragment>
    </div>
  );
}

export default App;
