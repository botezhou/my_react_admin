import React from 'react';
import '../../styles/login.less'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class LoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.history.push('/app/index');
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login_bg">
                <div className="login_box">
                
                    <Form onSubmit={this.handleSubmit} className="login_form">
                        <h1 className="login_title">用户登录</h1>
                        <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>记住密码</Checkbox>)}
                        
                        </Form.Item>
                        <Form.Item className="login_submit">
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                点击登录
                            </Button>
                        </Form.Item>
                       
                    </Form>
                </div>
            </div>
        );
    }
}

const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);
export default WrappedLoginForm;
