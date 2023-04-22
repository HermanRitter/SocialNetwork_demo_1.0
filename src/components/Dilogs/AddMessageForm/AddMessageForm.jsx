import {Field, reduxForm} from "redux-form";
import React from "react";
import {TextArea} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../Util/Validator/validators";

const maxLength100 = maxLengthCreator(100);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newMessageBody'
                       placeholder='Enter your message'
                       component={TextArea}
                       validate={ [required, maxLength100] }/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>)
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageBody'})(AddMessageForm)

export default AddMessageReduxForm