import { Form, Input, Button, Row, Col, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const onFinish = values => {
  console.log('Received values of form: ', values);
};

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 8 },
};

export default class Password extends Component {
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
                  label="当前密码"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!',
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="当前密码" />
                </Form.Item>
                <Form.Item
                  label="当前密码"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="新密码"
                  />
                </Form.Item>

                <Form.Item
                  label="当前密码"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="确认密码"
                  />
                </Form.Item>

                <Row>
                    <Col offset={3}>
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        提交
                      </Button>
                    </Col>
                </Row>
              </Form>
              </Card>
            </PageHeaderWrapper>
          )
    }
}