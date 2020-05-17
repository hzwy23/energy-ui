import { Table, Button, Card, Form, Row, Col, Input, Select } from 'antd';
import { Component } from 'react';
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { history } from 'umi';

const { Option } = Select
const columns = [
  {
    title: '序号',
    width: 100,
    dataIndex: 'userId',
    key: 'name',
    fixed: 'left',
  },
  {
    title: '部门编码',
    width: 100,
    dataIndex: 'username',
    key: 'age',
    fixed: 'left',
  },
  {
    title: '部门名称',
    dataIndex: 'phone',
    key: '1',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'privilegesId',
    key: '1',
    width: 180,
  },
  {
    title: '经纬度',
    dataIndex: 'privilegesId',
    key: '3',
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

export default class DepartManage extends Component {
    render(){
        return (
            <PageHeaderWrapper title="部门管理">
                <AdvancedSearchForm />
                <Card style={{marginLeft: -18, marginRight: -18}}>
                  <Button onClick={() => history.push("/account/manage/add")} type="primary" style={{marginBottom: 16}}> 
                    新建用户
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