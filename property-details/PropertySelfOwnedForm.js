import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { TextField, NumberField, CurrencyField, SelectField, CheckboxField, TextAreaField, SelectRangeField } from 'shared/forms/fields';
import FormPanel from 'shared/forms/FormPanel';
import isPropertyTypeHouse from 'shared/utils/isPropertyTypeHouse';
import getChoicesFor from 'shared/utils/getChoicesFor';
import { yearRange, zipCode } from 'shared/constants/patterns';
import ButtonsToolbar from 'shared/widgets/buttons/ButtonsToolbar';

export default function PropertySelfOwnedForm({propertyType, ...restProps}) {
    return (
        <form className="form-vertical">
            <h1 className="title">{pgettext('mortgage-object-evaluation', 'Your property')}</h1>
            <Grid>
                <Row>
                    <Col xs={12} md={6}>
                        <TextField
                            name="street"
                            label={pgettext('mortgage-object-evaluation', 'Street')}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <TextField
                            name="street_number"
                            label={pgettext('mortgage-object-evaluation', 'Street number')}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <NumberField
                            name="zip_code"
                            label={pgettext('mortgage-object-evaluation', 'Zip')}
                            validate={zipCode}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <TextField
                            name="city"
                            label={pgettext('mortgage-object-evaluation', 'City')}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <CurrencyField
                            name="value_of_property"
                            prefix="CHF"
                            label={pgettext('mortgage-object-evaluation', 'Property Value')}
                            tooltipContent={pgettext('value-of-property-tooltip', 'Value of property tooltip')}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <CurrencyField
                            name="reference_value"
                            prefix="CHF"
                            label={pgettext('mortgage-object-evaluation', 'Purchasing Price')}
                            tooltipContent={pgettext('reference-value-tooltip', 'Reference value tooltip')}
                        />
                    </Col>
                </Row>
            </Grid>

            <FormPanel
                componentClass="h2"
                panelTitle={pgettext('mortgage-object-evaluation', 'Property value')}
                isCollapsible={true}>
                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            <SelectField
                                name="property_type"
                                label={pgettext('mortgage-object-evaluation', 'Property Type')}
                                tooltipContent={pgettext('property_type-tooltip', 'property_type tooltip')}
                                options={getChoicesFor('qa.property_type')}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <CheckboxField
                                name="is_construction_financing_required"
                                label={pgettext('mortgage-object-evaluation', 'Construction Financing')}
                                tooltipContent={pgettext('is_construction_financing_required-tooltip', 'is_construction_financing_required tooltip')}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <SelectField
                                name="class_of_object"
                                label={pgettext('mortgage-object-evaluation', 'Class of Property')}
                                tooltipContent={pgettext('class_of_object-tooltip', 'Class of Property')}
                                options={getChoicesFor('mortgage.class_of_object')}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <NumberField
                                name="year_of_construction"
                                label={pgettext('mortgage-object-evaluation', 'Construction Year')}
                                tooltipContent={pgettext('year_of_construction-tooltip', 'year_of_construction tooltip')}
                                validate={yearRange}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <SelectRangeField
                                name="number_of_rooms"
                                label={pgettext('mortgage-object-evaluation', 'Number of Rooms')}
                                tooltipContent={pgettext('number-of-rooms-tooltip', 'Number of rooms tooltip')}
                                rangeStart={1}
                                rangeEnd={21}
                                rangeStep={0.5}
                                emptyOption={true}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <NumberField
                                name="living_space"
                                label={pgettext('mortgage-object-evaluation', 'Living space')}
                                prefix="m²"
                                tooltipContent={pgettext('leving_space-tooltip', 'Living space tooltip')}
                            />
                        </Col>
                        { propertyType && isPropertyTypeHouse(propertyType) &&
                            <Col xs={12} md={6}>
                                <NumberField
                                    name="building_volume"
                                    label={pgettext('mortgage-object-evaluation', 'Building Volume')}
                                    prefix="m³"
                                    tooltipContent={pgettext('building_volume-tooltip', 'building_volume tooltip')}
                                />
                            </Col>
                        }
                        { propertyType && !isPropertyTypeHouse(propertyType) &&
                            <Col xs={12} md={6}>
                                <NumberField
                                    name="number_of_apartments"
                                    label={pgettext('mortgage-object-evaluation', 'Number of apartments')}
                                    tooltipContent={pgettext('number_of_apartments-tooltip', 'number_of_apartments tooltip')}
                                />
                            </Col>
                        }
                    </Row>
                    { propertyType && isPropertyTypeHouse(propertyType) &&
                        <Row>
                            <Col xs={12} md={6}>
                                <NumberField
                                    name="site_area"
                                    label={pgettext('mortgage-object-evaluation', 'Site Area')}
                                    prefix="m²"
                                    tooltipContent={pgettext('site_area-tooltip', 'site_area tooltip')}
                                />
                            </Col>
                            <Col xs={12} md={6}>
                                <SelectField
                                    name="building_volume_standard"
                                    label={pgettext('mortgage-object-evaluation', 'Standarts for the volume')}
                                    options={getChoicesFor('qa.building_volume_standard')}
                                    tooltipContent={pgettext('building-volume-standard-tooltip', 'Building volume tooltip')}
                                />
                            </Col>
                        </Row>
                    }
                    { propertyType && !isPropertyTypeHouse(propertyType) &&
                        <Row>
                            <Col xs={12} md={6}>
                                <NumberField
                                    name="floor_number"
                                    label={pgettext('mortgage-object-evaluation', 'Floor')}
                                    tooltipContent={pgettext('floor_number-tooltip', 'floor number tooltip')}
                                />
                            </Col>
                            <Col xs={12} md={6}>
                                <NumberField
                                    name="balcony_terrace_place"
                                    prefix="m²"
                                    label={pgettext('mortgage-object-evaluation', 'Balcony/Terrace place')}
                                    tooltipContent={pgettext('balcony_terrace_place-tooltip', 'balcony_terrace_place tooltip')}
                                />
                            </Col>
                        </Row>
                    }
                    <Row>
                        <Col xs={12} md={6}>
                            <CheckboxField
                                name="is_financing_with_right_of_residence"
                                label={pgettext('mortgage-object-evaluation', 'Financing with right of residence')}
                                tooltipContent={pgettext('is_financing_with_right_of_residence-tooltip', 'is_financing_with_right_of_residence tooltip')}
                            />
                        </Col>
                        { propertyType && !isPropertyTypeHouse(propertyType) &&
                            <Col xs={12} md={6}>
                                <NumberField
                                    name="craft_hobby_room"
                                    prefix="m²"
                                    label={pgettext('mortgage-object-evaluation', 'Craft/Hobby room')}
                                    tooltipContent={pgettext('craft_hobby_room-tooltip', 'craft_hobby_room tooltip')}
                                />
                            </Col>
                        }
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <NumberField
                                name="granny_annexe"
                                label={pgettext('mortgage-object-evaluation', 'Granny annexe (number of rooms)')}
                                tooltipContent={pgettext('granny_annexe-tooltip', 'granny_annexe tooltip')}
                            />
                        </Col>
                    </Row>
                </Grid>
            </FormPanel>

            { propertyType && isPropertyTypeHouse(propertyType) &&
                <Grid>
                    <Row>
                        <Col xs={12} md={10}>
                            <SelectRangeField
                                name="number_of_garages_house"
                                label={pgettext('mortgage-object-evaluation', 'Number of on-site garage parking spaces (within building volume)')}
                                tooltipContent={pgettext('number_of_garages_house-tooltip', 'number_of_garages_house tooltip')}
                                rangeEnd={5}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={10}>
                            <SelectRangeField
                                name="number_of_garages_separate_building"
                                label={pgettext('mortgage-object-evaluation', 'Number of on-site garage parking spaces (separate garage building)')}
                                tooltipContent={pgettext('number_of_garages_separate_building-tooltip', 'number_of_garages_separate_building tooltip')}
                                rangeEnd={5}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={10}>
                            <SelectRangeField
                                name="number_of_parking_spots_covered"
                                label={pgettext('mortgage-object-evaluation', 'Number of off-site garage parking spaces')}
                                tooltipContent={pgettext('number_of_parking_spots_covered-tooltip', 'number_of_parking_spots_covered tooltip')}
                                rangeEnd={5}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={10}>
                            <SelectRangeField
                                name="number_of_parking_spots_uncovered"
                                label={pgettext('mortgage-object-evaluation', 'Number of off-site outdoor parking spaces')}
                                tooltipContent={pgettext('number_of_parking_spots_uncovered-tooltip', 'number_of_parking_spots_uncovered tooltip')}
                                rangeEnd={5}
                            />
                        </Col>
                    </Row>
                </Grid>
            }
            <p className="title">{pgettext('mortgage-object-evaluation', 'Quality evaluation')}</p>
            <Grid>
                <Row>
                    <Col xs={12} md={6}>
                        <SelectField
                            name="energy_standard"
                            label={pgettext('mortgage-object-evaluation', 'Energy standart')}
                            tooltipContent={pgettext('energy_standard-tooltip', 'energy_standard tooltip')}
                            options={getChoicesFor('mortgage.energy_standard')}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <NumberField
                            name="year_of_certificate"
                            label={pgettext('mortgage-object-evaluation', 'Year of Certificate')}
                            tooltipContent={pgettext('year_of_certificate-tooltip', 'Year of certificate tooltip')}
                            validate={yearRange}
                        />
                    </Col>
                </Row>
            </Grid>

            <FormPanel
                componentClass="h3"
                panelTitle={pgettext('mortgage-object-evaluation', 'Building condition')}
                isCollapsible={true}>
                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            <CheckboxField
                                name="quality_evaluation.renovation"
                                label={pgettext('mortgage-object-evaluation', 'Renovation')}
                                tooltipContent={pgettext('renovation-tooltip', 'renovation tooltip')}
                            />
                        </Col>
                    </Row>
                </Grid>
            </FormPanel>

            <FormPanel
                componentClass="h3"
                panelTitle={pgettext('mortgage-object-evaluation', 'Building quality')}
                isCollapsible={true}>
                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            <SelectField
                                name="quality_evaluation.heat_generation"
                                label={pgettext('mortgage-object-evaluation', 'Heat generation')}
                                tooltipContent={pgettext('heat_generation-tooltip', 'Heat generation tooltip')}
                                options={getChoicesFor('heatGenerationOptions')}
                                rowVisibleSize={8}
                                isMultiple={true}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <SelectField
                                name="quality_evaluation.heat_distribution"
                                label={pgettext('mortgage-object-evaluation', 'Heat distribution')}
                                tooltipContent={pgettext('heat_distribution-tooltip', 'Heat distribution tooltip')}
                                options={getChoicesFor('heatDistributionOptions')}
                                rowVisibleSize={4}
                                isMultiple={true}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <SelectField
                                name="quality_evaluation.other_facilities"
                                label={pgettext('mortgage-object-evaluation', 'Other facilities')}
                                tooltipContent={pgettext('other_facilities-tooltip', 'Other facilities tooltip')}
                                options={getChoicesFor('otherFacilitiesHouse')}
                                rowVisibleSize={12}
                                isMultiple={true}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <SelectRangeField
                                name="quality_evaluation.bathrooms_count"
                                label={pgettext('mortgage-object-evaluation', 'Family bathrooms')}
                                tooltipContent={pgettext('bathrooms_count-tooltip', 'Family bathrooms tooltip')}
                                rangeEnd={5}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <SelectRangeField
                                name="quality_evaluation.bathrooms_toilets_count"
                                label={pgettext('mortgage-object-evaluation', 'Bath/WC or shower/WC')}
                                tooltipContent={pgettext('bathrooms_toilets_count-tooltip', 'Bath/WC or shower/WC tooltip')}
                                rangeEnd={5}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <SelectRangeField
                                name="quality_evaluation.guest_toilets_count"
                                label={pgettext('mortgage-object-evaluation', 'Guest WS')}
                                tooltipContent={pgettext('guest_toilets_count-tooltip', 'Guest WS tooltip')}
                                rangeEnd={5}
                            />
                        </Col>
                    </Row>
                </Grid>
            </FormPanel>

            { propertyType && !isPropertyTypeHouse(propertyType) &&
                <Grid>
                    <Row>
                        <Col xs={12} md={10}>
                            <SelectRangeField
                                name="apartments_number_of_outdoor_parking_spaces"
                                label={pgettext('mortgage-object-evaluation', 'Number of outdoor parking spaces')}
                                tooltipContent={pgettext('apartments_number_of_outdoor_parking_spaces-tooltip', 'apartments_number_of_outdoor_parking_spaces tooltip')}
                                rangeEnd={5}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={10}>
                            <SelectRangeField
                                name="apartments_number_of_garages"
                                label={pgettext('mortgage-object-evaluation', 'No. Of garage / indoor parking spaces: underground')}
                                tooltipContent={pgettext('apartments_number_of_garages-tooltip', 'No. Of garage / indoor parking spaces: underground tooltip')}
                                rangeEnd={5}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={10}>
                            <SelectRangeField
                                name="apartments_number_of_garages_individual"
                                label={pgettext('mortgage-object-evaluation', 'No. Of garage / indoor parking spaces: individual')}
                                tooltipContent={pgettext('apartments_number_of_garages_individual-tooltip', 'No. Of garage / indoor parking spaces: individual tooltip')}
                                rangeEnd={5}
                            />
                        </Col>
                    </Row>
                </Grid>
            }
            <Grid>
                <Row>
                    <Col xs={12} md={12} className="support-house-sell">
                        <CheckboxField
                            name="has_house_to_sell"
                            icon={<span className="icon-exclamation"></span>}
                            label={pgettext('mortgage-object-evaluation', 'Would you like MoneyPark to support you in selling a property?')}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="evaluation-notes">
                        <TextAreaField
                            name="evaluation_notes"
                            label={pgettext('mortgage-object-evaluation', 'Notes')}
                        />
                    </Col>
                </Row>
                <ButtonsToolbar {...restProps} />
            </Grid>
        </form>
    );
}
