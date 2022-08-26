import React from "react";
import Map from "react-map-gl";
import DeckGL, { ContourLayer } from "deck.gl/typed";
import { Container, useBreakpointValue, Heading } from "@chakra-ui/react";

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
            data: [
                {
                    state: "Delaware",
                    county: "Kent",
                    longitude: -75.5024,
                    latitude: 39.084,
                    population: 180786,
                    vaccinesByWeek: {
                        8: 9,
                        9: 18,
                        10: 101,
                    },
                },
                {
                    state: "Delaware",
                    county: "New Castle",
                    longitude: -75.5865,
                    latitude: 39.6656,
                    population: 558753,
                    vaccinesByWeek: {
                        7: 8,
                        8: 50,
                        9: 98,
                        10: 340,
                    },
                },
                {
                    state: "Delaware",
                    county: "Sussex",
                    longitude: -75.4066,
                    latitude: 38.8008,
                    population: 234225,
                    vaccinesByWeek: {
                        8: 20,
                        9: 61,
                        10: 78,
                        11: 392,
                    },
                },
            ],
        }),
    ];

    return (
        <Container maxWidth={customMaxWidth} py={customPadding} centerContent>
            <Heading as="h1" mb={8}>
                Meet our beautiful map!
            </Heading>
            <DeckGL
                initialViewState={{
                    longitude: -102.4,
                    latitude: 37.8,
                    zoom: 3,
                }}
                style={{ height: 500 }}
                layers={layers}
            >
                <Map
                    mapboxAccessToken="pk.eyJ1IjoiZGVkb3gtdGVjaCIsImEiOiJjbDc5ZWllaDcwMTNwM29sOHFhZnIxeWp6In0.iDhKgIIy2XM8hNfzLGtxCA"
                    mapStyle="mapbox://styles/mapbox/light-v9"
                />
            </DeckGL>
        </Container>
    );
}
