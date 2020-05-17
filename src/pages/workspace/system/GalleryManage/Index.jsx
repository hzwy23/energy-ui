import { Table, Button, Avatar, Form, Row, Col, Input, Card } from 'antd';
import { Component } from 'react';
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { history } from 'umi';

const columns = [
  {
    title: '缩略图',
    width: 80,
    dataIndex: 'thumbnail',
    key: 'thumbnail',
    fixed: 'center',
    render: text => (
      <Avatar src={text}></Avatar>
    )
  },
  {
    title: '编号',
    width: 50,
    align: 'center',
    dataIndex: 'index',
    key: 'index',
    fixed: 'left',
  },
  {
    title: '名称',
    dataIndex: 'projectName',
    key: '1',
    width: 180,
  },
  {
    title: '类型',
    dataIndex: 'dataGap',
    key: '2',
    width: 100,
  },
  {
    title: '部门',
    dataIndex: 'dataTotal',
    key: '3',
    width: 150,
  },
  {
    title: 'URL',
    dataIndex: 'dataLimit',
    key: '4',
    width: 150,
  },
  {
    title: '备注',
    dataIndex: 'balance',
    key: '5',
    width: 150,
  },
  {
    title: '操作',
    key: 'operation2',
    fixed: 'right',
    align: 'center',
    width: 190,
    render: () => (
        <div>
            <a onClick={()=>history.push("/project/manage/update")}>编辑</a>&nbsp;｜&nbsp;<a>删除</a>
        </div>
    )
  },
];

const data = [{
  thumbnail:'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  index: '1',
  projectName: '武汉石化',
  dataGap: 10,
  dataTotal: 100,
  dataLimit: 10,
  balance: 10000,
  smsBalance: 100,
  remark: '石油大佬',
  smsAlarm: 100,
  maxDevice: 100,
  maxArgument: 100,
  userName: '超级管理员',
},
{
  thumbnail:'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
  index: '2',
  projectName: '武汉石油',
  dataGap: 11,
  dataTotal: 100,
  dataLimit: 10,
  balance: 10001,
  smsBalance: 100,
  remark: '石油大佬',
  smsAlarm: 100,
  maxDevice: 100,
  maxArgument: 100,
  userName: '超级管理员',
},
{
  thumbnail:'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
  index: '3',
  projectName: '武汉电网',
  dataGap: 10,
  dataTotal: 100,
  dataLimit: 10,
  balance: 10002,
  smsBalance: 100,
  remark: '电网大佬',
  smsAlarm: 100,
  maxDevice: 100,
  maxArgument: 100,
  userName: '超级管理员',
},
{
  thumbnail:'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
  index: '4',
  projectName: '武汉电信',
  dataGap: 12,
  dataTotal: 100,
  dataLimit: 10,
  balance: 10004,
  smsBalance: 100,
  remark: '通信大佬',
  smsAlarm: 100,
  maxDevice: 100,
  maxArgument: 100,
  userName: '超级管理员',
}];

const AdvancedSearchForm = () => {
  const [form] = Form.useForm();

  const getFields = () => {
    return [
      <Col span={8} key={1}>
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
          <Input placeholder="placeholder" />
        </Form.Item>
      </Col>,
      <Col span={8} key={2}>
        <Form.Item
          name='userId'
          label='图片名称'
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
      <Col span={8} key={3}>
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


export default class GalleryManage extends Component {
    render(){
        return (
            <PageHeaderWrapper>
                <AdvancedSearchForm />
                <Card style={{marginLeft: -18, marginRight: -18}}>
                  <Button type="primary" onClick={() => history.push("/project/manage/add")} style={{ marginBottom: 16 }}>
                    新增图片
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