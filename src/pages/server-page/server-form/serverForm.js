import { inject, observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import './serverForm.css';
import {
  Descriptions,
  Input,
  Upload,
  Button,
  message,
  Modal,
  Result,
  Spin,
} from 'antd';
import { UploadOutlined, LoadingOutlined } from '@ant-design/icons';
import { submitForm } from '../../../stores/request';
import { REQUEST } from '../../../constants/status';

const { TextArea } = Input;
const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;

function ServerForm(store) {
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

  const [DAN_text, setDAN_text] = useState('');

  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [eMail, setEMail] = useState('');
  const [resultData, setResultData] = useState({
    jobId: null,
    requestTime: '2021-09-23 14:36:13',
    status: 'waiting',
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
    history.push('/');
  };

  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      if (file.name.substr(-5, 5) === 'fasta') {
        console.log(file);
        setFileList([file]);
        const reader = new FileReader();
        reader.onload = function fileReadCompleted() {
          // 当读取完成时，内容只在`reader.result`中
          console.log(reader.result);
        };
        reader.readAsText(file);
      } else {
        message.info('please select file with tpye of fasta');
      }
      return false;
    },

    fileList,
  };
  const getFile = () => {
    var formData = new FormData();
    fileList.forEach((file) => {
      formData.append('file', file);
    });
    return formData;
  };
  const submit = async () => {
    let formData = getFile();
    //dataStr, dataFile, param, mail
    if (fileList[0]) {
      formData.append('dataFile', fileList[0], fileList[0].name);
    }
    formData.append('dataStr', DAN_text);
    formData.append('param', '{}');

    formData.append('mail', eMail);

    console.log(formData);
    if ((DAN_text != '' || fileList[0]) && eMail) {
      store.store.servers.request();
      let result = await submitForm(formData);
      console.log(result);
      if (result.resultType) {
        store.store.servers.request_success();
        showModal(result.data);
      } else {
        store.store.servers.request_fail();
        message.error('failed');
      }
    } else {
      message.info('please input mail or data');
    }
  };
  const resetData = () => {
    setFileList([]);
    setEMail('');
    setDAN_text('');
  };
  return (
    <div className="serverForm-body">
      <Modal
        title="Success"
        visible={isModalVisible}
        onOk={handleOk}
        closable={false}
        mask
        onCancel={handleOk}
      >
        <Result
          status="success"
          title="Successfully push your data to our server!"
          subTitle={
            'Your request time is ' +
            resultData.requestTime +
            ', your jobID is ' +
            resultData.jobId +
            ' please wait.'
          }
        />
      </Modal>
      <Descriptions
        title="Basic information:"
        bordered
        className="Descriptions-body"
      >
        <Descriptions.Item
          label={
            <div className="form-text">
              <div>
                Enter the query DNA sequences in special FASTA
                format:(maximum2000 sequences for each submission)
              </div>
              {/* <div>Example</div> */}
            </div>
          }
          span={3}
        >
          <div className="descriptions-con">
            {' '}
            <TextArea
              value={DAN_text}
              onChange={({ target: { value } }) => {
                setDAN_text(value);
              }}
              autoSize={{ minRows: 4, maxRows: 4 }}
            />
          </div>
        </Descriptions.Item>
        <Descriptions.Item
          label={<div className="form-text">Or upload a file:</div>}
          span={3}
        >
          <div className="descriptions-con">
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
          </div>
        </Descriptions.Item>
        <Descriptions.Item
          label={<div className="e-mail">input your e-mail:</div>}
          span={3}
        >
          <div className="descriptions-con">
            <Input
              value={eMail}
              onChange={({ target: { value } }) => {
                setEMail(value);
              }}
            />
          </div>
        </Descriptions.Item>
      </Descriptions>
      <div className="button-serverForm">
        <Button
          className="button-serverForm-button"
          onClick={() => submit()}
          disabled={uploading}
        >
          {uploading ? <Spin indicator={antIcon} /> : ''} submit
        </Button>{' '}
        <Button
          className="button-serverForm-button"
          onClick={() => {
            resetData();
          }}
        >
          reset
        </Button>
      </div>
    </div>
  );
}

export default inject('store')(observer(ServerForm));
