import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", payrollCost: 128000 },
  { name: "Feb", payrollCost: 132500 },
  { name: "Mar", payrollCost: 136200 },
  { name: "Apr", payrollCost: 141800 },
  { name: "May", payrollCost: 145300 },
  { name: "Jun", payrollCost: 149700 },
  { name: "Jul", payrollCost: 158400 },
  { name: "Aug", payrollCost: 162900 },
  { name: "Sep", payrollCost: 166500 },
  { name: "Oct", payrollCost: 171200 },
  { name: "Nov", payrollCost: 176800 },
  { name: "Dec", payrollCost: 185600 },
];

export default function SimpleLineChart() {
  return (
    <div className="w-full h-60 rounded-lg pt-2 **:outline-none">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 8, right: 18, left: -8, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#fff" }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#fff" }}
          />

          <Tooltip
            cursor={{
              stroke: "#307b90",
              strokeWidth: 1,
            }}
            contentStyle={{
              backgroundColor: "#1f1f1f",
              border: "1px solid #307b90",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "12px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
            }}
            labelStyle={{
              color: "#fff",
              fontWeight: 600,
            }}
            itemStyle={{
              color: "#8ccfe0",
            }}
          />

          <Line
            type="monotone"
            dataKey="payrollCost"
            stroke="#8ccfe0"
            strokeWidth={2}
            dot={{
              r: 4,
              fill: "#1f1f1f",
              stroke: "#8ccfe0",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 6,
              fill: "#8ccfe0",
              stroke: "#1f1f1f",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
