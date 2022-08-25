import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Map from "react-map-gl";

export default function CustomMap() {
    return (
        <Box>
            <Text>I am a subtext!</Text>
            <Map mapboxAccessToken="pk.eyJ1IjoiZGVkb3gtdGVjaCIsImEiOiJjbDc5ZWllaDcwMTNwM29sOHFhZnIxeWp6In0.iDhKgIIy2XM8hNfzLGtxCA" />
        </Box>
    );
}
