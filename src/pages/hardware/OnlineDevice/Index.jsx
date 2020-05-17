import { Table, Row, Col, Input, Form, Card, Button } from 'antd';
import { Component } from 'react';
import { PageHeaderWrapper } from "@ant-design/pro-layout";

const columns = [
  {
    title: '编号',
    width: 50,
    align: "center",
    dataIndex: 'index',
    key: 'index',
    fixed: 'left',
    render: (text, row, index) => {
      return index + 1
    }
  },
  {
    title: '设备号',
    width: 120,
    dataIndex: 'deviceId',
    key: 'deviceId',
    fixed: 'left',
  },
  {
    title: '设备名称',
    width: 150,
    dataIndex: 'deviceName',
    key: 'deviceName',
    fixed: 'left',
  },
  {
    title: '地址',
    width: 100,
    dataIndex: 'ip',
    key: 'ip',
    fixed: 'left',
  },
  {
    title: '端口',
    dataIndex: 'port',
    key: 'port',
    width: 120,
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
    width: 150,
  },
  {
    title: '字节数',
    dataIndex: 'byteLength',
    key: 'byteLength',
    width: 100,
  },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    align: 'center',
    width: 190,
    render: () => (
        <div>
            <a>下线</a>
        </div>
    )
  },
];

const data = [{
  ip: "192.168.1.100",
  port:7200,
  updateTime: "2020-05-01 10:10:10",
  byteLength: 100,
  deviceId: "1",
  deviceName: "测试设备1",
},{
  ip: "192.168.1.101",
  port:7200,
  updateTime: "2020-05-01 10:10:10",
  byteLength: 100,
  deviceId: "2",
  deviceName: "测试设备2",
},{
  ip: "192.168.1.102",
  port:7200,
  updateTime: "2020-05-01 10:10:10",
  byteLength: 100,
  deviceId: "3",
  deviceName: "测试设备3",
},{
  ip: "192.168.1.103",
  port:7200,
  updateTime: "2020-05-01 10:10:10",
  byteLength: 100,
  deviceId: "4",
  deviceName: "测试设备4",
},{
  ip: "192.168.1.104",
  port:7200,
  updateTime: "2020-05-01 10:10:10",
  byteLength: 100,
  deviceId: "5",
  deviceName: "测试设备5",
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

export default class OnlineDevice extends Component {
    render(){
        return (
            <PageHeaderWrapper title="在线设备">
              <AdvancedSearchForm />
              <Card style={{marginLeft: -18, marginRight: -18}}>
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