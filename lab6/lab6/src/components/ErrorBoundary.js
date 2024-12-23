import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error occurred:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h2>Щось пішло не так. Спробуйте пізніше.</h2>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
