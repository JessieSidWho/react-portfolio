import React, { Component } from "react";
import Navbar from './components/Navbar';
import PagesContainer from "./components/PagesContainer";
import Chat from './components/Chat';
import './index.css';


class App extends Component {
    state = {}

    render() { 
        return (
            <>
                <Navbar />
                <div className="row">
                    <div className="col-md-8 border-bottom-0 border-light bg-dark text-white">
                        <PagesContainer />
                    </div>

                    <div className="col-md-4 border border-light bg-dark text-white rounded-lg">
                        <Chat />
                    </div>
                </div>
            </>
        )
    }
}
 
export default App;