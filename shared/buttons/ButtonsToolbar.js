import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';

export default function ButtonsToolbar({handleSubmit, onSubmit, onSubmitAndNavigate, onNavigate, pristine, submitting}) {
    return (
        <ButtonToolbar>
            <Button className="button button--accent" type="button" onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}>
                {pgettext('mortgage-object-evaluation', 'Save Data')}
            </Button>
            <Button className="button button--secondary" type="button" onClick={handleSubmit(onSubmitAndNavigate)} disabled={pristine || submitting}>
                {pgettext('customer-data-prefill', 'Save & Next')}
            </Button>
            <Button className="button button--secondary" type="button" onClick={onNavigate}>
                {pgettext('customer-data-prefill', 'Next')}
            </Button>
        </ButtonToolbar>
    );
}
