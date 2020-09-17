import React from "react";
import PropTypes from "prop-types";
import { Drawer } from "antd";
import { Form, Input, Button } from "antd";

const AddDrawer = ({ show, handleOnClose, onFinish, onFinishFailed }) => {
  const initialValues = { firstName: "", lastName: "", phoneNumber: null };
  const [form] = Form.useForm();
  return (
    <Drawer
      title="Add Contact"
      visible={show}
      onClose={handleOnClose}
      maskClosable={true}
      width="350"
    >
      <Form
        form={form}
        name="basic"
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input type="tel" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: "20px" }}
          >
            Add
          </Button>
          <Button htmlType="button" onClick={() => form.resetFields()}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

AddDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
  handleOnClose: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
  onFinishFailed: PropTypes.func.isRequired,
};

export default AddDrawer;
