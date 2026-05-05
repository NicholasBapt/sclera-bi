import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Engineering", value: 42 },
  { name: "Sales", value: 35 },
  { name: "Marketing", value: 18 },
  { name: "Human Resources", value: 12 },
  { name: "Finance", value: 15 },
  { name: "Customer Support", value: 28 },
  { name: "Operations", value: 22 },
  { name: "Product", value: 16 },
];

export default function SimpleBarChart() {
  return (
    <div className="w-full h-60 rounded-lg pt-2 **:outline-none" tabIndex={-1}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
            cursor={false}
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

          <Bar dataKey="value" fill="#8ccfe0" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
