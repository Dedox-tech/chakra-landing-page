/* eslint-disable new-cap */
import React, {useState, useEffect} from "react";
// import {/*Box, Container, Heading,*/ useBreakpointValue} from "@chakra-ui/react";
import svgMap from "svgmap";
import "../svgMap.css";

export default function NewCustomMap() {

    const [doesMapExist, setDoesMapExist] = useState(false);

    /*
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
    */
    useEffect(() => {
        if (!doesMapExist) {
            // eslint-disable-next-line no-unused-vars, prefer-const
            let myNewSvgMap = new svgMap({
                targetElementID: "svgMap",
                data: {
                    data: {
                      moderna: {
                        name: 'Moderna Vaccines',
                        format: '{0} dosis',
                        thousandSeparator: ',',
                        thresholdMax: 50000,
                        thresholdMin: 0
                      },
                      jhonson_jhonson: {
                        name: 'Jhonson and Jhonson Vaccines',
                        format: '{0} dosis',
                        thresholdMax: 50000,
                        thresholdMin: 0
                      },
                      sinopharma: {
                        name: 'Sinopharma Vaccines',
                        format: '{0} dosis',
                        thresholdMax: 50000,
                        thresholdMin: 0
                      }
                    },
                    applyData: 'moderna',
                    values: {
                      "AF": { "moderna": 587, "jhonson_jhonson": 473, "sinopharma" : 334 },
                      "AL": { "moderna": 4583, "jhonson_jhonson": 1109, "sinopharma" : 334 },
                      "DZ": { "moderna": 4293, "jhonson_jhonson": 1001, "sinopharma" : 0 }
                      // ...
                    }
                  }
            });
            setDoesMapExist(true);
        }

    }, [doesMapExist]);

    return (
      /*
        <Container maxWidth={customMaxWidth} py={customPadding} centerContent>
            <Heading as="h1" mb={8}>
                Meet our beautiful map!
            </Heading>
            <Box id = "svgMap" />
        </Container>
        */
             <div className='app'>
        <h1>svgMap React demo</h1>
        <div id='svgMap'> </div>
      </div>
    );

}