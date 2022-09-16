/* eslint-disable new-cap */
import React, { useState, useEffect } from "react";
import svgMap from "svgmap";
import "../svgMap.css";
import countriesData from "../vaccine_information";

export default function NewCustomMap() {
    const [doesMapExist, setDoesMapExist] = useState(false);

    useEffect(() => {
        if (!doesMapExist) {
            // eslint-disable-next-line no-unused-vars, prefer-const
            let myNewSvgMap = new svgMap({
                targetElementID: "svgMap",
                colorMax: "#C28ABA",
                colorMin: "#D4ADCF",
                minZoom: 1,
                maxZoom: 1,
                data: {
                    data: {
                        CanSino: {
                            name: "Cansino Vaccines",
                            format: "{0} doses",
                            thousandSeparator: ",",
                        },
                        Moderna: {
                            name: "Moderna Vaccines",
                            format: "{0} doses",
                            thousandSeparator: ",",
                        },
                        "Oxford/AstraZeneca": {
                            name: "Astrazeneca Vaccines",
                            format: "{0} doses",
                            thousandSeparator: ",",
                        },
                        "Pfizer/BioNTech": {
                            name: "Pfizer Vaccines",
                            format: "{0} doses",
                            thousandSeparator: ",",
                        },
                        "Sinopharm/Beijing": {
                            name: "Sinopharm Vaccines",
                            format: "{0} doses",
                            thousandSeparator: ",",
                        },
                        "Sputnik V": {
                            name: "Sputnik V Vaccines",
                            format: "{0} doses",
                            thousandSeparator: ",",
                        },
                        "Johnson&Johnson": {
                            name: "Johnson & Johnson Vaccines",
                            format: "{0} doses",
                            thousandSeparator: ",",
                        },
                        Sinovac: {
                            name: "Sinovac Vaccines",
                            format: "{0} doses",
                            thousandSeparator: ",",
                        },
                    },
                    applyData: "Moderna",
                    values: countriesData,
                },
            });
            setDoesMapExist(true);
        }
    }, [doesMapExist]);

    return <div id="svgMap"> </div>;
}
