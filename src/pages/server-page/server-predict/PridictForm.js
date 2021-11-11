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
  const [switchCol, setSwitchCol] = useState(true);
  const [switchColDefault, setSwitchColDefault] = useState(false);

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

  const [jobIdModelCurrent, setJobIdModelCurrent] = useState("");

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
  const [type, setType] = useState(0);

  const [stepStatus_step_1, setStepStatus_step_1] = useState("gray");
  const [stepStatus_step_2, setStepStatus_step_2] = useState("gray");
  const [stepStatus_step_3, setStepStatus_step_3] = useState("gray");
  const [stepStatus_step_4, setStepStatus_step_4] = useState("gray");



  useEffect(() => {
    if(DAN_text!==""||fileList[0]){
      setStepStatus_step_2("blue")
    }else{
      setStepStatus_step_2("gray")
    }

    if((switchCol&&jobIdModelCurrent!=="")||(switchColDefault&&type!==0)){
      setStepStatus_step_1("blue")
    }else{
      setStepStatus_step_1("gray")
    }
    if (eMail!==""){
      setStepStatus_step_3("blue")
    }else{
      setStepStatus_step_3("gray")
    }

  }, [
    DAN_text,
    jobIdModelCurrent,
    switchCol,
    switchColDefault,
    type,
    fileList,
    eMail,
  ]);

  useEffect(()=>{
    if(stepStatus_step_1=="blue"&&stepStatus_step_2=="blue"&&stepStatus_step_3=="blue"){
      setStepStatus_step_4("blue")
    }else{
      setStepStatus_step_4("gray")
    }
  },[stepStatus_step_1,stepStatus_step_2,stepStatus_step_3])

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
          setDAN_text(reader.result);
          setFileList([file]);
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
    formData.append("dataStr", eMail);

    let minimode = "";
    if (switchColDefault) {
      minimode = "default";
    } else {
      minimode = "chooseID";
    }

    if (switchCol) {
      minimode = "chooseID";
    } else {
      minimode = "default";
    }

    let chooseID = "";
    if (jobResult.data.jobId) {
      chooseID = jobResult.data.jobId;
    }
    formData.append(
      "param",
      "{" +
        "'type':'DNA'," +
        "'mode':'annotation'," +
        "'minimode':'" +
        minimode +
        "'," +
        "'default':'" +
        type +
        "'," +
        "'chooseID':'" +
        chooseID +
        "'," +
        "'dataArgumentation':''," +
        "'dataEnhancement':''," +
        "'balancedData':''," +
        "'paramCompare':''," +
        "'CDHit':''," +
        "'paramCompareModel':''," +
        "'modelCompare':''," +
        "'model':'" +
        jobIdModelCurrent +
        "'," +
        "'datatype':'userprovide'" +
        "}"
    );

    // formData.append(
    //   "param",
    //   "{" +
    //     "'type':'DNA',"+
    //     "'mode':'annotation',"+
    //     "'minimode':'default',"+//对应的default的情况
    //     "'default':'"+"1"+"',"+//1对应的是4mc
    //     "'dataArgumentation':'',"+
    //     "'dataEnhancement':'',"+
    //     "'balancedData':'',"+
    //     "'paramCompare':'',"+
    //     "'CDHit':'',"+
    //     "'paramCompareModel':'',"+
    //     "'modelCompare':''," +
    //     "'model':'2'," +
    //     "'datatype':'userprovide'" +
    //     "}"
    // );

    formData.append("mail", eMail);

    // console.log(formData);
    // if (DAN_text != "") {
    //   let rightDefine = processFileCon(DAN_text, "DNA");
    //   if (rightDefine) {
    //     if (justEqual(DAN_text)) {
    //       message.info("Equal length");
    //     }
    //   } else {
    //     message.info("Please input fomate data as sample");
    //   }
    // }

    if (DAN_text != "" || fileList[0]) {
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
        // setStepStatus_step_1("red");
      }
      if (eMail == "") {
        // setStepStatus_step_4("red");
      }
      message.info("please input all data");
    }
  };
  const resetData = () => {
    setFileList([]);
    setEMail("");
    setDAN_text("");
  };

  let text =
    ">AT1G22840.1_532|1|training\r\nAGATGAGGCTTTTTTACTTTGCTATATTCTTTTGCCAAATAAAATCTCAAACTTTTTTTGTTTATCATCAATTACGTTCTTGGTGGGAATTTGGCTGTAAT\r\n>AT1G09780.1_1772|1|testing\r\nGTGGAGTAGAAGAATTGAGAGCCTTATCAGTTTTTGAAGAGAGGGCTGAAACTCTCTAGTTATCTTTTGTTGCTTTTCTAATAATAAGAGTTTACACACAG";
  const example = () => {
    //readFile(file)
    // let file =new File(testSet)
    setDAN_text(text);
  };



  const onCangeType = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };
  const [JobResultLoading, setGetJobResultLoading] = useState(false);
  const [jobIdGetResult, setJobIdGetResult] = useState("");
  const [jobResult, setJobResult] = useState({
    resultType: false,
    data: [],
  });

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
                <List
                  header={
                    <div className="Data-load">
                      <strong>Model selection</strong>
                    </div>
                  }
                  className=""
                  footer={<div></div>}
                  bordered
                  dataSource={[
                    <div style={{ width: "100%" }}>
                      <Collapse
                        accordion
                        className="select-Model-2Panel"
                        defaultActiveKey="1"
                      >
                        <Panel
                          header={
                            <div>
                              <div className="select-model-collapse-head-text">
                                Load your trained models by Job ID
                              </div>

                              <Switch
                                checkedChildren="Yes"
                                unCheckedChildren="No"
                                className="switch-collapse"
                                checked={switchCol}
                                onClick={() => {
                                  if (!switchCol) {
                                    setSwitchColDefault(false);
                                  }
                                  setSwitchCol(!switchCol);
                                }}
                              />
                            </div>
                          }
                          key="1"
                        >
                          <Spin spinning={JobResultLoading}>
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
                                    if (jobIdGetResult.length < 8) {
                                      message.info("please search right jobId");
                                    } else {
                                      setGetJobResultLoading(true);
                                      let v_current = jobIdGetResult.substring(
                                        8,
                                        jobIdGetResult.lenth
                                      );
                                      let result = {
                                        resultType: false,
                                      };
                                      try {
                                        result = await jobInfo(v_current);
                                      } catch (error) {
                                        result = {
                                          resultType: false,
                                        };
                                      }

                                      if (result.resultType) {
                                        setJobResult(result);

                                        console.log(result);
                                      } else {
                                        message.info("fail");
                                        setJobResult({
                                          resultType: false,
                                          data: [],
                                        });
                                      }
                                      setGetJobResultLoading(false);
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
                                      model:
                                      <Select
                                        className="jobResult-pridict-select"
                                        onChange={(value) => {
                                          setJobIdModelCurrent(value);
                                        }}
                                      >
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
                          </Spin>
                        </Panel>
                      </Collapse>
                      <div style={{ margin: "10px" }}> Or </div>
                      {/* <Collapse> */}
                      <Collapse
                        accordion
                        className="select-Model-2Panel"
                        defaultActiveKey="1"
                      >
                        <Panel
                          header={
                            <div>
                              <div className="select-model-collapse-head-text">
                                Select default annotation tasks
                              </div>

                              <Switch
                                checkedChildren="Yes"
                                unCheckedChildren="No"
                                className="switch-collapse"
                                checked={switchColDefault}
                                onClick={() => {
                                  if (!switchColDefault) {
                                    setSwitchCol(false);
                                  }
                                  setSwitchColDefault(!switchColDefault);
                                }}
                              />
                            </div>

                            // <div className="Data-load">
                            //   <strong>Select default annotation tasks</strong>
                            // </div>
                          }
                          // bordered
                        >
                          <Radio.Group onChange={onCangeType} value={type}>
                            <Radio value={1}>4mc</Radio>
                            <Radio value={2}>5mc</Radio>
                            <Radio value={3}>6mc</Radio>
                          </Radio.Group>
                          {/* <Panel header="Select our pre-trained models" key="2">
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
                        />*/}
                        </Panel>
                      </Collapse>
                    </div>,
                  ]}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </Timeline.Item>

              <Timeline.Item color={stepStatus_step_2}>
                <List
                  header={
                    <div className="Data-load">
                      <strong>Input target sequences</strong>
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
                      <strong>Input Your E-mail</strong>
                    </div>
                  }
                  bordered
                  dataSource={[
                    <div className="descriptions-con">
                      <Input
                        value={eMail}
                        onChange={({ target: { value } }) => {
                          setEMail(value);
                        }}
                      />
                      <div className="serverForm-form-text-con">
                        Optional: The running time usually takes several hours
                        for training a deep learning model depending on your
                        data size. Hence, we strongly recommend you to leave
                        your email below, and you will be notified by email when
                        the job is done
                      </div>
                    </div>,
                  ]}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </Timeline.Item>
              <Timeline.Item color={stepStatus_step_4}>
                <List
                  header={
                    <div className="Data-load">
                      <strong>Submission</strong>
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
