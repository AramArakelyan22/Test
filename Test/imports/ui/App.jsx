import React, {PropTypes} from "react";
import { Meteor } from 'meteor/meteor';
import SearchInput from "./searchInput";
import {Person} from "./person.jsx";
import { createContainer } from 'meteor/react-meteor-data';

import {Persones} from "../api/person";



  class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            filterPerson: ""
        }
    }

    filterPerson(val) {
        this.setState({
            filterPerson: val
        })
    }


    changeInfo(_id,name, phone, email){
        Meteor.call('persones.update', _id, name, phone, email);
    }

    renderPersons() {
        let filteredPersons = this.props.persones;
        filteredPersons = filteredPersons.filter(person =>{
            return  (person.name.toLowerCase().indexOf(this.state.filterPerson.toLowerCase()) !== -1 || person.phoneNumber.indexOf(this.state.filterPerson) !== -1 || person.email.indexOf(this.state.filterPerson) !== -1)


        })
        return (
            filteredPersons.map((person) => {
                return (
                    <Person key={person._id} _id={person._id} chengeInfo={this.changeInfo.bind(this)}  person={person}/>
                )
            })
        )
    }


    render() {
        return (
            <div className="container">
                <SearchInput filterPerson={(e)=>{this.filterPerson(e)}}/>
                <ul>
                    {this.renderPersons()}
                </ul>
            </div>
        )
    }
}


App.propTypes = {
    persones: PropTypes.array.isRequired,
};


export default  createContainer(() => {
    Meteor.subscribe('persones');
    return {
        persones: Persones.find({}).fetch(),
    }
}, App);
