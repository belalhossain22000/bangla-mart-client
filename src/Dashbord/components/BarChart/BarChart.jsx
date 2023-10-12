import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";




const BarChartBox = ({barChartBoxVisit}) => {
    const {title,chartData,dataKey,color}=barChartBoxVisit||{}
  return (
    <div className="text-white pb-2">
      <h1 className="font-semibold text-xl ml-2">{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{fill:"none"}}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
