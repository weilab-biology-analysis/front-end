import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { jobInfo, jobListGet } from "../../stores/request";
import "./homePage.css";
import BLMs_v1 from "../../constants/img/BLMs_v1.png";
import homeImg from "../../constants/img/homepage.png";
function HomePage(store) {
  useEffect(() => {
    console.log(store);
  }, []);
  const [searchLoading, setSearchLoading] = useState(false);
  const onSearch = async (value) => {
    setSearchLoading(true);
    store.store.results.request();
    let result = await jobInfo(value);
    if (result.resultType) {
      setSearchLoading(false);
      store.store.results.request_success(result.data);
      store.store.servers.changeHomeStatue(7);

      // history.push("/result");
    } else {
      setSearchLoading(false);
      store.store.results.request_fail();
    }

    console.log(value);
  };
  return (
    <div className="homepage-body">
      <div className="fixbackground bg-pan-br header-con">
        <div className="title-home-con">
          {" "}
          <div className="left-title-home">
            <img src={homeImg} className="left-title-home-img" />
          </div>
          <div className="right-title-home">
            <div className="right-title-home-title">DeepBIO</div>
            <div className="right-title-home-con">Undesirable pharmacokinetics and toxicity of candidate compounds are the main reasons for the failure of drug development, and it has been widely recognized that absorption, distribution, metabolism, excretion and toxicity (ADMET) of chemicals should be evaluated as early as possible. ADMETlab 2.0 is an enhanced version of the widely used ADMETlab for systematical evaluation of ADMET properties, as well as some physicochemical properties and medicinal chemistry friendliness. With significant updates to functional modules, predictive models, explanations, and the user interface, ADMETlab 2.0 has greater capacity to assist medicinal chemists in accelerating the drug research and development process.</div>
          </div>
        </div>
      </div>
      {/* <div className="homepage-works-instro">
        <div className="homepage-works-instro-text">

          <div className="homepage-works-instro-text-title-outsider">
            <div className="homepage-works-instro-text-title-line-up">
              <div></div>
            </div>
            <div className="homepage-works-instro-text-title">DeepBIO</div>
            <div className="homepage-works-instro-text-title-line-down">
              <div></div>
            </div>
          </div>

          <div className="homepage-works-instro-text-context"> 
           
          </div>
        </div>
      </div> */}
      <div className="homepage-works-show">
        <div className="homepage-works-show-img">
          <img src={BLMs_v1} className="img-homepage"></img>
        </div>
        <div className="homepage-works-show-intro">
          <div>
            testText:Our lab aims to developing an automated computational
            pipeline for peptide drug design and discovery, which involves
            bioactive peptide generation, prediction, and functional analysis
            (such as peptide toxicity)and developing computational methods to
            accurately annotate epigenetic modifications in whole-genome scale,
            and study their functions in gene regulatory network.
          </div>
          <div>
            testText:Our lab aims to developing an automated computational
            pipeline for peptide drug design and discovery, which involves
            bioactive peptide generation, prediction, and functional analysis
            (such as peptide
          </div>
        </div>
      </div>
      {/* <div className="JobHome-search">
        <Search
          placeholder="input search jobId"
          // enterButton="Search"
          // size="large"
          // loading={searchLoading}
          // onSearch={onSearch}
        />
      </div> */}
    </div>
  );
}

export default inject("store")(observer(HomePage));
