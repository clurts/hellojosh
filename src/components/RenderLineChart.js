/** @jsx jsx */
import {useContext} from "react"
import { css, jsx } from "@emotion/core";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import {UserContext} from "../contexts/UserContext"

/*const data = [
    { day: "mon", hours: 0 },
    { day: "tue", hours: 1.5 },
    { day: "wed", hours: 2.5 },
    { day: "thu", hours: 1 },
    { day: "fri", hours: 4 },
    { day: "sat", hours: 3 },
    { day: "sun", hours: 2 },
];*/


const CustomizedLabel = ({ x, y, value }) => {

    
    return (

        <g>
        <foreignObject x={x-32} y={y-50} width={80} height={100}>
          <div
            css={css`
                display: block;
                font-family:"baloo bhai 2", cursive;
                font-weight: bold;
                font-size: 20px;
                background-color:white;
                width:40px;
                text-align: center;
                padding: 4px 12px;
                border-radius: 12px;
                box-shadow: 4px 4px 2px 0px rgba(0,0,0,0.4);
                overflow: visible;
            `}
          
          >{value}h</div>
        </foreignObject>
      </g>


    );
};

const RenderLineChart = () => {
    const { user } = useContext(UserContext)

    console.log("From renderlinchart: ", user)
    return user && (
        <ResponsiveContainer width="95%" height={400}>
        <LineChart
            data={user.stats}
            margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 10,
            }}
        >
            <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
            />
            <YAxis
                type="number"
                ticks={[0, 1, 2, 3, 4, 5]}
                tickCount={6}
                axisLine={false}
                tickLine={false}
            />
            <Tooltip />
            <CartesianGrid vertical={false} />
            <Line
                type="monotone"
                strokeWidth="2"
                dataKey="hrs"
                stroke="black"
                dot={{ fill: "black" }}
                activeDot={{ r: 8 }}
                label={ <CustomizedLabel x={0} y={0} value={user.stats.hrs} position="top" />}
            />
        </LineChart>
        </ResponsiveContainer>
    );
};

export default RenderLineChart;
