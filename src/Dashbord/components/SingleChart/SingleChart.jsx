import { Button } from "@mui/material";
import React from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SingleChart = ({ chartBoxUser }) => {
  const { color, icon, title, number, dataKey, percentage, chartData } = chartBoxUser || {};
  return (
    <div className="px-2 py-4 text-white">
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <div className="flex ">
            {icon && <img src={icon} alt="" />}
            <h1>{title}</h1>
          </div>
          <div className="flex flex-col items-center">
            <span className="itemValue">{number}</span>
            <Button>view all</Button>
          </div>
        </div>
        <div className="">

          {chartData && (
            <div className=" w-full ">
              <ResponsiveContainer width="100%" height={100}>
                <LineChart

                  data={chartData}
                  // margin={{
                  //   top: 5,
                  //   right: 10,
                  //   left: 20,
                  //   bottom: 5,
                  // }}
                >
                  <XAxis dataKey="name" />
                  {/* <YAxis /> */}
                  <Tooltip  contentStyle={{ background: 'transparent',border: 'none' }}   />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey={dataKey}
                    stroke={color}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
          <div className="text-right mt-0 ">
            <span className="itemValue">{percentage}%</span> <br />
            <span className="itemValue">this month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChart;
