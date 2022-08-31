/* eslint-disable new-cap */
import React, { useState, useEffect } from "react";
import svgMap from "svgmap";
import "../svgMap.css";

export default function NewCustomMap() {
    const [doesMapExist, setDoesMapExist] = useState(false);

    useEffect(() => {
        if (!doesMapExist) {
            // eslint-disable-next-line no-unused-vars, prefer-const
            let myNewSvgMap = new svgMap({
                targetElementID: "svgMap",
                data: {
                    data: {
                        moderna: {
                            name: "Moderna Vaccines",
                            format: "{0} dosis",
                            thousandSeparator: ",",
                            thresholdMax: 50000,
                            thresholdMin: 0,
                        },
                        jhonson_jhonson: {
                            name: "Jhonson and Jhonson Vaccines",
                            format: "{0} dosis",
                            thresholdMax: 50000,
                            thresholdMin: 0,
                        },
                        sinopharma: {
                            name: "Sinopharma Vaccines",
                            format: "{0} dosis",
                            thresholdMax: 50000,
                            thresholdMin: 0,
                        },
                    },
                    applyData: "moderna",
                    values: {
                        AF: {
                            moderna: 587,
                            jhonson_jhonson: 473,
                            sinopharma: 334,
                        },
                        AL: {
                            moderna: 4583,
                            jhonson_jhonson: 1109,
                            sinopharma: 334,
                        },
                        DZ: {
                            moderna: 4293,
                            jhonson_jhonson: 1001,
                            sinopharma: 0,
                        },
                        // ...
                    },
                },
            });
            setDoesMapExist(true);
        }
    }, [doesMapExist]);

    return <div id="svgMap"> </div>;
}
