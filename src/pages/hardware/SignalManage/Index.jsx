import { Table, Button, Card, Form, Input, Row, Col } from 'antd';
import { Component } from 'react';
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { history } from 'umi'

const columns = [
  {
    title: '编号',
    width: 120,
    dataIndex: 'signalTypeCd',
    key: 'signalCd',
    fixed: 'left',
  },
  {
    title: '信号类型名称',
    width: 180,
    dataIndex: 'signalTypeName',
    key: 'age',
    fixed: 'left',
  },
  {
    title: '项目',
    dataIndex: 'projectName',
    key: '1',
    width: 180,
  },
  {
    title: '单位',
    dataIndex: 'unit',
    key: '2',
    width: 150,
  },
  {
    title: '修正（k）',
    dataIndex: 'modifyK',
    key: '3',
    width: 150,
  },
  {
    title: '修正（b）',
    dataIndex: 'modifyB',
    key: '4',
    width: 150,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: '5',
    width: 150,
  },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    align: 'center',
    width: 190,
    render: (text, rows, index) => (<a onClick={()=> history.push('/hardware/signal-type/update')}>编辑</a>)
  },
];

const data = [{
  signalTypeCd: "01",
  signalTypeName: "武汉专用	",
  projectName: "武汉石化",
  unit: "ppm",
  modifyK: 1000,
  modifyB: 1000,
  remark: "-",
},{
  signalTypeCd: "01",
  signalTypeName: "武汉专用	",
  projectName: "武汉石化",
  unit: "ppm",
  modifyK: 1000,
  modifyB: 1000,
  remark: "-",
},{
  signalTypeCd: "01",
  signalTypeName: "武汉专用	",
  projectName: "武汉石化",
  unit: "ppm",
  modifyK: 1000,
  modifyB: 1000,
  remark: "-",
},{
  signalTypeCd: "01",
  signalTypeName: "武汉专用	",
  projectName: "武汉石化",
  unit: "ppm",
  modifyK: 1000,
  modifyB: 1000,
  remark: "-",
}];


const AdvancedSearchForm = () => {
  const [form] = Form.useForm();

  const getFields = () => {
    return [
      <Col span={6} key={1}>
        <Form.Item
          name='projectId'
          label='归属项目'
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
          name='signalTypeName'
          label='类型名称'
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

export default class SignalManage extends Component {
    render(){
        return (
            <PageHeaderWrapper title="信号类型">
              <AdvancedSearchForm />
              <Card style={{marginLeft: -18, marginRight: -18}}>
                <Button onClick={()=> history.push('/hardware/signal-type/add')} type="primary" style={{marginBottom: 16}}>
                    新建信号类型
                  </Button>
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