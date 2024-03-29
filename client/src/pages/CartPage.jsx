import Header from "../components/header/Header.jsx";
import { Button, Card, Table } from "antd";
import { useState } from "react";
import CreateInvoice from "../components/cart/CreateInvoice.jsx";

const CartPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const dataSource = [
        {
            key: "1",
            name: "Mike",
            age: 32,
            address: "10 Downing Street",
        },
        {
            key: "2",
            name: "John",
            age: 42,
            address: "10 Downing Street",
        },
    ];

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
    ];

    console.log(isModalOpen);

    return (
        <>
            <Header />
            <div className="px-6">
            <h1 className="text-4xl font-bold text-center mb-4">Cart</h1>
                <Table dataSource={dataSource} columns={columns} bordered pagination={false} />
                <div className="cart-total flex justify-end mt-4">
                    <Card className="w-72">
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
                        <Button className="mt-4 w-full" type="primary" size="large" onClick={() => setIsModalOpen(true)} >
                            Order
                        </Button>
                    </Card>
                </div>
            </div>
            <CreateInvoice isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    );
};

export default CartPage