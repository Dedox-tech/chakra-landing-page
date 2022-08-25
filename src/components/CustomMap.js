import React from "react";
import Map from "react-map-gl";

export default function CustomMap() {
    return (
        <Map
            mapboxAccessToken="pk.eyJ1IjoiZGVkb3gtdGVjaCIsImEiOiJjbDc5ZWllaDcwMTNwM29sOHFhZnIxeWp6In0.iDhKgIIy2XM8hNfzLGtxCA"
            initialViewState={{
                longitude: -102.4,
                latitude: 37.8,
                zoom: 2.8,
            }}
            style={{ height: 600 }}
            mapStyle="mapbox://styles/mapbox/light-v9"
        />
    );
}
