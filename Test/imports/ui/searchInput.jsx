import React from "react";

export default class SearchInput extends React.Component {
    filterPerson(e) {
        let val = this.refs.searchInput.value;
        this.props.filterPerson(val);
    }
    render() {
        return(
            <input
                type="text"
                ref="searchInput"
                onChange={(e)=>{this.filterPerson(e)}}
            />
        )
    }
}