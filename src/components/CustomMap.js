import React from "react";
import Map from "react-map-gl";
import DeckGL, { ContourLayer } from "deck.gl/typed";
import { Container, useBreakpointValue, Heading, Box, useColorModeValue} from "@chakra-ui/react";
import 'mapbox-gl/dist/mapbox-gl.css';
import exampleData from "../utils/exampleData";

const contourLight = [
    {threshold: [0.1, 5000], color: [56, 173, 171]},
    {threshold: [5000, 10000], color: [82, 199, 196]},
    {threshold: [10000, 20000], color: [120, 211, 209]},
    {threshold: [20000, 200000], color: [159, 224, 222]},
]

export default function CustomMap() {
    const customMaxWidth = useBreakpointValue({
        xl: "container.lg",
        lg: "4xl",
        md: "2xl",
    });

    const customPadding = useBreakpointValue({
        xl: 24,
        lg: 20,
        md: 12,
        base: 6,
    });

    const lightOrUltraDark = useColorModeValue("gray.200", "gray.900");
    const LightOrDarkMap = useColorModeValue("mapbox://styles/dedox-tech/cl7bh06jo004514p9f0qmtthz", "mapbox://styles/dedox-tech/cl7bgqtak003n14l7fcpvfk10");

    const layers = [
        new ContourLayer({
            id: "contour-layer",
            data: exampleData,
            getPosition: (data) => [data.longitude, data.latitude],
            getWeight: (data) => data.vaccines,
            cellSize: 50000,
            contours: contourLight,
            pickable: true
        }),
    ];

    const customToolTip = (info) => {
        if(!info.object) {
            return null;
        }

        let smallThreshold = info.object.contour.threshold[0];
        const bigThreshold = info.object.contour.threshold[1];

        if (Number(smallThreshold) === 0.1) {
            smallThreshold = 0
        }

        return `Number of people vaccinated: ${smallThreshold} - ${bigThreshold}`;
    }

    return (
        <Container maxWidth={customMaxWidth} py={customPadding} centerContent>
            <Heading as="h1" mb={8}>
                Meet our beautiful map!
            </Heading>
            <Box position="relative" height={500} width={customMaxWidth}>
                <DeckGL
                    initialViewState={{
                        longitude: -82.5,
                        latitude: 28.4,
                        zoom: 4,
                    }}
                    layers={layers}
                    controller
                    style={{borderColor: lightOrUltraDark, borderStyle: "solid", borderWidth: "1px"}}
                    getTooltip = {customToolTip}
                >
                    <Map
                        mapboxAccessToken="pk.eyJ1IjoiZGVkb3gtdGVjaCIsImEiOiJjbDc5ZWllaDcwMTNwM29sOHFhZnIxeWp6In0.iDhKgIIy2XM8hNfzLGtxCA"
                        mapStyle={LightOrDarkMap}
                        reuseMaps
                    />
                </DeckGL>
            </Box>
        </Container>
    );
}
