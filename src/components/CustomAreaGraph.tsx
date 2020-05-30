import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"

import { Box } from "@material-ui/core"
import React from "react"

export default class CustomAreaGraph extends React.Component {
	render() {
		return (
			<Box>
				<AreaChart width={800} height={400}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Area type="monotone" dataKey="" stroke="#eee" fill="#aaa4d8" />
				</AreaChart>
			</Box>
		)
	}
}
