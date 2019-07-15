import { shallow } from 'enzyme';
import ButtonsToolbar from '../ButtonsToolbar';

let ButtonsToolbarComponent;
const defaultProps = {
        handleSubmit: (fn) => fn,
        onSubmit: jest.fn(),
        onSubmitAndNavigate: jest.fn(),
        onNavigate: jest.fn()
    },
    ButtonsToolbarWrapper = (props) => {
        return <ButtonsToolbar {...defaultProps} {...props} />;
    };

beforeEach(() => {
    ButtonsToolbarComponent = shallow(
        <ButtonsToolbarWrapper />
    ).dive().children();
});

describe('Render ButtonsToolbarComponent component', () => {
    it('create snapshot for ButtonsToolbarComponent', () => {
        expect(ButtonsToolbarComponent).toMatchSnapshot();
    });

    it('check event on `Save` button', () => {
        const propertySelfOwnedFormButton = ButtonsToolbarComponent.at(0);
        propertySelfOwnedFormButton.simulate('click');
        expect(defaultProps.onSubmit).toHaveBeenCalled();
    });

    it('check event on `Save & continue` button', () => {
        const propertySelfOwnedFormButton = ButtonsToolbarComponent.at(1);
        propertySelfOwnedFormButton.simulate('click');
        expect(defaultProps.onSubmitAndNavigate).toHaveBeenCalled();
    });

    it('check event on `Next` button', () => {
        const propertySelfOwnedFormButton = ButtonsToolbarComponent.at(2);
        propertySelfOwnedFormButton.simulate('click');
        expect(defaultProps.onNavigate).toHaveBeenCalled();
    });
});
