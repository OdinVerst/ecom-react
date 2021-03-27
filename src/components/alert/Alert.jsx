import './Alert.scss';

export const Alert = ({msg, style = 'error'}) => (
    <div className={`${style} alert`}>
        {msg}
    </div>
)
