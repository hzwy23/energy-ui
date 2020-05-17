import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Component } from 'react';

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
            <div> no authorization ....</div>
          )
    }
}