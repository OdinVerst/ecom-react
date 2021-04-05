import Spinner from "./Spinner";

const SpinnerWrapper = ComponentWrapper => {
    return ({isLoading, ...otherProps}) => {
        if (isLoading) return <Spinner/>
        return <ComponentWrapper {...otherProps} />
    };
}

export default SpinnerWrapper