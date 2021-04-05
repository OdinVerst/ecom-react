import React from 'react';
import {ErrorImageContainer, ErrorImageOverlay, ErrorImageText} from "./error-boundary.styles";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer img={"https://i.imgur.com/yW2W9SC.png"}/>;
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
}