exports[`Render PropertySelfOwnedForm snapshot difference between 2 React forms state 1`] = `
Snapshot Diff:
- First value
+ Second value

@@ -3,11 +3,11 @@
    Symbol(enzyme.__root__): [Circular],
    Symbol(enzyme.__unrendered__): <PropertySelfOwnedForm
      onNavigate={[Function mockConstructor]}
      onSubmit={[Function mockConstructor]}
      onSubmitAndNavigate={[Function mockConstructor]}
-     propertyType={1}
+     propertyType={10}
      store={
        Object {
          "clearActions": [Function clearActions],
          "dispatch": [Function dispatch],
          "getActions": [Function getActions],
@@ -324,14 +324,13 @@
                  componentClass="div"
                  md={6}
                  xs={12}
                >
                  <Unknown
-                   label="Building Volume"
-                   name="building_volume"
-                   prefix="m³"
-                   tooltipContent="building_volume tooltip"
+                   label="Number of apartments"
+                   name="number_of_apartments"
+                   tooltipContent="number_of_apartments tooltip"
                  />
                </Col>
              </Row>
              <Row
                bsClass="row"
@@ -342,42 +341,26 @@
                  componentClass="div"
                  md={6}
                  xs={12}
                >
                  <Unknown
-                   label="Site Area"
-                   name="site_area"
-                   prefix="m²"
-                   tooltipContent="site_area tooltip"
+                   label="Floor"
+                   name="floor_number"
+                   tooltipContent="floor number tooltip"
                  />
                </Col>
                <Col
                  bsClass="col"
                  componentClass="div"
                  md={6}
                  xs={12}
                >
                  <Unknown
-                   label="Standarts for the volume"
-                   name="building_volume_standard"
-                   options={
-                     Array [
-                       Array [
-                         1,
-                         "SIA116",
-                       ],
-                       Array [
-                         2,
-                         "BIC",
-                       ],
-                       Array [
-                         3,
-                         "SIA416",
-                       ],
-                     ]
-                   }
-                   tooltipContent="Building volume tooltip"
+                   label="Balcony/Terrace place"
+                   name="balcony_terrace_place"
+                   prefix="m²"
+                   tooltipContent="balcony_terrace_place tooltip"
                  />
                </Col>
              </Row>
              <Row
                bsClass="row"
@@ -393,108 +376,44 @@
                    label="Financing with right of residence"
                    name="is_financing_with_right_of_residence"
                    tooltipContent="is_financing_with_right_of_residence tooltip"
                  />
                </Col>
-             </Row>
-             <Row
-               bsClass="row"
-               componentClass="div"
-             >
                <Col
                  bsClass="col"
                  componentClass="div"
                  md={6}
                  xs={12}
                >
                  <Unknown
-                   label="Granny annexe (number of rooms)"
-                   name="granny_annexe"
-                   tooltipContent="granny_annexe tooltip"
+                   label="Craft/Hobby room"
+                   name="craft_hobby_room"
+                   prefix="m²"
+                   tooltipContent="craft_hobby_room tooltip"
                  />
                </Col>
              </Row>
-           </Grid>
-         </FormPanel>,
-         <Grid
-           bsClass="container"
-           componentClass="div"
-           fluid={false}
-         >
              <Row
                bsClass="row"
                componentClass="div"
              >
                <Col
                  bsClass="col"
                  componentClass="div"
-               md={10}
+                 md={6}
                  xs={12}
                >
                  <Unknown
-                 label="Number of on-site garage parking spaces (within building volume)"
-                 name="number_of_garages_house"
-                 rangeEnd={5}
-                 tooltipContent="number_of_garages_house tooltip"
+                   label="Granny annexe (number of rooms)"
+                   name="granny_annexe"
+                   tooltipContent="granny_annexe tooltip"
                  />
                </Col>
              </Row>
-           <Row
-             bsClass="row"
-             componentClass="div"
-           >
-             <Col
-               bsClass="col"
-               componentClass="div"
-               md={10}
-               xs={12}
-             >
-               <Unknown
-                 label="Number of on-site garage parking spaces (separate garage building)"
-                 name="number_of_garages_separate_building"
-                 rangeEnd={5}
-                 tooltipContent="number_of_garages_separate_building tooltip"
-               />
-             </Col>
-           </Row>
-           <Row
-             bsClass="row"
-             componentClass="div"
-           >
-             <Col
-               bsClass="col"
-               componentClass="div"
-               md={10}
-               xs={12}
-             >
-               <Unknown
-                 label="Number of off-site garage parking spaces"
-                 name="number_of_parking_spots_covered"
-                 rangeEnd={5}
-                 tooltipContent="number_of_parking_spots_covered tooltip"
-               />
-             </Col>
-           </Row>
-           <Row
-             bsClass="row"
-             componentClass="div"
-           >
-             <Col
-               bsClass="col"
-               componentClass="div"
-               md={10}
-               xs={12}
-             >
-               <Unknown
-                 label="Number of off-site outdoor parking spaces"
-                 name="number_of_parking_spots_uncovered"
-                 rangeEnd={5}
-                 tooltipContent="number_of_parking_spots_uncovered tooltip"
-               />
-             </Col>
-           </Row>
-         </Grid>,
+           </Grid>
+         </FormPanel>,
+         false,
          <p
            className="title"
          >
            Quality evaluation
          </p>,
@@ -812,11 +731,10 @@
                  />
                </Col>
              </Row>
            </Grid>
          </FormPanel>,
-         false,
          <Grid
            bsClass="container"
            componentClass="div"
            fluid={false}
          >
@@ -824,10 +742,70 @@
              bsClass="row"
              componentClass="div"
            >
              <Col
                bsClass="col"
+               componentClass="div"
+               md={10}
+               xs={12}
+             >
+               <Unknown
+                 label="Number of outdoor parking spaces"
+                 name="apartments_number_of_outdoor_parking_spaces"
+                 rangeEnd={5}
+                 tooltipContent="apartments_number_of_outdoor_parking_spaces tooltip"
+               />
+             </Col>
+           </Row>
+           <Row
+             bsClass="row"
+             componentClass="div"
+           >
+             <Col
+               bsClass="col"
+               componentClass="div"
+               md={10}
+               xs={12}
+             >
+               <Unknown
+                 label="No. Of garage / indoor parking spaces: underground"
+                 name="apartments_number_of_garages"
+                 rangeEnd={5}
+                 tooltipContent="No. Of garage / indoor parking spaces: underground tooltip"
+               />
+             </Col>
+           </Row>
+           <Row
+             bsClass="row"
+             componentClass="div"
+           >
+             <Col
+               bsClass="col"
+               componentClass="div"
+               md={10}
+               xs={12}
+             >
+               <Unknown
+                 label="No. Of garage / indoor parking spaces: individual"
+                 name="apartments_number_of_garages_individual"
+                 rangeEnd={5}
+                 tooltipContent="No. Of garage / indoor parking spaces: individual tooltip"
+               />
+             </Col>
+           </Row>
+         </Grid>,
+         <Grid
+           bsClass="container"
+           componentClass="div"
+           fluid={false}
+         >
+           <Row
+             bsClass="row"
+             componentClass="div"
+           >
+             <Col
+               bsClass="col"
                className="support-house-sell"
                componentClass="div"
                md={12}
                xs={12}
              >
@@ -1488,14 +1466,13 @@
                  componentClass="div"
                  md={6}
                  xs={12}
                >
                  <Unknown
-                   label="Building Volume"
-                   name="building_volume"
-                   prefix="m³"
-                   tooltipContent="building_volume tooltip"
+                   label="Number of apartments"
+                   name="number_of_apartments"
+                   tooltipContent="number_of_apartments tooltip"
                  />
                </Col>
              </Row>
              <Row
                bsClass="row"
@@ -1506,42 +1483,26 @@
                  componentClass="div"
                  md={6}
                  xs={12}
                >
                  <Unknown
-                   label="Site Area"
-                   name="site_area"
-                   prefix="m²"
-                   tooltipContent="site_area tooltip"
+                   label="Floor"
+                   name="floor_number"
+                   tooltipContent="floor number tooltip"
                  />
                </Col>
                <Col
                  bsClass="col"
                  componentClass="div"
                  md={6}
                  xs={12}
                >
                  <Unknown
-                   label="Standarts for the volume"
-                   name="building_volume_standard"
-                   options={
-                     Array [
-                       Array [
-                         1,
-                         "SIA116",
-                       ],
-                       Array [
-                         2,
-                         "BIC",
-                       ],
-                       Array [
-                         3,
-                         "SIA416",
-                       ],
-                     ]
-                   }
-                   tooltipContent="Building volume tooltip"
+                   label="Balcony/Terrace place"
+                   name="balcony_terrace_place"
+                   prefix="m²"
+                   tooltipContent="balcony_terrace_place tooltip"
                  />
                </Col>
              </Row>
              <Row
                bsClass="row"
@@ -1557,10 +1518,23 @@
                    label="Financing with right of residence"
                    name="is_financing_with_right_of_residence"
                    tooltipContent="is_financing_with_right_of_residence tooltip"
                  />
                </Col>
+               <Col
+                 bsClass="col"
+                 componentClass="div"
+                 md={6}
+                 xs={12}
+               >
+                 <Unknown
+                   label="Craft/Hobby room"
+                   name="craft_hobby_room"
+                   prefix="m²"
+                   tooltipContent="craft_hobby_room tooltip"
+                 />
+               </Col>
              </Row>
              <Row
                bsClass="row"
                componentClass="div"
              >
@@ -1775,17 +1749,17 @@
                    componentClass="div"
                    md={6}
                    xs={12}
                  >
                    <Unknown
-                     label="Building Volume"
-                     name="building_volume"
-                     prefix="m³"
-                     tooltipContent="building_volume tooltip"
+                     label="Number of apartments"
+                     name="number_of_apartments"
+                     tooltipContent="number_of_apartments tooltip"
                    />
                  </Col>
                </Row>,
+               false,
                <Row
                  bsClass="row"
                  componentClass="div"
                >
                  <Col
@@ -1793,46 +1767,29 @@
                    componentClass="div"
                    md={6}
                    xs={12}
                  >
                    <Unknown
-                     label="Site Area"
-                     name="site_area"
-                     prefix="m²"
-                     tooltipContent="site_area tooltip"
+                     label="Floor"
+                     name="floor_number"
+                     tooltipContent="floor number tooltip"
                    />
                  </Col>
                  <Col
                    bsClass="col"
                    componentClass="div"
                    md={6}
                    xs={12}
                  >
                    <Unknown
-                     label="Standarts for the volume"
-                     name="building_volume_standard"
-                     options={
-                       Array [
-                         Array [
-                           1,
-                           "SIA116",
-                         ],
-                         Array [
-                           2,
-                           "BIC",
-                         ],
-                         Array [
-                           3,
-                           "SIA416",
-                         ],
-                       ]
-                     }
-                     tooltipContent="Building volume tooltip"
+                     label="Balcony/Terrace place"
+                     name="balcony_terrace_place"
+                     prefix="m²"
+                     tooltipContent="balcony_terrace_place tooltip"
                    />
                  </Col>
                </Row>,
-               false,
                <Row
                  bsClass="row"
                  componentClass="div"
                >
                  <Col
@@ -1845,10 +1802,23 @@
                      label="Financing with right of residence"
                      name="is_financing_with_right_of_residence"
                      tooltipContent="is_financing_with_right_of_residence tooltip"
                    />
                  </Col>
+                 <Col
+                   bsClass="col"
+                   componentClass="div"
+                   md={6}
+                   xs={12}
+                 >
+                   <Unknown
+                     label="Craft/Hobby room"
+                     name="craft_hobby_room"
+                     prefix="m²"
+                     tooltipContent="craft_hobby_room tooltip"
+                   />
+                 </Col>
                </Row>,
                <Row
                  bsClass="row"
                  componentClass="div"
                >
@@ -2402,24 +2372,23 @@
                        name="living_space"
                        prefix="m²"
                        tooltipContent="Living space tooltip"
                      />
                    </Col>,
+                   false,
                    <Col
                      bsClass="col"
                      componentClass="div"
                      md={6}
                      xs={12}
                    >
                      <Unknown
-                       label="Building Volume"
-                       name="building_volume"
-                       prefix="m³"
-                       tooltipContent="building_volume tooltip"
+                       label="Number of apartments"
+                       name="number_of_apartments"
+                       tooltipContent="number_of_apartments tooltip"
                      />
                    </Col>,
-                   false,
                  ],
                  "componentClass": "div",
                },
                "ref": null,
                "rendered": Array [
@@ -2454,21 +2423,21 @@
                      "rendered": null,
                      "type": [Function anonymous],
                    },
                    "type": [Function Col],
                  },
+                 false,
                  Object {
                    "instance": null,
                    "key": undefined,
                    "nodeType": "class",
                    "props": Object {
                      "bsClass": "col",
                      "children": <Unknown
-                       label="Building Volume"
-                       name="building_volume"
-                       prefix="m³"
-                       tooltipContent="building_volume tooltip"
+                       label="Number of apartments"
+                       name="number_of_apartments"
+                       tooltipContent="number_of_apartments tooltip"
                      />,
                      "componentClass": "div",
                      "md": 6,
                      "xs": 12,
                    },
@@ -2476,25 +2445,24 @@
                    "rendered": Object {
                      "instance": null,
                      "key": undefined,
                      "nodeType": "function",
                      "props": Object {
-                       "label": "Building Volume",
-                       "name": "building_volume",
-                       "prefix": "m³",
-                       "tooltipContent": "building_volume tooltip",
+                       "label": "Number of apartments",
+                       "name": "number_of_apartments",
+                       "tooltipContent": "number_of_apartments tooltip",
                      },
                      "ref": null,
                      "rendered": null,
                      "type": [Function anonymous],
                    },
                    "type": [Function Col],
                  },
-                 false,
                ],
                "type": [Function Row],
              },
+             false,
              Object {
                "instance": null,
                "key": undefined,
                "nodeType": "class",
                "props": Object {
@@ -2505,42 +2473,26 @@
                      componentClass="div"
                      md={6}
                      xs={12}
                    >
                      <Unknown
-                       label="Site Area"
-                       name="site_area"
-                       prefix="m²"
-                       tooltipContent="site_area tooltip"
+                       label="Floor"
+                       name="floor_number"
+                       tooltipContent="floor number tooltip"
                      />
                    </Col>,
                    <Col
                      bsClass="col"
                      componentClass="div"
                      md={6}
                      xs={12}
                    >
                      <Unknown
-                       label="Standarts for the volume"
-                       name="building_volume_standard"
-                       options={
-                         Array [
-                           Array [
-                             1,
-                             "SIA116",
-                           ],
-                           Array [
-                             2,
-                             "BIC",
-                           ],
-                           Array [
-                             3,
-                             "SIA416",
-                           ],
-                         ]
-                       }
-                       tooltipContent="Building volume tooltip"
+                       label="Balcony/Terrace place"
+                       name="balcony_terrace_place"
+                       prefix="m²"
+                       tooltipContent="balcony_terrace_place tooltip"
                      />
                    </Col>,
                  ],
                  "componentClass": "div",
                },
@@ -2551,14 +2503,13 @@
                    "key": undefined,
                    "nodeType": "class",
                    "props": Object {
                      "bsClass": "col",
                      "children": <Unknown
-                       label="Site Area"
-                       name="site_area"
-                       prefix="m²"
-                       tooltipContent="site_area tooltip"
+                       label="Floor"
+                       name="floor_number"
+                       tooltipContent="floor number tooltip"
                      />,
                      "componentClass": "div",
                      "md": 6,
                      "xs": 12,
                    },
@@ -2566,14 +2517,13 @@
                    "rendered": Object {
                      "instance": null,
                      "key": undefined,
                      "nodeType": "function",
                      "props": Object {
-                       "label": "Site Area",
-                       "name": "site_area",
-                       "prefix": "m²",
-                       "tooltipContent": "site_area tooltip",
+                       "label": "Floor",
+                       "name": "floor_number",
+                       "tooltipContent": "floor number tooltip",
                      },
                      "ref": null,
                      "rendered": null,
                      "type": [Function anonymous],
                    },
@@ -2584,29 +2534,14 @@
                    "key": undefined,
                    "nodeType": "class",
                    "props": Object {
                      "bsClass": "col",
                      "children": <Unknown
-                       label="Standarts for the volume"
-                       name="building_volume_standard"
-                       options={
-                         Array [
-                           Array [
-                             1,
-                             "SIA116",
-                           ],
-                           Array [
-                             2,
-                             "BIC",
-                           ],
-                           Array [
-                             3,
-                             "SIA416",
-                           ],
-                         ]
-                       }
-                       tooltipContent="Building volume tooltip"
+                       label="Balcony/Terrace place"
+                       name="balcony_terrace_place"
+                       prefix="m²"
+                       tooltipContent="balcony_terrace_place tooltip"
                      />,
                      "componentClass": "div",
                      "md": 6,
                      "xs": 12,
                    },
@@ -2614,38 +2549,24 @@
                    "rendered": Object {
                      "instance": null,
                      "key": undefined,
                      "nodeType": "function",
                      "props": Object {
-                       "label": "Standarts for the volume",
-                       "name": "building_volume_standard",
-                       "options": Array [
-                         Array [
-                           1,
-                           "SIA116",
-                         ],
-                         Array [
-                           2,
-                           "BIC",
-                         ],
-                         Array [
-                           3,
-                           "SIA416",
-                         ],
-                       ],
-                       "tooltipContent": "Building volume tooltip",
+                       "label": "Balcony/Terrace place",
+                       "name": "balcony_terrace_place",
+                       "prefix": "m²",
+                       "tooltipContent": "balcony_terrace_place tooltip",
                      },
                      "ref": null,
                      "rendered": null,
                      "type": [Function anonymous],
                    },
                    "type": [Function Col],
                  },
                ],
                "type": [Function Row],
              },
-             false,
              Object {
                "instance": null,
                "key": undefined,
                "nodeType": "class",
                "props": Object {
@@ -2661,11 +2582,23 @@
                        label="Financing with right of residence"
                        name="is_financing_with_right_of_residence"
                        tooltipContent="is_financing_with_right_of_residence tooltip"
                      />
                    </Col>,
-                   false,
+                   <Col
+                     bsClass="col"
+                     componentClass="div"
+                     md={6}
+                     xs={12}
+                   >
+                     <Unknown
+                       label="Craft/Hobby room"
+                       name="craft_hobby_room"
+                       prefix="m²"
+                       tooltipContent="craft_hobby_room tooltip"
+                     />
+                   </Col>,
                  ],
                  "componentClass": "div",
                },
                "ref": null,
                "rendered": Array [
@@ -2698,45 +2631,21 @@
                      "rendered": null,
                      "type": [Function anonymous],
                    },
                    "type": [Function Col],
                  },
-                 false,
-               ],
-               "type": [Function Row],
-             },
                  Object {
                    "instance": null,
                    "key": undefined,
                    "nodeType": "class",
                    "props": Object {
-                 "bsClass": "row",
-                 "children": <Col
-                   bsClass="col"
-                   componentClass="div"
-                   md={6}
-                   xs={12}
-                 >
-                   <Unknown
-                     label="Granny annexe (number of rooms)"
-                     name="granny_annexe"
-                     tooltipContent="granny_annexe tooltip"
-                   />
-                 </Col>,
-                 "componentClass": "div",
-               },
-               "ref": null,
-               "rendered": Object {
-                 "instance": null,
-                 "key": undefined,
-                 "nodeType": "class",
-                 "props": Object {
                      "bsClass": "col",
                      "children": <Unknown
-                     label="Granny annexe (number of rooms)"
-                     name="granny_annexe"
-                     tooltipContent="granny_annexe tooltip"
+                       label="Craft/Hobby room"
+                       name="craft_hobby_room"
+                       prefix="m²"
+                       tooltipContent="craft_hobby_room tooltip"
                      />,
                      "componentClass": "div",
                      "md": 6,
                      "xs": 12,
                    },
@@ -2744,167 +2653,22 @@
                    "rendered": Object {
                      "instance": null,
                      "key": undefined,
                      "nodeType": "function",
                      "props": Object {
-                     "label": "Granny annexe (number of rooms)",
-                     "name": "granny_annexe",
-                     "tooltipContent": "granny_annexe tooltip",
+                       "label": "Craft/Hobby room",
+                       "name": "craft_hobby_room",
+                       "prefix": "m²",
+                       "tooltipContent": "craft_hobby_room tooltip",
                      },
                      "ref": null,
                      "rendered": null,
                      "type": [Function anonymous],
                    },
                    "type": [Function Col],
                  },
-               "type": [Function Row],
-             },
                ],
-           "type": [Function Grid],
-         },
-         "type": [Function FormPanel],
-       },
-       Object {
-         "instance": null,
-         "key": undefined,
-         "nodeType": "class",
-         "props": Object {
-           "bsClass": "container",
-           "children": Array [
-             <Row
-               bsClass="row"
-               componentClass="div"
-             >
-               <Col
-                 bsClass="col"
-                 componentClass="div"
-                 md={10}
-                 xs={12}
-               >
-                 <Unknown
-                   label="Number of on-site garage parking spaces (within building volume)"
-                   name="number_of_garages_house"
-                   rangeEnd={5}
-                   tooltipContent="number_of_garages_house tooltip"
-                 />
-               </Col>
-             </Row>,
-             <Row
-               bsClass="row"
-               componentClass="div"
-             >
-               <Col
-                 bsClass="col"
-                 componentClass="div"
-                 md={10}
-                 xs={12}
-               >
-                 <Unknown
-                   label="Number of on-site garage parking spaces (separate garage building)"
-                   name="number_of_garages_separate_building"
-                   rangeEnd={5}
-                   tooltipContent="number_of_garages_separate_building tooltip"
-                 />
-               </Col>
-             </Row>,
-             <Row
-               bsClass="row"
-               componentClass="div"
-             >
-               <Col
-                 bsClass="col"
-                 componentClass="div"
-                 md={10}
-                 xs={12}
-               >
-                 <Unknown
-                   label="Number of off-site garage parking spaces"
-                   name="number_of_parking_spots_covered"
-                   rangeEnd={5}
-                   tooltipContent="number_of_parking_spots_covered tooltip"
-                 />
-               </Col>
-             </Row>,
-             <Row
-               bsClass="row"
-               componentClass="div"
-             >
-               <Col
-                 bsClass="col"
-                 componentClass="div"
-                 md={10}
-                 xs={12}
-               >
-                 <Unknown
-                   label="Number of off-site outdoor parking spaces"
-                   name="number_of_parking_spots_uncovered"
-                   rangeEnd={5}
-                   tooltipContent="number_of_parking_spots_uncovered tooltip"
-                 />
-               </Col>
-             </Row>,
-           ],
-           "componentClass": "div",
-           "fluid": false,
-         },
-         "ref": null,
-         "rendered": Array [
-           Object {
-             "instance": null,
-             "key": undefined,
-             "nodeType": "class",
-             "props": Object {
-               "bsClass": "row",
-               "children": <Col
-                 bsClass="col"
-                 componentClass="div"
-                 md={10}
-                 xs={12}
-               >
-                 <Unknown
-                   label="Number of on-site garage parking spaces (within building volume)"
-                   name="number_of_garages_house"
-                   rangeEnd={5}
-                   tooltipContent="number_of_garages_house tooltip"
-                 />
-               </Col>,
-               "componentClass": "div",
-             },
-             "ref": null,
-             "rendered": Object {
-               "instance": null,
-               "key": undefined,
-               "nodeType": "class",
-               "props": Object {
-                 "bsClass": "col",
-                 "children": <Unknown
-                   label="Number of on-site garage parking spaces (within building volume)"
-                   name="number_of_garages_house"
-                   rangeEnd={5}
-                   tooltipContent="number_of_garages_house tooltip"
-                 />,
-                 "componentClass": "div",
-                 "md": 10,
-                 "xs": 12,
-               },
-               "ref": null,
-               "rendered": Object {
-                 "instance": null,
-                 "key": undefined,
-                 "nodeType": "function",
-                 "props": Object {
-                   "label": "Number of on-site garage parking spaces (within building volume)",
-                   "name": "number_of_garages_house",
-                   "rangeEnd": 5,
-                   "tooltipContent": "number_of_garages_house tooltip",
-                 },
-                 "ref": null,
-                 "rendered": null,
-                 "type": [Function anonymous],
-               },
-               "type": [Function Col],
-             },
                "type": [Function Row],
              },
              Object {
                "instance": null,
                "key": undefined,
@@ -2912,18 +2676,17 @@
                "props": Object {
                  "bsClass": "row",
                  "children": <Col
                    bsClass="col"
                    componentClass="div"
-                 md={10}
+                   md={6}
                    xs={12}
                  >
                    <Unknown
-                   label="Number of on-site garage parking spaces (separate garage building)"
-                   name="number_of_garages_separate_building"
-                   rangeEnd={5}
-                   tooltipContent="number_of_garages_separate_building tooltip"
+                     label="Granny annexe (number of rooms)"
+                     name="granny_annexe"
+                     tooltipContent="granny_annexe tooltip"
                    />
                  </Col>,
                  "componentClass": "div",
                },
                "ref": null,
@@ -2932,155 +2695,42 @@
                  "key": undefined,
                  "nodeType": "class",
                  "props": Object {
                    "bsClass": "col",
                    "children": <Unknown
-                   label="Number of on-site garage parking spaces (separate garage building)"
-                   name="number_of_garages_separate_building"
-                   rangeEnd={5}
-                   tooltipContent="number_of_garages_separate_building tooltip"
+                     label="Granny annexe (number of rooms)"
+                     name="granny_annexe"
+                     tooltipContent="granny_annexe tooltip"
                    />,
                    "componentClass": "div",
-                 "md": 10,
+                   "md": 6,
                    "xs": 12,
                  },
                  "ref": null,
                  "rendered": Object {
                    "instance": null,
                    "key": undefined,
                    "nodeType": "function",
                    "props": Object {
-                   "label": "Number of on-site garage parking spaces (separate garage building)",
-                   "name": "number_of_garages_separate_building",
-                   "rangeEnd": 5,
-                   "tooltipContent": "number_of_garages_separate_building tooltip",
+                     "label": "Granny annexe (number of rooms)",
+                     "name": "granny_annexe",
+                     "tooltipContent": "granny_annexe tooltip",
                    },
                    "ref": null,
                    "rendered": null,
                    "type": [Function anonymous],
                  },
                  "type": [Function Col],
                },
                "type": [Function Row],
              },
-           Object {
-             "instance": null,
-             "key": undefined,
-             "nodeType": "class",
-             "props": Object {
-               "bsClass": "row",
-               "children": <Col
-                 bsClass="col"
-                 componentClass="div"
-                 md={10}
-                 xs={12}
-               >
-                 <Unknown
-                   label="Number of off-site garage parking spaces"
-                   name="number_of_parking_spots_covered"
-                   rangeEnd={5}
-                   tooltipContent="number_of_parking_spots_covered tooltip"
-                 />
-               </Col>,
-               "componentClass": "div",
-             },
-             "ref": null,
-             "rendered": Object {
-               "instance": null,
-               "key": undefined,
-               "nodeType": "class",
-               "props": Object {
-                 "bsClass": "col",
-                 "children": <Unknown
-                   label="Number of off-site garage parking spaces"
-                   name="number_of_parking_spots_covered"
-                   rangeEnd={5}
-                   tooltipContent="number_of_parking_spots_covered tooltip"
-                 />,
-                 "componentClass": "div",
-                 "md": 10,
-                 "xs": 12,
-               },
-               "ref": null,
-               "rendered": Object {
-                 "instance": null,
-                 "key": undefined,
-                 "nodeType": "function",
-                 "props": Object {
-                   "label": "Number of off-site garage parking spaces",
-                   "name": "number_of_parking_spots_covered",
-                   "rangeEnd": 5,
-                   "tooltipContent": "number_of_parking_spots_covered tooltip",
-                 },
-                 "ref": null,
-                 "rendered": null,
-                 "type": [Function anonymous],
-               },
-               "type": [Function Col],
-             },
-             "type": [Function Row],
-           },
-           Object {
-             "instance": null,
-             "key": undefined,
-             "nodeType": "class",
-             "props": Object {
-               "bsClass": "row",
-               "children": <Col
-                 bsClass="col"
-                 componentClass="div"
-                 md={10}
-                 xs={12}
-               >
-                 <Unknown
-                   label="Number of off-site outdoor parking spaces"
-                   name="number_of_parking_spots_uncovered"
-                   rangeEnd={5}
-                   tooltipContent="number_of_parking_spots_uncovered tooltip"
-                 />
-               </Col>,
-               "componentClass": "div",
-             },
-             "ref": null,
-             "rendered": Object {
-               "instance": null,
-               "key": undefined,
-               "nodeType": "class",
-               "props": Object {
-                 "bsClass": "col",
-                 "children": <Unknown
-                   label="Number of off-site outdoor parking spaces"
-                   name="number_of_parking_spots_uncovered"
-                   rangeEnd={5}
-                   tooltipContent="number_of_parking_spots_uncovered tooltip"
-                 />,
-                 "componentClass": "div",
-                 "md": 10,
-                 "xs": 12,
-               },
-               "ref": null,
-               "rendered": Object {
-                 "instance": null,
-                 "key": undefined,
-                 "nodeType": "function",
-                 "props": Object {
-                   "label": "Number of off-site outdoor parking spaces",
-                   "name": "number_of_parking_spots_uncovered",
-                   "rangeEnd": 5,
-                   "tooltipContent": "number_of_parking_spots_uncovered tooltip",
-                 },
-                 "ref": null,
-                 "rendered": null,
-                 "type": [Function anonymous],
-               },
-               "type": [Function Col],
-             },
-             "type": [Function Row],
-           },
            ],
            "type": [Function Grid],
          },
+         "type": [Function FormPanel],
+       },
+       false,
        Object {
          "instance": null,
          "key": undefined,
          "nodeType": "host",
          "props": Object {
@@ -4572,11 +4222,10 @@
            ],
            "type": [Function Grid],
          },
          "type": [Function FormPanel],
        },
-       false,
        Object {
          "instance": null,
          "key": undefined,
          "nodeType": "class",
          "props": Object {
@@ -4586,10 +4235,251 @@
                bsClass="row"
                componentClass="div"
              >
                <Col
                  bsClass="col"
+                 componentClass="div"
+                 md={10}
+                 xs={12}
+               >
+                 <Unknown
+                   label="Number of outdoor parking spaces"
+                   name="apartments_number_of_outdoor_parking_spaces"
+                   rangeEnd={5}
+                   tooltipContent="apartments_number_of_outdoor_parking_spaces tooltip"
+                 />
+               </Col>
+             </Row>,
+             <Row
+               bsClass="row"
+               componentClass="div"
+             >
+               <Col
+                 bsClass="col"
+                 componentClass="div"
+                 md={10}
+                 xs={12}
+               >
+                 <Unknown
+                   label="No. Of garage / indoor parking spaces: underground"
+                   name="apartments_number_of_garages"
+                   rangeEnd={5}
+                   tooltipContent="No. Of garage / indoor parking spaces: underground tooltip"
+                 />
+               </Col>
+             </Row>,
+             <Row
+               bsClass="row"
+               componentClass="div"
+             >
+               <Col
+                 bsClass="col"
+                 componentClass="div"
+                 md={10}
+                 xs={12}
+               >
+                 <Unknown
+                   label="No. Of garage / indoor parking spaces: individual"
+                   name="apartments_number_of_garages_individual"
+                   rangeEnd={5}
+                   tooltipContent="No. Of garage / indoor parking spaces: individual tooltip"
+                 />
+               </Col>
+             </Row>,
+           ],
+           "componentClass": "div",
+           "fluid": false,
+         },
+         "ref": null,
+         "rendered": Array [
+           Object {
+             "instance": null,
+             "key": undefined,
+             "nodeType": "class",
+             "props": Object {
+               "bsClass": "row",
+               "children": <Col
+                 bsClass="col"
+                 componentClass="div"
+                 md={10}
+                 xs={12}
+               >
+                 <Unknown
+                   label="Number of outdoor parking spaces"
+                   name="apartments_number_of_outdoor_parking_spaces"
+                   rangeEnd={5}
+                   tooltipContent="apartments_number_of_outdoor_parking_spaces tooltip"
+                 />
+               </Col>,
+               "componentClass": "div",
+             },
+             "ref": null,
+             "rendered": Object {
+               "instance": null,
+               "key": undefined,
+               "nodeType": "class",
+               "props": Object {
+                 "bsClass": "col",
+                 "children": <Unknown
+                   label="Number of outdoor parking spaces"
+                   name="apartments_number_of_outdoor_parking_spaces"
+                   rangeEnd={5}
+                   tooltipContent="apartments_number_of_outdoor_parking_spaces tooltip"
+                 />,
+                 "componentClass": "div",
+                 "md": 10,
+                 "xs": 12,
+               },
+               "ref": null,
+               "rendered": Object {
+                 "instance": null,
+                 "key": undefined,
+                 "nodeType": "function",
+                 "props": Object {
+                   "label": "Number of outdoor parking spaces",
+                   "name": "apartments_number_of_outdoor_parking_spaces",
+                   "rangeEnd": 5,
+                   "tooltipContent": "apartments_number_of_outdoor_parking_spaces tooltip",
+                 },
+                 "ref": null,
+                 "rendered": null,
+                 "type": [Function anonymous],
+               },
+               "type": [Function Col],
+             },
+             "type": [Function Row],
+           },
+           Object {
+             "instance": null,
+             "key": undefined,
+             "nodeType": "class",
+             "props": Object {
+               "bsClass": "row",
+               "children": <Col
+                 bsClass="col"
+                 componentClass="div"
+                 md={10}
+                 xs={12}
+               >
+                 <Unknown
+                   label="No. Of garage / indoor parking spaces: underground"
+                   name="apartments_number_of_garages"
+                   rangeEnd={5}
+                   tooltipContent="No. Of garage / indoor parking spaces: underground tooltip"
+                 />
+               </Col>,
+               "componentClass": "div",
+             },
+             "ref": null,
+             "rendered": Object {
+               "instance": null,
+               "key": undefined,
+               "nodeType": "class",
+               "props": Object {
+                 "bsClass": "col",
+                 "children": <Unknown
+                   label="No. Of garage / indoor parking spaces: underground"
+                   name="apartments_number_of_garages"
+                   rangeEnd={5}
+                   tooltipContent="No. Of garage / indoor parking spaces: underground tooltip"
+                 />,
+                 "componentClass": "div",
+                 "md": 10,
+                 "xs": 12,
+               },
+               "ref": null,
+               "rendered": Object {
+                 "instance": null,
+                 "key": undefined,
+                 "nodeType": "function",
+                 "props": Object {
+                   "label": "No. Of garage / indoor parking spaces: underground",
+                   "name": "apartments_number_of_garages",
+                   "rangeEnd": 5,
+                   "tooltipContent": "No. Of garage / indoor parking spaces: underground tooltip",
+                 },
+                 "ref": null,
+                 "rendered": null,
+                 "type": [Function anonymous],
+               },
+               "type": [Function Col],
+             },
+             "type": [Function Row],
+           },
+           Object {
+             "instance": null,
+             "key": undefined,
+             "nodeType": "class",
+             "props": Object {
+               "bsClass": "row",
+               "children": <Col
+                 bsClass="col"
+                 componentClass="div"
+                 md={10}
+                 xs={12}
+               >
+                 <Unknown
+                   label="No. Of garage / indoor parking spaces: individual"
+                   name="apartments_number_of_garages_individual"
+                   rangeEnd={5}
+                   tooltipContent="No. Of garage / indoor parking spaces: individual tooltip"
+                 />
+               </Col>,
+               "componentClass": "div",
+             },
+             "ref": null,
+             "rendered": Object {
+               "instance": null,
+               "key": undefined,
+               "nodeType": "class",
+               "props": Object {
+                 "bsClass": "col",
+                 "children": <Unknown
+                   label="No. Of garage / indoor parking spaces: individual"
+                   name="apartments_number_of_garages_individual"
+                   rangeEnd={5}
+                   tooltipContent="No. Of garage / indoor parking spaces: individual tooltip"
+                 />,
+                 "componentClass": "div",
+                 "md": 10,
+                 "xs": 12,
+               },
+               "ref": null,
+               "rendered": Object {
+                 "instance": null,
+                 "key": undefined,
+                 "nodeType": "function",
+                 "props": Object {
+                   "label": "No. Of garage / indoor parking spaces: individual",
+                   "name": "apartments_number_of_garages_individual",
+                   "rangeEnd": 5,
+                   "tooltipContent": "No. Of garage / indoor parking spaces: individual tooltip",
+                 },
+                 "ref": null,
+                 "rendered": null,
+                 "type": [Function anonymous],
+               },
+               "type": [Function Col],
+             },
+             "type": [Function Row],
+           },
+         ],
+         "type": [Function Grid],
+       },
+       Object {
+         "instance": null,
+         "key": undefined,
+         "nodeType": "class",
+         "props": Object {
+           "bsClass": "container",
+           "children": Array [
+             <Row
+               bsClass="row"
+               componentClass="div"
+             >
+               <Col
+                 bsClass="col"
                  className="support-house-sell"
                  componentClass="div"
                  md={12}
                  xs={12}
                >
@@ -5087,14 +4977,13 @@
                    componentClass="div"
                    md={6}
                    xs={12}
                  >
                    <Unknown
-                     label="Building Volume"
-                     name="building_volume"
-                     prefix="m³"
-                     tooltipContent="building_volume tooltip"
+                     label="Number of apartments"
+                     name="number_of_apartments"
+                     tooltipContent="number_of_apartments tooltip"
                    />
                  </Col>
                </Row>
                <Row
                  bsClass="row"
@@ -5105,42 +4994,26 @@
                    componentClass="div"
                    md={6}
                    xs={12}
                  >
                    <Unknown
-                     label="Site Area"
-                     name="site_area"
-                     prefix="m²"
-                     tooltipContent="site_area tooltip"
+                     label="Floor"
+                     name="floor_number"
+                     tooltipContent="floor number tooltip"
                    />
                  </Col>
                  <Col
                    bsClass="col"
                    componentClass="div"
                    md={6}
                    xs={12}
                  >
                    <Unknown
-                     label="Standarts for the volume"
-                     name="building_volume_standard"
-                     options={
-                       Array [
-                         Array [
-                           1,
-                           "SIA116",
-                         ],
-                         Array [
-                           2,
-                           "BIC",
-                         ],
-                         Array [
-                           3,
-                           "SIA416",
-                         ],
-                       ]
-                     }
-                     tooltipContent="Building volume tooltip"
+                     label="Balcony/Terrace place"
+                     name="balcony_terrace_place"
+                     prefix="m²"
+                     tooltipContent="balcony_terrace_place tooltip"
                    />
                  </Col>
                </Row>
                <Row
                  bsClass="row"
@@ -5156,108 +5029,44 @@
                      label="Financing with right of residence"
                      name="is_financing_with_right_of_residence"
                      tooltipContent="is_financing_with_right_of_residence tooltip"
                    />
                  </Col>
-               </Row>
-               <Row
-                 bsClass="row"
-                 componentClass="div"
-               >
                  <Col
                    bsClass="col"
                    componentClass="div"
                    md={6}
                    xs={12}
                  >
                    <Unknown
-                     label="Granny annexe (number of rooms)"
-                     name="granny_annexe"
-                     tooltipContent="granny_annexe tooltip"
+                     label="Craft/Hobby room"
+                     name="craft_hobby_room"
+                     prefix="m²"
+                     tooltipContent="craft_hobby_room tooltip"
                    />
                  </Col>
                </Row>
-             </Grid>
-           </FormPanel>,
-           <Grid
-             bsClass="container"
-             componentClass="div"
-             fluid={false}
-           >
                <Row
                  bsClass="row"
                  componentClass="div"
                >
                  <Col
                    bsClass="col"
                    componentClass="div"
-                 md={10}
+                   md={6}
                    xs={12}
                  >
                    <Unknown
-                   label="Number of on-site garage parking spaces (within building volume)"
-                   name="number_of_garages_house"
-                   rangeEnd={5}
-                   tooltipContent="number_of_garages_house tooltip"
+                     label="Granny annexe (number of rooms)"
+                     name="granny_annexe"
+                     tooltipContent="granny_annexe tooltip"
                    />
                  </Col>
                </Row>
-             <Row
-               bsClass="row"
-               componentClass="div"
-             >
-               <Col
-                 bsClass="col"
-                 componentClass="div"
-                 md={10}
-                 xs={12}
-               >
-                 <Unknown
-                   label="Number of on-site garage parking spaces (separate garage building)"
-                   name="number_of_garages_separate_building"
-                   rangeEnd={5}
-                   tooltipContent="number_of_garages_separate_building tooltip"
-                 />
-               </Col>
-             </Row>
-             <Row
-               bsClass="row"
-               componentClass="div"
-             >
-               <Col
-                 bsClass="col"
-                 componentClass="div"
-                 md={10}
-                 xs={12}
-               >
-                 <Unknown
-                   label="Number of off-site garage parking spaces"
-                   name="number_of_parking_spots_covered"
-                   rangeEnd={5}
-                   tooltipContent="number_of_parking_spots_covered tooltip"
-                 />
-               </Col>
-             </Row>
-             <Row
-               bsClass="row"
-               componentClass="div"
-             >
-               <Col
-                 bsClass="col"
-                 componentClass="div"
-                 md={10}
-                 xs={12}
-               >
-                 <Unknown
-                   label="Number of off-site outdoor parking spaces"
-                   name="number_of_parking_spots_uncovered"
-                   rangeEnd={5}
-                   tooltipContent="number_of_parking_spots_uncovered tooltip"
-                 />
-               </Col>
-             </Row>
-           </Grid>,
+             </Grid>
+           </FormPanel>,
+           false,
            <p
              className="title"
            >
              Quality evaluation
            </p>,
@@ -5575,11 +5384,10 @@
                    />
                  </Col>
                </Row>
              </Grid>
            </FormPanel>,
-           false,
            <Grid
              bsClass="container"
              componentClass="div"
              fluid={false}
            >
@@ -5587,10 +5395,70 @@
                bsClass="row"
                componentClass="div"
              >
                <Col
                  bsClass="col"
+                 componentClass="div"
+                 md={10}
+                 xs={12}
+               >
+                 <Unknown
+                   label="Number of outdoor parking spaces"
+                   name="apartments_number_of_outdoor_parking_spaces"
+                   rangeEnd={5}
+                   tooltipContent="apartments_number_of_outdoor_parking_spaces tooltip"
+                 />
+               </Col>
+             </Row>
+             <Row
+               bsClass="row"
+               componentClass="div"
+             >
+               <Col
+                 bsClass="col"
+                 componentClass="div"
+                 md={10}
+                 xs={12}
+               >
+                 <Unknown
+                   label="No. Of garage / indoor parking spaces: underground"
+                   name="apartments_number_of_garages"
+                   rangeEnd={5}
+                   tooltipContent="No. Of garage / indoor parking spaces: underground tooltip"
+                 />
+               </Col>
+             </Row>
+             <Row
+               bsClass="row"
+               componentClass="div"
+             >
+               <Col
+                 bsClass="col"
+                 componentClass="div"
+                 md={10}
+                 xs={12}
+               >
+                 <Unknown
+                   label="No. Of garage / indoor parking spaces: individual"
+                   name="apartments_number_of_garages_individual"
+                   rangeEnd={5}
+                   tooltipContent="No. Of garage / indoor parking spaces: individual tooltip"
+                 />
+               </Col>
+             </Row>
+           </Grid>,
+           <Grid
+             bsClass="container"
+             componentClass="div"
+             fluid={false}
+           >
+             <Row
+               bsClass="row"
+               componentClass="div"
+             >
+               <Col
+                 bsClass="col"
                  className="support-house-sell"
                  componentClass="div"
                  md={12}
                  xs={12}
                >
@@ -6251,14 +6119,13 @@
                    componentClass="div"
                    md={6}
                    xs={12}
                  >
                    <Unknown
-                     label="Building Volume"
-                     name="building_volume"
-                     prefix="m³"
-                     tooltipContent="building_volume tooltip"
+                     label="Number of apartments"
+                     name="number_of_apartments"
+                     tooltipContent="number_of_apartments tooltip"
                    />
                  </Col>
                </Row>
                <Row
                  bsClass="row"
@@ -6269,42 +6136,26 @@
                    componentClass="div"
                    md={6}
                    xs={12}
                  >
                    <Unknown
-                     label="Site Area"
-                     name="site_area"
-                     prefix="m²"
-                     tooltipContent="site_area tooltip"
+                     label="Floor"
+                     name="floor_number"
+                     tooltipContent="floor number tooltip"
                    />
                  </Col>
                  <Col
                    bsClass="col"
                    componentClass="div"
                    md={6}
                    xs={12}
                  >
                    <Unknown
-                     label="Standarts for the volume"
-                     name="building_volume_standard"
-                     options={
-                       Array [
-                         Array [
-                           1,
-                           "SIA116",
-                         ],
-                         Array [
-                           2,
-                           "BIC",
-                         ],
-                         Array [
-                           3,
-                           "SIA416",
-                         ],
-                       ]
-                     }
-                     tooltipContent="Building volume tooltip"
+                     label="Balcony/Terrace place"
+                     name="balcony_terrace_place"
+                     prefix="m²"
+                     tooltipContent="balcony_terrace_place tooltip"
                    />
                  </Col>
                </Row>
                <Row
                  bsClass="row"
@@ -6320,10 +6171,23 @@
                      label="Financing with right of residence"
                      name="is_financing_with_right_of_residence"
                      tooltipContent="is_financing_with_right_of_residence tooltip"
                    />
                  </Col>
+                 <Col
+                   bsClass="col"
+                   componentClass="div"
+                   md={6}
+                   xs={12}
+                 >
+                   <Unknown
+                     label="Craft/Hobby room"
+                     name="craft_hobby_room"
+                     prefix="m²"
+                     tooltipContent="craft_hobby_room tooltip"
+                   />
+                 </Col>
                </Row>
                <Row
                  bsClass="row"
                  componentClass="div"
                >
@@ -6538,17 +6402,17 @@
                      componentClass="div"
                      md={6}
                      xs={12}
                    >
                      <Unknown
-                       label="Building Volume"
-                       name="building_volume"
-                       prefix="m³"
-                       tooltipContent="building_volume tooltip"
+                       label="Number of apartments"
+                       name="number_of_apartments"
+                       tooltipContent="number_of_apartments tooltip"
                      />
                    </Col>
                  </Row>,
+                 false,
                  <Row
                    bsClass="row"
                    componentClass="div"
                  >
                    <Col
@@ -6556,46 +6420,29 @@
                      componentClass="div"
                      md={6}
                      xs={12}
                    >
                      <Unknown
-                       label="Site Area"
-                       name="site_area"
-                       prefix="m²"
-                       tooltipContent="site_area tooltip"
+                       label="Floor"
+                       name="floor_number"
+                       tooltipContent="floor number tooltip"
                      />
                    </Col>
                    <Col
                      bsClass="col"
                      componentClass="div"
                      md={6}
                      xs={12}
                    >
                      <Unknown
-                       label="Standarts for the volume"
-                       name="building_volume_standard"
-                       options={
-                         Array [
-                           Array [
-                             1,
-                             "SIA116",
-                           ],
-                           Array [
-                             2,
-                             "BIC",
-                           ],
-                           Array [
-                             3,
-                             "SIA416",
-                           ],
-                         ]
-                       }
-                       tooltipContent="Building volume tooltip"
+                       label="Balcony/Terrace place"
+                       name="balcony_terrace_place"
+                       prefix="m²"
+                       tooltipContent="balcony_terrace_place tooltip"
                      />
                    </Col>
                  </Row>,
-                 false,
                  <Row
                    bsClass="row"
                    componentClass="div"
                  >
                    <Col
@@ -6608,10 +6455,23 @@
                        label="Financing with right of residence"
                        name="is_financing_with_right_of_residence"
                        tooltipContent="is_financing_with_right_of_residence tooltip"
                      />
                    </Col>
+                   <Col
+                     bsClass="col"
+                     componentClass="div"
+                     md={6}
+                     xs={12}
+                   >
+                     <Unknown
+                       label="Craft/Hobby room"
+                       name="craft_hobby_room"
+                       prefix="m²"
+                       tooltipContent="craft_hobby_room tooltip"
+                     />
+                   </Col>
                  </Row>,
                  <Row
                    bsClass="row"
                    componentClass="div"
                  >
@@ -7165,24 +7025,23 @@
                          name="living_space"
                          prefix="m²"
                          tooltipContent="Living space tooltip"
                        />
                      </Col>,
+                     false,
                      <Col
                        bsClass="col"
                        componentClass="div"
                        md={6}
                        xs={12}
                      >
                        <Unknown
-                         label="Building Volume"
-                         name="building_volume"
-                         prefix="m³"
-                         tooltipContent="building_volume tooltip"
+                         label="Number of apartments"
+                         name="number_of_apartments"
+                         tooltipContent="number_of_apartments tooltip"
                        />
                      </Col>,
-                     false,
                    ],
                    "componentClass": "div",
                  },
                  "ref": null,
                  "rendered": Array [
@@ -7217,21 +7076,21 @@
                        "rendered": null,
                        "type": [Function anonymous],
                      },
                      "type": [Function Col],
                    },
+                   false,
                    Object {
                      "instance": null,
                      "key": undefined,
                      "nodeType": "class",
                      "props": Object {
                        "bsClass": "col",
                        "children": <Unknown
-                         label="Building Volume"
-                         name="building_volume"
-                         prefix="m³"
-                         tooltipContent="building_volume tooltip"
+                         label="Number of apartments"
+                         name="number_of_apartments"
+                         tooltipContent="number_of_apartments tooltip"
                        />,
                        "componentClass": "div",
                        "md": 6,
                        "xs": 12,
                      },
@@ -7239,25 +7098,24 @@
                      "rendered": Object {
                        "instance": null,
                        "key": undefined,
                        "nodeType": "function",
                        "props": Object {
-                         "label": "Building Volume",
-                         "name": "building_volume",
-                         "prefix": "m³",
-                         "tooltipContent": "building_volume tooltip",
+                         "label": "Number of apartments",
+                         "name": "number_of_apartments",
+                         "tooltipContent": "number_of_apartments tooltip",
                        },
                        "ref": null,
                        "rendered": null,
                        "type": [Function anonymous],
                      },
                      "type": [Function Col],
                    },
-                   false,
                  ],
                  "type": [Function Row],
                },
+               false,
                Object {
                  "instance": null,
                  "key": undefined,
                  "nodeType": "class",
                  "props": Object {
@@ -7268,42 +7126,26 @@
                        componentClass="div"
                        md={6}
                        xs={12}
                      >
                        <Unknown
-                         label="Site Area"
-                         name="site_area"
-                         prefix="m²"
-                         tooltipContent="site_area tooltip"
+                         label="Floor"
+                         name="floor_number"
+                         tooltipContent="floor number tooltip"
                        />
                      </Col>,
                      <Col
                        bsClass="col"
                        componentClass="div"
                        md={6}
                        xs={12}
                      >
                        <Unknown
-                         label="Standarts for the volume"
-                         name="building_volume_standard"
-                         options={
-                           Array [
-                             Array [
-                               1,
-                               "SIA116",
-                             ],
-                             Array [
-                               2,
-                               "BIC",
-                             ],
-                             Array [
-                               3,
-                               "SIA416",
-                             ],
-                           ]
-                         }
-                         tooltipContent="Building volume tooltip"
+                         label="Balcony/Terrace place"
+                         name="balcony_terrace_place"
+                         prefix="m²"
+                         tooltipContent="balcony_terrace_place tooltip"
                        />
                      </Col>,
                    ],
                    "componentClass": "div",
                  },
@@ -7314,14 +7156,13 @@
                      "key": undefined,
                      "nodeType": "class",
                      "props": Object {
                        "bsClass": "col",
                        "children": <Unknown
-                         label="Site Area"
-                         name="site_area"
-                         prefix="m²"
-                         tooltipContent="site_area tooltip"
+                         label="Floor"
+                         name="floor_number"
+                         tooltipContent="floor number tooltip"
                        />,
                        "componentClass": "div",
                        "md": 6,
                        "xs": 12,
                      },
@@ -7329,14 +7170,13 @@
                      "rendered": Object {
                        "instance": null,
                        "key": undefined,
                        "nodeType": "function",
                        "props": Object {
-                         "label": "Site Area",
-                         "name": "site_area",
-                         "prefix": "m²",
-                         "tooltipContent": "site_area tooltip",
+                         "label": "Floor",
+                         "name": "floor_number",
+                         "tooltipContent": "floor number tooltip",
                        },
                        "ref": null,
                        "rendered": null,
                        "type": [Function anonymous],
                      },
@@ -7347,29 +7187,14 @@
                      "key": undefined,
                      "nodeType": "class",
                      "props": Object {
                        "bsClass": "col",
                        "children": <Unknown
-                         label="Standarts for the volume"
-                         name="building_volume_standard"
-                         options={
-                           Array [
-                             Array [
-                               1,
-                               "SIA116",
-                             ],
-                             Array [
-                               2,
-                               "BIC",
-                             ],
-                             Array [
-                               3,
-                               "SIA416",
-                             ],
-                           ]
-                         }
-                         tooltipContent="Building volume tooltip"
+                         label="Balcony/Terrace place"
+                         name="balcony_terrace_place"
+                         prefix="m²"
+                         tooltipContent="balcony_terrace_place tooltip"
                        />,
                        "componentClass": "div",
                        "md": 6,
                        "xs": 12,
                      },
@@ -7377,38 +7202,24 @@
                      "rendered": Object {
                        "instance": null,
                        "key": undefined,
                        "nodeType": "function",
                        "props": Object {
-                         "label": "Standarts for the volume",
-                         "name": "building_volume_standard",
-                         "options": Array [
-                           Array [
-                             1,
-                             "SIA116",
-                           ],
-                           Array [
-                             2,
-                             "BIC",
-                           ],
-                           Array [
-                             3,
-                             "SIA416",
-                           ],
-                         ],
-                         "tooltipContent": "Building volume tooltip",
+                         "label": "Balcony/Terrace place",
+                         "name": "balcony_terrace_place",
+                         "prefix": "m²",
+                         "tooltipContent": "balcony_terrace_place tooltip",
                        },
                        "ref": null,
                        "rendered": null,
                        "type": [Function anonymous],
                      },
                      "type": [Function Col],
                    },
                  ],
                  "type": [Function Row],
                },
-               false,
                Object {
                  "instance": null,
                  "key": undefined,
                  "nodeType": "class",
                  "props": Object {
@@ -7424,11 +7235,23 @@
                          label="Financing with right of residence"
                          name="is_financing_with_right_of_residence"
                          tooltipContent="is_financing_with_right_of_residence tooltip"
                        />
                      </Col>,
-                     false,
+                     <Col
+                       bsClass="col"
+                       componentClass="div"
+                       md={6}
+                       xs={12}
+                     >
+                       <Unknown
+                         label="Craft/Hobby room"
+                         name="craft_hobby_room"
+                         prefix="m²"
+                         tooltipContent="craft_hobby_room tooltip"
+                       />
+                     </Col>,
                    ],
                    "componentClass": "div",
                  },
                  "ref": null,
                  "rendered": Array [
@@ -7461,45 +7284,21 @@
                        "rendered": null,
                        "type": [Function anonymous],
                      },
                      "type": [Function Col],
                    },
-                   false,
-                 ],
-                 "type": [Function Row],
-               },
                    Object {
                      "instance": null,
                      "key": undefined,
                      "nodeType": "class",
                      "props": Object {
-                   "bsClass": "row",
-                   "children": <Col
-                     bsClass="col"
-                     componentClass="div"
-                     md={6}
-                     xs={12}
-                   >
-                     <Unknown
-                       label="Granny annexe (number of rooms)"
-                       name="granny_annexe"
-                       tooltipContent="granny_annexe tooltip"
-                     />
-                   </Col>,
-                   "componentClass": "div",
-                 },
-                 "ref": null,
-                 "rendered": Object {
-                   "instance": null,
-                   "key": undefined,
-                   "nodeType": "class",
-                   "props": Object {
                        "bsClass": "col",
                        "children": <Unknown
-                       label="Granny annexe (number of rooms)"
-                       name="granny_annexe"
-                       tooltipContent="granny_annexe tooltip"
+                         label="Craft/Hobby room"
+                         name="craft_hobby_room"
+                         prefix="m²"
+                         tooltipContent="craft_hobby_room tooltip"
                        />,
                        "componentClass": "div",
                        "md": 6,
                        "xs": 12,
                      },
@@ -7507,167 +7306,22 @@
                      "rendered": Object {
                        "instance": null,
                        "key": undefined,
                        "nodeType": "function",
                        "props": Object {
-                       "label": "Granny annexe (number of rooms)",
-                       "name": "granny_annexe",
-                       "tooltipContent": "granny_annexe tooltip",
+                         "label": "Craft/Hobby room",
+                         "name": "craft_hobby_room",
+                         "prefix": "m²",
+                         "tooltipContent": "craft_hobby_room tooltip",
                        },
                        "ref": null,
                        "rendered": null,
                        "type": [Function anonymous],
                      },
                      "type": [Function Col],
                    },
-                 "type": [Function Row],
-               },
                  ],
-             "type": [Function Grid],
-           },
-           "type": [Function FormPanel],
-         },
-         Object {
-           "instance": null,
-           "key": undefined,
-           "nodeType": "class",
-           "props": Object {
-             "bsClass": "container",
-             "children": Array [
-               <Row
-                 bsClass="row"
-                 componentClass="div"
-               >
-                 <Col
-                   bsClass="col"
-                   componentClass="div"
-                   md={10}
-                   xs={12}
-                 >
-                   <Unknown
-                     label="Number of on-site garage parking spaces (within building volume)"
-                     name="number_of_garages_house"
-                     rangeEnd={5}
-                     tooltipContent="number_of_garages_house tooltip"
-                   />
-                 </Col>
-               </Row>,
-               <Row
-                 bsClass="row"
-                 componentClass="div"
-               >
-                 <Col
-                   bsClass="col"
-                   componentClass="div"
-                   md={10}
-                   xs={12}
-                 >
-                   <Unknown
-                     label="Number of on-site garage parking spaces (separate garage building)"
-                     name="number_of_garages_separate_building"
-                     rangeEnd={5}
-                     tooltipContent="number_of_garages_separate_building tooltip"
-                   />
-                 </Col>
-               </Row>,
-               <Row
-                 bsClass="row"
-                 componentClass="div"
-               >
-                 <Col
-                   bsClass="col"
-                   componentClass="div"
-                   md={10}
-                   xs={12}
-                 >
-                   <Unknown
-                     label="Number of off-site garage parking spaces"
-                     name="number_of_parking_spots_covered"
-                     rangeEnd={5}
-                     tooltipContent="number_of_parking_spots_covered tooltip"
-                   />
-                 </Col>
-               </Row>,
-               <Row
-                 bsClass="row"
-                 componentClass="div"
-               >
-                 <Col
-                   bsClass="col"
-                   componentClass="div"
-                   md={10}
-                   xs={12}
-                 >
-                   <Unknown
-                     label="Number of off-site outdoor parking spaces"
-                     name="number_of_parking_spots_uncovered"
-                     rangeEnd={5}
-                     tooltipContent="number_of_parking_spots_uncovered tooltip"
-                   />
-                 </Col>
-               </Row>,
-             ],
-             "componentClass": "div",
-             "fluid": false,
-           },
-           "ref": null,
-           "rendered": Array [
-             Object {
-               "instance": null,
-               "key": undefined,
-               "nodeType": "class",
-               "props": Object {
-                 "bsClass": "row",
-                 "children": <Col
-                   bsClass="col"
-                   componentClass="div"
-                   md={10}
-                   xs={12}
-                 >
-                   <Unknown
-                     label="Number of on-site garage parking spaces (within building volume)"
-                     name="number_of_garages_house"
-                     rangeEnd={5}
-                     tooltipContent="number_of_garages_house tooltip"
-                   />
-                 </Col>,
-                 "componentClass": "div",
-               },
-               "ref": null,
-               "rendered": Object {
-                 "instance": null,
-                 "key": undefined,
-                 "nodeType": "class",
-                 "props": Object {
-                   "bsClass": "col",
-                   "children": <Unknown
-                     label="Number of on-site garage parking spaces (within building volume)"
-                     name="number_of_garages_house"
-                     rangeEnd={5}
-                     tooltipContent="number_of_garages_house tooltip"
-                   />,
-                   "componentClass": "div",
-                   "md": 10,
-                   "xs": 12,
-                 },
-                 "ref": null,
-                 "rendered": Object {
-                   "instance": null,
-                   "key": undefined,
-                   "nodeType": "function",
-                   "props": Object {
-                     "label": "Number of on-site garage parking spaces (within building volume)",
-                     "name": "number_of_garages_house",
-                     "rangeEnd": 5,
-                     "tooltipContent": "number_of_garages_house tooltip",
-                   },
-                   "ref": null,
-                   "rendered": null,
-                   "type": [Function anonymous],
-                 },
-                 "type": [Function Col],
-               },
                  "type": [Function Row],
                },
                Object {
                  "instance": null,
                  "key": undefined,
@@ -7675,18 +7329,17 @@
                  "props": Object {
                    "bsClass": "row",
                    "children": <Col
                      bsClass="col"
                      componentClass="div"
-                   md={10}
+                     md={6}
                      xs={12}
                    >
                      <Unknown
-                     label="Number of on-site garage parking spaces (separate garage building)"
-                     name="number_of_garages_separate_building"
-                     rangeEnd={5}
-                     tooltipContent="number_of_garages_separate_building tooltip"
+                       label="Granny annexe (number of rooms)"
+                       name="granny_annexe"
+                       tooltipContent="granny_annexe tooltip"
                      />
                    </Col>,
                    "componentClass": "div",
                  },
                  "ref": null,
@@ -7695,155 +7348,42 @@
                    "key": undefined,
                    "nodeType": "class",
                    "props": Object {
                      "bsClass": "col",
                      "children": <Unknown
-                     label="Number of on-site garage parking spaces (separate garage building)"
-                     name="number_of_garages_separate_building"
-                     rangeEnd={5}
-                     tooltipContent="number_of_garages_separate_building tooltip"
+                       label="Granny annexe (number of rooms)"
+                       name="granny_annexe"
+                       tooltipContent="granny_annexe tooltip"
                      />,
                      "componentClass": "div",
-                   "md": 10,
+                     "md": 6,
                      "xs": 12,
                    },
                    "ref": null,
                    "rendered": Object {
                      "instance": null,
                      "key": undefined,
                      "nodeType": "function",
                      "props": Object {
-                     "label": "Number of on-site garage parking spaces (separate garage building)",
-                     "name": "number_of_garages_separate_building",
-                     "rangeEnd": 5,
-                     "tooltipContent": "number_of_garages_separate_building tooltip",
+                       "label": "Granny annexe (number of rooms)",
+                       "name": "granny_annexe",
+                       "tooltipContent": "granny_annexe tooltip",
                      },
                      "ref": null,
                      "rendered": null,
                      "type": [Function anonymous],
                    },
                    "type": [Function Col],
                  },
                  "type": [Function Row],
                },
-             Object {
-               "instance": null,
-               "key": undefined,
-               "nodeType": "class",
-               "props": Object {
-                 "bsClass": "row",
-                 "children": <Col
-                   bsClass="col"
-                   componentClass="div"
-                   md={10}
-                   xs={12}
-                 >
-                   <Unknown
-                     label="Number of off-site garage parking spaces"
-                     name="number_of_parking_spots_covered"
-                     rangeEnd={5}
-                     tooltipContent="number_of_parking_spots_covered tooltip"
-                   />
-                 </Col>,
-                 "componentClass": "div",
-               },
-               "ref": null,
-               "rendered": Object {
-                 "instance": null,
-                 "key": undefined,
-                 "nodeType": "class",
-                 "props": Object {
-                   "bsClass": "col",
-                   "children": <Unknown
-                     label="Number of off-site garage parking spaces"
-                     name="number_of_parking_spots_covered"
-                     rangeEnd={5}
-                     tooltipContent="number_of_parking_spots_covered tooltip"
-                   />,
-                   "componentClass": "div",
-                   "md": 10,
-                   "xs": 12,
-                 },
-                 "ref": null,
-                 "rendered": Object {
-                   "instance": null,
-                   "key": undefined,
-                   "nodeType": "function",
-                   "props": Object {
-                     "label": "Number of off-site garage parking spaces",
-                     "name": "number_of_parking_spots_covered",
-                     "rangeEnd": 5,
-                     "tooltipContent": "number_of_parking_spots_covered tooltip",
-                   },
-                   "ref": null,
-                   "rendered": null,
-                   "type": [Function anonymous],
-                 },
-                 "type": [Function Col],
-               },
-               "type": [Function Row],
-             },
-             Object {
-               "instance": null,
-               "key": undefined,
-               "nodeType": "class",
-               "props": Object {
-                 "bsClass": "row",
-                 "children": <Col
-                   bsClass="col"
-                   componentClass="div"
-                   md={10}
-                   xs={12}
-                 >
-                   <Unknown
-                     label="Number of off-site outdoor parking spaces"
-                     name="number_of_parking_spots_uncovered"
-                     rangeEnd={5}
-                     tooltipContent="number_of_parking_spots_uncovered tooltip"
-                   />
-                 </Col>,
-                 "componentClass": "div",
-               },
-               "ref": null,
-               "rendered": Object {
-                 "instance": null,
-                 "key": undefined,
-                 "nodeType": "class",
-                 "props": Object {
-                   "bsClass": "col",
-                   "children": <Unknown
-                     label="Number of off-site outdoor parking spaces"
-                     name="number_of_parking_spots_uncovered"
-                     rangeEnd={5}
-                     tooltipContent="number_of_parking_spots_uncovered tooltip"
-                   />,
-                   "componentClass": "div",
-                   "md": 10,
-                   "xs": 12,
-                 },
-                 "ref": null,
-                 "rendered": Object {
-                   "instance": null,
-                   "key": undefined,
-                   "nodeType": "function",
-                   "props": Object {
-                     "label": "Number of off-site outdoor parking spaces",
-                     "name": "number_of_parking_spots_uncovered",
-                     "rangeEnd": 5,
-                     "tooltipContent": "number_of_parking_spots_uncovered tooltip",
-                   },
-                   "ref": null,
-                   "rendered": null,
-                   "type": [Function anonymous],
-                 },
-                 "type": [Function Col],
-               },
-               "type": [Function Row],
-             },
              ],
              "type": [Function Grid],
            },
+           "type": [Function FormPanel],
+         },
+         false,
          Object {
            "instance": null,
            "key": undefined,
            "nodeType": "host",
            "props": Object {
@@ -9335,11 +8875,10 @@
              ],
              "type": [Function Grid],
            },
            "type": [Function FormPanel],
          },
-         false,
          Object {
            "instance": null,
            "key": undefined,
            "nodeType": "class",
            "props": Object {
@@ -9349,10 +8888,251 @@
                  bsClass="row"
                  componentClass="div"
                >
                  <Col
                    bsClass="col"
+                   componentClass="div"
+                   md={10}
+                   xs={12}
+                 >
+                   <Unknown
+                     label="Number of outdoor parking spaces"
+                     name="apartments_number_of_outdoor_parking_spaces"
+                     rangeEnd={5}
+                     tooltipContent="apartments_number_of_outdoor_parking_spaces tooltip"
+                   />
+                 </Col>
+               </Row>,
+               <Row
+                 bsClass="row"
+                 componentClass="div"
+               >
+                 <Col
+                   bsClass="col"
+                   componentClass="div"
+                   md={10}
+                   xs={12}
+                 >
+                   <Unknown
+                     label="No. Of garage / indoor parking spaces: underground"
+                     name="apartments_number_of_garages"
+                     rangeEnd={5}
+                     tooltipContent="No. Of garage / indoor parking spaces: underground tooltip"
+                   />
+                 </Col>
+               </Row>,
+               <Row
+                 bsClass="row"
+                 componentClass="div"
+               >
+                 <Col
+                   bsClass="col"
+                   componentClass="div"
+                   md={10}
+                   xs={12}
+                 >
+                   <Unknown
+                     label="No. Of garage / indoor parking spaces: individual"
+                     name="apartments_number_of_garages_individual"
+                     rangeEnd={5}
+                     tooltipContent="No. Of garage / indoor parking spaces: individual tooltip"
+                   />
+                 </Col>
+               </Row>,
+             ],
+             "componentClass": "div",
+             "fluid": false,
+           },
+           "ref": null,
+           "rendered": Array [
+             Object {
+               "instance": null,
+               "key": undefined,
+               "nodeType": "class",
+               "props": Object {
+                 "bsClass": "row",
+                 "children": <Col
+                   bsClass="col"
+                   componentClass="div"
+                   md={10}
+                   xs={12}
+                 >
+                   <Unknown
+                     label="Number of outdoor parking spaces"
+                     name="apartments_number_of_outdoor_parking_spaces"
+                     rangeEnd={5}
+                     tooltipContent="apartments_number_of_outdoor_parking_spaces tooltip"
+                   />
+                 </Col>,
+                 "componentClass": "div",
+               },
+               "ref": null,
+               "rendered": Object {
+                 "instance": null,
+                 "key": undefined,
+                 "nodeType": "class",
+                 "props": Object {
+                   "bsClass": "col",
+                   "children": <Unknown
+                     label="Number of outdoor parking spaces"
+                     name="apartments_number_of_outdoor_parking_spaces"
+                     rangeEnd={5}
+                     tooltipContent="apartments_number_of_outdoor_parking_spaces tooltip"
+                   />,
+                   "componentClass": "div",
+                   "md": 10,
+                   "xs": 12,
+                 },
+                 "ref": null,
+                 "rendered": Object {
+                   "instance": null,
+                   "key": undefined,
+                   "nodeType": "function",
+                   "props": Object {
+                     "label": "Number of outdoor parking spaces",
+                     "name": "apartments_number_of_outdoor_parking_spaces",
+                     "rangeEnd": 5,
+                     "tooltipContent": "apartments_number_of_outdoor_parking_spaces tooltip",
+                   },
+                   "ref": null,
+                   "rendered": null,
+                   "type": [Function anonymous],
+                 },
+                 "type": [Function Col],
+               },
+               "type": [Function Row],
+             },
+             Object {
+               "instance": null,
+               "key": undefined,
+               "nodeType": "class",
+               "props": Object {
+                 "bsClass": "row",
+                 "children": <Col
+                   bsClass="col"
+                   componentClass="div"
+                   md={10}
+                   xs={12}
+                 >
+                   <Unknown
+                     label="No. Of garage / indoor parking spaces: underground"
+                     name="apartments_number_of_garages"
+                     rangeEnd={5}
+                     tooltipContent="No. Of garage / indoor parking spaces: underground tooltip"
+                   />
+                 </Col>,
+                 "componentClass": "div",
+               },
+               "ref": null,
+               "rendered": Object {
+                 "instance": null,
+                 "key": undefined,
+                 "nodeType": "class",
+                 "props": Object {
+                   "bsClass": "col",
+                   "children": <Unknown
+                     label="No. Of garage / indoor parking spaces: underground"
+                     name="apartments_number_of_garages"
+                     rangeEnd={5}
+                     tooltipContent="No. Of garage / indoor parking spaces: underground tooltip"
+                   />,
+                   "componentClass": "div",
+                   "md": 10,
+                   "xs": 12,
+                 },
+                 "ref": null,
+                 "rendered": Object {
+                   "instance": null,
+                   "key": undefined,
+                   "nodeType": "function",
+                   "props": Object {
+                     "label": "No. Of garage / indoor parking spaces: underground",
+                     "name": "apartments_number_of_garages",
+                     "rangeEnd": 5,
+                     "tooltipContent": "No. Of garage / indoor parking spaces: underground tooltip",
+                   },
+                   "ref": null,
+                   "rendered": null,
+                   "type": [Function anonymous],
+                 },
+                 "type": [Function Col],
+               },
+               "type": [Function Row],
+             },
+             Object {
+               "instance": null,
+               "key": undefined,
+               "nodeType": "class",
+               "props": Object {
+                 "bsClass": "row",
+                 "children": <Col
+                   bsClass="col"
+                   componentClass="div"
+                   md={10}
+                   xs={12}
+                 >
+                   <Unknown
+                     label="No. Of garage / indoor parking spaces: individual"
+                     name="apartments_number_of_garages_individual"
+                     rangeEnd={5}
+                     tooltipContent="No. Of garage / indoor parking spaces: individual tooltip"
+                   />
+                 </Col>,
+                 "componentClass": "div",
+               },
+               "ref": null,
+               "rendered": Object {
+                 "instance": null,
+                 "key": undefined,
+                 "nodeType": "class",
+                 "props": Object {
+                   "bsClass": "col",
+                   "children": <Unknown
+                     label="No. Of garage / indoor parking spaces: individual"
+                     name="apartments_number_of_garages_individual"
+                     rangeEnd={5}
+                     tooltipContent="No. Of garage / indoor parking spaces: individual tooltip"
+                   />,
+                   "componentClass": "div",
+                   "md": 10,
+                   "xs": 12,
+                 },
+                 "ref": null,
+                 "rendered": Object {
+                   "instance": null,
+                   "key": undefined,
+                   "nodeType": "function",
+                   "props": Object {
+                     "label": "No. Of garage / indoor parking spaces: individual",
+                     "name": "apartments_number_of_garages_individual",
+                     "rangeEnd": 5,
+                     "tooltipContent": "No. Of garage / indoor parking spaces: individual tooltip",
+                   },
+                   "ref": null,
+                   "rendered": null,
+                   "type": [Function anonymous],
+                 },
+                 "type": [Function Col],
+               },
+               "type": [Function Row],
+             },
+           ],
+           "type": [Function Grid],
+         },
+         Object {
+           "instance": null,
+           "key": undefined,
+           "nodeType": "class",
+           "props": Object {
+             "bsClass": "container",
+             "children": Array [
+               <Row
+                 bsClass="row"
+                 componentClass="div"
+               >
+                 <Col
+                   bsClass="col"
                    className="support-house-sell"
                    componentClass="div"
                    md={12}
                    xs={12}
                  >
`;
