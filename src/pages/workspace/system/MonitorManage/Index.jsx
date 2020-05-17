import { Table, Button, Card, Form, Row, Col, Input, Select } from 'antd';
import { Component } from 'react';
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { history } from 'umi';

const { Option } = Select
const columns = [
  {
    title: '序号',
    width: 50,
    dataIndex: 'userId',
    key: 'name',
    fixed: 'left',
    render: (text, rows, index) => (index + 1)
  },
  {
    title: '编号',
    width: 100,
    dataIndex: 'userId',
    key: 'name',
    fixed: 'left',
  },
  {
    title: '名称',
    width: 100,
    dataIndex: 'username',
    key: 'age',
    fixed: 'left',
  },
  {
    title: '部门',
    dataIndex: 'privilegesId',
    key: '1',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'privilegesId',
    key: '3',
    width: 120,
    render: text => {
      switch(text) {
        case "1":
          return "管理";
        case "2":
          return "监控";
        case "3":
          return "运维";
        default: 
          return "-";
      }
    }
  },
  {
    title: '流程图',
    dataIndex: 'address',
    key: '6',
    width: 150,
    render: () => (
      <div>
          <a>设置PC流程图</a>
      </div>
    )
  },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    align: 'center',
    width: 190,
    render: () => (
        <div>
            <a onClick={() => history.push('/account/manage/update')}>编辑</a>&nbsp;｜&nbsp;<a>删除</a>
        </div>
    )
  },
];

const data = [{
  userId: "admin",
  username: "超级管理员",
  phone: "18581530028",
  remark: "最高权限",
  privilegesId: "1",
  maxProject: 100,
  defaultProject: "武汉石化",
  maxUser: 100,
  rechargeLimit: 10000,
},{
  userId: "dianxin",
  username: "超级管理员",
  phone: "18581530028",
  remark: "最高权限",
  privilegesId: "1",
  maxProject: 100,
  defaultProject: "武汉石化",
  maxUser: 100,
  rechargeLimit: 10000,
},{
  userId: "shihua",
  username: "超级管理员",
  phone: "18581530028",
  remark: "最高权限",
  privilegesId: "1",
  maxProject: 100,
  defaultProject: "武汉石化",
  maxUser: 100,
  rechargeLimit: 10000,
},{
  userId: "shiyou",
  username: "超级管理员",
  phone: "18581530028",
  remark: "最高权限",
  privilegesId: "1",
  maxProject: 100,
  defaultProject: "武汉石化",
  maxUser: 100,
  rechargeLimit: 10000,
}];

const AdvancedSearchForm = () => {
  const [form] = Form.useForm();

  const getFields = () => {
    return [
      <Col span={6} key={1}>
        <Form.Item
          name='projectId'
          label='部门'
          rules={[
            {
              required: true,
              message: 'Input something!',
            },
          ]}
        >
          <Select placeholder="placeholder" >
            <Option value="shihua">武汉石化</Option>
            <Option value="shiyou">武汉石油</Option>
            <Option value="dianxin">武汉电信</Option>
            <Option value="dianwang">武汉电网</Option>
          </Select>
        </Form.Item>
      </Col>,
            <Col span={6} key={2}>
            <Form.Item
              name='userId'
              label='编号'
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
          name='username'
          label='名称'
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

export default class MonitorManage extends Component {
    render(){
        return (
            <PageHeaderWrapper title="监控点管理">
                <AdvancedSearchForm />
                <Card style={{marginLeft: -18, marginRight: -18}}>
                  <Button onClick={() => history.push("/account/manage/add")} type="primary" style={{marginBottom: 16}}> 
                    新建监控点
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