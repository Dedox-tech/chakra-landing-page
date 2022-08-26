import React from "react";
import Map from "react-map-gl";
import DeckGL, { ContourLayer } from "deck.gl/typed";
import { Container, useBreakpointValue, Heading, Box } from "@chakra-ui/react";

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
                >
                    <Map
                        mapboxAccessToken="pk.eyJ1IjoiZGVkb3gtdGVjaCIsImEiOiJjbDc5ZWllaDcwMTNwM29sOHFhZnIxeWp6In0.iDhKgIIy2XM8hNfzLGtxCA"
                        mapStyle="mapbox://styles/mapbox/light-v9"
                    />
                </DeckGL>
            </Box>
        </Container>
    );
}
