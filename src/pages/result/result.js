import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
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
  Table,
  Dropdown,
  Menu,
  Slider,
  Select,
  Space,
} from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
// import tSne from "../../constants/img/t-sne.png";
// import igv from 'igv'
// import igv from "https://cdn.jsdelivr.net/npm/igv@2.10.5/dist/igv.esm.min.js"

const { TabPane } = Tabs;
const { Panel } = Collapse;
const { Option } = Select;
const { Meta } = Card;
const CodingMap = {
  0: "DNN",
  1: "RNN",
  2: "LSTM",
  3: "BiLSTM",
  4: "LSTMAttention",
  5: "GRU",
  6: "TestCNN",
  7: "TestRCNN",
  8: "VDCNN",
  9: "RNN_CNN",
  10: "Transformer",
  11: "Reformer",
  12: "Performer",
  13: "Linformer",
  14: "RoutingTransformer",
  15: "DNA bert",
  16: "Prot bert",
  17: "TestGCN",
};
function Result(store) {
  const [motifStatistics, setMotifStatistics] = useState([]);
  const [compositionalAnalysis, setcCompositionalAnalysis] = useState([]);
  const [ROC_PR_Deep_all, setROC_PR_Deep_all] = useState([]);
  const [ROC_PR_Tra_all, setROC_PR_Tra_all] = useState([]);
  const [UMAP_picture, setUMAP_picture] = useState([]);
  const [density_picture, setDensity_picture] = useState([]);
  const [result_historyGram, setResult_historyGram] = useState([]);
  const [result_ShapPict, setResult_ShapPict] = useState([]);
  const [result_epochplot, setResult_epochplot] = useState([]);

  useEffect(() => {
    // var igvDiv = document.getElementById("igv-div");
    // var options =
    //   {
    //       genome: "hg38",
    //       locus: "chr8:127,736,588-127,739,371",
    //       // tracks: [
    //       //     {
    //       //         "name": "HG00103",
    //       //         "url": "https://s3.amazonaws.com/1000genomes/data/HG00103/alignment/HG00103.alt_bwamem_GRCh38DH.20150718.GBR.low_coverage.cram",
    //       //         "indexURL": "https://s3.amazonaws.com/1000genomes/data/HG00103/alignment/HG00103.alt_bwamem_GRCh38DH.20150718.GBR.low_coverage.cram.crai",
    //       //         "format": "cram"
    //       //     }
    //       // ]
    //   };

    //   igv.createBrowser(igvDiv, options)
    //           .then(function (browser) {
    //               console.log("Created IGV browser");
    //           })
    if (store.store.results.data.result) {
      if (store.store.results.data.result.pictures) {
        let compositionalAnalysis_current = [];
        let motifStatistics_current = [];
        let ROC_PR_Deep = [];
        let ROC_PR_Tra = [];
        let UMAP_pic = [];
        let density_pic = [];
        let result_histogram = [];
        let ShapPict = [];
        let epochPlot = [];
        for (let index in store.store.results.data.result.pictures) {
          let str = store.store.results.data.result.pictures[index];
          if (str.substring(str.length - 12, str.length) === "atistics.png") {
            compositionalAnalysis_current.push(str);
          } else if (
            str.substring(str.length - 12, str.length) === "/motif_0.png"
          ) {
            motifStatistics_current.push(str);
          } else if (
            str.substring(str.length - 12, str.length) === "/motif_1.png"
          ) {
            motifStatistics_current.push(str);
          } else if (
            str.substring(str.length - 12, str.length) === "/motif_2.png"
          ) {
            motifStatistics_current.push(str);
          } else if (
            str.substring(str.length - 12, str.length) === "/motif_3.png"
          ) {
            motifStatistics_current.push(str);
          } else if (
            str.substring(str.length - 12, str.length) === "/ROC_PRC.png"
          ) {
            ROC_PR_Deep.push(str);
          } else if (
            str.substring(str.length - 12, str.length) === "_ROC_PRC.png"
          ) {
            ROC_PR_Tra.push(str);
          } else if (
            str.substring(str.length - 12, str.length) === "lot/UMAP.png"
          ) {
            UMAP_pic.push(str);
          } else if (
            str.substring(str.length - 12, str.length) === "_density.png"
          ) {
            density_pic.push(str);
          } else if (
            str.substring(str.length - 12, str.length) === "istogram.png"
          ) {
            result_histogram.push(str);
          } else if (
            str.substring(str.length - 12, str.length) === "lot/SHAP.png"
          ) {
            ShapPict.push(str);
          } else if (
            str.substring(str.length - 12, str.length) === "och_plot.png"
          ) {
            epochPlot.push(str);
          }

          console.log(str);
        }
        setDensity_picture(density_pic);
        setMotifStatistics(motifStatistics_current);
        setROC_PR_Deep_all(ROC_PR_Deep);
        setROC_PR_Tra_all(ROC_PR_Tra);
        setUMAP_picture(UMAP_pic);
        setcCompositionalAnalysis(compositionalAnalysis_current);
        setResult_historyGram(result_histogram);
        setResult_ShapPict(ShapPict);
        setResult_epochplot(epochPlot);
      }
    }
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
  const getRowClassName = (record, index) => {
    let className = "";
    className = index % 2 === 0 ? "oddRow" : "evenRow";
    return className;
  };

  const menu = (list) => {
    return (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" download href={list[0]}>
            PNG
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" download href={list[0]}>
            JPG
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" download href={list[0]}>
            PDF
          </a>
        </Menu.Item>
      </Menu>
    );
  };

  const resultPictures = () => {
    let list = [];
    if (store.store.results.data.result.pictures) {
      list.push(
        <TabPane
          tab={"Dataset Statistics"}
          key={1}
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
                    <Table
                      rowClassName={(record, index) =>
                        getRowClassName(record, index)
                      }
                      dataSource={
                        store.store.results.data.result.table_data_datasets
                      }
                      columns={[
                        {
                          title: "train-positive",
                          dataIndex: "train_positive",
                          key: "train_positive",
                          className: "result-table-title",
                        },
                        {
                          title: "train-negative",
                          dataIndex: "train_negative",
                          key: "train_negative",
                          className: "result-table-title",
                        },
                        {
                          title: "test-positive",
                          dataIndex: "test_positive",
                          key: "test_positive",
                          className: "result-table-title",
                        },
                        {
                          title: "test-negative",
                          dataIndex: "test_negative",
                          key: "test_negative",
                          className: "result-table-title",
                        },
                      ]}
                    />
                  </div>
                </Panel>
              </Collapse>
            </div>
            <div className="picture-body-con-tabpane-serverform-Collapse">
              <Collapse>
                <Panel
                  header={
                    <div className="serverform-Collapse-ADVANCED">
                      <strong>Sequence compositional analysis</strong>
                    </div>
                  }
                  key="1"
                >
                  <div className="Result-Result-row-pictures-card">
                    {compositionalAnalysis[0] ? (
                      <Card
                        className="Result-Result-row-pictures-card"
                        hoverable
                        style={{ width: "80%" }}
                        cover={
                          <img
                            alt="example"
                            src={compositionalAnalysis[0]}
                            className="Result-Result-row-pictures-item"
                          />
                        }
                      >
                        <Dropdown
                          overlay={menu([compositionalAnalysis[0]])}
                          placement="bottomCenter"
                          arrow
                          className="download-button"
                        >
                          <Button>Download</Button>
                        </Dropdown>
                      </Card>
                    ) : (
                      ""
                    )}{" "}
                    {compositionalAnalysis[0] ? (
                      <Card
                        className="Result-Result-row-pictures-card"
                        hoverable
                        style={{ width: "80%" }}
                        cover={
                          <img
                            alt="example"
                            src={compositionalAnalysis[0]}
                            className="Result-Result-row-pictures-item"
                          />
                        }
                      >
                        <Dropdown
                          overlay={menu([compositionalAnalysis[0]])}
                          placement="bottomCenter"
                          arrow
                          className="download-button"
                        >
                          <Button>Download</Button>
                        </Dropdown>
                      </Card>
                    ) : (
                      ""
                    )}{" "}
                    {/* </Popover> */}
                  </div>
                </Panel>
              </Collapse>
            </div>
            <div className="picture-body-con-tabpane-serverform-Collapse">
              <Collapse>
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
                    {motifStatistics[0] ? (
                      <Card
                        className="Result-Result-row-pictures-card"
                        hoverable
                        style={{ width: "80%" }}
                        cover={
                          <img
                            alt="example"
                            src={motifStatistics[0]}
                            className="Result-Result-row-pictures-item"
                          />
                        }
                      >
                        <Dropdown
                          overlay={menu([motifStatistics[0]])}
                          placement="bottomCenter"
                          arrow
                          className="download-button"
                        >
                          <Button>Download</Button>
                        </Dropdown>
                      </Card>
                    ) : (
                      ""
                    )}{" "}
                    {motifStatistics[1] ? (
                      <Card
                        className="Result-Result-row-pictures-card"
                        hoverable
                        style={{ width: "80%" }}
                        cover={
                          <img
                            alt="example"
                            src={motifStatistics[1]}
                            className="Result-Result-row-pictures-item"
                          />
                        }
                      >
                        <Dropdown
                          overlay={menu([motifStatistics[1]])}
                          placement="bottomCenter"
                          arrow
                          className="download-button"
                        >
                          <Button>Download</Button>
                        </Dropdown>
                      </Card>
                    ) : (
                      ""
                    )}{" "}
                    {motifStatistics[2] ? (
                      <Card
                        className="Result-Result-row-pictures-card"
                        hoverable
                        style={{ width: "80%" }}
                        cover={
                          <img
                            alt="example"
                            src={motifStatistics[2]}
                            className="Result-Result-row-pictures-item"
                          />
                        }
                      >
                        <Dropdown
                          overlay={menu([motifStatistics[2]])}
                          placement="bottomCenter"
                          arrow
                          className="download-button"
                        >
                          <Button>Download</Button>
                        </Dropdown>
                      </Card>
                    ) : (
                      ""
                    )}{" "}
                    {motifStatistics[3] ? (
                      <Card
                        className="Result-Result-row-pictures-card"
                        hoverable
                        style={{ width: "80%" }}
                        cover={
                          <img
                            alt="example"
                            src={motifStatistics[3]}
                            className="Result-Result-row-pictures-item"
                          />
                        }
                      >
                        <Dropdown
                          overlay={menu([motifStatistics[3]])}
                          placement="bottomCenter"
                          arrow
                          className="download-button"
                        >
                          <Button>Download</Button>
                        </Dropdown>
                      </Card>
                    ) : (
                      ""
                    )}{" "}
                    {/* </Popover> */}
                  </div>
                </Panel>
              </Collapse>
            </div>
            <div className="picture-body-con-tabpane-serverform-Collapse">
              <Collapse>
                <Panel
                  header={
                    <div className="serverform-Collapse-ADVANCED">
                      <strong>Distribution of different sequence length</strong>
                    </div>
                  }
                  key="1"
                >
                  <div className="Result-Result-row-pictures-card">
                    {/* <Card
                          hoverable
                          style={{ width: "70%" }}
                          cover={
                            <img
                              alt="example"
                              src={store.store.results.data.result.pictures[i]}
                              className="Result-Result-row-pictures-item"
                            />
                          }
                        ></Card>{" "} */}
                  </div>
                </Panel>
              </Collapse>
            </div>
          </div>
        </TabPane>
      );
      list.push(
        <TabPane
          tab={"Model Prediction Results"}
          key={2}
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
                    <Table
                      rowClassName={(record, index) =>
                        getRowClassName(record, index)
                      }
                      dataSource={[
                        store.store.results.data.result.table_time_use,
                      ]}
                      columns={
                        store.store.results.data.result.table_time_use_title
                      }
                    />
                    <Card
                      className="Result-Result-row-pictures-card"
                      hoverable
                      style={{ width: "70%" }}
                      cover={
                        <img
                          alt="example"
                          src={result_historyGram[0]}
                          className="Result-Result-row-pictures-item"
                        />
                      }
                    >
                      <Dropdown
                        overlay={menu([result_historyGram[0]])}
                        placement="bottomCenter"
                        arrow
                        className="download-button"
                      >
                        <Button>Download</Button>
                      </Dropdown>
                    </Card>{" "}
                    <Table
                      rowClassName={(record, index) =>
                        getRowClassName(record, index)
                      }
                      dataSource={
                        store.store.results.data.result.table_data_performance
                      }
                      columns={[
                        {
                          // ['ACC', 'Sensitivity', 'Specificity', 'AUC', 'MCC']
                          title: "model name",
                          dataIndex: "model_name",
                          key: "model_name",
                          className: "result-table-title",
                        },
                        {
                          title: "ACC",
                          dataIndex: "ACC",
                          key: "ACC",
                          className: "result-table-title",
                        },
                        {
                          title: "Sensitivity",
                          dataIndex: "Sensitivity",
                          key: "Sensitivity",
                          className: "result-table-title",
                        },
                        {
                          title: "Specificity",
                          dataIndex: "Specificity",
                          key: "Specificity",
                          className: "result-table-title",
                        },
                        {
                          title: "AUC",
                          dataIndex: "AUC",
                          key: "AUC",
                          className: "result-table-title",
                        },
                        {
                          title: "MCC",
                          dataIndex: "MCC",
                          key: "MCC",
                          className: "result-table-title",
                        },
                      ]}
                    />
                  </div>
                </Panel>
              </Collapse>
            </div>
            <div className="picture-body-con-tabpane-serverform-Collapse">
              <Collapse>
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
                    {ROC_PR_Deep_all[0] ? (
                      <Card
                        className="Result-Result-row-pictures-card"
                        hoverable
                        style={{ width: "80%" }}
                        cover={
                          <img
                            alt="example"
                            src={ROC_PR_Deep_all[0]}
                            className="Result-Result-row-pictures-item"
                          />
                        }
                      >
                        <Dropdown
                          overlay={menu([ROC_PR_Deep_all[0]])}
                          placement="bottomCenter"
                          arrow
                          className="download-button"
                        >
                          <Button>Download</Button>
                        </Dropdown>
                      </Card>
                    ) : (
                      ""
                    )}{" "}
                    {/* </Popover> */}
                  </div>
                </Panel>
              </Collapse>
            </div>
            <div className="picture-body-con-tabpane-serverform-Collapse">
              <Collapse>
                <Panel
                  header={
                    <div className="serverform-Collapse-ADVANCED">
                      <strong>Epoch plot</strong>
                    </div>
                  }
                  key="1"
                >
                  <div className="Result-Result-row-pictures-card">
                    {result_epochplot[0] ? (
                      <Card
                        className="Result-Result-row-pictures-card"
                        hoverable
                        style={{ width: "80%" }}
                        cover={
                          <img
                            alt="example"
                            src={result_epochplot[0]}
                            className="Result-Result-row-pictures-item"
                          />
                        }
                      >
                        <Dropdown
                          overlay={menu([result_epochplot[0]])}
                          placement="bottomCenter"
                          arrow
                          className="download-button"
                        >
                          <Button>Download</Button>
                        </Dropdown>
                      </Card>
                    ) : (
                      ""
                    )}{" "}
                    {/* </Popover> */}
                  </div>
                </Panel>
              </Collapse>
            </div>
            <div className="picture-body-con-tabpane-serverform-Collapse">
              <Collapse>
                <Panel
                  header={
                    <div className="serverform-Collapse-ADVANCED">
                      <strong>
                        Density distribution of the prediction confidence by
                        different deep learning models
                      </strong>
                    </div>
                  }
                  key="1"
                >
                  <div className="Result-Result-row-pictures-card">
                    {density_picture[0] ? (
                      <Card
                        className="Result-Result-row-pictures-card"
                        hoverable
                        style={{ width: "80%" }}
                        cover={
                          <img
                            alt="example"
                            src={density_picture[0]}
                            className="Result-Result-row-pictures-item"
                          />
                        }
                      >
                        <Dropdown
                          overlay={menu([density_picture[0]])}
                          placement="bottomCenter"
                          arrow
                          className="download-button"
                        >
                          <Button>Download</Button>
                        </Dropdown>
                      </Card>
                    ) : (
                      ""
                    )}{" "}
                    {density_picture[1] ? (
                      <Card
                        className="Result-Result-row-pictures-card"
                        hoverable
                        style={{ width: "80%" }}
                        cover={
                          <img
                            alt="example"
                            src={density_picture[1]}
                            className="Result-Result-row-pictures-item"
                          />
                        }
                      >
                        <Dropdown
                          overlay={menu([density_picture[1]])}
                          placement="bottomCenter"
                          arrow
                          className="download-button"
                        >
                          <Button>Download</Button>
                        </Dropdown>
                      </Card>
                    ) : (
                      ""
                    )}
                  </div>
                </Panel>
              </Collapse>
            </div>
          </div>
        </TabPane>
      );

      list.push(
        <TabPane tab={"Feature Analysis"} key={3} className="picture-body-con">
          <div className="picture-body-con-tabpane-serverform-Collapse-out">
            <div className="picture-body-con-tabpane-serverform-Collapse">
              <Collapse defaultActiveKey={["1"]}>
                <Panel
                  header={
                    <div className="serverform-Collapse-ADVANCED">
                      <strong>
                        Feature performance comparison between hand-crafted
                        features and the features learnt by deep learning models
                      </strong>
                    </div>
                  }
                  key="1"
                >
                  <div className="Result-Result-row-pictures-card">
                    {ROC_PR_Tra_all[0] ? (
                      <Card
                        className="Result-Result-row-pictures-card"
                        hoverable
                        style={{ width: "80%" }}
                        cover={
                          <img
                            alt="example"
                            src={ROC_PR_Tra_all[0]}
                            className="Result-Result-row-pictures-item"
                          />
                        }
                      >
                        <Dropdown
                          overlay={menu([ROC_PR_Tra_all[0]])}
                          placement="bottomCenter"
                          arrow
                          className="download-button"
                        >
                          <Button>Download</Button>
                        </Dropdown>
                      </Card>
                    ) : (
                      ""
                    )}
                  </div>
                </Panel>
              </Collapse>
            </div>
            <div className="picture-body-con-tabpane-serverform-Collapse">
              <Collapse>
                <Panel
                  header={
                    <div className="serverform-Collapse-ADVANCED">
                      <strong>Feature space visualization by UMAP</strong>
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
                    {UMAP_picture[0] ? (
                      <Card
                        className="Result-Result-row-pictures-card"
                        hoverable
                        style={{ width: "80%" }}
                        cover={
                          <img
                            alt="example"
                            src={UMAP_picture[0]}
                            className="Result-Result-row-pictures-item"
                          />
                        }
                      >
                        <Dropdown
                          overlay={menu([UMAP_picture[0]])}
                          placement="bottomCenter"
                          arrow
                          className="download-button"
                        >
                          <Button>Download</Button>
                        </Dropdown>
                      </Card>
                    ) : (
                      ""
                    )}{" "}
                    {/* </Popover> */}
                  </div>
                </Panel>
              </Collapse>
            </div>
            <div className="picture-body-con-tabpane-serverform-Collapse">
              <Collapse>
                <Panel
                  header={
                    <div className="serverform-Collapse-ADVANCED">
                      <strong>Feature importance analysis by SHAP</strong>
                    </div>
                  }
                  key="1"
                >
                  <div className="Result-Result-row-pictures-card">
                    {result_ShapPict[0] ? (
                      <Card
                        className="Result-Result-row-pictures-card"
                        hoverable
                        style={{ width: "80%" }}
                        cover={
                          <img
                            alt="example"
                            src={result_ShapPict[0]}
                            className="Result-Result-row-pictures-item"
                          />
                        }
                      >
                        <Dropdown
                          overlay={menu([result_ShapPict[0]])}
                          placement="bottomCenter"
                          arrow
                          className="download-button"
                        >
                          <Button>Download</Button>
                        </Dropdown>
                      </Card>
                    ) : (
                      ""
                    )}{" "}
                    {/* <Card
                          hoverable
                          style={{ width: "70%" }}
                          cover={
                            <img
                              alt="example"
                              src={store.store.results.data.result.pictures[i]}
                              className="Result-Result-row-pictures-item"
                            />
                          }
                        ></Card>{" "} */}
                  </div>
                </Panel>
              </Collapse>
            </div>
          </div>
        </TabPane>
      );

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
                    <strong>
                      The effect of different sequence similarities in datasets
                      on predictive performance{" "}
                    </strong>
                  </div>
                }
                key="1"
              >
                <div className="Result-Result-row-pictures-card">
                  {/* <Card
                    hoverable
                    style={{ width: "70%" }}
                    cover={
                      <img
                        alt="example"
                        src={tSne}
                        className="Result-Result-row-pictures-item"
                      />
                    }
                  ></Card>{" "} */}
                  {/* </Popover> */}
                </div>
              </Panel>
            </Collapse>
          </div>
          <div className="picture-body-con-tabpane-serverform-Collapse">
            <Collapse>
              <Panel
                header={
                  <div className="serverform-Collapse-ADVANCED">
                    <strong>
                      The effect of different data augmentation strategies on
                      predictive performance
                    </strong>
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
                  {/* <Card
                    hoverable
                    style={{ width: "70%" }}
                    cover={
                      <img
                        alt="example"
                        src={tSne}
                        className="Result-Result-row-pictures-item"
                      />
                    }
                  ></Card>{" "} */}
                  {/* </Popover> */}
                </div>
              </Panel>
            </Collapse>
          </div>
          <div className="picture-body-con-tabpane-serverform-Collapse">
            <Collapse>
              <Panel
                header={
                  <div className="serverform-Collapse-ADVANCED">
                    <strong>
                      The effect of different k-mer selection on predictive
                      performance
                    </strong>
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
        key={4}
        className="picture-body-con-information"
      >
        <div>
          <Descriptions>
            {/* <Descriptions column={2}></Descriptions> */}
            <Descriptions.Item
              label={<div className="result-Descriptions-item">Type</div>}
            >
              {store.store.results.data.param.type}
            </Descriptions.Item>
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
              {store.store.results.data.param.modelCompare
                .split(" ")
                .map((v, i, a) => {
                  return CodingMap[v] + " ";
                })}
            </Descriptions.Item>
            <Descriptions.Item
              label={<div className="result-Descriptions-item">CD-Hit</div>}
            >
              {store.store.results.data.param.CDHit / 10}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <div className="result-Descriptions-item">Balanced data</div>
              }
            >
              {store.store.results.data.param.balancedData !== "0"
                ? "use"
                : "-"}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <div className="result-Descriptions-item">
                  Data Argumentation
                </div>
              }
            >
              {store.store.results.data.param.dataArgumentation !== "0"
                ? "use"
                : "-"}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <div className="result-Descriptions-item">Data Enhancement</div>
              }
            >
              {store.store.results.data.param.dataEnhancement !== "0"
                ? "use"
                : "-"}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </TabPane>
    );

    return list;
  };
  const [sequence_selection_item, setSequence_selection_item] = useState(0);
  const [length_selection_item, setLength_selection_item] = useState(30);

  const sequence_selection = (value) => {
    setSequence_selection_item(value);
    console.log(`selected ${value}`);
  };
  const length_selection = (value) => {
    setLength_selection_item(value);
  };
  const prob_sequence = () => {
    let reSeqList = [];
    // console.log(store.store.results.data.result.table_data)
    if (store.store.results.data.result.table_data.dataset) {
      // console.log(store.store.results.data.result.table_data.problist)
      store.store.results.data.result.table_data.dataset.map(
        (value, index, array) => {
          if (store.store.results.data.result.table_data.problist) {
            let dirty = false;
            let list_problist_dataset_single = [];
            let current_data_dataset = [];
            for (
              let i = 0;
              i < store.store.results.data.result.table_data.problist.length;
              i++
            ) {
              if (
                store.store.results.data.result.table_data.problist[i][0] ===
                index
              ) {
                dirty = true;
                list_problist_dataset_single.push(
                  store.store.results.data.result.table_data.problist[i]
                );
              }
            }
            for (let i = 0; i < list_problist_dataset_single.length; i++) {
              if (i < list_problist_dataset_single - 1 && i > 0) {
                current_data_dataset.push([
                  value.slice(
                    list_problist_dataset_single[i - 1][1],
                    list_problist_dataset_single[i][1]
                  ),
                  value[list_problist_dataset_single[i][1]],
                  value.slice(
                    [list_problist_dataset_single[i][1] + 1],
                    list_problist_dataset_single[i + 1][1]
                  ),
                  list_problist_dataset_single[i][2],
                ]);
              } else if (i < list_problist_dataset_single - 1 && i === 0) {
                current_data_dataset.push([
                  value.slice(0, list_problist_dataset_single[i][1]),
                  value[list_problist_dataset_single[i][1]],
                  value.slice(
                    [list_problist_dataset_single[i][1] + 1],
                    list_problist_dataset_single[i + 1][1]
                  ),
                  list_problist_dataset_single[i][2],
                ]);
              } else {
                current_data_dataset.push([
                  value.slice(
                    list_problist_dataset_single[i - 1],
                    list_problist_dataset_single[i][1]
                  ),
                  value[list_problist_dataset_single[i][1]],
                  value.slice(
                    [list_problist_dataset_single[i][1] + 1],
                    value.length + 1
                  ),
                  list_problist_dataset_single[i][2],
                ]);
              }
              reSeqList.push(current_data_dataset);
            }
            console.log(reSeqList);
            // for (
            //   let i = 0;
            //   i < store.store.results.data.result.table_data.problist.length;
            //   i++
            // ) {
            //   if (
            //     store.store.results.data.result.table_data.problist[i][0] ===
            //     index
            //   ) {
            //     reSeqList.push([
            //       value.slice(
            //         0,
            //         store.store.results.data.result.table_data.problist[i][1]
            //       ),
            //       value[
            //         store.store.results.data.result.table_data.problist[i][1]
            //       ],
            //       value.slice(
            //         [
            //           store.store.results.data.result.table_data.problist[
            //             i
            //           ][1] + 1,
            //         ],
            //         value.length + 1
            //       ),
            //       store.store.results.data.result.table_data.problist[i][2],
            //     ]);
            //     console.log(reSeqList);
            //     dirty = true;
            //   }
            // }
            if (!dirty) {
              reSeqList.push([[value]]);
            }
          }
        }
      );
    }

    let table_data_of_mark = [];
    store.store.results.data.result.table_data.problist.map(
      (valu, inde, arra) => {
        table_data_of_mark.push({
          table_data_index: valu[0],
          table_data_position: valu[1],
          table_data_confidence: valu[2],
          className: "result-table-title",
          table_data_sequence_mark: (
            <div className="table-mark-sequence">
              {store.store.results.data.result.table_data.dataset[
                valu[0]
              ].slice(0, valu[1])}

              <Popover content={"confidence:" + valu[2]} className="target-seq">
                {/* <div className="target-seq"></div> */}
                {
                  store.store.results.data.result.table_data.dataset[valu[0]][
                    valu[1]
                  ]
                }
              </Popover>
              {store.store.results.data.result.table_data.dataset[
                valu[0]
              ].slice(
                valu[1] + 1,
                store.store.results.data.result.table_data.dataset[valu[0]]
                  .length + 1
              )}
            </div>
          ),
        });
      }
    );

    let reqDivSeqList = [];
    console.log(reSeqList);
    reSeqList.map((v, i, a) => {
      if (v[0].length > 1) {
        // console.log(v[0].length, v[2].length);
        let reqDivSeqList_current_data = [];
        if (v.length === 1) {
          reqDivSeqList.push(
            <div className="target-con">
              {/* <div className="target-edge"></div> */}
              {v[0][0]}

              <Popover content={"confidence:" + v[0][3]} className="target-seq">
                {/* <div className="target-seq"></div> */}
                {v[0][1]}
              </Popover>
              {v[0][2]}
              {/* <div className="target-edge"></div> */}
            </div>
          );
        } else {
          v.map((val, ind, num) => {
            if (ind === 0) {
              reqDivSeqList_current_data.push(
                <>
                  {val[0]}
                  <Popover
                    content={"confidence:" + val[3]}
                    className="target-seq"
                  >
                    {/* <div className="target-seq"></div> */}
                    {val[1]}
                  </Popover>
                  {val[2]}
                </>
              );
            } else {
              reqDivSeqList_current_data.push(
                <>
                  <Popover
                    content={"confidence:" + v[3]}
                    className="target-seq"
                  >
                    {/* <div className="target-seq"></div> */}
                    {val[1]}
                  </Popover>
                  {val[2]}
                </>
              );
            }
          });
          reqDivSeqList.push(
            <div className="target-con">{reqDivSeqList_current_data}</div>
          );
        }

        // reqDivSeqList_current_data.push()
        // reqDivSeqList.push(
        //   <div className="target-con">
        //     {/* <div className="target-edge"></div> */}
        //     {v[0]}
        //     <Popover content={"confidence:" + v[3]} className="target-seq">
        //       {/* <div className="target-seq"></div> */}
        //       {v[1]}
        //     </Popover>
        //     {v[2]}
        //     {/* <div className="target-edge"></div> */}
        //   </div>
        // );
      } else {
        reqDivSeqList.push(
          <div className="target-con">
            <text>{v[0][0]}</text>
          </div>
        );
      }
    });

    if (store.store.results.data.result.table_data.dataset) {
      let options_data = [];
      let sequence_data_index = {};
      store.store.results.data.result.table_data.problist.map(
        (value_, index_, array_) => {
          if (sequence_data_index[value_[0]]) {
            sequence_data_index[value_[0]][value_[1]] = value_[2];
          } else {
            sequence_data_index[value_[0]] = { [value_[1]]: value_[2] };
          }
        }
      );
      store.store.results.data.result.table_data.dataset.map((v, i, a) => {
        options_data.push(
          <Option value={i} key={i + Option}>
            sequence{i + 1}
          </Option>
        );
      });
      let sequence_body_con =
        store.store.results.data.result.table_data.dataset[
          sequence_selection_item
        ];
      console.log(store.store.results.data.result.table_data);
      let sequence_body_con_div = [];

      sequence_body_con.split("").map((v, i, a) => {
        // console.log(v)
        let AGCT_color = "";
        switch (v) {
          case "A":
            AGCT_color = "green";
            break;
          case "G":
            AGCT_color = "darkgoldenrod";
            break;
          case "T":
            AGCT_color = "red";
            break;
          case "C":
            AGCT_color = "blue";
            break;
          default:
            AGCT_color = "purple";
        }

        sequence_body_con_div.push(
          <div
            className="sequence_body_con_div_part"
            key={i + sequence_body_con_div}
          >
            <div
              style={{
                color: `${AGCT_color}`,
                width: `${107 - length_selection_item}px`,
                backgroundColor: `${
                  length_selection_item > 92 ? AGCT_color : "#f6f6f6"
                }`,
                fontSize: "15px",
                textAlign: "center",
              }}
            >
              {/* {length_selection_item > 92 ? "." : v} */}
              {v}
            </div>
            <div>
              {sequence_data_index[sequence_selection_item] ? (
                sequence_data_index[sequence_selection_item][i] ? (
                  <div className="sequence_body_con_div_part_problist">
                    <Popover
                      content={
                        "confidence:" +
                        sequence_data_index[sequence_selection_item][i]
                      }
                      
                    >
                      <div
                        style={{
                          width: `${(107 - length_selection_item) * 0.7}px`,
                          height: `${
                            100 *
                            sequence_data_index[sequence_selection_item][i]
                          }px`,
                          backgroundColor: "lightblue",
                          marginTop: "30px",
                        }}
                      >
                        .
                      </div>
                    </Popover>
                  </div>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
          </div>
        );
      });
      let sequence_body = (
        <div className="igv-fake-body-inner-sequence_body" style={{}}>
          {sequence_body_con_div}
        </div>
      );
      reqDivSeqList.push(
        <div className="table-reqdivseqlist-out">
          <Table
            className="table-reqdivseqlist"
            rowClassName={(record, index) => getRowClassName(record, index)}
            dataSource={table_data_of_mark}
            columns={[
              {
                title: "Index",
                dataIndex: "table_data_index",
                key: "table_data_index",
                className: "result-table-title",
              },
              {
                title: "Position",
                dataIndex: "table_data_position",
                key: "table_data_position",
                className: "result-table-title",
              },
              {
                title: "Confidence",
                dataIndex: "table_data_confidence",
                key: "table_data_confidence",
                className: "result-table-title",
              },
              {
                title: "Sequence Mark",
                dataIndex: "table_data_sequence_mark",
                key: "table_data_sequence_mark",
                className: "result-table-title",
              },
            ]}
          />
          <div className="igv-fake">
            <div className="igv-fake-head">
              <div className="igv-fake-select">
                <Select
                  // defaultValue="sequence1"
                  style={{ width: 120 }}
                  onChange={sequence_selection}
                >
                  {options_data}
                </Select>
              </div>

              <div className="igv-fake-slider-outline">
                <div className="igv-fake-slider-percent">
                  {length_selection_item}%
                </div>
                <PlusCircleOutlined
                  className="igv-fake-select-icon"
                  onClick={() => {
                    if (length_selection_item + 0.5 <= 100)
                      setLength_selection_item(length_selection_item + 0.5);
                  }}
                />

                <Slider
                  // defaultValue={30}
                  value={length_selection_item}
                  className="igv-fake-slider"
                  onChange={length_selection}
                  step={0.1}
                />
                <MinusCircleOutlined
                  className="igv-fake-select-icon"
                  onClick={() => {
                    if (length_selection_item - 1 > 0)
                      setLength_selection_item(length_selection_item - 1);
                  }}
                />
              </div>
            </div>
            <div className="igv-fake-body">
              <div className="igv-fake-body-inner">{sequence_body}</div>
            </div>
          </div>
        </div>
      );
    }

    return reqDivSeqList;
  };
  if (store.store.results.data.param.mode === "train-test") {
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

        {/* <div className="Result-Result-title">
          <div className="Result-Result-title-line-left"></div>
          <div className="Result-Result-title-content">Result</div>
          <div className="Result-Result-title-line-right"></div>
        </div> */}
        <List
          header={
            <div className="Data-load">
              <strong className="Data-load-List-title">
                Job ID: {store.store.resuxlts.data.requestTime.slice(0, 4)}
                {store.store.results.data.requestTime.slice(5, 7)}
                {store.store.results.data.requestTime.slice(8, 10)}
                {store.store.results.data.jobId}
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
  } else {
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
        {/* 
        <div className="Result-Result-title">
          <div className="Result-Result-title-line-left"></div>
          <div className="Result-Result-title-content">Result</div>
          <div className="Result-Result-title-line-right"></div>
        </div> */}
        <List
          header={
            <div className="Data-load">
              <strong className="Data-load-List-title">
                Job ID: {store.store.results.data.requestTime.slice(0, 4)}
                {store.store.results.data.requestTime.slice(5, 7)}
                {store.store.results.data.requestTime.slice(8, 10)}
                {store.store.results.data.jobId}
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
          footer={<div className="result-button-basck-outer"></div>}
          dataSource={[
            <div className="Result-Result-body-outline">
              <div className="Result-Result-row">
                <div>
                  {store.store.results.data.result ? (
                    store.store.results.data.result.table_data ? (
                      <Tabs
                        type="card"
                        defaultActiveKey="1"
                        onChange={() => {}}
                        className="ServerPage-tabs"
                      >
                        <TabPane
                          tab={"key"}
                          key={1}
                          className="picture-body-con"
                        >
                          {store.store.results.data.result.table_data.dataset
                            ? prob_sequence()
                            : ""}
                        </TabPane>
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
}
export default inject("store")(observer(Result));
