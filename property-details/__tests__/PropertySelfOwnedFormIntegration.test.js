import { mount } from 'enzyme';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { reduxForm, reducer as formReducer } from 'redux-form';
import propertyDetailsResource from 'store/propertyDetailsResource';
import djangoParamsChoices from 'tests/__mocks__/djangoParamsChoices';
import PropertySelfOwnedForm from '../PropertySelfOwnedForm';

jest.unmock('redux-form');
global.getDjangoParam = () => djangoParamsChoices;

let PropertySelfOwnedFormComponent;
const history = {
        push: jest.fn(),
        location: {
            pathname: '/en/data-collection/property-valuation/'
        },
        listen: () => {}
    },
    defaultProps = {
        propertyType: 1,
        resource: propertyDetailsResource,
        handleSubmit: (fn) => fn,
        onSubmit: jest.fn(),
        onSubmitAndNavigate: jest.fn(),
        onNavigate: jest.fn()
    },
    store = createStore(combineReducers({ form: formReducer })),
    Decorated = reduxForm({
        form: 'property-details-form'
    })(PropertySelfOwnedForm),
    PropertySelfOwnedFormComponentWrapper = (props) => (
        <Provider store={store}>
            <Router history={history}>
                <Decorated {...defaultProps} {...props} />
            </Router>
        </Provider>
    );

beforeEach(() => {
    PropertySelfOwnedFormComponent = mount(
        <PropertySelfOwnedFormComponentWrapper />
    );
});

describe('Render PropertySelfOwnedForm', () => {
    it('PropertySelfOwnedForm renders correctly with PropertyTypeHouse', () => {
        expect(PropertySelfOwnedFormComponent).toMatchSnapshot();
    });

    it('PropertySelfOwnedForm renders correctly with PropertyTypeApartment', () => {
        const props = {
                propertyType: 10
            },
            PropertyTypeApartmentWrapper = mount(<PropertySelfOwnedFormComponentWrapper {...props} />);
        expect(PropertyTypeApartmentWrapper).toMatchSnapshot();
    });

    it('check if `Save` button react on form changes', () => {
        expect(PropertySelfOwnedFormComponent.find('button.button--accent').props().disabled).toEqual(true);
        const streetNumberField = PropertySelfOwnedFormComponent.find('input[name="street_number"]');
        streetNumberField.simulate('change', { target: {value: '10'} });
        expect(PropertySelfOwnedFormComponent.find('button.button--accent').props().disabled).toEqual(false);
    });

    it('check event on `Save` button', () => {
        const streetNumberField = PropertySelfOwnedFormComponent.find('input[name="street_number"]');
        streetNumberField.simulate('change', { target: {value: '10'} });

        const propertySelfOwnedFormButton = PropertySelfOwnedFormComponent.find('button.button--accent');
        propertySelfOwnedFormButton.simulate('click');
        expect(defaultProps.onSubmit).toHaveBeenCalled();
    });

    it('check event on `Save & continue` button', () => {
        const streetNumberField = PropertySelfOwnedFormComponent.find('input[name="street_number"]');
        streetNumberField.simulate('change', { target: {value: '10'} });

        const propertySelfOwnedFormButton = PropertySelfOwnedFormComponent.find('button.button--secondary').at(0);
        propertySelfOwnedFormButton.simulate('click');
        expect(defaultProps.onSubmitAndNavigate).toHaveBeenCalled();
    });

    it('check event on `Next` button', () => {
        const propertySelfOwnedFormButton = PropertySelfOwnedFormComponent.find('button.button--secondary').at(1);
        propertySelfOwnedFormButton.simulate('click');
        expect(defaultProps.onNavigate).toHaveBeenCalled();
    });
});
