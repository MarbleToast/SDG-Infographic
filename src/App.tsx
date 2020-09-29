import "./App.css"

import React, { useState } from "react"
import ReactMapboxGl, { Feature, GeoJSONLayer, Layer } from "react-mapbox-gl"

import { Box } from "@material-ui/core"
import ParticulateDataMarch19 from "./datasets/MOP02J-20190401-L2V18.0.3.json"

enum ILayers {
	particulatesHeatmap,
}

const App: React.FC<{}> = () => {
	const [layerType, setLayerType] = useState(ILayers.particulatesHeatmap)

	const WorldMap = ReactMapboxGl({
		accessToken:
			"pk.eyJ1IjoibWFyYmxldG9hc3QiLCJhIjoiY2thdGwzbmZvMDJnMTJ5bzlzZ2N2dzRoeiJ9.CSGWtvwdfVBHb6YP0kurOw",
	})

	return (
		<Box>
			<Box>
				<WorldMap
					/*eslint-disable-next-line react/style-prop-object*/
					style="mapbox://styles/mapbox/light-v10"
					containerStyle={{
						height: "100vh",
						width: "100vw",
					}}
					center={[0, 0]}
					zoom={[1.5]}
					onRender={(ev) => {
						if (ev !== undefined) {
						}
					}}
				>
					<GeoJSONLayer
						data={ParticulateDataMarch19}
						circlePaint={{ "circle-color": "#ffaaaa" }}
						circleLayout={{
							visibility:
								layerType === ILayers.particulatesHeatmap ? "visible" : "false",
						}}
					/>
				</WorldMap>
			</Box>
		</Box>
	)
}

export default App
