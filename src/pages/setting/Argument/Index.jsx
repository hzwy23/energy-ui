import { Form, Input, Button, Row, Col, Card } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const { TextArea } = Input;

const onFinish = values => {
  console.log('Received values of form: ', values);
};

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};

export default class Argument extends Component {
    render(){
        return (
              <PageHeaderWrapper>
                <Card>
                <Form
                {...layout}
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  label="设备号"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!',
                    },
                  ]}
                >
                  <Input.Search enterButton="提取参数"  placeholder="当前密码" />
                </Form.Item>
                <Form.Item
                  label="参数"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ]}
                >
                  <TextArea
                    rows={4}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="确认密码"
                  />
                </Form.Item>

                <Row>
                    <Col offset={4}>
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        提交更新
                      </Button>
                    </Col>
                </Row>
              </Form>
                </Card>
              </PageHeaderWrapper>
          )
    }
}