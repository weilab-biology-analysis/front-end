import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { jobInfo, jobListGet } from "../../stores/request";
import "./homePage.css";
import frameworkIMG from "../../constants/img/framework.png";
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
       
      <div className="right-title-home-title">DeepBIO</div>
        <div className="title-home-con">
          <div className="left-title-home">
            <img src={homeImg} className="left-title-home-img" />
          </div>
          <div className="right-title-home">
            <div className="right-title-home-con">
              The large amount of biological sequence data obtained from
              high-throughput sequencing makes automated biological sequence
              analysis platforms good aids for biologists. Although several
              platforms based on traditional machine learning have been
              developed for biological sequence analysis, no deep learning-based
              prediction platform is developed; moreover, no existing tools can
              provide the functional annotation for biological sequences, which
              is essentially important for sequence analysis. Here, we present
              DeepBIO, a deep learning-based web service to predict and annotate
              the functions for biological sequences. DeepBIO provides two main
              functions, including Deep learning-based prediction and Sequence
              functional annotation. Our platform enables end-to-end model
              training, optimization, and prediction. The parameter-free
              workflow effectively reduces the running complexity and makes our
              platform more user-friendly.
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
              DeepBIO deep learning-based prediction module combines the
              advantages of other platforms while integrating more deep learning
              models, enhancing the interpretability of the analysis results,
              and providing researchers a one-stop-shop service to construct
              deep-learning models with their uploaded data and a series of
              result visualization analyses, including model interpretability,
              feature analysis, etc.
            </div>
          </div>

          <div className="homepage-quick-entry-depart-btn">
            <Button
              className="homepage-quick-entry-depart-btn-con"
              onClick={() => {
                store.store.servers.changeHomeStatue(2);
              }}
            >
              Get Start
            </Button>
          </div>
        </div>
        <div className="homepage-quick-entry-annotation  homepage-quick-entry-depart">
          <div className="homepage-quick-entry-depart-text">
            <div className="homepage-quick-entry-depart-title">
              Sequence functional annotation
            </div>
            <div className="homepage-quick-entry-depart-con">
              We experimentally and creatively added a sequence functional
              annotation module to our server. This part of the work runs after
              the prediction module is completed and mines for the methylation
              status annotations for DNA and RNA sequences and ligand-binding
              site recognition for protein sequences., which aims to annotate
              the functional sites (i.e. DNA modifications, RNA modifications,
              and protein-binding specificity) with pre-trained deep learning
              models.
            </div>
          </div>
          <div className="homepage-quick-entry-depart-btn">
            <Button
              className="homepage-quick-entry-depart-btn-con"
              onClick={() => {
                store.store.servers.changeHomeStatue(8);
              }}
            >
              Get Start
            </Button>
          </div>
        </div>
      </div>
      <div className="homepage-works-show">
        <div className="homepage-works-show-img">
          <img src={frameworkIMG} className="img-homepage"></img>
        </div>
        <div className="homepage-works-show-intro">
          <div>
            The main components and workflow of DeepBIO. (A) DeepBIO accepts
            DNA, RNA, and protein sequence data as input, with some additional
            user-defined parameters. (B) The deep learning-based prediction
            module constructs one or more SOTA deep learning binary classifiers,
            while we do plenty of design on the presentation and
            interpretability of the results. (C) The sequence functional
            annotation takes one or more sequences selected by users to analyze
            the presence of motifs and queries the online database to help users
            understand motif functionality. (D) DeepBIO integrates the results
            of the above two functional modules into a single report for users
            to download freely.
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
