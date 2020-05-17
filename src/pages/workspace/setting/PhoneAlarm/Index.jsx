import { Component } from "react";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { Form, Button, Input, Card, Row, Col, Table, Modal, Select, Tag } from 'antd';
import {history} from 'umi'


const columns = [
    {
      title: '序号',
      width: 50,
      align: 'center',
      dataIndex: 'index',
      key: 'index',
      fixed: 'left',
      render: (text, rows, index) => (
        index + 1
      )
    },
    {
      title: '部门',
      dataIndex: 'departName',
      key: '1',
    },
    {
      title: '手机号',
      dataIndex: 'phoneNumber',
      key: '2',
    },
    {
      title: '短信提示',
      dataIndex: 'smsNotice',
      align: 'center',
      key: '3',
      render: (text, row, index) => {
        if (text == "1") {
            return <Tag color="green">是</Tag>
        } else {
            return <Tag>否</Tag>
        }
      }
    },
    {
      title: '语音提示',
      dataIndex: 'voiceNotice',
      key: '4',
      align: 'center',
      render: (text, row, index) => {
        if (text == "1") {
            return <Tag color="green">是</Tag>
        } else {
            return <Tag>否</Tag>
        }
      }
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
    departName: '武汉石化',
    phoneNumber: 18581530028,
    smsNotice: 1,
    voiceNotice: 0,
  },{
    departName: '武汉石化',
    phoneNumber: 18581530028,
    smsNotice: 1,
    voiceNotice: 0,
  },{
    departName: '武汉石化',
    phoneNumber: 18581530028,
    smsNotice: 0,
    voiceNotice: 1,
  },{
    departName: '武汉石化',
    phoneNumber: 18581530028,
    smsNotice: 1,
    voiceNotice: 1,
  },];

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};

const tailLayout = {
    wrapperCol: { offset: 4, span: 8 },
};


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
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>,
        <Col span={6} key={2}>
          <Form.Item
            name='userId'
            label='手机号'
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
                  label='提示类型'
                  rules={[
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ]}
                >
                  <Select>
                      <Select.Option value="1">短信提示</Select.Option>
                      <Select.Option value="2">语音提示</Select.Option>
                  </Select>
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
  

export default class PhoneAlarm extends Component {

    render(){
        return (
            <PageHeaderWrapper>
                <AdvancedSearchForm />
                <Card style={{marginLeft: -18, marginRight: -18}}>
                    <Button type="primary" style={{marginBottom: 16}}>
                        新建手机报警
                    </Button>
                    <Table
                        size="small"
                        columns={columns}
                        dataSource={data} 
                    />
                </Card>
                <Modal>
                    <Form
                        {...layout}
                        name="addProject"
                        initialValues={{ remember: true }}
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        >
                        <Form.Item
                            label="账户余额"
                            name="projectId"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="短信余额"
                            name="projectName"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="转入"
                            name="remark"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button onClick={() => history.push("/workspace/setting/sms-recharge")} type="primary" htmlType="submit">
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </PageHeaderWrapper>
        )
    }
}