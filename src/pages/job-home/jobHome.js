import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { jobInfo, jobListGet } from "../../stores/request";
import "./jobHome.css";
import { Table, Tag, Space, Button, message, Input } from "antd";
import { useHistory } from "react-router";
const { Search } = Input;
function JobHome(store) {
  useEffect(() => {
    getJobList();
  }, []);
  const history = useHistory();
  const [searchLoading, setSearchLoading] = useState(false);
  const getJobList = async () => {
    let result = await jobListGet();
    if (result.resultType) {
      let dataCurrent = [];
      result.data.map((v, i, a) => {
        dataCurrent.push({
          key: v.jobId,
          completeTime:
            v.completeTime != null ? v.completeTime : "not completed",
          createTime: v.createTime != null ? v.createTime : "not created",
          jobId: v.jobId,
          requestTime: v.requestTime,
          status: [v.status],
        });
      });
      console.log(result.data);
      store.store.jobLists.request_success(dataCurrent);
      message.success("Get infomation successfully");
    } else {
      message.error("There is something in trouble");
    }
  };

  /**
   * completeTime: null
createTime: null
jobId: 33
requestTime: "2021-09-23 16:14:13"
status: "等待运行"
   */
  const columns = [
    {
      title: "jobId",
      dataIndex: "jobId",
      key: "jobId",
    },
    {
      title: "completeTime",
      dataIndex: "completeTime",
      key: "completeTime",
    },
    {
      title: "createTime",
      dataIndex: "createTime",
      key: "createTime",
    },

    {
      title: "requestTime",
      dataIndex: "requestTime",
      key: "requestTime",
    },
    {
      title: "status",
      key: "status",
      dataIndex: "status",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = "geekblue";
            switch (tag) {
              case "等待运行":
                color = "blue";
                break;
              case "正在运行":
                color = "geekblue";
                break;
              case "failed":
                color = "red";
                break;

              default:
                color = "green";
                break;
            }
            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Detail",
      key: "Detail",
      render: (text, record) => (
        <Space size="middle">
          {" "}
          <Button
            onClick={async () => {
              //if (record.status[0] === 'success') {
              //这里是因为无服务才注释掉的，后端好了，以后直接弄回来就可以了
              store.store.results.request();
              let result = await jobInfo(record.jobId);
              console.log(result);
              if (result.resultType) {
                store.store.results.request_success(result.data);
                // history.push('/result');
                store.store.servers.changeHomeStatue(7);
              } else {
                store.store.results.request_fail();
              }

              //下面内容属于无服务测试内容
            }}
            className="jobhome-Button-click"
          >
            Details
          </Button>
        </Space>
      ),
    },
  ];
  const onSearch = async (value) => {
    setSearchLoading(true);
    store.store.results.request();
    let result = await jobInfo(value);
    if (result.resultType) {
      setSearchLoading(false);
      store.store.results.request_success(result.data);
      store.store.servers.changeHomeStatue(7);

      // history.push("/result");
    } else {
      setSearchLoading(false);
      store.store.results.request_fail();
    }

    console.log(value);
  };
  return (
    <div className="JobHome-body">
      <div className="JobHome-search">
        <Search
          placeholder="input search jobId"
          enterButton="Search"
          size="large"
          loading={searchLoading}
          onSearch={onSearch}
        />
      </div>
      <Table dataSource={store.store.jobLists.data} columns={columns}></Table>,
    </div>
  );
}

export default inject("store")(observer(JobHome));
