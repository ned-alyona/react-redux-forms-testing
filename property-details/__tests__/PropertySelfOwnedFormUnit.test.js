import { shallow } from 'enzyme';
import djangoParamsChoices from 'tests/__mocks__/djangoParamsChoices';
import PropertySelfOwnedForm from '../PropertySelfOwnedForm';
import configureStore from 'redux-mock-store';
const snapshotDiff = require('snapshot-diff');

global.getDjangoParam = () => djangoParamsChoices;

// Initialize mockstore with empty state
const initialState = {};
const defaultProps = {
    propertyType: 1,
    onSubmit: jest.fn(),
    onSubmitAndNavigate: jest.fn(),
    onNavigate: jest.fn()
};
const mockStore = configureStore();
let store, PropertySelfOwnedFormComponentWrapper, PropertySelfOwnedFormComponent, receivedNamesList;

beforeEach(() => {
    store = mockStore(initialState);
    PropertySelfOwnedFormComponentWrapper = (props) => (
        <PropertySelfOwnedForm {...defaultProps} {...props} store={store} />
    );
    PropertySelfOwnedFormComponent = shallow(<PropertySelfOwnedFormComponentWrapper />).dive();
});

describe('Render PropertySelfOwnedForm', () => {
    it('render the connected form component', () => {
        expect(PropertySelfOwnedFormComponent.length).toEqual(1);
    });

    it('create snapshot for PropertySelfOwnedForm with PropertyTypeHouse fields', () => {
        expect(PropertySelfOwnedFormComponent).toMatchSnapshot();
    });

    it('PropertySelfOwnedForm renders correctly with PropertyTypeHouse', () => {
        receivedNamesList = PropertySelfOwnedFormComponent.find('form').find('Col').children().map(node => node.props().name);
        const expectedNamesList = ['building_volume', 'site_area', 'building_volume_standard', 'number_of_garages_house', 'number_of_garages_separate_building', 'number_of_parking_spots_covered', 'number_of_parking_spots_uncovered'];
        expect(receivedNamesList).toEqual(expect.arrayContaining(expectedNamesList));
    });

    it('PropertySelfOwnedForm renders correctly with PropertyTypeApartment', () => {
        const props = {
                propertyType: 10
            },
            PropertySelfOwnedFormComponent = shallow(<PropertySelfOwnedFormComponentWrapper {...props} />).dive();
        const receivedNamesList = PropertySelfOwnedFormComponent.find('form').find('Col').children().map(node => node.props().name);
        const expectedNamesList = ['number_of_apartments', 'floor_number', 'balcony_terrace_place', 'apartments_number_of_outdoor_parking_spaces', 'apartments_number_of_garages', 'apartments_number_of_garages_individual'];
        expect(receivedNamesList).toEqual(expect.arrayContaining(expectedNamesList));
    });

    it('create snapshot for PropertySelfOwnedForm with PropertyTypeApartment fields', () => {
        const props = {
                propertyType: 10
            },
            PropertySelfOwnedFormComponent = shallow(<PropertySelfOwnedFormComponentWrapper {...props} />).dive();
        expect(PropertySelfOwnedFormComponent).toMatchSnapshot();
    });

    it('snapshot difference between 2 React forms state', () => {
        const props = {
                propertyType: 10
            },
            PropertySelfOwnedFormComponentApartment = shallow(<PropertySelfOwnedFormComponentWrapper {...props} />).dive();
        expect(
            snapshotDiff(
                PropertySelfOwnedFormComponent,
                PropertySelfOwnedFormComponentApartment
            )
        ).toMatchSnapshot();
    });
});
