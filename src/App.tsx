import "./App.css"

import React, { useState } from "react"
import ReactMapboxGl, { Feature, Layer } from "react-mapbox-gl"

import { Box } from "@material-ui/core"
import ParticulateDataMarch19 from "./datasets/MOP02J-20190401-L2V18.0.3.json"

const App: React.FC<{}> = () => {
	const [layerType, setLayerType] = useState("particulatesHeatmap")

	const WorldMap = ReactMapboxGl({
		accessToken:
			"pk.eyJ1IjoibWFyYmxldG9hc3QiLCJhIjoiY2thdGwzbmZvMDJnMTJ5bzlzZ2N2dzRoeiJ9.CSGWtvwdfVBHb6YP0kurOw",
	})

	const layerPaint = {
		"heatmap-weight": {
			property: "COTotalColumn",
			type: "exponential",
			stops: [
				[0, 0],
				[5, 2],
			],
		},

		"heatmap-intensity": {
			stops: [
				[0, 0],
				[5, 1.2],
			],
		},
		"heatmap-color": [
			"interpolate",
			["linear"],
			["heatmap-density"],
			0,
			"rgba(33,102,172,0)",
			0.25,
			"rgb(103,169,207)",
			0.5,
			"rgb(209,229,240)",
			0.8,
			"rgb(253,219,199)",
			1,
			"rgb(239,138,98)",
			2,
			"rgb(178,24,43)",
		],
		// Adjust the heatmap radius by zoom level
		"heatmap-radius": {
			stops: [
				[0, 1],
				[5, 50],
			],
		},
	}

	return (
		<Box>
			<WorldMap
				/*eslint-disable-next-line react/style-prop-object*/
				style="mapbox://styles/mapbox/streets-v9"
				containerStyle={{
					height: "100vh",
					width: "100vw",
				}}
			>
				<Layer layerPaint={layerPaint}>
					{(ParticulateDataMarch19 as any).features.map(
						(el: any, index: number) => (
							<Feature key={index} coordinates={el.latlng} properties={el} />
						)
					)}
				</Layer>
			</WorldMap>
		</Box>
	)
}

export default App
