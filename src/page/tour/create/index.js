import { Form, Input, Button, Modal } from "antd";
import { path } from "../../../route";
import Layout from "../../../layout";
import { useState } from "react";
import { TourService } from "../../../services";
import { useHistory } from "react-router-dom";
const CreateTourPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

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

  const onFinish = async (data) => {
    setIsLoading(true);
    try {
      const res = await TourService.createTour(data);
      console.log(res);
      Modal.success({
        content: "สร้างสำเร็จ",
        onOk: () => {
          history.push(path.home);
        },
      });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <Layout selectedKey={path.createtour}>
      <Form
        {...gridForm}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
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
    </Layout>
  );
};
export default CreateTourPage;
