import React from "react";
import Map from "react-map-gl";
import DeckGL, { ContourLayer } from "deck.gl/typed";
import { Container, useBreakpointValue, Heading, Box, useColorModeValue} from "@chakra-ui/react";
import 'mapbox-gl/dist/mapbox-gl.css';
// import exampleData from "../utils/exampleData";

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
        }),
    ];

    return (
        <Container maxWidth={customMaxWidth} py={customPadding} centerContent>
            <Heading as="h1" mb={8}>
                Meet our beautiful map!
            </Heading>
            <Box position="relative" height={500} width={customMaxWidth}>
                <DeckGL
                    initialViewState={{
                        longitude: -102.4,
                        latitude: 37.8,
                        zoom: 3,
                    }}
                    layers={layers}
                    controller
                    style={{borderColor: lightOrUltraDark, borderStyle: "solid", borderWidth: "1px"}}
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
