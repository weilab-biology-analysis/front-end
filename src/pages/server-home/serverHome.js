import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import "./serverHome.css";
import { useHistory } from "react-router";
// @ts-ignore
import DNA from "../../constants/img/DNA.png";
import Protein from "../../constants/img/Protein.png";
import RNA from "../../constants/img/RNA.png";
import { Breadcrumb } from "antd";
function ServerHome(store) {
  useEffect(() => {
    // console.log(store);
    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  const history = useHistory();
  const gotoPage = () => {
    history.push("/serverPage");
  };
  return (
    <div>
      <div className="Result-Result-body-Breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item className="Breadcrumb-Item-text">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item className="Breadcrumb-Item-text">
            Server Select
          </Breadcrumb.Item>
          <Breadcrumb.Item className="Breadcrumb-Item-text">
            Deep learning based prediction
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="title-serverHome-deeplearn">
        Training Your Deep Learning Models!
      </div>

      <div className="serverhome-body">
        <div className="function-select">
          <div
            className="function-select-con"
            onClick={() => {
              //gotoPage();
              store.store.servers.changeHomeStatue(4);
            }}
          >
            <div className="function-select-title">
              <div className="function-select-title-inner-up">
                <div></div>
              </div>
              DNA
              <div className="function-select-title-inner-down">
                <div></div>
              </div>
            </div>
            <div className="function-select-img-outer-DNA">
              <img src={DNA} className="function-select-left-img-DNA" />
            </div>

            <div className="function-select-context">
              Integrating and visualizing the functionality of statistical
              analysis, deep learning model result analysis, feature analysis,
              and parameter optimization analysis for DNA sequences.
            </div>
          </div>
          <div
            className="function-select-con"
            onClick={() => {
              //gotoPage();
              store.store.servers.changeHomeStatue(5);
            }}
          >
            <div className="function-select-title">
              <div className="function-select-title-inner-up">
                <div></div>
              </div>
              RNA
              <div className="function-select-title-inner-down">
                <div></div>
              </div>
            </div>
            <div className="function-select-img-outer">
              <img src={RNA} className="function-select-left-img" />
            </div>

            <div className="function-select-context">
              Integrating and visualizing the functionality of statistical
              analysis, deep learning model result analysis, feature analysis,
              and parameter optimization analysis for RNA sequences.
            </div>
          </div>
          <div
            className="function-select-con"
            onClick={() => {
              //gotoPage();
              store.store.servers.changeHomeStatue(6);
            }}
          >
            <div className="function-select-title">
              <div className="function-select-title-inner-up">
                <div></div>
              </div>
              Protein
              <div className="function-select-title-inner-down">
                <div></div>
              </div>
            </div>
            <div className="function-select-img-outer">
              <img src={Protein} className="function-select-left-img" />
            </div>

            <div className="function-select-context">
              Integrating and visualizing the functionality of statistical
              analysis, deep learning model result analysis, feature analysis,
              and parameter optimization analysis for protein sequences.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default inject("store")(observer(ServerHome));
