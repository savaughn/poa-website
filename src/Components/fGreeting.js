import React from 'react';

export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            showName: false
        }
    }

    handleSubmit = event => {
        this.setState({ showName: true });
        event.preventDefault();
    };

    handleChange = (event) =>{
        this.setState({
            name: event.target.value,
            showName: this.state.name !== '' && this.state.showName
        });

    };

    render() {
        return (
            <div className="myGreeting">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                { this.state.name !== '' && this.state.showName && <h1>Hello, {this.state.name}!</h1> }
            </div>
        );
    }
};

