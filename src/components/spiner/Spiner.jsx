import {SpinnerContainer, SpinnerOverlay} from './Spiner.styles';

const Spiner = ComponentWrapper => {
    return ({isLoading, ...otherProps}) => {
        if (isLoading) {
            return <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        }
        return <ComponentWrapper {...otherProps} />
    };
}

export default Spiner
