import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import "./homePage.css";
import BLMs_v1 from "../../constants/img/BLMs_v1.png";
function HomePage(store) {
  useEffect(() => {
    console.log(store);
  }, []);
  return (
    <div className="homepage-body">
      <div className="homepage-works-instro">
        <div className="homepage-works-instro-text">

          <div className="homepage-works-instro-text-title-outsider">
            <div className="homepage-works-instro-text-title-line-up">
              <div></div>
            </div>
            <div className="homepage-works-instro-text-title">Related Work</div>
            <div className="homepage-works-instro-text-title-line-down">
              <div></div>
            </div>
          </div>

          <div className="homepage-works-instro-text-context"> 
           
          </div>
        </div>
      </div>
      <div className="homepage-works-show">
        <div className="homepage-works-show-img">
          <img src={BLMs_v1} className="img-homepage"></img>
        </div>
        <div className="homepage-works-show-intro">
        <div>
          testText:Our lab aims to developing an automated computational pipeline for
            peptide drug design and discovery, which involves bioactive peptide
            generation, prediction, and functional analysis (such as peptide
            toxicity)and developing computational methods to accurately annotate
            epigenetic modifications in whole-genome scale, and study their
            functions in gene regulatory network.
          </div>
          <div>
          testText:Our lab aims to developing an automated computational pipeline for
            peptide drug design and discovery, which involves bioactive peptide
            generation, prediction, and functional analysis (such as peptide
            
          </div>
  
        </div>
      </div>
    </div>
  );
}

export default inject("store")(observer(HomePage));
