import { Table, Button, Card, Row, Col, Input, Form} from 'antd';
import { Component } from 'react';
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import {history} from 'umi'

const columns = [
  {
    title: '编号',
    width: 100,
    dataIndex: 'deviceTypeCd',
    key: 'name',
    fixed: 'left',
  },
  {
    title: '名称',
    width: 100,
    dataIndex: 'deviceTypeName',
    key: 'age',
    fixed: 'left',
  },
  {
    title: '协议类型',
    dataIndex: 'protocolType',
    key: '1',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: '2',
    width: 150,
  },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    align: 'center',
    width: 190,
    render: () => (
        <div>
            <a onClick={() => history.push("/hardware/device-type-manage/argument")}>配置设备参数</a>&nbsp;｜&nbsp;<a onClick={()=> history.push("/hardware/device-type-manage/update")}>编辑</a>&nbsp;｜&nbsp;<a>删除</a>
        </div>
    )
  },
];

const data = [{
  deviceTypeCd: "01",
  deviceTypeName: "VX1200F1	",
  protocolType: "武汉支付专用(RTU)",
  remark: "-"
},{
  deviceTypeCd: "02",
  deviceTypeName: "VX1200F1	",
  protocolType: "武汉支付专用(PP01)	",
  remark: "-"
},{
  deviceTypeCd: "03",
  deviceTypeName: "VX1200F1	",
  protocolType: "武汉支付专用(PP01)",
  remark: "-"
},{
  deviceTypeCd: "04",
  deviceTypeName: "VX1200F1	",
  protocolType: "武汉支付专用(RTU)",
  remark: "-"
}];


const AdvancedSearchForm = () => {
  const [form] = Form.useForm();

  const getFields = () => {
    return [
      <Col span={6} key={1}>
        <Form.Item
          name='deviceTypeName'
          label='设备名称'
          rules={[
            {
              required: true,
              message: 'Input something!',
            },
          ]}
        >
          <Input placeholder="placeholder" />
        </Form.Item>
      </Col>,
      <Col span={6} key={2}>
        <Form.Item
          name='protocolType'
          label='协议类型'
          rules={[
            {
              required: true,
              message: 'Input something!',
            },
          ]}
        >
          <Input placeholder="placeholder" />
        </Form.Item>
      </Col>,
      <Col span={6} key={3}>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields();
            }}
          >
            重置
          </Button>
      </Col>
    ]
  };

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
    form={form}
    name="advanced_search"
    onFinish={onFinish}
  >
    <Row gutter={24}>{getFields()}</Row>
  </Form>
  );
};

export default class DeviceType extends Component {
    render(){
        return (
            <PageHeaderWrapper title="设备类型管理">
              <AdvancedSearchForm />
              <Card style={{marginLeft: -18, marginRight: -18}}>
                  <Button onClick={() => history.push("/hardware/device-type-manage/add")} type="primary" style={{marginBottom: 16}}>新建设备类型</Button>
                  <Table 
                    size="small"
                    columns={columns}
                    dataSource={data} 
                  />
              </Card>
            </PageHeaderWrapper>
        )
    }
}