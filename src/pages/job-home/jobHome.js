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
      // message.success("Get infomation successfully");
    } else {
      message.error("There is something in trouble");
    }
  };

  /**
   * completeTime: nullFP
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
      render: (text, record) => (
        <>
          {record.requestTime.slice(0, 4)}
          {record.requestTime.slice(5, 7)}
          {record.requestTime.slice(8, 10)}
          {text}
        </>
      ),
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
                // ['ACC', 'Sensitivity', 'Specificity', 'AUC', 'MCC']

                let table_data = [];
                result.data.result.tabel_data.best_performance.map(
                  (v, i, a) => {
                    table_data.push({
                      model_name: result.data.result.tabel_data.name[i],
                      ACC: parseInt(v[0] * 100).toString() + "%",
                      Sensitivity: parseInt(v[1] * 100).toString() + "%",
                      Specificity: parseInt(v[2] * 100).toString() + "%",
                      AUC: parseInt(v[3] * 100).toString() + "%",
                      MCC: parseInt(v[4] * 100).toString() + "%",
                    });
                    console.log(table_data);
                  }
                );

                result.data.result.table_data_performance = table_data;


                let table_data_datasets = [];
                
             
                table_data_datasets.push({
                      train_positive: result.data.result.tabel_data.data_statistic[0],
                      train_negative:result.data.result.tabel_data.data_statistic[1],
                      test_positive: result.data.result.tabel_data.data_statistic[2],
                      test_negative: result.data.result.tabel_data.data_statistic[3],
                    });
                   
               

                result.data.result.table_data_datasets = table_data_datasets;


                // console.log(result.data.result.tabel_data);

                let time_use = {rowName:"Time Cost:"};
                
                result.data.result.tabel_data.time_use.map((v, i, a) => {
                  time_use[result.data.result.tabel_data.name[i]] = v;

                });
                result.data.result.table_time_use = time_use;

                let time_use_title = [{
                  title:"  ",
                  dataIndex: "rowName",
                  key: "rowName",
                  className:"result-table-title"
                }];
                result.data.result.tabel_data.time_use.map((v, i, a) => {
                  time_use_title.push(
                    {
                      title: result.data.result.tabel_data.name[i],
                      dataIndex: result.data.result.tabel_data.name[i],
                      key: result.data.result.tabel_data.name[i],
                      className:"result-table-title"
                    }
                  )
                });
                result.data.result.table_time_use_title = time_use_title;

                store.store.results.request_success(result.data);
                // history.push('/result');
                store.store.servers.changeHomeStatue(7);
              } else {
                store.store.results.request_fail();
              }

              //下面内容属于无服务测试内容
            }}
            className="jobhome-Button-click"
            type="primary"
          >
            Details
          </Button>
        </Space>
      ),
    },
  ];
  const onSearch = async (value) => {
    if (value.lenth < 8) {
      message.info("please search right jobId");
    } else {
      let v_current = value.substring(8, value.lenth);

      console.log(v_current);
      setSearchLoading(true);
      store.store.results.request();
      let result = await jobInfo(v_current);
      console.log(result);
      // {
      //   train_positive: "1",
      //   train_negative: "胡彦斌",
      //   test_positive: 32,
      //   test_negative: "西湖区湖底公园1号",
      // }
      if (result.resultType) {
        setSearchLoading(false);
        // console.log()
        let table_data = [];
        result.data.result.tabel_data.best_performance.map((v, i, a) => {
          table_data.push({
            model_name: result.data.result.tabel_data.name[i],
            ACC: parseInt(v[0] * 100).toString() + "%",
            Sensitivity: parseInt(v[1] * 100).toString() + "%",
            Specificity: parseInt(v[2] * 100).toString() + "%",
            AUC: parseInt(v[3] * 100).toString() + "%",
            MCC: parseInt(v[4] * 100).toString() + "%",
          });
          console.log(table_data);
        });
        result.data.result.table_data_performance = table_data;
        store.store.results.request_success(result.data);
        store.store.servers.changeHomeStatue(7);

        // history.push("/result");
      } else {
        setSearchLoading(false);
        store.store.results.request_fail();
      }
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
