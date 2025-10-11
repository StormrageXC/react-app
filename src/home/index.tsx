// 41;
// import * as echarts from "echarts";
// import { useRef, useState } from "react";
// import "echarts-gl";
// import React, { useEffect } from "react";
// import image from "../assets/elden-ring.jpeg";
// import environment from "../assets/starfield.jpg";
// import texture from "../assets/bg.hdr";
// import china from "./china.json";
// import "./index.scss";
// import "./other.css";
// import Comp from "./comp";

// function initEarth(chartDom: HTMLElement) {
//   // echarts.init(chartDom).setOption({
//   //   globe: {
//   //     baseTexture: image, // 地球纹理
//   //     heightTexture: image, // 地球高度纹理
//   //     // displacementScale: 0.5, // 地球表面的偏移,
//   //     // 着色效果
//   //     // 'color' 只显示颜色，不受光照等其它因素的影响。
//   //     // 'lambert' 通过经典的 lambert 着色表现光照带来的明暗。
//   //     // 'realistic' 真实感渲染，配合 light.ambientCubemap 和 postEffect 使用可以让展示的画面效果和质感有质的提升。ECharts GL 中使用了基于物理的渲染（PBR） 来表现真实感材质。
//   //     shading: "color",
//   //     // environment, // 环境贴图，纯色，渐变色
//   //     realisticMaterial: {
//   //       roughness: 0.8, // 粗糙度
//   //     },
//   //   },
//   // });
//   console.log(china);
//   echarts.registerMap("china", china);
//   const mapChart = echarts.init(chartDom);
//   mapChart.setOption({
//     geo: {
//       regions: [
//         {
//           name: "浙江省",
//           itemStyle: {
//             areaColor: "#FB975B", //省份背景色
//           },
//         },
//       ],
//       // 这个是重点配置区
//       map: "china", // 表示中国地图
//       roam: false,
//       label: {
//         normal: {
//           show: true, // 是否显示对应地名
//           textStyle: {
//             color: "#fff",
//           },
//         },
//       },
//       itemStyle: {
//         normal: {
//           borderColor: "#00FFFF",
//           borderWidth: "1",
//           areaColor: "#308BF6",
//         },
//         emphasis: {
//           areaColor: "#005CFF",
//         },
//       },
//     },
//   });
//   mapChart.on("click", function (params) {
//     console.log(params);
//   });
// }
// function initRadar(chartDom: HTMLElement) {
//   echarts.init(chartDom).setOption({
//     title: {
//       text: "Basic Radar Chart",
//     },
//     legend: {
//       data: ["Allocated Budget", "Actual Spending"],
//     },
//     radar: {
//       // shape: 'circle',
//       indicator: [
//         { name: "Sales", max: 6500 },
//         { name: "Administration", max: 16000 },
//         { name: "Information Technology", max: 30000 },
//         { name: "Customer Support", max: 38000 },
//         { name: "Development", max: 52000 },
//         { name: "Marketing", max: 25000 },
//       ],
//     },
//     series: [
//       {
//         name: "Budget vs spending",
//         type: "radar",
//         data: [
//           {
//             value: [4200, 3000, 20000, 35000, 50000, 18000],
//             name: "Allocated Budget",
//           },
//           {
//             value: [5000, 14000, 28000, 26000, 42000, 21000],
//             name: "Actual Spending",
//           },
//         ],
//       },
//     ],
//   });
// }
// class MyComponent extends React.Component {
//   handleClick = (event) => {
//     alert("按钮被点击了！");
//     console.log("事件对象:", this);
//   };
//   render() {
//     return <button onClick={this.handleClick}>点击我</button>;
//   }
// }
// export default function Home() {
//   const [list, setList] = useState<Array<Object>>([
//     { val: 1 },
//     { val: 2 },
//     { val: 3 },
//   ]);
//   const a = useRef<Number>(1);
//   const [num, setNum] = useState(0);
//   useEffect(() => {
//     console.log("mount");
//     initEarth(document.getElementById("earth")!);
//     initRadar(document.getElementById("radar")!);
//   }, [a.current]);
//   function add() {
//     setNum((n) => n + 1);
//     console.log(num);
//     a.current = 2;
//   }
//   return (
//     <div id="grid" className="a">
//       123
//       <MyComponent />
//       <div id="radar"></div>
//       <div id="earth"></div>
//       <div id="item3"></div>
//       <div id="item4">
//         <button onClickCapture={add}>{num}</button>
//       </div>
//       <div id="item5"></div>
//     </div>
//   );
// }
import { EllipsisOutlined, PlusOutlined } from "@ant-design/icons";
import type { ActionType, ProColumns } from "@ant-design/pro-components";
import { ProTable, TableDropdown } from "@ant-design/pro-components";
import { Button, Dropdown, Space, Tag } from "antd";
import { useRef } from "react";
// import request from "umi-request";
export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: "index",
    valueType: "indexBorder",
    width: 48,
  },
  {
    title: "标题",
    dataIndex: "title",
    copyable: true,
    ellipsis: true,
    tooltip: "标题过长会自动收缩",
    formItemProps: {
      rules: [
        {
          required: true,
          message: "此项为必填项",
        },
      ],
    },
  },
  {
    disable: true,
    search: false,
    title: "状态",
    dataIndex: "state",
    filters: true,
    onFilter: true,
    ellipsis: true,
    valueType: "select",
    valueEnum: {
      all: { text: "超长".repeat(50) },
      open: {
        text: "未解决",
        status: "Error",
      },
      closed: {
        text: "已解决",
        status: "Success",
        disabled: true,
      },
      processing: {
        text: "解决中",
        status: "Processing",
      },
    },
  },
  {
    disable: true,
    title: "标签",
    dataIndex: "labels",
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_);
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: "创建时间",
    key: "showTime",
    dataIndex: "created_at",
    valueType: "date",
    sorter: true,
    hideInSearch: true,
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    valueType: "dateRange",
    hideInTable: true,
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
  {
    title: "操作",
    valueType: "option",
    key: "option",
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: "copy", name: "复制" },
          { key: "delete", name: "删除" },
        ]}
      />,
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>(null);
  return (
    <ProTable<GithubIssueItem>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params, sort, filter) => {
        console.log(sort, filter);
        await waitTime(2000);
        return {
          data: [],
        };
      }}
      editable={{
        type: "multiple",
      }}
      columnsState={{
        persistenceKey: "pro-table-singe-demos",
        persistenceType: "localStorage",
        defaultValue: {
          option: { fixed: "right", disable: true },
        },
        onChange(value) {
          console.log("value: ", value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: "auto",
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={{
        // 由于配置了 transform，提交的参数与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === "get") {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="高级表格"
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          onClick={() => {
            actionRef.current?.reload();
          }}
          type="primary"
        >
          新建
        </Button>,
        <Dropdown
          key="menu"
          menu={{
            items: [
              {
                label: "1st item",
                key: "1",
              },
              {
                label: "2nd item",
                key: "2",
              },
              {
                label: "3rd item",
                key: "3",
              },
            ],
          }}
        >
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>,
      ]}
    />
  );
};
