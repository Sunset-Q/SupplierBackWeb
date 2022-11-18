// import request from '@/server/request';
import {billData} from './billDataMock';
export const searchColumns = [
    {
        label: '姓名',
        prop: 'name',
        clearable: true,
        placeholder: "请输入姓名"
    },
    {
        label: '性别',
        prop: 'sex',
        clearable: true,
        placeholder: "性别",
        isSelect: true,
        options: [
            {
                prop: 'male',
                name: '男'
            },
            {
                prop: 'female',
                name: '女'
            }
        ]
    },
    {
        label: '技能',
        prop: 'skill',
        clearable: true,
        placeholder: "请选择",
        isCascader: true,
        options: [
              {
                value: "basic",
                label: "Basic",
                children: [
                {
                    value: "layout",
                    label: "Layout 布局"
                },
                {
                    value: "color",
                    label: "Color 色彩"
                },
                {
                    value: "typography",
                    label: "Typography 字体"
                },
                {
                    value: "icon",
                    label: "Icon 图标"
                },
                {
                    value: "button",
                    label: "Button 按钮"
                }
                ]
            }
        ]
    },
    {
        label: '出生日期',
        prop: 'born',
        clearable: true,
        placeholder: "选择日期",
        isTime: 'date'
    },
    {
        label: '工作日期',
        prop: 'working',
        clearable: true,
        placeholder: "选择日期",
        isTime: 'datetimerange'
    }
];

export const tableColumns = [
    {
        prop: 'billID',
        label: '订单号',
        width: 150,
        overflow: true
    },
    {
        prop: 'petID',
        label: '宠物ID',
        width: 150,
        overflow: true
    },
    // {   // 图片预览
    //     prop: 'avatar',
    //     label: '头像',
    //     width: 150,
    //     imgW: 300, // 设置该项表示预览图片
    //     expandFunc: true // 是否有扩展功能，启用表格列插槽
    // },
    {
        prop: 'shopID',
        label: '店铺ID',
        width: 150,
        overflow: true
    },
    {
      prop: 'shopName',
      label: '店铺名',
      width: 150,
      overflow: true
    },
    {
        prop: 'petNum',
        label: '宠物数量',
        width: 150,
        overflow: true
    },
    {
        prop: 'petPrice',
        label: '宠物单价',
        width: 150,
        overflow: true
    },
    {
        prop: 'shopPhone',
        label: '店铺电话',
        width: 150,
        overflow: true
    },
    {
        prop: 'shopAddress',
        label: '店铺地址',
        width: 150,
        overflow: true
    },
    {
        prop: 'purchaseTime',
        label: '订单生成时间',
        width: 100,
        overflow: true
    },
    {
      prop: 'sumPrice',
      label: '订单总价',
      width: 100,
      overflow: true
    },
    {
        prop: 'deliverStatus',
        label: '派送状态',
        width: 150,
        overflow: true,
        expandFunc: true,
        isMultiCell: true,
        render: (scope) => {
          let status = scope.row.deliverStatus;
          if (status === 0) {
            return "待派送";
          } else if (status === 1) {
            return "已派送";
          }
          return "--";
        }
    },
    {
        prop: 'deliverTime',
        label: '派送时间',
        width: 150,
        overflow: true
    },
 /*   {   // 场景： 后端字段是json字符串，需要前端解析其中某个字段
        prop: 'jsonStr',
        label: 'json解析',
        width: 150,
        overflow: true,
        expandFunc: true,
        isMultiCell: true,
        render: (scope) => {
            if (JSON.stringify(scope.row) !== '{}') {
                return JSON.parse(scope.row.jsonStr).json;
            }
            return "--";
        }
    },
    {   // 场景： 后端字段是数字0或1, 前端需要自己将数字转成汉字 比如0 待审核 1 已审核
        prop: 'status',
        label: '状态（0 1）',
        width: 150,
        overflow: true,
        expandFunc: true,
        isMultiCell: true,
        render: (scope) => {
            let status = scope.row.status;
            if( status === 0) {
                return "待审核";
            } else if(status === 1) {
                return "已审核";
            }
            return "--";
        }
    }*/
];

export const localService = {
/**
 * {
 *  page: 1,
 *  psize: 20,
 *  params: {}
 * }
 */
    get(data) {
        // return request.get("http://localhost:3000/list", {_page: data.page, _limit: data.psize}); // 这里是实际发请求的地方
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(billData);
            }, 1000);
        });
    }
};

export const options = {
    canCheck: true, // 是否可选择
    hasIndex: true, // 是否有序号
    checkFixed: 'left', // 选择固定位置
    indexFixed: 'left', // 表序号固定位置
    opW: 150,// 操作栏宽度
    autoRequest: true, // 自动请求
    startUpdate: Date.now()
};

// 以上配置文件可以根据业务需要分布配置在不同的文件里
