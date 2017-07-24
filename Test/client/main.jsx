import React from "react";
import ReactDom from "react-dom";
import { Meteor } from 'meteor/meteor';
import App from "../imports/ui/App.jsx";



class Main extends React.Component {
    render() {
        return(
            <App/>
        )
    }
}


Meteor.startup(() => {
    ReactDom.render(
        <Main/>, document.getElementById("root")
    )
});
