import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { jobInfo, jobListGet } from "../../stores/request";
import "./homePage.css";
import BLMs_v1 from "../../constants/img/BLMs_v1.png";
import homeImg from "../../constants/img/homepage.png";
import { Button } from "antd";
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
            <div className="right-title-home-con">
              Undesirable pharmacokinetics and toxicity of candidate compounds
              are the main reasons for the failure of drug development, and it
              has been widely recognized that absorption, distribution,
              metabolism, excretion and toxicity (ADMET) of chemicals should be
              evaluated as early as possible. ADMETlab 2.0 is an enhanced
              version of the widely used ADMETlab for systematical evaluation of
              ADMET properties, as well as some physicochemical properties and
              medicinal chemistry friendliness. With significant updates to
              functional modules, predictive models, explanations, and the user
              interface, ADMETlab 2.0 has greater capacity to assist medicinal
              chemists in accelerating the drug research and development
              process.
            </div>
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

      <div className="homepage-quick-entry">
        <div className="homepage-quick-entry-pridict homepage-quick-entry-depart">
          <div className="homepage-quick-entry-depart-text">
            <div className="homepage-quick-entry-depart-title">
              Deep learning based prediction
            </div>
            <div className="homepage-quick-entry-depart-con">
              ADMET Evaluation function module is composed of a series of
              high-quality prediction models trained by multi-task graph
              attention framework. It enables the users to conveniently and
              efficiently implement the calculation and prediction of 17
              physicochemical properties, 13 medicinal chemistry measures, 23
              ADME endpoints, and 27 toxicity endpoints and 8 toxicophore rules
              (751 substructures), thereby selecting promising lead compounds
              for further exploration.
            </div>
          </div>

          <div className="homepage-quick-entry-depart-btn">
            <Button className="homepage-quick-entry-depart-btn-con" onClick={()=>{
              store.store.servers.changeHomeStatue(2);
            }}>Get Start</Button>
          </div>
        </div>
        <div className="homepage-quick-entry-annotation  homepage-quick-entry-depart">
          <div className="homepage-quick-entry-depart-text">
            <div className="homepage-quick-entry-depart-title">
              Sequence functional annotation
            </div>
            <div className="homepage-quick-entry-depart-con">
              ADMET Screening is the batch mode of evaluation, designed for the
              prediction of molecular datasets. SMILES strings and SDF/TXT
              formatted files are supported molecular submission approaches.
              This module is suitable for the evaluation of empirically designed
              or visually screened molecules before chemical synthesis and
              biochemical assays, which allows scientists to better focus their
              experiments on the most promising compounds.
            </div>
          </div>
          <div className="homepage-quick-entry-depart-btn">
            <Button className="homepage-quick-entry-depart-btn-con" onClick={()=>{
              store.store.servers.changeHomeStatue(8);
            }}>Get Start</Button>
          </div>
        </div>
      </div>
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
