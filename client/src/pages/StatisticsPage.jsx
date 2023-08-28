import { useEffect, useState } from "react";
import Header from "../components/header/Header.jsx";
import StatisticsCard from "../components/statistics/StatisticsCard.jsx";
import { Area, Pie } from "@ant-design/plots";

const StatisticsPage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch(
            "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
        )
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log("fetch data failed", error);
            });
    };

    const data2 = [
        {
            type: 'Data 1',
            value: 27,
        },
        {
            type: 'Data 2',
            value: 25,
        },
        {
            type: 'Data 3',
            value: 18,
        },
        {
            type: 'Data 4',
            value: 15,
        },
        {
            type: 'Data 5',
            value: 10,
        },
        {
            type: 'Data 6',
            value: 5,
        },
    ];

    const config = {
        data,
        xField: "timePeriod",
        yField: "value",
        xAxis: {
            range: [0, 1],
        },
    };

    const config2 = {
        appendPadding: 10,
        data: data2,
        angleField: "value",
        colorField: "type",
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: "inner",
            offset: "-50%",
            content: "{value}",
            style: {
                textAlign: "center",
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: "element-selected",
            },
            {
                type: "element-active",
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: "pre-wrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                },
                content: "AntV\nG2Plot",
            },
        },
    };

    return (
        <>
            <Header />
            <div className="px-6 md:pb-0 pb-20">
                <h1 className="text-4xl font-bold text-center mb-4">Statistics</h1>
                <div className="statistic-section">
                    <h2 className="text-lg">
                        Welcome {" "}
                        <span className="text-green-700 font-bold text-xl">Admin</span>.
                    </h2>
                    <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">
                        <StatisticsCard
                            title={"Total Customers"}
                            amount={"10"}
                            img={"images/user.png"}
                        />
                        <StatisticsCard
                            title={"Total Earnings"}
                            amount={"660.96 ₺"}
                            img={"images/money.png"}
                        />
                        <StatisticsCard
                            title={"Total Sales"}
                            amount={"6"}
                            img={"images/sale.png"}
                        />
                        <StatisticsCard
                            title={"Total Products"}
                            amount={"28"}
                            img={"images/product.png"}
                        />
                    </div>
                    <div className="flex justify-between gap-10 lg:flex-row flex-col items-center">
                        <div className="lg:w-1/2 lg:h-full h-72">
                            <Area {...config} />
                        </div>
                        <div className="lg:w-1/2 lg:h-full h-72">
                            <Pie {...config2} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default StatisticsPage;