import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import "./resultMail.css";
import { Statistic, Row, Col } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import { jobInfo } from "../../../stores/request";
import { useHistory } from 'react-router';
function ResultMail(store) {
  useEffect(() => {
    getInforOfResultParams(window.location.href.split('?')[1].split("=")[1])
      
  }, [window.location.href]);

  const history =useHistory()
  const getInforOfResultParams=async(jobId)=>{
    store.store.results.request();
    let result = await jobInfo(jobId);
    console.log(result);
    if (result.resultType) {
      store.store.results.request_success(result.data);
    } else {
      store.store.results.request_fail();
    }
  }
  const result_title = [
    "statistics",
    "ROC_PRC",
    "3kmer",
    "4kmer",
    "5kmer",
    "6kmer",
  ];
  const resultPictures = () => {
    let list = [];
    if (store.store.results.data.result.pictures) {
      store.store.results.data.result.pictures.map((v, i, a) => {
        list.push(
          <Row key={i}>
            <Col span={24}>
              <div className="Result-row-pictures-text">{result_title[i]}</div>
              <div className="Result-row-pictures">
                <img
                  src={store.store.results.data.result.pictures[i]}
                  className="Result-row-pictures-item"
                ></img>
              </div>
            </Col>
          </Row>
        );
      });
    }
    return list;
  };
  return (
    <div className="Result-body">
      <div className="Result-title">Result</div>
      <div className="Result-row">
        <Row>
          <Col span={24}>
            <Statistic title="Job Id" value={store.store.results.data.jobId} />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Statistic
              title="Create Time"
              value={store.store.results.data.createTime}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Statistic
              title="completeTime"
              value={store.store.results.data.completeTime}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Statistic
              title="Request Time"
              value={store.store.results.data.requestTime}
            />
          </Col>
        </Row>
      </div>
      <div className="Result-result">
          
             
          
        { store.store.results.data.result?store.store.results.data.result.zip ? (
          <div>
            <div> <a href={store.store.results.data.result.zip}>Result zip</a></div>
          </div>
        ) : (
          ""
        ):""}
        {
            store.store.results.data.result?store.store.results.data.result.pictures?resultPictures():"":""}
        
      </div>
    </div>
  );
}
export default inject("store")(observer(ResultMail));
