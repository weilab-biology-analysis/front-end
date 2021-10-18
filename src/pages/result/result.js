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
} from "antd";
import { LikeOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;
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
            <TabPane tab={"STATISTICS"} key={i} className="picture-body-con">
              <div className="Result-Result-row-pictures">
                <Popover
                  className="resultPictures-Popover-contant-card"
                  content={
                    <img
                      src={store.store.results.data.result.pictures[i]}
                      className="resultPictures-Popover-contant"
                    />
                  }
                  title={result_title[i]}
                >
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src={store.store.results.data.result.pictures[i]}
                        className="Result-Result-row-pictures-item"
                      />
                    }
                  ></Card>{" "}
                </Popover>
              </div>
            </TabPane>
          );
        } else if (result_title[i] == "ROC_PRC") {
          list.push(
            <TabPane tab={result_title[i]} key={i} className="picture-body-con">
              <div className="Result-Result-row-pictures">
                <Popover
                  className="resultPictures-Popover-contant-card"
                  content={
                    <img
                      src={store.store.results.data.result.pictures[i]}
                      className="resultPictures-Popover-contant"
                    />
                  }
                  title={result_title[i]}
                >
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src={store.store.results.data.result.pictures[i]}
                        className="Result-Result-row-pictures-item"
                      />
                    }
                  ></Card>{" "}
                </Popover>
              </div>
            </TabPane>
          );
        } else if (result_title[i] == "3kmer") {
          list.push(
            <TabPane tab={"FEATURE"} key={i} className="picture-body-con">
              <div className="Result-Result-row-pictures">
                <Popover
                  className="resultPictures-Popover-contant-card"
                  content={
                    <img
                      src={store.store.results.data.result.pictures[i]}
                      className="resultPictures-Popover-contant"
                    />
                  }
                  title={result_title[i]}
                >
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src={store.store.results.data.result.pictures[i]}
                        className="Result-Result-row-pictures-item"
                      />
                    }
                  ></Card>{" "}
                </Popover>
                {store.store.results.data.result.pictures[i + 1] ? (
                  <Popover
                  className="resultPictures-Popover-contant-card"
                  content={
                      <img
                        src={store.store.results.data.result.pictures[i + 1]}
                        className="resultPictures-Popover-contant"
                      />
                    }
                    title={result_title[i + 1]}
                  >
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          src={store.store.results.data.result.pictures[i + 1]}
                          className="Result-Result-row-pictures-item"
                        />
                      }
                    ></Card>{" "}
                  </Popover>
                ) : (
                  ""
                )}
                {store.store.results.data.result.pictures[i + 2] ? (
                  <Popover
                  className="resultPictures-Popover-contant-card"
                  content={
                      <img
                        src={store.store.results.data.result.pictures[i + 2]}
                        className="resultPictures-Popover-contant"
                      />
                    }
                    title={result_title[i + 2]}
                  >
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          src={store.store.results.data.result.pictures[i + 2]}
                          className="Result-Result-row-pictures-item"
                        />
                      }
                    ></Card>{" "}
                  </Popover>
                ) : (
                  ""
                )}
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
    return list;
  };
  return (
    <div className="Result-Result-body">
      <div className="Result-Result-title">
        <div className="Result-Result-title-line-left"></div>
        <div className="Result-Result-title-content">Result</div>
        <div className="Result-Result-title-line-right"></div>
      </div>
      <List
        header={
          <div className="Data-load">
            <strong>Job ID: {store.store.results.data.jobId}</strong>
          </div>
        }
        bordered
        footer={
          <div className="result-button-basck-outer">
            <Button
              type="primary"
              onClick={() => {
                if (
                  store.store.results.data.result
                    ? store.store.results.data.result.zip
                      ? false
                      : true
                    : true
                ) {
                  message.info("Your result hasn't been already, please wait. Or it is failed");
                }else{
                  window.location.href=store.store.results.data.result.zip
                }
              }}
              
              className="result-button-basck"
            >
              Result Download
            </Button>
            <Button
              onClick={() => {
                store.store.servers.changeHomeStatue(3);
              }}
              className="result-button-basck"
            >
              Back
            </Button>
          </div>
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
                <List
                  header={
                    <div className="Data-load">
                      {" "}
                      <strong>Base information</strong>
                    </div>
                  }
                  footer={
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
                  }
                  bordered
                  dataSource={[
                    <Descriptions>
                      {/* <Descriptions column={2}></Descriptions> */}
                      <Descriptions.Item
                        label={
                          <div className="result-Descriptions-item">
                            Created Time
                          </div>
                        }
                      >
                        {store.store.results.data.createTime}
                      </Descriptions.Item>
                      <Descriptions.Item
                        label={
                          <div className="result-Descriptions-item">
                            Completed Time
                          </div>
                        }
                      >
                        {store.store.results.data.completeTime}
                      </Descriptions.Item>
                      <Descriptions.Item
                        label={
                          <div className="result-Descriptions-item">
                            Request Time
                          </div>
                        }
                      >
                        {store.store.results.data.requestTime}
                      </Descriptions.Item>
                      <Descriptions.Item
                        label={
                          <div className="result-Descriptions-item">
                            Model Select
                          </div>
                        }
                      >
                        {"-"}
                      </Descriptions.Item>
                      <Descriptions.Item
                        label={
                          <div className="result-Descriptions-item">CD-Hit</div>
                        }
                      >
                        {"-"}
                      </Descriptions.Item>
                      <Descriptions.Item
                        label={
                          <div className="result-Descriptions-item">
                            Balanced data
                          </div>
                        }
                      >
                        {"-"}
                      </Descriptions.Item>
                    </Descriptions>,
                  ]}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
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
