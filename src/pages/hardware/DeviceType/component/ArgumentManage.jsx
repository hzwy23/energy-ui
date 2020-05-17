import { Table, Button, Card, Row, Col, Input, Form, Modal } from 'antd';
import { Component } from 'react';
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import {history} from 'umi'

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

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

export default class ArgumentManage extends Component {

    columns = [
        {
          title: '编号',
          width: 100,
          dataIndex: 'deviceTypeCd',
          key: 'name',
          fixed: 'left',
        },
        {
          title: '参数名称',
          width: 100,
          dataIndex: 'deviceTypeName',
          key: 'age',
          fixed: 'left',
        },
        {
          title: '起始字节',
          dataIndex: 'protocolType',
          key: '1',
          width: 180,
        },
        {
          title: '字节数量',
          dataIndex: 'remark',
          key: '2',
          width: 150,
        },
        {
          title: '信号类型',
          dataIndex: 'remark',
          key: '2',
          width: 150,
        },
        {
          title: '解析类型',
          dataIndex: 'remark',
          key: '2',
          width: 150,
        },
        {
          title: '排列顺序',
          dataIndex: 'remark',
          key: '2',
          width: 150,
        },
        {
          title: '读写配置',
          dataIndex: 'remark',
          key: '2',
          align: 'center',
          width: 100,
          render: () => (
            <Button type="link" onClick={this.showModalRW}>
                设置
            </Button>
          )
        },
        {
          title: '显示设置',
          dataIndex: 'remark',
          align: 'center',
          key: '2',
          width: 100,
          render: () => (
              <Button type="link" onClick={this.showModalS}>
                  设置
              </Button>
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
                  <a onClick={()=> history.push("/hardware/device-type-manage/argument/update")}>编辑</a>&nbsp;｜&nbsp;<a>删除</a>
              </div>
          )
        },
      ];

    state = { 
        visibleS: false,
        visibleRW: false,
    };

    showModalRW = () => {
        this.setState({
            visibleRW: true,
        });
    };

    showModalS = () => {
        this.setState({
            visibleS: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visibleRW: false,
            visibleS: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visibleRW: false,
            visibleS: false,
        });
    };
    
    render(){

        return (
            <PageHeaderWrapper title="参数配置管理">
              <AdvancedSearchForm />
              <Card style={{marginLeft: -18, marginRight: -18}}>
                  <Button onClick={() => history.push("/hardware/device-type-manage/argument/add")} type="primary" style={{marginBottom: 16}}>新增参数</Button>
                  <Table 
                    size="small"
                    columns={this.columns}
                    dataSource={data} 
                  />
              </Card>
              <Modal
                    title="设备参数读写配置"
                    visible={this.state.visibleRW}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                <Form
                    {...layout}
                    name="addProject"
                    initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
                        label="序号"
                        name="projectId"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="是否开关量"
                        name="projectName"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="是否显示"
                        name="remark"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="别名"
                        name="remark"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
              </Modal>

              <Modal
                    title="设备参数显示设置"
                    visible={this.state.visibleS}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                <Form
                    {...layout}
                    name="addProject"
                    initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
                        label="自动添加"
                        name="projectId"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="允许写入"
                        name="projectName"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="读取功能码"
                        name="remark"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="写入功能码"
                        name="remark"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>
                    
                    <Form.Item
                        label="读取批次"
                        name="remark"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="参数类别"
                        name="remark"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
              </Modal>
            </PageHeaderWrapper>
        )
    }
}