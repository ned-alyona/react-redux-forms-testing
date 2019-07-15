import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reduxForm, getFormValues } from 'redux-form';
import PropertySelfOwnedForm from './PropertySelfOwnedForm';
import propertyDetailsResource from 'store/propertyDetailsResource';
import orderStepFlowInfoResource from 'store/orderStepFlowInfoResource';
import { connectFormResource, connectResource } from 'shared/utils/ds/resource';
import { scrollToError } from 'shared/forms/scrollToError';

const propertySelfOwnedForm = 'property-self-owned-form',
    urls = getDjangoParam('customerDataPrefillPageUrls'),
    pagePrefillStepValue = getDjangoParam('pagePrefillSteps').financialInfoStep;

export default compose(
    withRouter,
    connectFormResource(propertyDetailsResource, {form: propertySelfOwnedForm}),
    connectResource(orderStepFlowInfoResource),
    reduxForm({
        form: propertySelfOwnedForm,
        onSubmitFail: scrollToError
    }),
    connect(null,
        (dispatch, props) => ({
            onSubmitAndNavigate: (data) => {
                return props.onSubmit(data)
                    .then(
                        () => props.orderStepFlowInfoResource.update({'data_prefill_achieved_step': pagePrefillStepValue})
                    )
                    .then(
                        () => props.history.push(urls.customersPersonalInfoPrefillUrl)
                    );
            },
            onNavigate: () => {
                props.history.push(urls.customersPersonalInfoPrefillUrl);
            }
        })
    ),
    connect((state) =>
        ({propertyType: getFormValues(propertySelfOwnedForm)(state).property_type})
    )
)(PropertySelfOwnedForm);
