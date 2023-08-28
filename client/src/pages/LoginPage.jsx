import { Button, Carousel, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import AuthCarousel from "../components/auth/AuthCarousel";

const Login = () => {
    return (
        <div className="h-screen">
            <div className="flex justify-between h-full">
                <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
                    <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
                    <Form layout="vertical">
                        <Form.Item
                            label="e-mail"
                            name={"email"}
                            rules={[
                                {
                                    required: true,
                                    message: "e-mail field couldn't be empty!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name={"password"}
                            rules={[
                                {
                                    required: true,
                                    message: "Password field couldn't be empty!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item name={"remember"} valuePropName="checked">
                            <div className="flex justify-between items-center">
                                <Checkbox>Remember me</Checkbox>
                                <Link>Forgot Password?</Link>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-full"
                                size="large"
                            >
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="flex justify-center absolute left-0 bottom-10 w-full">
                        Not have an account?&nbsp;
                        <Link to="/register" className="text-blue-600">
                            Register Now!
                        </Link>
                    </div>
                </div>
                <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
                    <div className="w-full h-full flex items-center">
                        <div className="w-full">
                            <Carousel className="!h-full px-6" autoplay>
                                <AuthCarousel
                                    img="/images/responsive.svg"
                                    title="Responsive"
                                    desc="Responsive for all devices"
                                />
                                <AuthCarousel
                                    img="/images/statistic.svg"
                                    title="Statistics"
                                    desc="Wide Statistics"
                                />
                                <AuthCarousel
                                    img="/images/customer.svg"
                                    title="Customer Experience"
                                    desc="Happy Customers"
                                />
                                <AuthCarousel
                                    img="/images/admin.svg"
                                    title="Dashboard"
                                    desc="Easy Management"
                                />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;