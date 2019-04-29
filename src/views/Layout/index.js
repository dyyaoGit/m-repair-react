import React from 'react';

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="layout-container">
                {this.props.children}
            </div>
        )
    }
}

export default Layout;
