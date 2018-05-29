import React, { Component } from 'react';
import axios from 'axios';


class KitchenForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email: '',
            name: '',
            option: '',
        }
    }

    handleChangeFor = propertyName => (event) => {
        this.setState({
            ...this.state, 
            [propertyName]: event.target.value,
        })
    }

    submit = (e) => {
        e.preventDefault();
        axios.post('/api/kitchen', { response: this.state })
        .then(response => {
            console.log('success!');
        }).catch(error => console.log(error));
    }

    render(){
        return (
            <div className="form">
                <form onSubmit={this.submit}>
                    <input type="text" placeholder="name" value={this.state.name} onChange={this.handleChangeFor('name')} />
                    <input type="email" placeholder="email" value={this.state.email} onChange={this.handleChangeFor('email')}/>
                    <input type="radio" id="option1" value="option 1" name="option1" onChange={this.handleChangeFor('option')}/>
                    <label htmlFor="option1">Option 1</label>
                    <input type="radio" id="option2" value="option 2" name="option2" onChange={this.handleChangeFor('option')}/>
                    <label htmlFor="option2">Option 2</label>
                    <input type="radio" id="option3" value="option 3" name="option3" onChange={this.handleChangeFor('option')}/>
                    <label htmlFor="option3">Option 3</label>
                    <input type="submit" name="submit"/>
                </form>
            </div>
        );
    }
}


export default KitchenForm;