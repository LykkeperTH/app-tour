import { Button, Input, Form } from "antd";

const TourForm = ({ isLoading, tour, onFinish }) => {
  const [form] = Form.useForm();
  const gridForm = {
    labelCol: {
      span: 12,
    },
    wrapperCol: {
      span: 24,
    },
  };

  const validateMessages = {
    required: "กรุณากรอกข้อมูล",
  };
  return (
    <Form
      {...gridForm}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      initialValues={tour}
      form={form}
    >
      <Form.Item
        name="name"
        label="ชื่อสถานที่/ร้านค้า"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="title"
        label="หัวข้อ"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="address"
        label="ที่อยู่/ที่ตั้ง"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lat"
        label="ละติจูด"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lng"
        label="ลองติจูด"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="รายละเอียด"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...gridForm.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          ตกลง
        </Button>
      </Form.Item>
    </Form>
  );
};
export default TourForm;
