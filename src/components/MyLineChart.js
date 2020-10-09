import React from "react";
import { LineChart } from "react-easy-chart";

const MyLineChart = () => {
    return (
        <LineChart
            style={{
                ".line": {
                    strokeWidth: "2px",
                },
                "g circle.data-point": {
                    fill: "black",
                },
                ".axis": {
                    fontSize: "13px",
                },
                ".y.axis .domain": {
                    strokeWidth: "0",
                },
                ".x.axis .domain": {
                    strokeWidth: "0",
                },
            }}
            axes
            dataPoints
            grid
            verticalGrid
            yDomainRange={[0, 5]}
            yTicks={5}
            xType={"text"}
            lineColors={["black"]}
            interpolate={"cardinal"}
            width={450}
            height={270}
            data={[
                [
                    { x: "mon", y: 0 },
                    { x: "tue", y: 1.5 },
                    { x: "wed", y: 2.5 },
                    { x: "thu", y: 1 },
                    { x: "fri", y: 4 },
                    { x: "sat", y: 3 },
                    { x: "sun", y: 2 },
                ],
            ]}
        />
    );
};

export default MyLineChart;
