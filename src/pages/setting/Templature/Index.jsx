import { Form, Input, Button, Row, Col, Card } from 'antd';

import { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const onFinish = values => {
  console.log('Received values of form: ', values);
};

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 8 },
};

export default class Templature extends Component {
    render(){
        return (
          <PageHeaderWrapper title="温度修正">
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
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="1"
                  name="password"
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="2"
                  name="password"
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="3"
                  name="password"
                >
                  <Input />
                </Form.Item>


                <Form.Item
                  label="4"
                  name="password"
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="5"
                  name="password"
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="6"
                  name="password"
                >
                  <Input />
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