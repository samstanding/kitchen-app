import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
      padding: 10,
    },
    menu: {
      width: 200,
    },
    formControl: {
        margin: theme.spacing.unit * 3,
      },
    group: {
        margin: `${theme.spacing.unit}px 0`,
      },
    button: {
        margin: theme.spacing.unit,
      },
  });

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
        console.log(this.state);
        axios.post('/api/kitchen/',  this.state )
        .then(response => console.log(response))
        .catch(error => console.log(error))
        this.setState({
            email: '',
            name: '',
            option: '',
        })
    }

    render(){
        const { classes } = this.props;

        return (
            <div className="form">
                <form onSubmit={this.submit}>
                    <TextField 
                        type="text" 
                        className={classes.textField}
                        placeholder="name" 
                        value={this.state.name} 
                        onChange={this.handleChangeFor('name')} 
                    />
                    <br/>
                    <TextField 
                        type="email" 
                        className={classes.textField}
                        placeholder="email" 
                        value={this.state.email} 
                        onChange={this.handleChangeFor('email')}
                    />
                    <br/>
                    <FormControl component="fieldset" required className={classes.formControl}>
                        <FormLabel component="legend">Options</FormLabel>
                        <RadioGroup
                            aria-label="option"
                            name="options"
                            className={classes.group}
                            value={this.state.option}
                            onChange={this.handleChangeFor('option')}
                        >
                            <FormControlLabel value="option 1" control={<Radio />} label="Option 1" />
                            <FormControlLabel value="option 2" control={<Radio />} label="Option 2" />
                            <FormControlLabel value="option 3" control={<Radio />} label="Option 3" />
                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <Button onClick={this.submit} variant="raised" color="primary" className={classes.button}>Submit</Button>
                </form>
            </div>
        );
    }
}


export default withStyles (styles) (KitchenForm);