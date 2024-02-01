import { Button, Input, Form, message } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";

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
  const props = {
    name: "file",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
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
      <Form.Item>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
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
