import {AlertContainerStyles} from "./Alert.styles";

export const Alert = ({msg, style = 'error'}) => (
    <AlertContainerStyles error={style === 'error'}>
        {msg}
    </AlertContainerStyles>
)
