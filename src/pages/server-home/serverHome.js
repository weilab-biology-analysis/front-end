import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import "./serverHome.css";
import { useHistory } from "react-router";
// @ts-ignore
import DNA from "../../constants/img/DNA.png";
function ServerHome(store) {
  useEffect(() => {
    console.log(store);
  }, []);
  const history = useHistory();
  const gotoPage = () => {
    history.push("/serverPage");
  };
  return (
    <div className="serverhome-body">
      <div className="function-select">
        <div
          className="function-select-con"
          onClick={() => {
            //gotoPage();
            store.store.servers.changeHomeStatue(4)
          }}
        >
          <div className="function-select-title"> 
          <div className="function-select-title-inner-up"><div></div></div>
          DNA
          <div className="function-select-title-inner-down"><div></div></div>
          </div>
          <div className="function-select-img-outer">
            <img src={DNA} className="function-select-left-img" />
          </div>

          <div className="function-select-context">
            Integrating the functionality of feature calculation / extraction,
            clustering, feature normalization, feature selection, dimension
            reduction, model construction for classification and result
            visualization for DNA sequence.
          </div>
        </div>
        <div
          className="function-select-con"
          onClick={() => {
            //gotoPage();
            store.store.servers.changeHomeStatue(5)
          }}
        >
          <div className="function-select-title"> 
          <div className="function-select-title-inner-up"><div></div></div>
          RNA
          <div className="function-select-title-inner-down"><div></div></div>
          </div>
          <div className="function-select-img-outer">
            <img src={DNA} className="function-select-left-img" />
          </div>

          <div className="function-select-context">
            Integrating the functionality of feature calculation / extraction,
            clustering, feature normalization, feature selection, dimension
            reduction, model construction for classification and result
            visualization for RNA sequence.
          </div>
        </div>
        <div
          className="function-select-con"
          onClick={() => {
            //gotoPage();
            store.store.servers.changeHomeStatue(6)
          }}
        >
          <div className="function-select-title"> 
          <div className="function-select-title-inner-up"><div></div></div>
          Protein
          <div className="function-select-title-inner-down"><div></div></div>
          </div>
          <div className="function-select-img-outer">
            <img src={DNA} className="function-select-left-img" />
          </div>

          <div className="function-select-context">
            Integrating the functionality of feature calculation / extraction,
            clustering, feature normalization, feature selection, dimension
            reduction, model construction for classification and result
            visualization for Protein sequence.
          </div>
        </div>
      </div>
    </div>
  );
}

export default inject("store")(observer(ServerHome));
