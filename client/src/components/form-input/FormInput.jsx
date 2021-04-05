import {FormInputGroupStyle, FormInputLabelStyle, FormInputStyle} from "./FormInput.styles";

const FormInput = ({changeHandler, label, ...otherProps}) => {
    return (
        <FormInputGroupStyle>
            <FormInputStyle onChange={changeHandler} {...otherProps} />
            {label ? <FormInputLabelStyle shrink={`${!!otherProps.value.length || ''}`}>{label}</FormInputLabelStyle> : null}
        </FormInputGroupStyle>
    )
}

export default FormInput;
