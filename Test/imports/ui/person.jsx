import React from "react";

export class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allowToEdit: true
        }
    }

    chengeInfo(e){
        let name = this.refs.name.value;
        let number = this.refs.number.value;
        let mail = this.refs.mail.value;
        let _id = this.props._id;
       this.props.chengeInfo(_id, name, number, mail);
        this.setState({
            allowToEdit: true
        })

    }



    editAllowed(e){
        e.preventDefault();
        this.setState({
            allowToEdit: false
        })
    }


    render(){
        let button;
        if(this.state.allowToEdit){
          button = <button onClick={this.editAllowed.bind(this)}>Edit</button>
        }
        else {
            button = <button type="subit"  onClick={this.chengeInfo.bind(this)}>Submit</button>
        }


        return (
            <li  className="list-item">
                <form>
                    <label htmlFor="name">Name:
                        <input
                            type="text" id="name"
                            defaultValue={this.props.person.name}
                            disabled={this.state.allowToEdit}
                            ref="name"
                        />
                    </label>
                    <label htmlFor="phone-nimber">Phone Number:
                        <input
                            type="number" id="phone-nimber"
                            defaultValue={this.props.person.phoneNumber}
                            disabled={this.state.allowToEdit}
                            ref="number"
                        />
                    </label>
                    <label htmlFor="email"> Email:
                    <input
                        type="mail"
                        id="email"
                        defaultValue={this.props.person.email}
                        disabled={this.state.allowToEdit}
                        ref="mail"
                    />
                    </label>
                </form>
                {button}
            </li>
        )
    }
}