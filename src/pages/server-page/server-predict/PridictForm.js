import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./serverForm.css";
import {
  Input,
  Upload,
  Button,
  message,
  Modal,
  Result,
  Spin,
  Timeline,
  Collapse,
  Radio,
  List,
  Select,
  Card,
  Tooltip,
  Switch,
  Slider,
} from "antd";

import {
  UploadOutlined,
  QuestionCircleOutlined,
  LoadingOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { jobInfo, submitForm } from "../../../stores/request";
import { REQUEST } from "../../../constants/status";
const { Panel } = Collapse;
const { Dragger } = Upload;
const { TextArea } = Input;
const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;
const { Option } = Select;
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
function ServerForm(store) {
  const [aValue, setAValue] = useState(0);
  const [bValue, setBValue] = useState(0);
  const [cValue, setCValue] = useState(0.8);
  const [dValue, setDValue] = useState(0);
  const [eValue, setEValue] = useState(0);
  const [testAddValue, setTestAddValue] = useState(0);
  const [switchCol, setSwitchCol] = useState(true);
  const [switchCol_pritrainModel, setSwitchCol_pritrainModel] = useState(false);

  useEffect(() => {
    if (store.store.servers.status === REQUEST) {
      setUploading(true);
    } else {
      setUploading(false);
    }
    // let a=1;
    // for(let a=1;a<10;a++){
    //   let b=1
    // }
  }, [store.store.servers.status]);

  const [current, setCurrent] = useState(0);
  const [DAN_text, setDAN_text] = useState("");

  const [fileList, setFileList] = useState([]);

  const [uploading, setUploading] = useState(false);
  const [eMail, setEMail] = useState("");
  const [resultData, setResultData] = useState({
    jobId: null,
    requestTime: "2021-09-23 14:36:13",
    status: "waiting",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();

  const showModal = async (data) => {
    await setResultData({
      jobId: data.jobId,
      requestTime: data.requestTime,
      status: data.status,
    });
    await setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    history.push("/");
  };

  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      if (file.name.substr(-5, 5) === "fasta") {
        console.log(file);

        const reader = new FileReader();

        reader.onload = function fileReadCompleted() {
          // 当读取完成时，内容只在`reader.result`中'
          let rightDefine = processFileCon(reader.result.toString(), "DNA");
          if (rightDefine) {
            setDAN_text(reader.result);
            setFileList([file]);
            if (justEqual(reader.result)) {
              message.info("Equal length");
            }
          } else {
            setDAN_text("");

            if (ilegalString) {
              message.info("Here are ilegal words.");
              ilegalString = false;
            } else message.info("Please input format data as same as exemple.");
          }
        };
        reader.readAsText(file);
      } else {
        message.info("please select file with tpye of fasta");
      }
      return false;
    },

    fileList,
  };

  const getFile = () => {
    var formData = new FormData();
    fileList.forEach((file) => {
      formData.append("file", file);
    });
    return formData;
  };
  const submit = async () => {
    let formData = getFile();
    //dataStr, dataFile, param, mail
    if (fileList[0]) {
      formData.append("dataFile", fileList[0], fileList[0].name);
    }
    formData.append("dataStr", DAN_text);
    formData.append("param", "{}");

    formData.append("mail", eMail);

    console.log(formData);
    if (DAN_text != "") {
      let rightDefine = processFileCon(DAN_text, "DNA");
      if (rightDefine) {
        if (justEqual(DAN_text)) {
          message.info("Equal length");
        }
      } else {
        message.info("Please input fomate data as sample");
      }
    }

    if (
      DAN_text != "" &&
      fileList[0] &&
      eMail &&
      selectMulMethodData_1 + selectMulMethodData_2 + selectMulMethodData_3 > 0
    ) {
      store.store.servers.request();
      let result = await submitForm(formData);
      console.log(result);
      if (result.resultType) {
        store.store.servers.request_success();
        showModal(result.data);
      } else {
        store.store.servers.request_fail();
        message.error("failed");
      }
    } else {
      if (DAN_text == "" && fileList.length == 0) {
        setStepStatus_step_1("red");
      }
      if (eMail == "") {
        setStepStatus_step_4("red");
      }
      if (
        selectMulMethodData_1 + selectMulMethodData_2 + selectMulMethodData_3 ==
        0
      ) {
        setStepStatus_step_3("red");
      }
      message.info("please input all data");
    }
  };
  const resetData = () => {
    setFileList([]);
    setEMail("");
    setDAN_text("");
  };
  const qwe = {
    model: ["CNN", "GCN", "wdwe"],
    balance: true,
    cdHit: false,
  };

  let ilegalString = false;
  const processFileCon = (fileStirng, ilegal) => {
    let enter_or_mix = fileStirng.search("\r\n");
    let arr = [];
    if (enter_or_mix != -1) {
      arr = fileStirng.split("\r\n");
    } else {
      let enter_or_mix_n = fileStirng.search("\n");
      if (enter_or_mix_n != -1) {
        arr = fileStirng.split("\n");
      } else {
        arr = fileStirng.split("\r");
      }
    }

    let train = false;
    let test = false;
    var ilegal_r = /[J]/i;
    switch (ilegal) {
      case "DNA":
        break;
      case "RNA":
        break;
      default:
    }
    for (let index in arr) {
      let arr_current = arr[index].split("|");
      console.log(arr_current);
      if (index % 2 === 0) {
        if (
          !(
            arr_current.length === 3 &&
            (arr_current[1] === "1" || arr_current[1] === "0") &&
            (arr_current[2] === "training" || arr_current[2] === "testing")
          )
        ) {
          return false;
        }
        if (arr_current[2] === "testing") {
          test = true;
        }
        if (arr_current[2] === "training") {
          train = true;
        }
      }
    }

    if (test && train) {
      for (let index in arr) {
        if (index % 2 === 1) {
          let just = arr[index].search(ilegal_r);
          let just_enter = arr[index].search("\n");
          let just_r = arr[index].search("\r");
          if (just != -1) {
            ilegalString = true;
            return false;
          }
          if (just_enter != -1) {
            return false;
          }
          if (just_r != -1) {
            return false;
          }
        }
      }
    } else {
      return false;
    }
    return true;
  };
  const justEqual = (fileString) => {
    let enter_or_mix = fileString.search("\r\n");
    let arr = [];
    if (enter_or_mix != -1) {
      arr = fileString.split("\r\n");
    } else {
      let enter_or_mix_n = fileString.search("\n");
      if (enter_or_mix_n != -1) {
        arr = fileString.split("\n");
      } else {
        arr = fileString.split("\r");
      }
    }
    let length = 0;
    for (let index in arr) {
      if (index == 1) {
        length = arr[index].length;
      }
      if (index % 2 === 1) {
        if (length != arr[index].length) {
          return false;
        }
      }
    }
    return true;
  };
  let text =
    ">AT1G22840.1_532|1|training\r\nAGATGAGGCTTTTTTACTTTGCTATATTCTTTTGCCAAATAAAATCTCAAACTTTTTTTGTTTATCATCAATTACGTTCTTGGTGGGAATTTGGCTGTAAT\r\n>AT1G09780.1_1772|1|testing\r\nGTGGAGTAGAAGAATTGAGAGCCTTATCAGTTTTTGAAGAGAGGGCTGAAACTCTCTAGTTATCTTTTGTTGCTTTTCTAATAATAAGAGTTTACACACAG";
  const example = () => {
    //readFile(file)
    // let file =new File(testSet)
    setDAN_text(text);
  };
  const [selectMulMethodData_1, setSelectMulMethodData_1] = useState([]);
  const [selectMulMethodData_2, setSelectMulMethodData_2] = useState([]);
  const [selectMulMethodData_3, setSelectMulMethodData_3] = useState([]);

  const selectMulMethod_1 = (value) => {
    setSelectMulMethodData_1([value]);
    setSelectMulMethodData_2([]);
    setSelectMulMethodData_3([]);
  };
  const selectMulMethod_2 = (value) => {
    setSelectMulMethodData_1([]);
    setSelectMulMethodData_3([]);
    setSelectMulMethodData_2([value]);
  };
  const selectMulMethod_3 = (value) => {
    setSelectMulMethodData_1([]);
    setSelectMulMethodData_2([]);
    setSelectMulMethodData_3([value]);
  };

  const selectMethod = [
    <Card
      title={<div className="card-title-text">Basic deep learning models</div>}
      className="card-selectMethod"
    >
      <Select
        mode="single"
        style={{ width: "100%" }}
        value={selectMulMethodData_1}
        placeholder="select method"
        defaultValue={[]}
        onChange={selectMulMethod_1}
        optionLabelProp="label"
        maxTagCount="responsive"
        as
        const
        showArrow
        showSearch={false}
      >
        <Option value="CNN" label="CNN">
          <div className="demo-option-label-item">CNN</div>
        </Option>
        <Option value="DNN" label="DNN">
          <div className="demo-option-label-item">DNN</div>
        </Option>
        <Option value="LSTM" label="LSTM">
          <div className="demo-option-label-item">LSTM</div>
        </Option>
        <Option value="GRU" label="GRU">
          <div className="demo-option-label-item">GRU</div>
        </Option>
        <Option value="TextCNN" label="TextCNN">
          <div className="demo-option-label-item">TextCNN</div>
        </Option>
        <Option value="TextRCNN" label="TextRCNN">
          <div className="demo-option-label-item">TextRCNN</div>
        </Option>
        <Option value="VDCNN" label="VDCNN">
          <div className="demo-option-label-item">VDCNN</div>
        </Option>
        <Option value="RNN_CNN" label="RNN_CNN">
          <div className="demo-option-label-item">RNN_CNN</div>
        </Option>
        <Option value="BiLSTM" label="BiLSTM">
          <div className="demo-option-label-item">BiLSTM</div>
        </Option>
        <Option value="LSTMAttention" label="LSTMAttention">
          <div className="demo-option-label-item">LSTMAttention</div>
        </Option>{" "}
      </Select>
    </Card>,
    <Card
      title={<div className="card-title-text">Natural Language Processing</div>}
      className="card-selectMethod"
    >
      <Select
        mode="single"
        style={{ width: "100%" }}
        placeholder="select method"
        value={selectMulMethodData_2}
        defaultValue={[]}
        onChange={selectMulMethod_2}
        optionLabelProp="label"
        showArrow
        showSearch={false}
        maxTagCount="responsive"
        as
        const
      >
        <Option value="DNA bert" label="DNA bert">
          <div className="demo-option-label-item">DNA bert</div>
        </Option>
        <Option value="ReformerEncoder" label="ReformerEncoder">
          <div className="demo-option-label-item">ReformerEncoder</div>
        </Option>
        <Option value="LinformerEncoder" label="LinformerEncoder">
          <div className="demo-option-label-item">LinformerEncoder</div>
        </Option>
        <Option value="TransformerEncoder" label="TransformerEncoder">
          <div className="demo-option-label-item">TransformerEncoder</div>
        </Option>

        <Option
          value="RoutingTransformerEncoder"
          label="RoutingTransformerEncoder"
        >
          <div className="demo-option-label-item">
            RoutingTransformerEncoder
          </div>
        </Option>
      </Select>
    </Card>,
    <Card
      title={<div className="card-title-text">Graph Neural Netowork</div>}
      className="card-selectMethod"
    >
      <Select
        mode="single"
        style={{ width: "100%" }}
        placeholder="select method"
        defaultValue={[]}
        value={selectMulMethodData_3}
        onChange={selectMulMethod_3}
        optionLabelProp="label"
        maxTagCount="responsive"
        as
        const
        showArrow
        showSearch={false}
      >
        <Option value="TextGNN" label="TextGNN">
          <div className="demo-option-label-item">TextGNN</div>
        </Option>
        <Option value="GCN" label="GCN">
          <div className="demo-option-label-item">GCN</div>
        </Option>
        <Option value="GAN" label="GAN">
          <div className="demo-option-label-item">GAN</div>
        </Option>
      </Select>
    </Card>,
  ];

  const [stepStatus_step_1, setStepStatus_step_1] = useState("gray");
  const [stepStatus_step_2, setStepStatus_step_2] = useState("gray");
  const [stepStatus_step_3, setStepStatus_step_3] = useState("gray");
  const [stepStatus_step_4, setStepStatus_step_4] = useState("gray");
  const [stepStatus_step_5, setStepStatus_step_5] = useState("gray");
  useEffect(() => {
    if (fileList.length > 0 || DAN_text) {
      setStepStatus_step_1("blue");

      console.log(DAN_text.length);
    } else {
      setStepStatus_step_1("gray");

      console.log(DAN_text, "123");
    }
    if (
      selectMulMethodData_1.length > 0 ||
      selectMulMethodData_2.length > 0 ||
      selectMulMethodData_3.length > 0
    ) {
      setStepStatus_step_3("blue");

      console.log(
        selectMulMethodData_1.length,
        selectMulMethodData_2.length,
        selectMulMethodData_3.length
      );
    } else {
      // setStepStatus({
      //   step_1: stepStatus.step_1,
      //   step_2: "blue",
      //   step_3: "gray",
      //   step_4: stepStatus.step_4,
      //   step_5: stepStatus.step_5,
      // });
      setStepStatus_step_3("gray");
      console.log("asdasds");
    }
    if (eMail != "") {
      // setStepStatus({
      //   step_1: stepStatus.step_1,
      //   step_2: stepStatus.step_2,
      //   step_3: stepStatus.step_3,
      //   step_4: "gray",
      //   step_5: stepStatus.step_5,
      // });
      setStepStatus_step_4("blue");
    } else {
      setStepStatus_step_4("gray");
    }

    if (
      (fileList.length > 0 || DAN_text) &&
      selectMulMethodData_1.length +
        selectMulMethodData_2.length +
        selectMulMethodData_3.length >
        0 &&
      eMail != ""
    ) {
      setStepStatus_step_5("blue");
    } else {
      setStepStatus_step_5("gray");
    }
  }, [
    fileList,
    DAN_text,
    selectMulMethodData_1,
    selectMulMethodData_2,
    selectMulMethodData_3,
    eMail,
    current,
  ]);
  const [type, setType] = useState(0);
  const onCangeType = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };
  const [getJobResultLoading, setGetJobResultLoading] = useState(false);
  const [jobIdGetResult, setJobIdGetResult] = useState("");
  const [jobResult, setJobResult] = useState({
    resultType: false,
    data: [],
  });
  const [state_1_1, setState_1_1] = useState(false);
  const [state_1_2, setState_1_2] = useState(false);
  const [state_2_1, setState_2_1] = useState(false);
  const [state_2_2, setState_2_2] = useState(false);
  return (
    <div className="serverForm-body-outer">
      <div className="serverForm-body-con">
        <Modal
          title="Success"
          visible={isModalVisible}
          onOk={handleOk}
          closable={false}
          mask
          onCancel={handleOk}
        >
          <Result
            title="Successfully push your data to our server!"
            subTitle={
              "Your request time is " +
              resultData.requestTime +
              ", your jobID is " +
              resultData.jobId +
              " please wait."
            }
          />
        </Modal>
        <div className="serverForm-timeline-serverForm-body">
          <div className="serverForm-timeline-serverForm-timline-outer">
            <Timeline>
              <Timeline.Item color={stepStatus_step_1}>
                <div>
                  <List
                    header={
                      <div className="Data-load">
                        <strong>Tasks</strong>
                      </div>
                    }
                    footer={<div></div>}
                    bordered
                    dataSource={[
                      <Radio.Group onChange={onCangeType} value={type}>
                        <Radio value={1}>4mc</Radio>
                        <Radio value={2}>5mc</Radio>
                        <Radio value={3}>6mc</Radio>
                      </Radio.Group>,
                    ]}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                  />
                </div>
              </Timeline.Item>
              <Timeline.Item color={stepStatus_step_2}>
                <List
                  header={
                    <div className="Data-load">
                      <strong>Target Seqence input</strong>
                    </div>
                  }
                  footer={<div></div>}
                  bordered
                  dataSource={[
                    <div className="targetSeq-body">
                      <Collapse
                        onChange={() => {}}
                        className="targetSeqInput-body"
                        accordion
                        defaultActiveKey="1"
                      >
                        <Panel
                          header={
                            <div className="panel-header-with-radio">
                              Target Seqence input{" "}
                              <Radio
                                value={state_1_1}
                                className="panel-header-with-radio-con"
                              />
                            </div>
                          }
                          key="1"
                        >
                          <div className="serverForm-descriptions-con-outer">
                            <div className="serverForm-form-text-con">
                              <div className="serverForm-form-text-con-test">
                                <div>
                                  Enter the query DNA sequences in training
                                  dataset with FASTA format (
                                  <a
                                    onClick={() => {
                                      example();
                                    }}
                                  >
                                    Example
                                  </a>
                                  ):
                                  <Tooltip
                                    className="serverForm-form-text-con-test-Tooltip-QuestionCircleOutlined"
                                    title="maximum2000 sequences for each submission"
                                  >
                                    <QuestionCircleOutlined />
                                  </Tooltip>
                                </div>
                              </div>
                            </div>
                            <div className="descriptions-con-Dragger">
                              <TextArea
                                value={DAN_text}
                                onChange={({ target: { value } }) => {
                                  setDAN_text(value);
                                }}
                                autoSize={{ minRows: 4, maxRows: 4 }}
                              />
                            </div>
                          </div>

                          <div className="descriptions-con-Dragger">
                            <div className="serverForm-form-text-con">
                              Upload training dataset
                            </div>
                            <Dragger {...props} className="testAdd-Dragger-con">
                              <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                              </p>
                              <p className="ant-upload-text">
                                <div className="serverForm-form-text-con">
                                  Click or drag training dataset to this area to
                                  upload
                                </div>
                              </p>
                            </Dragger>
                          </div>
                        </Panel>
                        <Panel header="Species Chrome Position Select" key="2">
                          <div className="predict-depart-outer">
                            <div className="predict-depart">
                              Species:
                              <Select
                                onChange={(value) => {
                                  console.log(value);
                                }}
                                className="predict-depart-select"
                              >
                                <Option value="Human">Human</Option>
                                <Option value="Mouse">Mouse</Option>
                              </Select>
                            </div>
                            <div className="predict-depart">
                              Chrome:
                              <Select
                                onChange={(value) => {
                                  console.log(value);
                                }}
                                className="predict-depart-select"
                              >
                                <Option value="Human">Human</Option>
                                <Option value="Mouse">Mouse</Option>
                              </Select>
                            </div>
                            <div className="predict-depart">
                              <div className="predict-depart-text">
                                Position:
                              </div>

                              <div className="predict-depart-slider">
                                <Slider
                                  step={1}
                                  range
                                  defaultValue={[20, 50]}
                                  onChange={(value) => {
                                    console.log(value);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </Panel>
                      </Collapse>
                    </div>,
                  ]}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </Timeline.Item>
              <Timeline.Item color={stepStatus_step_3}>
                <List
                  header={
                    <div className="Data-load">
                      <strong>Model Select</strong>
                    </div>
                  }
                  className=""
                  footer={<div></div>}
                  bordered
                  dataSource={[
                    <div style={{width:"100%"}}>
                    <Collapse
                      accordion
                      className="select-Model-2Panel"
                      defaultActiveKey="1"
                      
                    >
                      <Panel
                      
                        header={
                          <div>
                            <div className="select-model-collapse-head-text">Select in tarined model by Job Id</div>
                            
                         
                              <Switch
                                checkedChildren="Yes"
                                unCheckedChildren="No"
                                className="switch-collapse"
                                checked={switchCol}
                                onClick={() => {
                                    
                                    setSwitchCol(!switchCol);
                              
                                }}
                              />
                            
                          </div>
                        }
                        key="1"
                      >
                        <div className="select-Model-2Panel-jobid-depart">
                          <div className="select-Model-2Panel-jobid-depart-text">
                            Job Id:
                          </div>
                          <div className="select-Model-2Panel-jobid-depart-input">
                            <Input
                              value={jobIdGetResult}
                              onChange={({ target: { value } }) => {
                                setJobIdGetResult(value);
                              }}
                            />
                          </div>
                          <div className="select-Model-2Panel-jobid-depart-button">
                            <Button
                            type="primary"
                              className="button-serverForm-button-timeline-other"
                              onClick={async () => {
                                setGetJobResultLoading(true);
                                if (jobIdGetResult.length < 8) {
                                  message.info("please search right jobId");
                                } else {
                                  let v_current = jobIdGetResult.substring(
                                    8,
                                    jobIdGetResult.lenth
                                  );

                                  let result = await jobInfo(v_current);
                                  if (result.resultType) {
                                    setJobResult(result);
                                    setGetJobResultLoading(false);
                                    console.log(result);
                                  } else {
                                    setGetJobResultLoading(false);
                                    message.info("fail");
                                    setJobResult({
                                      resultType: false,
                                      data: [],
                                    });
                                  }
                                }
                              }}
                            >
                              Get
                            </Button>
                          </div>
                        </div>
                        <div>
                          {jobResult.resultType ? (
                            <div className="jobResult-pridict">
                              <div>
                                <div>type: {jobResult.data.param.type}</div>
                                <div>
                                  modelCompare:
                                  <Select className="jobResult-pridict-select">
                                    {" "}
                                    {jobResult.data.param.modelCompare
                                      .split(" ")
                                      .map((v, i, a) => {
                                        console.log(v, i, a);
                                        return (
                                          <Option value={v}>
                                            {CodingMap[v]}
                                          </Option>
                                        );
                                      })}
                                  </Select>
                                </div>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </Panel>
                      </Collapse>
                      <Collapse>
                      <Panel header="Select in pretrained model" key="2">
                        <List
                          grid={{ gutter: 0, column: 3 }}
                          header={
                            <div className="Data-load">
                              Select Deep Learning Models
                              <Tooltip
                                title="support multiple models"
                                className="Models-Timeline-Item-question"
                              >
                                <QuestionCircleOutlined />
                              </Tooltip>
                            </div>
                          }
                          bordered
                          dataSource={selectMethod}
                          renderItem={(item) => <List.Item>{item}</List.Item>}
                        />
                      </Panel>
                    </Collapse></div>,
                  ]}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </Timeline.Item>

              <Timeline.Item color={stepStatus_step_5}>
                <List
                  header={
                    <div className="Data-load">
                      <strong>Submit</strong>
                    </div>
                  }
                  bordered
                  dataSource={[
                    <div className="button-serverForm-timeline-outer">
                      <Button
                        className="button-serverForm-button-timeline"
                        onClick={() => submit()}
                        disabled={uploading}
                      >
                        {uploading ? <Spin indicator={antIcon} /> : ""} Submit
                      </Button>{" "}
                      <Button
                        className="button-serverForm-button-timeline-other"
                        onClick={() => {
                          resetData();
                        }}
                        type="primary"
                      >
                        Reset
                      </Button>
                      <Button
                        className="button-serverForm-button-timeline-other"
                        onClick={() => {
                          store.store.servers.changeHomeStatue(2);
                        }}
                        type="primary"
                      >
                        Return
                      </Button>
                    </div>,
                  ]}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
}

export default inject("store")(observer(ServerForm));
