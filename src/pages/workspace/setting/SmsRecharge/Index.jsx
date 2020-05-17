import { Component } from "react";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { Form, Button, Input, Card } from 'antd';
import {history} from 'umi'

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};

const tailLayout = {
    wrapperCol: { offset: 4, span: 8 },
};

export default class SmsRecharge extends Component {

    render(){
        return (
            <PageHeaderWrapper>
                <Card>
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
                </Card>
            </PageHeaderWrapper>
        )
    }
}