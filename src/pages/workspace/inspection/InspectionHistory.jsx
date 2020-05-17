import { Component } from "react";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { Table, Form, Row, Col, Input, Button, Card } from 'antd';


const columns = [
    {
      title: '序号',
      width: 50,
      align: 'center',
      dataIndex: 'index',
      key: 'index',
      fixed: 'left',
      render: (text, rows, index) => (index + 1)
    },
    {
      title: '巡检时间',
      dataIndex: '巡检时间',
      key: '1',
      width: 180,
    },
    {
      title: '上报数据',
      dataIndex: 'dataGap',
      key: '2',
      width: 100,
    },
    {
      title: '巡检设备/巡检厂家',
      dataIndex: 'dataTotal',
      key: '3',
      width: 150,
    },
    {
      title: '巡检人员姓名',
      dataIndex: 'dataLimit',
      key: '4',
      width: 150,
    },
  ];
  
  const data = [{
    logo:'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
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
    logo:'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
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
    logo:'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
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
    logo:'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
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

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const AdvancedSearchForm = () => {
    const [form] = Form.useForm();
  
    const getFields = () => {
      return [
        <Col span={6} key={1}>
          <Form.Item
            name='projectId'
            label='用户/设备'
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
            name='userId'
            label='巡检人员'
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
          name='userId'
          label='日期'
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
        {...layout}
        form={form}
        name="advanced_search"
        onFinish={onFinish}
        >
      <Row gutter={24}>{getFields()}</Row>
    </Form>
    );
  };

export default class InspectionHistory extends Component {
    render(){
        return (
            <PageHeaderWrapper>
                <AdvancedSearchForm />
                <Card style={{marginLeft:-18, marginRight:-18}}>
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