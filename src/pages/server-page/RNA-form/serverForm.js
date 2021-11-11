import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./serverForm.css";
import {
  Descriptions,
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
  Steps,
  Popover,
  Tooltip,
  Breadcrumb,
  Switch,
  Checkbox,
  BackTop
} from "antd";

import {
  UploadOutlined,
  QuestionCircleOutlined,
  LoadingOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { submitForm } from "../../../stores/request";
import { REQUEST } from "../../../constants/status";
const { Panel } = Collapse;
const { Dragger } = Upload;
const { TextArea } = Input;
const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;
const { Option } = Select;
const { Step } = Steps;

function ServerForm(store) {
  const [aValue, setAValue] = useState(false);
  const [bValue, setBValue] = useState(false);
  const [cValue_1, setCValue_1] = useState(true);
  const [cValue_2, setCValue_2] = useState(false);
  const [cValue_3, setCValue_3] = useState(false);
  const [cValue_4, setCValue_4] = useState(false);

  const [dValue, setDValue] = useState(false);
  const [eValue, setEValue] = useState(false);
  const [a_Value, setA_Value] = useState(false);
  const [b_Value, setB_Value] = useState(false);
  const [c_Value, setC_Value] = useState(false);
  const [d_Value, setD_Value] = useState(false);
  const [e_Value, setE_Value] = useState(false);

  const [testAddValue, setTestAddValue] = useState(0);
  const [switchCol, setSwitchCol] = useState(false);
  
  useEffect(() => {
    console.log(store);
  }, []);
  useEffect(() => {
    if (store.store.servers.status === REQUEST) {
      setUploading(true);
    } else {
      setUploading(false);
    }
  }, [store.store.servers.status]);

  const [modeSelectModel,setModeSelectModel]=useState("multiple")

  const [current, setCurrent] = useState(0);
  const [DAN_text, setDAN_text] = useState("");

  const [fileList, setFileList] = useState([]);
  const [testFileList, setTestFileList] = useState([]);

  const [uploading, setUploading] = useState(false);
  const [eMail, setEMail] = useState("");
  const [resultData, setResultData] = useState({
    jobId: null,
    requestTime: "2021-09-23 14:36:13",
    status: "waiting",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();
  const onChange = (current) => {
    console.log("onChange:", current);
    setCurrent(current);
  };

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

  const equalLength = false;

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

          // console.log(reader.result);
        };
        reader.readAsText(file);
      } else {
        message.info("please select file with tpye of fasta");
      }
      return false;
    },

    fileList,
  };

  const testProps = {
    onRemove: (file) => {
      const index = testFileList.indexOf(file);
      const newFileList = testFileList.slice();
      newFileList.splice(index, 1);
      setTestFileList(newFileList);
    },
    beforeUpload: (file) => {
      if (file.name.substr(-5, 5) === "fasta") {
        console.log(file);
        setTestFileList([file]);
        const reader = new FileReader();
        reader.onload = function fileReadCompleted() {
          // 当读取完成时，内容只在`reader.result`中
          console.log(reader.result);
        };
        reader.readAsText(file);
      } else {
        message.info("please select file with tpye of fasta");
      }
      return false;
    },

    testFileList,
  };

  const getFile = () => {
    var formData = new FormData();
    fileList.forEach((file) => {
      formData.append("file", file);
    });
    return formData;
  };
  const submit = async () => {
    let type = "DNA";
    // if

    let formData = getFile();
    //dataStr, dataFile, param, mail
    if (fileList[0]) {
      formData.append("dataFile", fileList[0], fileList[0].name);
    }
    formData.append("dataStr", DAN_text);
    formData.append("type", 0);
    let miniMode="modelCompare"
    if (eValue){
      miniMode="paramCompare"
    }
    let balancedData="0"
    if(bValue){
      balancedData="1"
    }
    let dataArgumentation="0"
    if (aValue){
      dataArgumentation="1"
    }
    let dataEnhancement="0"
    if(dValue){
      dataEnhancement="1"
    }
    let CDHit=""
    if(cValue_1){
      CDHit += "8"
    }
    if(cValue_2){
      CDHit += "6"
    }
    if(cValue_3){
      CDHit += "4"
    }
    if(cValue_4){
      CDHit += "2"
    }
    let paramCompare="CDHit"
    if (eValue){
      if(aValue){
        paramCompare="adversialtraining"
      }
      if(dValue){
        paramCompare="adversialtraining"
      }
      if(bValue){
        paramCompare="Focalloss"

      }



    }
    let paramCompareModel=""
    let modelCompare=""
    console.log(selectMulMethodData_1,selectMulMethodData_2,selectMulMethodData_3)
    if(eValue){
      if(selectMulMethodData_1.length===1){
        paramCompareModel+=selectMulMethodData_1[0]
      }
      if(selectMulMethodData_2.length===1){
        paramCompareModel+=selectMulMethodData_2[0]
      }
      if(selectMulMethodData_3.length===1){
        paramCompareModel+=selectMulMethodData_3[0]
      }
      
    }else{
    for(let index in selectMulMethodData_1){
      if(modelCompare===""){
        modelCompare+=selectMulMethodData_1[index]
      }else{
        modelCompare+=" "+selectMulMethodData_1[index]
      }
      console.log(selectMulMethodData_1[index],"modelSelectCoding")
    }
    for(let index in selectMulMethodData_2){
      if(modelCompare===""){
        modelCompare+=selectMulMethodData_2[index]
      }else{
        modelCompare+=" "+selectMulMethodData_2[index]
      }
      console.log(selectMulMethodData_2[index],"modelSelectCoding")
    }
    for(let index in selectMulMethodData_3){
      if(modelCompare===""){
        modelCompare+=selectMulMethodData_3[index]
      }else{
        modelCompare+=" "+selectMulMethodData_3[index]
      }
      console.log(selectMulMethodData_3[index],"modelSelectCoding")
    }
    }


    
    // formData.append(
    //   "param",
    //   "{" +
    //     "'type':'DNA',"+
    //     "'mode':'train-test',"+
    //     "'minimode':'"+miniMode+"',"+
    //     "'dataArgumentation':'"+dataArgumentation+"',"+
    //     "'dataEnhancement':'"+dataEnhancement+"',"+
    //     "'balancedData':'"+balancedData+"',"+
    //     "'paramCompare':'"+paramCompare+"',"+
    //     "'CDHit':'"+CDHit+"',"+
    //     "'paramCompareModel':'"+paramCompareModel+"',"+
    //     "'modelCompare':'"+modelCompare+"'" +
    //     "}"
    // );


    formData.append(
      "param",
      "{" +
        "'type':'DNA',"+
        "'mode':'annotation',"+
        "'minimode':'chooseID',"+
        "'chooseID':'"+"81"+"',"+
        "'dataArgumentation':'',"+
        "'dataEnhancement':'',"+
        "'balancedData':'',"+
        "'paramCompare':'',"+
        "'CDHit':'',"+
        "'paramCompareModel':'',"+
        "'modelCompare':''," +
        "'model':'2'," +
        "'datatype':'userprovide'" +
        "}"
    );

    // formData.append("param", "{"+
    // "'type':'DNA',"+
    // "'mode':'annotation',"+
    // "'minimode':'"+"chooseID"+"',"+
    // "'chooseID':'"+"81"+"',"+
    // "'dataArgumentation':'"+""+"',"+
    // "'dataEnhancement':'"+""+"',"+
    // "'balancedData':'"+""+"',"+
    // "'paramCompare':'"+""+"',"+
    // "'CDHit':'"+""+"',"+
    // "'paramCompareModel':'"+""+"',"+
    // "'modelCompare':'"+""+"'" +
    // "'model':'"+"2"+"'" +
    // "'datatype':'"+"userprovide"+"'" 
    // +"}");

    

    console.log("{" +
    "'type':'DNA',"+
    "'mode':'train-test',"+
    "'minimode':'"+miniMode+"',"+
    "'dataArgumentation':'"+dataArgumentation+"',"+
    "'dataEnhancement':'"+dataEnhancement+"',"+
    "'balancedData':'"+balancedData+"',"+
    "'paramCompare':'"+paramCompare+"',"+
    "'CDHit':'"+CDHit+"',"+
    "'paramCompareModel':'"+paramCompareModel+"',"+
    "'modelCompare':'"+modelCompare+"'" +
    "}")
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
      (DAN_text != "" || fileList[0]) &&
      eMail &&
      selectMulMethodData_1.length +
        selectMulMethodData_2.length +
        selectMulMethodData_3.length >
        0
      
      
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
      console.log(
        selectMulMethodData_1.length +
          selectMulMethodData_2.length +
          selectMulMethodData_3.length
      );
      if (DAN_text == "" && fileList.length == 0) {
        setStepStatus_step_1("red");
      }
      if (eMail == "") {
        setStepStatus_step_4("red");
      }
      if (
        selectMulMethodData_1.length +
          selectMulMethodData_2.length +
          selectMulMethodData_3.length ==
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

  // var xmlhttp;

  // function loadData(url, cfunc) {
  //   xmlhttp = new XMLHttpRequest();
  //   xmlhttp.onreadystatechange = cfunc;
  //   /*修改服务端代码，进行全路由配置，允许跨域请求*/
  //   // xmlhttp.statusText="OPENED"
  //   // xmlhttp.setRequestHeader('Access-Control-Allow-Origin',  '*');

  //   //xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  //   xmlhttp.open("GET", url, true);
  //   xmlhttp.send();
  // }
  // function readFile(url) {
  //   loadData(url, function () {
  //     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  //       setDAN_text(xmlhttp.responseText.toString());
  //       return xmlhttp.responseText;
  //     } else {
  //       return "";
  //     }
  //   });
  // }

  function readFileAsSeq() {
    let text_read = "";
    let reader = new FileReader();

    reader.readAsText(fileList[0], "utf-8"); //设置编码
    reader.onload = function () {
      //   data
      //     .trim()
      //     .split("\n")
      //     .forEach(function (v, i) {
      //       window["str" + (i + 1)] = v;
      //     });
      reader.onload = function () {
        if (reader.result) {
          //显示文件内容
          text_read = reader.result;
          console.log(reader.result);
        }
      };
      reader.readAsText(fileList[0], "utf-8");
    };

    return text_read.toString();
  }

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
      // console.log(arr_current);
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
          // if (
          //   !(
          //     arr_current.length === 3 &&
          //     (arr_current[1] === "1" || arr_current[1] === "0") &&
          //     (arr_current[2] === "training" || arr_current[2] === "testing")
          //   )
          // ) {
          //   return false;
          // }
          // if (arr_current[2] === "testing") {
          //   test = true;
          // }
          // if (arr_current[2] === "training") {
          //   train = true;
          // }
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
    if (eValue&&(selectMulMethodData_1.length+selectMulMethodData_2.length+selectMulMethodData_3.length>=1)){
      setSelectMulMethodData_2([]);
      setSelectMulMethodData_1([value]);
      setSelectMulMethodData_3([]);
      message.info("paramter compare only run one model")
    }else{
      setSelectMulMethodData_1(value);
    }
    
    console.log(`selected ${value}`);
  };
  const selectMulMethod_2 = (value) => {
    if (eValue&&(selectMulMethodData_1.length+selectMulMethodData_2.length+selectMulMethodData_3.length>=1)){
      setSelectMulMethodData_1([]);
      setSelectMulMethodData_2([value]);
      setSelectMulMethodData_3([]);
      message.info("paramter compare only run one model")
    }else{
      setSelectMulMethodData_2(value);
        }
    

    console.log(`selected ${value}`);
  };
  const selectMulMethod_3 = (value) => {
    if (eValue&&(selectMulMethodData_1.length+selectMulMethodData_2.length+selectMulMethodData_3.length>=1)){
      setSelectMulMethodData_1([]);
      setSelectMulMethodData_3([value]);
      setSelectMulMethodData_2([]);
      message.info("paramter compare only run one model")
    }else{
      setSelectMulMethodData_3(value);
        }
    

    console.log(`selected ${value}`);
  };

  const daraCollection = [
    <div className="serverForm-descriptions-con-outer">
      <div className="serverForm-form-text-con">
        <div className="serverForm-form-text-con-test">
          <div>
            Enter the query DNA sequences in training dataset with FASTA format
            (
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
    </div>,

    <div className="descriptions-con-Dragger">
      <div className="serverForm-form-text-con">Upload training dataset</div>
      <Dragger {...props} className="testAdd-Dragger-con">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          <div className="serverForm-form-text-con">
            Click or drag training dataset to this area to upload
          </div>
        </p>
      </Dragger>
    </div>,
  ];
  const selectMethod = [
    <Card
      title={<div className="card-title-text">Basic deep learning models</div>}
      className="card-selectMethod"
    >
      <Select
        mode={modeSelectModel}
        style={{ width: "100%" }}
        placeholder="select method"
        defaultValue={[]}
        value={selectMulMethodData_1}
        onChange={selectMulMethod_1}
        optionLabelProp="label"
        maxTagCount="responsive"
        as
        const
        showArrow
        showSearch={false}
      >
        <Option value="1" label="RNN">
          <div className="demo-option-label-item">RNN</div>
        </Option>
        <Option value="0" label="DNN">
          <div className="demo-option-label-item">DNN</div>
        </Option>
        <Option value="2" label="LSTM">
          <div className="demo-option-label-item">LSTM</div>
        </Option>
        <Option value="5" label="GRU">
          <div className="demo-option-label-item">GRU</div>
        </Option>
        <Option value="6" label="TextCNN">
          <div className="demo-option-label-item">TextCNN</div>
        </Option>
        <Option value="7" label="TextRCNN">
          <div className="demo-option-label-item">TextRCNN</div>
        </Option>
        <Option value="8" label="VDCNN">
          <div className="demo-option-label-item">VDCNN</div>
        </Option>
        <Option value="9" label="RNN_CNN">
          <div className="demo-option-label-item">RNN_CNN</div>
        </Option>
        <Option value="3" label="BiLSTM">
          <div className="demo-option-label-item">BiLSTM</div>
        </Option>
        <Option value="4" label="LSTMAttention">
          <div className="demo-option-label-item">LSTMAttention</div>
        </Option>
      </Select>
    </Card>,
    <Card
      title={<div className="card-title-text">Natural Language Processing</div>}
      className="card-selectMethod"
    >
      <Select
        mode={modeSelectModel}
        style={{ width: "100%" }}
        placeholder="select method"
        defaultValue={[]}
        value={selectMulMethodData_2}

        onChange={selectMulMethod_2}
        optionLabelProp="label"
        showArrow
        showSearch={false}
        maxTagCount="responsive"
        as
        const
      >
        <Option value="15" label="DNA bert">
          <div className="demo-option-label-item">DNA bert</div>
        </Option>
        <Option value="11" label="ReformerEncoder">
          <div className="demo-option-label-item">ReformerEncoder</div>
        </Option>
        <Option value="12" label="PerformerEncoder">
          <div className="demo-option-label-item">PerformerEncoder</div>
        </Option>
        <Option value="13" label="LinformerEncoder">
          <div className="demo-option-label-item">LinformerEncoder</div>
        </Option>
        <Option value="10" label="TransformerEncoder">
          <div className="demo-option-label-item">TransformerEncoder</div>
        </Option>

        <Option
          value="14"
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
        mode={modeSelectModel}
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
        <Option value="17" label="TextGNN">
          <div className="demo-option-label-item">TextGNN</div>
        </Option>
        {/* <Option value="GCN" label="GCN">
          <div className="demo-option-label-item">GCN</div>
        </Option>
        <Option value="GAN" label="GAN">
          <div className="demo-option-label-item">GAN</div>
        </Option> */}
      </Select>
    </Card>,
  ];
  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );
  const [stepStatus_step_1, setStepStatus_step_1] = useState("gray");
  const [stepStatus_step_2, setStepStatus_step_2] = useState("gray");
  const [stepStatus_step_3, setStepStatus_step_3] = useState("gray");
  const [stepStatus_step_4, setStepStatus_step_4] = useState("gray");
  const [stepStatus_step_5, setStepStatus_step_5] = useState("gray");
  useEffect(() => {
    if (fileList.length > 0 || DAN_text) {
      setStepStatus_step_1("blue");
      // setStepStatus({
      //   step_1: "blue",
      //   step_2: stepStatus.step_2,
      //   step_3: stepStatus.step_3,
      //   step_4: stepStatus.step_4,
      //   step_5: stepStatus.step_5,
      // });

      console.log(DAN_text.length);
    } else {
      setStepStatus_step_1("gray");

      // setStepStatus({
      //   step_1: "gray",
      //   step_2: stepStatus.step_2,
      //   step_3: stepStatus.step_3,
      //   step_4: stepStatus.step_4,
      //   step_5: stepStatus.step_5,
      // });
      console.log(DAN_text, "123");
    }
    if (
      selectMulMethodData_1.length > 0 ||
      selectMulMethodData_2.length > 0 ||
      selectMulMethodData_3.length > 0
    ) {
      setStepStatus_step_3("blue");
      // setStepStatus({
      //   step_1: stepStatus.step_1,
      //   step_2: "blue",
      //   step_3: "blue",
      //   step_4: stepStatus.step_4,
      //   step_5: stepStatus.step_5,
      // });
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
  const [openOptions, setOpenOptions] = useState("header");
  useEffect(() => {
    if (
      selectMulMethodData_1.length +
        selectMulMethodData_2.length +
        selectMulMethodData_3.length ===
      1
    ) {
      setOpenOptions("header");
    } else {
      setOpenOptions("disabled");
    }
  }, [selectMulMethodData_1, selectMulMethodData_2, selectMulMethodData_3]);
  return (
    <div className="serverForm-body-outer">
  <Spin spinning={uploading}>

  

      
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
          <div>
            <Timeline>
              <Timeline.Item color={stepStatus_step_1}>
                {" "}
                <List
                  header={
                    <div className="Data-load">
                      <strong>Input Dataset</strong>
                    </div>
                  }
                  footer={<div></div>}
                  bordered
                  dataSource={daraCollection}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </Timeline.Item>
              <Timeline.Item color={stepStatus_step_2}>
                <div className="serverform-Collapse">
                  <Collapse
                  // onChange={() => {
                  //   setStepStatus_step_2("blue");
                  //   setSwitchCol(!switchCol)
                  // }}
                  >
                    <Panel
                      // disabled={switchCol}

                      // collapsible={openOptions}
                      header={
                        <div className="serverform-Collapse-ADVANCED">
                          <strong>Advanced Options</strong>
                          {/* <Switch
                            checkedChildren="Yes"
                            unCheckedChildren="No"
                            className="switch-collapse"
                            checked={switchCol}
                            onClick={() => {
                              if (
                                selectMulMethodData_1.length +
                                  selectMulMethodData_2.length +
                                  selectMulMethodData_3.length ===
                                1
                              ) {
                                setSwitchCol(!switchCol);
                              } else {
                                message.info("Options only use with one model");
                              }
                            }}
                          /> */}
                        </div>
                      }
                      key="1"
                    >
                      <p>
                        <div className="select-advance-options-item">
                          <div className="select-advance-options-item-left">
                            Balanced Data:{" "}
                          </div>
                          <div className="select-advance-options-item-right">
                            <Select
                            allowClear
                            defaultValue={""}
                            disabled={b_Value}
                            onChange={(value)=>{
                              if(eValue){
                                setC_Value(true);
                                setA_Value(true);
                                setD_Value(true);
                                setAValue(false);
                                setDValue(false);
                              }
                              console.log(value)
                              if(value){
                                setBValue(value)
                              }else{
                                setBValue(false)
                              }
                            }}
                            className="select-serverform-advanced"
                            >
                              <Option value={true}>Yes</Option>
                            </Select>
                          {/* <Checkbox
                              checked={bValue}
                              disabled={b_Value}
                              onChange={(e) => {
                      
                                if(eValue){
                                  setC_Value(true);
                                  setA_Value(true);
                                  setD_Value(true);
                                  setAValue(false);
                                  setDValue(false);
                                }
                                setBValue(e.target.checked);
                              }}
                              >use</Checkbox> */}

                          </div>
                        </div>
                      </p>

                      <p>
                        <div className="select-advance-options-item">
                          <div className="select-advance-options-item-left">
                            Data enhancement:
                            
                          </div>
                          <div className="select-advance-options-item-right">
                            <Select
                             allowClear
                             defaultValue={""}
                             disabled={d_Value}
                             onChange={(value)=>{
                               if(eValue){
                                setC_Value(true);
                                setB_Value(true);
                                setA_Value(true);
                                setBValue(false);
                                setAValue(false);
                               }
                               console.log(value)
                               if(value){
                                setDValue(value)
                               }else{
                                setDValue(false)
                               }
                             }}
                             className="select-serverform-advanced"
                            >
                              <Option value={true}>Yes</Option>
                              
                            </Select>
                          {/* <Checkbox
                              checked={dValue}
                              disabled={d_Value}
                              onChange={(e) => {
                                if(eValue){
                                  setC_Value(true);
                                  setB_Value(true);
                                  setA_Value(true);
                                  setBValue(false);
                                  setAValue(false);
                                }
                                
                                setDValue(e.target.checked);
                              }}
                            >use</Checkbox> */}


                          </div>
                        </div>
                      </p>
                      <p>
                        <div className="select-advance-options-item">
                          <div className="select-advance-options-item-left">
                            Data argumentation:{" "}
                          </div>
                          <div className="select-advance-options-item-right">
                          <Select
                             allowClear
                             defaultValue={""}
                             value={aValue}
                             disabled={a_Value}
                             onChange={(value)=>{
                               if(eValue){
                                setC_Value(true);
                                  setB_Value(true);
                                  setD_Value(true);
                                  setBValue(false);
                                  setDValue(false);
                               }
                               console.log(value)
                               if(value){
                                setAValue(value)
                               }else{
                                setAValue(false)
                               }
                             }}
                             className="select-serverform-advanced"
                            >
                              <Option value={true}>Yes</Option>
                              
                            </Select>
                          {/* <Checkbox
                              checked={aValue}
                              disabled={a_Value}
                              onChange={(e) => {
                                if(eValue){
                                  setC_Value(true);
                                  setB_Value(true);
                                  setD_Value(true);
                                  setBValue(false);
                                  setDValue(false);
                                }
                                setAValue(e.target.checked);
                                  
                              }}
                              >use</Checkbox> */}
                          
                          </div>
                        </div>
                      </p>

                      <p>
                        <div className="select-advance-options-item">
                          <div className="select-advance-options-item-left">
                            CD-Hit:
                          </div>
                          <div className="select-advance-options-item-right">
                          <Checkbox
                              checked={cValue_1}
                              disabled={c_Value}
                              onChange={(e) => {
                                if(!eValue){
                                  setCValue_2(false);
                                  setCValue_3(false);
                                  setCValue_4(false);
                                }else{
                                  setA_Value(true);
                                  setB_Value(true);
                                  setD_Value(true);
                                }
                                  setCValue_1(e.target.checked);
                                  if (!e.target.checked&&!cValue_2&&!cValue_3&&!cValue_4){
                                    setCValue_1(true);
                                  }
                                
                              }}
                            >80%</Checkbox>  
                             <Checkbox
                              checked={cValue_2}
                              disabled={c_Value}
                              onChange={(e) => {
                                if(!eValue){
                                  setCValue_1(false);
                                  setCValue_3(false);
                                  setCValue_4(false);
                                }else{
                                  setA_Value(true);
                                  setB_Value(true);
                                  setD_Value(true);
                                }
                                setCValue_2(e.target.checked);
                                if (!e.target.checked&&!cValue_1&&!cValue_3&&!cValue_4){
                                  setCValue_1(true);
                                }
                              }}
                            >60%</Checkbox>  
                             <Checkbox
                              checked={cValue_3}
                              disabled={c_Value}
                              onChange={(e) => {
                                if(!eValue){
                                  setCValue_2(false);
                                  setCValue_1(false);
                                  setCValue_4(false);
                                }else{
                                  setA_Value(true);
                                  setB_Value(true);
                                  setD_Value(true);
                                }
                                setCValue_3(e.target.checked);
                                if (!e.target.checked&&!cValue_2&&!cValue_1&&!cValue_4){
                                  setCValue_1(true);
                                }
                              }}
                            >40%</Checkbox>  
                            <Checkbox
                              checked={cValue_4}
                              disabled={c_Value}
                              onChange={(e) => {
                                if(!eValue){
                                  setCValue_2(false);
                                  setCValue_3(false);
                                  setCValue_1(false);
                                }else{
                                  setA_Value(true);
                                  setB_Value(true);
                                  setD_Value(true);
                                }
                                setCValue_4(e.target.checked);
                                if (!e.target.checked&&!cValue_1&&!cValue_3&&!cValue_2){
                                  setCValue_1(true);
                                }
                              }}
                            >20%</Checkbox>  
                            
                          </div>
                        </div>
                      </p>
                      <p>
                        <div className="select-advance-options-item">
                          <div className="select-advance-options-item-left">
                              Parameter Compare
                          </div>
                          <div className="select-advance-options-item-right">
                          <Checkbox
                              checked={eValue}
                              onChange={(e) => {
                                setEValue(e.target.checked);
                                if(e.target.checked){
                                  setModeSelectModel("single")
                                }
                                setCValue_2(false);
                                setCValue_3(false);
                                setCValue_4(false);
                                setCValue_1(true);
                                setAValue(false)
                                setBValue(false)
                                setDValue(false)
                                setC_Value(false);
                                setA_Value(false)
                                setB_Value(false)
                                setD_Value(false)
                                setSelectMulMethodData_1([])
                                setSelectMulMethodData_2([])
                                setSelectMulMethodData_3([])
                              }}
                            >use</Checkbox>
                            
                          </div>
                        </div>
                      </p>
                    </Panel>
                  </Collapse>
                </div>
              </Timeline.Item>
              <Timeline.Item color={stepStatus_step_3}>
                {" "}
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
              </Timeline.Item>
              <Timeline.Item color={stepStatus_step_4}>
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
                        the job is done:
                      </div>
                    </div>,
                  ]}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </Timeline.Item>
              <Timeline.Item color={stepStatus_step_5}>
                <List
                  header={
                    <div className="Data-load">
                      <strong>Submissio</strong>
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
      </div></Spin>
    </div>
  );
}

export default inject("store")(observer(ServerForm));
