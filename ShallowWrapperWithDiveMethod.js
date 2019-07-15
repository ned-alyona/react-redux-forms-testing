<form className="form-vertical">
  <h1 className="title">
    Your property
  </h1>
  <Grid componentClass="div" fluid={false} bsClass="container">
    <Row componentClass="div" bsClass="row">
      <Col xs={12} md={6} componentClass="div" bsClass="col">
        <Component name="street" label="Street" />
      </Col>
      <Col xs={12} md={6} componentClass="div" bsClass="col">
        <Component name="street_number" label="Street number" />
      </Col>
    </Row>
    <Row componentClass="div" bsClass="row">
      <Col xs={12} md={6} componentClass="div" bsClass="col">
        <Component name="zip_code" label="Zip" validate={[Function]} />
      </Col>
      <Col xs={12} md={6} componentClass="div" bsClass="col">
        <Component name="city" label="City" />
      </Col>
    </Row>
    <Row componentClass="div" bsClass="row">
      <Col xs={12} md={6} componentClass="div" bsClass="col">
        <Component name="value_of_property" prefix="CHF" label="Property Value" tooltipContent="Value of property tooltip" />
      </Col>
      <Col xs={12} md={6} componentClass="div" bsClass="col">
        <Component name="reference_value" prefix="CHF" label="Purchasing Price" tooltipContent="Reference value tooltip" />
      </Col>
    </Row>
  </Grid>
  <FormPanel componentClass="h2" panelTitle="Property value" isCollapsible={true} isExpanded={true}>
    <Grid componentClass="div" fluid={false} bsClass="container">
      <Row componentClass="div" bsClass="row">
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="property_type" label="Property Type" tooltipContent="property_type tooltip" options={{...}} />
        </Col>
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="is_construction_financing_required" label="Construction Financing" />
        </Col>
      </Row>
      <Row componentClass="div" bsClass="row">
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="class_of_object" label="Class of Property" tooltipContent="Class of Property" options={{...}} />
        </Col>
      </Row>
      <Row componentClass="div" bsClass="row">
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="year_of_construction" label="Construction Year" tooltipContent="year_of_construction tooltip" validate={[Function: yearRange]} />
        </Col>
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="number_of_rooms" label="Number of Rooms" tooltipContent="Number of rooms tooltip" rangeStart={1} rangeEnd={21} rangeStep={0.5} emptyOption={true} />
        </Col>
      </Row>
      <Row componentClass="div" bsClass="row">
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="living_space" label="Living space" prefix="m²" tooltipContent="Living space tooltip" />
        </Col>
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="building_volume" label="Building Volume" prefix="m³" tooltipContent="building_volume tooltip" />
        </Col>
      </Row>
      <Row componentClass="div" bsClass="row">
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="site_area" label="Site Area" prefix="m²" tooltipContent="site_area tooltip" />
        </Col>
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="building_volume_standard" label="Standarts for the volume" options={{...}} tooltipContent="Building volume tooltip" />
        </Col>
      </Row>
      <Row componentClass="div" bsClass="row">
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="is_financing_with_right_of_residence" label="Financing with right of residence" />
        </Col>
      </Row>
      <Row componentClass="div" bsClass="row">
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="granny_annexe" label="Granny annexe (number of rooms)" />
        </Col>
      </Row>
    </Grid>
  </FormPanel>
  <Grid componentClass="div" fluid={false} bsClass="container">
    <Row componentClass="div" bsClass="row">
      <Col xs={12} md={10} componentClass="div" bsClass="col">
        <Component name="number_of_garages_house" label="Number of on-site garage parking spaces (within building volume)" tooltipContent="number_of_garages_house tooltip" rangeEnd={5} />
      </Col>
    </Row>
    <Row componentClass="div" bsClass="row">
      <Col xs={12} md={10} componentClass="div" bsClass="col">
        <Component name="number_of_garages_separate_building" label="Number of on-site garage parking spaces (separate garage building)" tooltipContent="number_of_garages_separate_building tooltip" rangeEnd={5} />
      </Col>
    </Row>
    <Row componentClass="div" bsClass="row">
      <Col xs={12} md={10} componentClass="div" bsClass="col">
        <Component name="number_of_parking_spots_covered" label="Number of off-site garage parking spaces" tooltipContent="number_of_parking_spots_covered tooltip" rangeEnd={5} />
      </Col>
    </Row>
    <Row componentClass="div" bsClass="row">
      <Col xs={12} md={10} componentClass="div" bsClass="col">
        <Component name="number_of_parking_spots_uncovered" label="Number of off-site outdoor parking spaces" tooltipContent="number_of_parking_spots_uncovered tooltip" rangeEnd={5} />
      </Col>
    </Row>
  </Grid>
  <p className="title">
    Quality evaluation
  </p>
  <Grid componentClass="div" fluid={false} bsClass="container">
    <Row componentClass="div" bsClass="row">
      <Col xs={12} md={6} componentClass="div" bsClass="col">
        <Component name="energy_standard" label="Energy standard" tooltipContent="energy_standard tooltip" options={{...}} />
      </Col>
      <Col xs={12} md={6} componentClass="div" bsClass="col">
        <Component name="year_of_certificate" label="Year of Certificate" tooltipContent="Year of certificate tooltip" validate={[Function: yearRange]} />
      </Col>
    </Row>
  </Grid>
  <FormPanel componentClass="h3" panelTitle="Building condition" isCollapsible={true} isExpanded={true}>
    <Grid componentClass="div" fluid={false} bsClass="container">
      <Row componentClass="div" bsClass="row">
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="quality_evaluation.renovation" label="Renovation" />
        </Col>
      </Row>
    </Grid>
  </FormPanel>
  <FormPanel componentClass="h3" panelTitle="Building quality" isCollapsible={true} isExpanded={true}>
    <Grid componentClass="div" fluid={false} bsClass="container">
      <Row componentClass="div" bsClass="row">
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="quality_evaluation.heat_generation" label="Heat generation" tooltipContent="Heat generation tooltip" options={{...}} rowVisibleSize={8} isMultiple={true} />
        </Col>
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="quality_evaluation.heat_distribution" label="Heat distribution" tooltipContent="Heat distribution tooltip" options={{...}} rowVisibleSize={4} isMultiple={true} />
        </Col>
      </Row>
      <Row componentClass="div" bsClass="row">
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="quality_evaluation.other_facilities" label="Other facilities" tooltipContent="Other facilities tooltip" options={{...}} rowVisibleSize={12} isMultiple={true} />
        </Col>
      </Row>
      <Row componentClass="div" bsClass="row">
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="quality_evaluation.bathrooms_count" label="Family bathrooms" tooltipContent="Family bathrooms tooltip" rangeEnd={5} />
        </Col>
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="quality_evaluation.bathrooms_toilets_count" label="Bath/WC or shower/WC" tooltipContent="Bath/WC or shower/WC tooltip" rangeEnd={5} />
        </Col>
      </Row>
      <Row componentClass="div" bsClass="row">
        <Col xs={12} md={6} componentClass="div" bsClass="col">
          <Component name="quality_evaluation.guest_toilets_count" label="Guest WS" tooltipContent="Guest WS tooltip" rangeEnd={5} />
        </Col>
      </Row>
    </Grid>
  </FormPanel>
  <Grid componentClass="div" fluid={false} bsClass="container">
    <Row componentClass="div" bsClass="row">
      <Col xs={12} md={12} className="support-house-sell" componentClass="div" bsClass="col">
        <Component name="has_house_to_sell" icon={{...}} label="Would you like MoneyPark to support you in selling a property?" />
      </Col>
    </Row>
    <Row componentClass="div" bsClass="row">
      <Col xs={12} md={12} className="evaluation-notes" componentClass="div" bsClass="col">
        <Component name="evaluation_notes" label="Notes" />
      </Col>
    </Row>
    <ButtonsToolbar onSubmit={[Function: mockConstructor]} onSubmitAndNavigate={[Function: mockConstructor]} onNavigate={[Function: mockConstructor]} store={{...}} />
  </Grid>
</form>
