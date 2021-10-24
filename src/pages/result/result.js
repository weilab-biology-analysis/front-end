import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import "./result.css";
import {
  Descriptions,
  Button,
  Card,
  Tabs,
  List,
  Typography,
  Popover,
  message,
  Breadcrumb,
  Collapse,
} from "antd";
import { LikeOutlined } from "@ant-design/icons";
import tSne from '../../constants/img/t-sne.png'
const { TabPane } = Tabs;
const { Panel } = Collapse;

const { Meta } = Card;
function Result(store) {
  useEffect(() => {
    console.log(store);
  }, []);
  const result_title = [
    "statistics",
    "ROC_PRC",
    "3kmer",
    "4kmer",
    "5kmer",
    "6kmer",
  ];
  const dataStr = [
    {
      di: "Job Id",
      data: store.store.results.data.jobId,
    },
    {
      di: "createTime",
      data: store.store.results.data.createTime,
    },
    {
      di: "completeTime",
      data: store.store.results.data.completeTime,
    },
    {
      di: "requestTime",
      data: store.store.results.data.requestTime,
    },
  ];

  const resultPictures = () => {
    let list = [];
    if (store.store.results.data.result.pictures) {
      store.store.results.data.result.pictures.map((v, i, a) => {
        if (result_title[i] == "statistics") {
          list.push(
            <TabPane
              tab={"Dataset Statistics"}
              key={i}
              className="picture-body-con"
            >
              <div className="picture-body-con-tabpane-serverform-Collapse-out">
                <div className="picture-body-con-tabpane-serverform-Collapse">
                  <Collapse defaultActiveKey={["1"]}>
                    <Panel
                      header={
                        <div className="serverform-Collapse-ADVANCED">
                          <strong>Summary of the input datasets</strong>
                        </div>
                      }
                      key="1"
                    >
                      <div className="Result-Result-row-pictures-card">
                        
                        <Card
                          hoverable
                          style={{ width: "70%" }}
                          cover={
                            <img
                              alt="example"
                              src={store.store.results.data.result.pictures[i]}
                              className="Result-Result-row-pictures-item"
                            />
                          }
                        ></Card>{" "}
                        {/* </Popover> */}
                      </div>
                    </Panel>
                  </Collapse>
                </div>
                <div className="picture-body-con-tabpane-serverform-Collapse">
                  <Collapse >
                    <Panel
                      header={
                        <div className="serverform-Collapse-ADVANCED">
                          <strong>Sequence compositional analysis</strong>
                        </div>
                      }
                      key="1"
                    >
                         <div className="Result-Result-row-pictures-card">
                        {/* <Popover
                  className="resultPictures-Popover-contant-card"
                  content={
                    <img
                      src={store.store.results.data.result.pictures[i]}
                      className="resultPictures-Popover-contant"
                    />
                  }
                  title={result_title[i]}
                > */}
                        <Card
                          hoverable
                          style={{ width: "70%" }}
                          cover={
                            <img
                              alt="example"
                              src={store.store.results.data.result.pictures[i]}
                              className="Result-Result-row-pictures-item"
                            />
                          }
                        ></Card>{" "}
                        {/* </Popover> */}
                      </div>
                    </Panel>
                  </Collapse>
                </div>
                <div className="picture-body-con-tabpane-serverform-Collapse">
                  <Collapse >
                    <Panel
                      header={
                        <div className="serverform-Collapse-ADVANCED">
                          <strong>Sequence motif statistics</strong>
                        </div>
                      }
                      key="1"
                    >
                      <div className="Result-Result-row-pictures-card">
                        {/* <Popover
                  className="resultPictures-Popover-contant-card"
                  content={
                    <img
                      src={store.store.results.data.result.pictures[i]}
                      className="resultPictures-Popover-contant"
                    />
                  }
                  title={result_title[i]}
                > */}
                        <Card
                          hoverable
                          style={{ width: "70%" }}
                          cover={
                            <img
                              alt="example"
                              src={store.store.results.data.result.pictures[i]}
                              className="Result-Result-row-pictures-item"
                            />
                          }
                        ></Card>{" "}
                        {/* </Popover> */}
                      </div>
                    </Panel>
                  </Collapse>
                </div>
                <div className="picture-body-con-tabpane-serverform-Collapse">
                  <Collapse >
                    <Panel
                      header={
                        <div className="serverform-Collapse-ADVANCED">
                          <strong>Distribution of different sequence length</strong>
                        </div>
                      }
                      key="1"
                    >
                           <div className="Result-Result-row-pictures-card">
                        {/* <Popover
                  className="resultPictures-Popover-contant-card"
                  content={
                    <img
                      src={store.store.results.data.result.pictures[i]}
                      className="resultPictures-Popover-contant"
                    />
                  }
                  title={result_title[i]}
                > */}
                        <Card
                          hoverable
                          style={{ width: "70%" }}
                          cover={
                            <img
                              alt="example"
                              src={store.store.results.data.result.pictures[i]}
                              className="Result-Result-row-pictures-item"
                            />
                          }
                        ></Card>{" "}
                        {/* </Popover> */}
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </div>
            </TabPane>
          );
        } else if (result_title[i] == "ROC_PRC") {
          list.push(
            <TabPane
              tab={"Model Prediction Results"}
              key={i}
              className="picture-body-con"
            >
              <div className="picture-body-con-tabpane-serverform-Collapse-out">
                <div className="picture-body-con-tabpane-serverform-Collapse">
                  <Collapse defaultActiveKey={["1"]}>
                    <Panel
                      header={
                        <div className="serverform-Collapse-ADVANCED">
                          <strong>Performance of deep learning models</strong>
                        </div>
                      }
                      key="1"
                    >
                      <div className="Result-Result-row-pictures-card">
                        
                        <Card
                          hoverable
                          style={{ width: "70%" }}
                          cover={
                            <img
                              alt="example"
                              src={store.store.results.data.result.pictures[i]}
                              className="Result-Result-row-pictures-item"
                            />
                          }
                        ></Card>{" "}
                        {/* </Popover> */}
                      </div>
                    </Panel>
                  </Collapse>
                </div>
                <div className="picture-body-con-tabpane-serverform-Collapse">
                  <Collapse >
                    <Panel
                      header={
                        <div className="serverform-Collapse-ADVANCED">
                          <strong>ROC and PR curves of deep learning models</strong>
                        </div>
                      }
                      key="1"
                    >
                         <div className="Result-Result-row-pictures-card">
                        {/* <Popover
                  className="resultPictures-Popover-contant-card"
                  content={
                    <img
                      src={store.store.results.data.result.pictures[i]}
                      className="resultPictures-Popover-contant"
                    />
                  }
                  title={result_title[i]}
                > */}
                        <Card
                          hoverable
                          style={{ width: "70%" }}
                          cover={
                            <img
                              alt="example"
                              src={store.store.results.data.result.pictures[i]}
                              className="Result-Result-row-pictures-item"
                            />
                          }
                        ></Card>{" "}
                        {/* </Popover> */}
                      </div>
                    </Panel>
                  </Collapse>
                </div>
                <div className="picture-body-con-tabpane-serverform-Collapse">
                  <Collapse >
                    <Panel
                      header={
                        <div className="serverform-Collapse-ADVANCED">
                          <strong>Density distribution of the prediction confidence by different deep learning models</strong>
                        </div>
                      }
                      key="1"
                    >
                      <div className="Result-Result-row-pictures-card">
                        {/* <Popover
                  className="resultPictures-Popover-contant-card"
                  content={
                    <img
                      src={store.store.results.data.result.pictures[i]}
                      className="resultPictures-Popover-contant"
                    />
                  }
                  title={result_title[i]}
                > */}
                        <Card
                          hoverable
                          style={{ width: "70%" }}
                          cover={
                            <img
                              alt="example"
                              src={store.store.results.data.result.pictures[i]}
                              className="Result-Result-row-pictures-item"
                            />
                          }
                        ></Card>{" "}
                        {/* </Popover> */}
                      </div>
                    </Panel>
                  </Collapse>
                </div>
                
              </div>
            </TabPane>
          );
        }else if(result_title[i] == "3kmer"){
          list.push(
            <TabPane
              tab={"Model Prediction Results"}
              key={i}
              className="picture-body-con"
            >
              <div className="picture-body-con-tabpane-serverform-Collapse-out">
                <div className="picture-body-con-tabpane-serverform-Collapse">
                  <Collapse defaultActiveKey={["1"]}>
                    <Panel
                      header={
                        <div className="serverform-Collapse-ADVANCED">
                          <strong>Feature performance comparison between hand-crafted features and the features learnt by deep learning models</strong>
                        </div>
                      }
                      key="1"
                    >
                      <div className="Result-Result-row-pictures-card">
                        
                        <Card
                          hoverable
                          style={{ width: "70%" }}
                          cover={
                            <img
                              alt="example"
                              src={store.store.results.data.result.pictures[i]}
                              className="Result-Result-row-pictures-item"
                            />
                          }
                        ></Card>{" "}
                        {/* </Popover> */}
                      </div>
                    </Panel>
                  </Collapse>
                </div>
                <div className="picture-body-con-tabpane-serverform-Collapse">
                  <Collapse >
                    <Panel
                      header={
                        <div className="serverform-Collapse-ADVANCED">
                          <strong>Feature visualization results by UMAP</strong>
                        </div>
                      }
                      key="1"
                    >
                         <div className="Result-Result-row-pictures-card">
                        {/* <Popover
                  className="resultPictures-Popover-contant-card"
                  content={
                    <img
                      src={store.store.results.data.result.pictures[i]}
                      className="resultPictures-Popover-contant"
                    />
                  }
                  title={result_title[i]}
                > */}
                        <Card
                          hoverable
                          style={{ width: "70%" }}
                          cover={
                            <img
                              alt="example"
                              src={store.store.results.data.result.pictures[i]}
                              className="Result-Result-row-pictures-item"
                            />
                          }
                        ></Card>{" "}
                        {/* </Popover> */}
                      </div>
                    </Panel>
                  </Collapse>
                </div>
                <div className="picture-body-con-tabpane-serverform-Collapse">
                  <Collapse >
                    <Panel
                      header={
                        <div className="serverform-Collapse-ADVANCED">
                          <strong>Feature importance analysis by SHAP</strong>
                        </div>
                      }
                      key="1"
                    >
                      <div className="Result-Result-row-pictures-card">
                        {/* <Popover
                  className="resultPictures-Popover-contant-card"
                  content={
                    <img
                      src={store.store.results.data.result.pictures[i]}
                      className="resultPictures-Popover-contant"
                    />
                  }
                  title={result_title[i]}
                > */}
                        <Card
                          hoverable
                          style={{ width: "70%" }}
                          cover={
                            <img
                              alt="example"
                              src={store.store.results.data.result.pictures[i]}
                              className="Result-Result-row-pictures-item"
                            />
                          }
                        ></Card>{" "}
                        {/* </Popover> */}
                      </div>
                    </Panel>
                  </Collapse>
                </div>
                
              </div>
            </TabPane>
          );
        }

        if (result_title[i] == "statistics") {
        }
        // list.push(
        //   <TabPane tab={result_title[i]} key={i} className="picture-body-con">
        //     <div className="Result-Result-row-pictures">
        //       <Popover
        //         content={
        //           <img
        //             src={store.store.results.data.result.pictures[i]}
        //             className="resultPictures-Popover-contant"
        //           />
        //         }
        //         title={result_title[i]}
        //       >
        //         <Card
        //           hoverable
        //           style={{ width: 240 }}
        //           cover={
        //             <img
        //               alt="example"
        //               src={store.store.results.data.result.pictures[i]}
        //               className="Result-Result-row-pictures-item"
        //             />
        //           }
        //         ></Card>{" "}
        //       </Popover>
        //     </div>
        //   </TabPane>
        // );
      });
    }
    list.push(

      <TabPane
        tab={"Model Parameter Optimization"}
        key={20}
        className="picture-body-con"
      >

              <div className="picture-body-con-tabpane-serverform-Collapse-out">
                <div className="picture-body-con-tabpane-serverform-Collapse">
                  <Collapse defaultActiveKey={["1"]}>
                    <Panel
                      header={
                        <div className="serverform-Collapse-ADVANCED">
                          <strong>The effect of different sequence similarities in datasets on predictive performance </strong>
                        </div>
                      }
                      key="1"
                    >
                      <div className="Result-Result-row-pictures-card">
                        
                        <Card
                          hoverable
                          style={{ width: "70%" }}
                          cover={
                            <img
                              alt="example"
                              src={tSne}
                              className="Result-Result-row-pictures-item"
                            />
                          }
                        ></Card>{" "}
                        {/* </Popover> */}
                      </div>
                    </Panel>
                  </Collapse>
                </div>
                <div className="picture-body-con-tabpane-serverform-Collapse">
                  <Collapse >
                    <Panel
                      header={
                        <div className="serverform-Collapse-ADVANCED">
                          <strong>The effect of different data augmentation strategies on predictive performance</strong>
                        </div>
                      }
                      key="1"
                    >
                         <div className="Result-Result-row-pictures-card">
                        {/* <Popover
                  className="resultPictures-Popover-contant-card"
                  content={
                    <img
                      src={store.store.results.data.result.pictures[i]}
                      className="resultPictures-Popover-contant"
                    />
                  }
                  title={result_title[i]}
                > */}
                        <Card
                          hoverable
                          style={{ width: "70%" }}
                          cover={
                            <img
                              alt="example"
                              src={tSne}
                              className="Result-Result-row-pictures-item"
                            />
                          }
                        ></Card>{" "}
                        {/* </Popover> */}
                      </div>
                    </Panel>
                  </Collapse>
                </div>
                <div className="picture-body-con-tabpane-serverform-Collapse">
                  <Collapse >
                    <Panel
                      header={
                        <div className="serverform-Collapse-ADVANCED">
                          <strong>The effect of different k-mer selection on predictive performance</strong>
                        </div>
                      }
                      key="1"
                    >
                      <div className="Result-Result-row-pictures-card">
                        {/* <Popover
                  className="resultPictures-Popover-contant-card"
                  content={
                    <img
                      src={store.store.results.data.result.pictures[i]}
                      className="resultPictures-Popover-contant"
                    />
                  }
                  title={result_title[i]}
                > */}
                        <Card
                          hoverable
                          style={{ width: "70%" }}
                          cover={
                            <img
                              alt="example"
                              src={tSne}
                              className="Result-Result-row-pictures-item"
                            />
                          }
                        ></Card>{" "}
                        {/* </Popover> */}
                      </div>
                    </Panel>
                  </Collapse>
                </div>
                
              </div>
          


      </TabPane>
    );
    list.push(
      <TabPane
        tab={"Job Information"}
        key={10}
        className="picture-body-con-information"
      >
        <div>
          <Descriptions>
            {/* <Descriptions column={2}></Descriptions> */}
            <Descriptions.Item
              label={
                <div className="result-Descriptions-item">Created Time</div>
              }
            >
              {store.store.results.data.createTime}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <div className="result-Descriptions-item">Completed Time</div>
              }
            >
              {store.store.results.data.completeTime}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <div className="result-Descriptions-item">Request Time</div>
              }
            >
              {store.store.results.data.requestTime}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <div className="result-Descriptions-item">Model Select</div>
              }
            >
              {"-"}
            </Descriptions.Item>
            <Descriptions.Item
              label={<div className="result-Descriptions-item">CD-Hit</div>}
            >
              {"-"}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <div className="result-Descriptions-item">Balanced data</div>
              }
            >
              {"-"}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </TabPane>
    );

    return list;
  };
  return (
    <div className="Result-Result-body">
      <div className="Result-Result-body-Breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item className="Breadcrumb-Item-text">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item className="Breadcrumb-Item-text">
            Job List
          </Breadcrumb.Item>
          <Breadcrumb.Item className="Breadcrumb-Item-text">
            Result Details
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="Result-Result-title">
        <div className="Result-Result-title-line-left"></div>
        <div className="Result-Result-title-content">Result</div>
        <div className="Result-Result-title-line-right"></div>
      </div>
      <List
        header={
          <div className="Data-load">
            <strong className="Data-load-List-title">
              Job ID: {store.store.results.data.jobId}
            </strong>
            <Button
              type="default"
              onClick={() => {
                if (
                  store.store.results.data.result
                    ? store.store.results.data.result.zip
                      ? false
                      : true
                    : true
                ) {
                  message.info(
                    "Your result hasn't been already, please wait. Or it is failed"
                  );
                } else {
                  window.location.href = store.store.results.data.result.zip;
                }
              }}
              className="result-button-basck-head"
            >
              Download
            </Button>
          </div>
        }
        bordered
        footer={
          <div className="result-button-basck-outer"></div>
          //   <div className="Result-Result-result">
          //     {store.store.results.data.result ? (
          //       store.store.results.data.result.zip ? (
          //         <div>
          //           <div>
          //             {" "}
          //             <a href={store.store.results.data.result.zip}>Result zip</a>
          //           </div>
          //         </div>
          //       ) : (
          //         "There is no result zip"
          //       )
          //     ) : (
          //       <div className="warn-text">There is no result</div>
          //     )}
          //   </div>
        }
        dataSource={[
          <div className="Result-Result-body-outline">
            
            <div className="Result-Result-row">
              <div>
                {store.store.results.data.result ? (
                  store.store.results.data.result.pictures ? (
                    <Tabs
                      type="card"
                      defaultActiveKey="1"
                      onChange={() => {}}
                      className="ServerPage-tabs"
                      
                    >
                      {resultPictures()}
                    </Tabs>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>,
        ]}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
}
export default inject("store")(observer(Result));
