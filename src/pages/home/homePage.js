import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { jobInfo, jobListGet } from "../../stores/request";
import "./homePage.css";
import BLMs_v1 from "../../constants/img/BLMs_v1.png";
import Search from "antd/lib/transfer/search";
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
      <div className="homepage-works-instro">
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
