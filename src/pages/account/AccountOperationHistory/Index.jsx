import { Table, Form, Row, Col, Input, Button, Card } from 'antd';
import { Component } from 'react';
import { PageHeaderWrapper } from "@ant-design/pro-layout";


const columns = [
  {
    title: '序号',
    width: 50,
    align: "center",
    key: 'index',
    fixed: 'left',
    render: (text, row, index) => {
      return index + 1
    }
  },
  {
    title: '登录时间',
    width: 230,
    dataIndex: 'loginHistory',
    key: 'loginHistory',
    fixed: 'left',
  },
  {
    title: '操作用户',
    width: 150,
    dataIndex: 'userId',
    key: 'userId',
    fixed: 'left',
  },
  {
    title: '操作用户姓名',
    width: 150,
    dataIndex: 'username',
    key: 'username',
    fixed: 'left',
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
  },
];

const data = [{
  loginHistory: "2020-05-01 10:10:10",
  userId: "admin",
  username: "超级管理员",
  remark: "登陆成功",
},{
  loginHistory: "2020-05-01 10:10:10",
  userId: "admin",
  username: "超级管理员",
  remark: "登陆成功",
},{
  loginHistory: "2020-05-01 10:10:10",
  userId: "admin",
  username: "超级管理员",
  remark: "登陆成功",
},{
  loginHistory: "2020-05-01 10:10:10",
  userId: "admin",
  username: "超级管理员",
  remark: "登陆成功",
},{
  loginHistory: "2020-05-01 10:10:10",
  userId: "admin",
  username: "超级管理员",
  remark: "登陆成功",
},{
  loginHistory: "2020-05-01 10:10:10",
  userId: "admin",
  username: "超级管理员",
  remark: "登陆成功",
}];


const AdvancedSearchForm = () => {
  const [form] = Form.useForm();

  const getFields = () => {
    return [
      <Col span={6} key={1}>
        <Form.Item
          name='startTime'
          label='开始时间'
          rules={[
            {
              required: true,
              message: 'Input something!',
            },
          ]}
        >
          <Input placeholder="start time"/>
        </Form.Item>
      </Col>,
      <Col span={6} key={2}>
        <Form.Item
            name='endTime'
            label='结束时间'
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
        >
            <Input placeholder="end time" />
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


export default class AccountLoginHistory extends Component {
    render(){
        return (
            <PageHeaderWrapper title="登陆记录">
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