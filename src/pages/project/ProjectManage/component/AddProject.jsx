import { Component } from "react";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { history } from 'umi'

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 4, span: 8 },
  };

export default class AddProject extends Component {
    
    render(){
        const onFinish = values => {
            console.log('Success:', values);
        };
        
        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

          
        return (
            <PageHeaderWrapper title="新增项目">
                <Card>
                <Form
                    {...layout}
                    name="addProject"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
                        label="项目编码"
                        name="projectId"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="项目名称"
                        name="projectName"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="备注"
                        name="remark"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button onClick={() => history.push("/project/manage")} type="primary" htmlType="submit">
                            提交
                        </Button>
                        &nbsp;&nbsp;
                        <Button onClick={() => history.push("/project/manage")} type="primary" htmlType="submit">
                            取消
                        </Button>
                    </Form.Item>
                </Form>

                </Card>
            </PageHeaderWrapper>
        )
    }
}