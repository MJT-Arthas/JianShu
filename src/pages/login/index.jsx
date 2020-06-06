import React, { Component } from "react";
import { connect } from "react-redux";
import { LoginWrapper } from "./style";
import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import { actionCreators } from "./store";
import {Redirect} from 'react-router-dom'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Login extends Component {
  render() {
    const Demo = () => {
      const onFinish = (value) => {
        this.props.login(value);
      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };

      return (
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="账号"
            name="userName"
            rules={[
              {
                required: true,
                message: "Please input your 账号!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your 密码!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      );
    };
    const {loginState} = this.props
    if(!loginState)
    {return (
      <LoginWrapper>
        <Demo />
      </LoginWrapper>
    );}else{
      return <Redirect to="/" />
    }
  }
}

const mapState = (state)=>({
  loginState:state.getIn(['login','loginState'])
})

const mapStateDispatchProps = (dispatch) => {
  return {
    login(value) {
      const action = actionCreators.LoginList(value.userName,value.Password);
      dispatch(action);
    },
  };
};

export default connect(mapState, mapStateDispatchProps)(Login);
