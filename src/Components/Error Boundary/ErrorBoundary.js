import React, {Component} from 'react'

export class ErrorBoundary extends Component {
    state = {
        errorMessage: false
    }
    componentDidCatch(err) {
        this.setState({
            errorMessage: err
        })
    }

    render() {
        if (this.state.errorMessage) {
            return <div>{this.state.errorMessage}</div>
        } else {
            return this.props.children
        }
    }
}