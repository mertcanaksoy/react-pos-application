import React from "react";
import {
    SearchOutlined,
    HomeOutlined,
    ShoppingOutlined,
    FileDoneOutlined,
    UserOutlined,
    LineChartOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Badge, Input } from 'antd';

const Header = () => {
    return (
        <div className="border-b mb-6">
            <header className="py-4 px-6 flex justify-between items-center gap-10">
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
                <div className="menu-links flex justify-between items-center gap-8 md:static fixed bottom-0
                md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-2">
                    <a href="/" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                        <HomeOutlined className="md:text-2xl text-xl" />
                        <span className="text-xs">Home</span>
                    </a>
                    <Badge count={2} offset={[0, 8]} className="md:flex hidden">
                        <a href="/" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                            <ShoppingOutlined className="md:text-2xl text-xl" />
                            <span className="text-xs">Cart</span>
                        </a>
                    </Badge>
                    <a href="/" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                        <FileDoneOutlined className="md:text-2xl text-xl" />
                        <span className="text-xs">Invoice</span>
                    </a>
                    <a href="/" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                        <UserOutlined className="md:text-2xl text-xl" />
                        <span className="text-xs">Users</span>
                    </a>
                    <a href="/" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                        <LineChartOutlined className="md:text-2xl text-xl" />
                        <span className="text-xs">Statistics</span>
                    </a>
                    <a href="/" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                        <LogoutOutlined className="md:text-2xl text-xl" />
                        <span className="text-xs">Logout</span>
                    </a>
                </div>
                <Badge count={2} offset={[0, 8]} className="md:hidden lg:hidden flex">
                    <a href="/" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                        <ShoppingOutlined className="md:text-2xl text-xl" />
                        <span className="text-xs">Cart</span>
                    </a>
                </Badge>
            </header>
        </div>
    )
}

export default Header