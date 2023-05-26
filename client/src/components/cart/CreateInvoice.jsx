import { Form, Input, Modal, Select, Button, Card } from "antd";

const CreateInvoice = ({ isModalOpen, setIsModalOpen }) => {
    const onFinish = (values) =>{
        console.log("Received values of form: ", values);
    }
    return (
        <Modal
            title="Create Invoice"
            open={isModalOpen}
            footer={false}
            onCancel={() => setIsModalOpen(false)}
        >
            <Form layout={"vertical"} onFinish={onFinish}>
                <Form.Item label="Full Name" rules={[{ required: true, message: "Name is required" }]} name={"fullName"}>
                    <Input placeholder="Please Fill your Full Name" />
                </Form.Item>
                <Form.Item label="Phone Number" rules={[{ required: true, message: "Phone Number is required" }]} name={"phoneNumber"}>
                    <Input placeholder="Please Fill your Phone Number" maxLength={11} />
                </Form.Item>
                <Form.Item label="Payment Type" rules={[{ required: true, message: "Payment Type is required" }]} name={"paymentType"}>
                    <Select placeholder="Please choose payment type">
                        <Select.Option value="Cash"></Select.Option>
                        <Select.Option value="Credit Card"></Select.Option>
                    </Select>
                </Form.Item>
                <Card>
                    <div className="flex justify-between">
                        <span>Sub Total</span>
                        <span>549.00₺</span>
                    </div>
                    <div className="flex justify-between my-2">
                        <span>Total Tax %8</span>
                        <span className="text-red-600">+43.92₺</span>
                    </div>
                    <div className="flex justify-between">
                        <b>Total</b>
                        <b>592.92₺</b>
                    </div>
                    <div className="flex justify-end">
                        <Button className="mt-4" type="primary" size="large" onClick={() => setIsModalOpen(true)} htmlType="submit" >
                            Order
                        </Button>
                    </div>
                </Card>
            </Form>
        </Modal>
    );
};

export default CreateInvoice;