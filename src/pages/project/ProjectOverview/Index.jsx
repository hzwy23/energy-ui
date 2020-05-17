import { Component } from "react";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { Card, Col, Row, Avatar,Form,Input, Button } from 'antd';
import { Link } from "umi";
const { Meta } = Card;



const AdvancedSearchForm = () => {
    const [form] = Form.useForm();
  
    const getFields = () => {
      return [
        <Col span={8} key={1}>
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
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>,
        <Col span={8} key={2}>
          <Form.Item
            name='userId'
            label='归属用户'
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

export default class ProjectOverview extends Component {
    render(){
        return (
            <PageHeaderWrapper title="项目总览">
                <AdvancedSearchForm />
                <Row gutter={16}>
                    <Col span={6}>
                        <Link to="/workspace/monitor/data-monitor-plc1">
                            <Card
                                hoverable
                                cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                                }
                            >
                                <Meta
                                    avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />}
                                    title="武汉石化"
                                    description="湖北省、武汉市，油费"
                                />
                            </Card>
                        </Link>
                    </Col>
                    <Col span={6}>
                        <Link to="/workspace/monitor/data-monitor-plc1">
                            <Card
                                hoverable
                                cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                                }
                            >
                                <Meta
                                avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" />}
                                title="武汉石油"
                                description="湖北省，武汉市，油费"
                                />
                            </Card>
                        </Link>
                    </Col>
                    <Col span={6}>
                        <Link to="/workspace/monitor/data-monitor-plc1">
                            <Card
                                hoverable
                                cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                                }
                            >
                                <Meta
                                avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" />}
                                title="武汉电网"
                                description="湖北省，武安市，电费"
                                />
                            </Card>
                        </Link>
                    </Col>
                    <Col span={6}>
                        <Link to="/workspace/monitor/data-monitor-plc1">
                            <Card
                                hoverable
                                cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                                }
                            >
                                <Meta
                                avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png" />}
                                title="武汉电信"
                                description="湖北省，武安市，话费"
                                />
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </PageHeaderWrapper>
        )
    }
}
