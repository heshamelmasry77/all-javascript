import React from 'react';

import myImage from "../src/assets/imgs/my-photo.jpg";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeMessage: "Hello I am Hesham"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    // life cycle method
    componentDidMount() {
    }

    componentWillUnmount() {

    }

    handleChange(event) {
        console.log(event);
        let name = event.target.value;
        this.setState({welcomeMessage: name});
    }

    render() {
        return (
            <main className="Main p-4 bg-slate-200">
                <h1 className={"font-mono text-2xl"}>{this.state.welcomeMessage}</h1>
                <div className={"flex items-center justify-center"}>
                    <img
                        className={"object-contain w-96 h-96 rounded-full rounded-full border-4 border-gray-400"}
                        src={myImage}
                        aria-hidden alt="my photo"/>
                </div>
            </main>
        );
    }
}

export default Main;

// we want to add tailwindcss