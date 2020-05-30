import "../datasets/data.json"

import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"

import { Box } from "@material-ui/core"
import React from "react"

const data = [
	{
		name: "Page A",
		uv: 1000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
]

export default class CustomAreaGraph extends React.Component {
	state = {
		areaKey: "uv",
		update: 0,
	}
	render() {
		return (
			<Box>
				<AreaChart
					width={800}
					height={400}
					data={data}
					onClick={() => {
						this.setState({
							areaKey: this.state.areaKey === "uv" ? "pv" : "uv",
							update: this.state.update + 1,
						})
					}}
					key={this.state.update}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Area
						type="monotone"
						dataKey={this.state.areaKey}
						stroke="#eee"
						fill="#aaa4d8"
					/>
				</AreaChart>
			</Box>
		)
	}
}
