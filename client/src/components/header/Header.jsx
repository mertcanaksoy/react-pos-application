import React from "react";
import { Badge, Input } from 'antd';
import { Link } from "react-router-dom";
import {
    SearchOutlined,
    HomeOutlined,
    ShoppingOutlined,
    FileDoneOutlined,
    UserOutlined,
    LineChartOutlined,
    LogoutOutlined
} from '@ant-design/icons';

const Header = () => {
    return (
        <div className="border-b mb-6">
            <header className="py-4 px-6 flex justify-between items-center gap-10 ">
                <div className="logo">
                    <a href="/">
                        <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
                    </a>
                </div>
                <div className="header-search flex-1 flex justify-center">
                    <Input
                        size="large"
                        placeholder="Search"
                        prefix={<SearchOutlined />}
                        className="rounded-full max-w-[800px]"
                    />
                </div>
                <div className="menu-links flex justify-between items-center gap-8 md:static fixed z-50 bottom-0
                md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-2">
                    <Link to="/" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                        <HomeOutlined className="md:text-2xl text-xl" />
                        <span className="text-xs">Home</span>
                    </Link>
                    <Badge count={2} offset={[0, 8]} className="md:flex hidden">
                        <Link to="/cart" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                            <ShoppingOutlined className="md:text-2xl text-xl" />
                            <span className="text-xs">Cart</span>
                        </Link>
                    </Badge>
                    <Link to="/invoices" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                        <FileDoneOutlined className="md:text-2xl text-xl" />
                        <span className="text-xs">Invoices</span>
                    </Link>
                    <Link to="/customers" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                        <UserOutlined className="md:text-2xl text-xl" />
                        <span className="text-xs">Customerts</span>
                    </Link>
                    <Link to="/statistics" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                        <LineChartOutlined className="md:text-2xl text-xl" />
                        <span className="text-xs">Statistics</span>
                    </Link>
                    <Link to="/" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                        <LogoutOutlined className="md:text-2xl text-xl" />
                        <span className="text-xs">Logout</span>
                    </Link>
                </div>
                <Badge count={2} offset={[0, 8]} className="md:hidden lg:hidden flex">
                    <Link to="/" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                        <ShoppingOutlined className="md:text-2xl text-xl" />
                        <span className="text-xs">Cart</span>
                    </Link>
                </Badge>
            </header>
        </div>
    )
}

export default Header