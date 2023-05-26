import { Button } from "antd";
import { ClearOutlined, ShoppingCartOutlined, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

const CartTotals = () => {
    return (
        <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
            <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
                Products in Cart
            </h2>
            <ul className="cart-items px-2 flex flex-col pt-2 overflow-y-auto">
                <li className="cart-item flex justify-between">
                    <div className="flex items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="" className="w-16 h-16" />
                        <div className="flex flex-col ml-2">
                            <b>Product Name</b>
                            <span>Price x Count</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-1">
                    <Button type="primary" size="small" className="w-full flex items-center justify-center !rounded-full" icon={<MinusCircleOutlined />}></Button>
                    <span className="font-bold">1</span>
                    <Button type="primary" size="small" className="w-full flex items-center justify-center !rounded-full" icon={<PlusCircleOutlined />}></Button>

                    </div>
                </li>
                
            </ul>
            <div className="cart-totals mt-auto">
                <div className="border-t border-b">
                    <div className="flex justify-between p-2">
                        <b>Subtotal</b>
                        <span>99₺</span>
                    </div>
                    <div className="flex justify-between p-2">
                        <b>Tax %8</b>
                        <span className="text-red-700">+7.92₺</span>
                    </div>
                </div>
                <div className="border-b mt-4">
                    <div className="flex justify-between p-2">
                        <b className="text-xl text-green-500">Total</b>
                        <span className="text-xl">99₺</span>
                    </div>
                </div>
                <div className="py-4 px-2">
                    <Button type="primary" size="large" className="w-full mt-2 flex items-center justify-center" icon={<ShoppingCartOutlined />} >
                        Order
                    </Button>
                    <Button type="primary" size="large" className="w-full mt-2 flex items-center justify-center" icon={<ClearOutlined />} danger>
                        Clear
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CartTotals;