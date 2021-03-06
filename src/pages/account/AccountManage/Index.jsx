import { Table, Button, Card, Form, Row, Col, Input, Select } from 'antd';
import { Component } from 'react';
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { history } from 'umi';

const { Option } = Select
const columns = [
  {
    title: '登录名',
    width: 100,
    dataIndex: 'userId',
    key: 'name',
    fixed: 'left',
  },
  {
    title: '姓名',
    width: 100,
    dataIndex: 'username',
    key: 'age',
    fixed: 'left',
  },
  {
    title: '联系电话',
    dataIndex: 'phone',
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
    title: '权限',
    dataIndex: 'privilegesId',
    key: '3',
    width: 150,
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
    title: '最大项目数量',
    dataIndex: 'maxProject',
    key: '4',
    width: 150,
  },
  {
    title: '默认项目',
    dataIndex: 'defaultProject',
    key: '5',
    width: 150,
  },
  {
    title: '多项目用户',
    dataIndex: 'address',
    key: '6',
    width: 150,
    render: () => (
      <div>
          <a>选择项目</a>
      </div>
    )
  },
  {
    title: '最大用户数量',
    dataIndex: 'maxUser',
    key: '7',
    width: 150,
  },
  { 
    title: '可充值上限', 
    dataIndex: 'rechargeLimit', 
    width: 100,
    key: '8' 
  },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    align: 'center',
    width: 190,
    render: () => (
        <div>
            <a>重置密码</a>&nbsp;｜&nbsp;<a onClick={() => history.push('/account/manage/update')}>编辑</a>&nbsp;｜&nbsp;<a>删除</a>
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
  userId: "admin-dianxin",
  username: "超级管理员",
  phone: "18581530028",
  remark: "最高权限",
  privilegesId: "1",
  maxProject: 100,
  defaultProject: "武汉石化",
  maxUser: 100,
  rechargeLimit: 10000,
},{
  userId: "admin-shihua",
  username: "超级管理员",
  phone: "18581530028",
  remark: "最高权限",
  privilegesId: "1",
  maxProject: 100,
  defaultProject: "武汉石化",
  maxUser: 100,
  rechargeLimit: 10000,
},{
  userId: "admin-shiyou",
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
          label='项目名称'
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
              label='登陆名'
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
          label='用户姓名'
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

export default class AccountManage extends Component {
    render(){
        return (
            <PageHeaderWrapper title="账号管理">
                <AdvancedSearchForm />
                <Card style={{marginLeft: -18, marginRight: -18}}>
                  <Button onClick={() => history.push("/account/manage/add")} type="primary" style={{marginBottom: 16}}> 
                    新建用户
                  </Button>
                  <Table 
                      size="small"
                      columns={columns}
                      dataSource={data} 
                      scroll={{ x: 2300}} 
                  />
                </Card>
            </PageHeaderWrapper>
        )
    }
}