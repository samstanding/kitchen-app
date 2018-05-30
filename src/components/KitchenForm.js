import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
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
        margin: theme.spacing.unit * 1.5,
      },
    group: {
        margin: `${theme.spacing.unit}px 0`,
      },
    button: {
        margin: theme.spacing.unit,
      },
    root: {
        flexGrow: 1,
      },
    break : {
        padding: 5,
    }
  });

class KitchenForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email: '',
            name: '',
            option: '',
            mOption: '',
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
            mOption: '',
        })
    }

    render(){
        const { classes } = this.props;
        let abc;
        let def;
        let ghi;

        if (this.state.option === 'option 1') {
            abc = (
                <FormControl component="fieldset" required className={classes.formControl}>
                <FormLabel component="legend">More Options</FormLabel>
                <RadioGroup
                            aria-label="option"
                            name="Secondary Otions"
                            className={classes.group}
                            value={this.state.mOption}
                            onChange={this.handleChangeFor('mOption')}
                        >
                            <FormControlLabel value="option A" control={<Radio />} label="Option A" />
                            <FormControlLabel value="option B" control={<Radio />} label="Option B" />
                            <FormControlLabel value="option C" control={<Radio />} label="Option C" />
                        </RadioGroup>
                </FormControl>     
            );
        } 
        if (this.state.option === 'option 2') {
            def = (
                <FormControl component="fieldset" required className={classes.formControl}>
                <FormLabel component="legend">More Options</FormLabel>
                <RadioGroup
                            aria-label="option"
                            name="Secondary Otions"
                            className={classes.group}
                            value={this.state.mOption}
                            onChange={this.handleChangeFor('mOption')}
                        >
                            <FormControlLabel value="option D" control={<Radio />} label="Option D" />
                            <FormControlLabel value="option E" control={<Radio />} label="Option E" />
                            <FormControlLabel value="option F" control={<Radio />} label="Option F" />
                        </RadioGroup>
                </FormControl>   
            );
        } 
        if (this.state.option === 'option 3') {
            ghi = (
                <FormControl component="fieldset" required className={classes.formControl}>
                <FormLabel component="legend">More Options</FormLabel>
                <RadioGroup
                            aria-label="option"
                            name="Secondary Otions"
                            className={classes.group}
                            value={this.state.mOption}
                            onChange={this.handleChangeFor('mOption')}
                        >
                            <FormControlLabel value="option G" control={<Radio />} label="Option G" />
                            <FormControlLabel value="option H" control={<Radio />} label="Option H" />
                            <FormControlLabel value="option I" control={<Radio />} label="Option I" />
                        </RadioGroup>
                </FormControl>   
            );
        }
        return (
            <div className={classes.root}>
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
                            {abc}
                            <FormControlLabel value="option 2" control={<Radio />} label="Option 2" />
                            {def}
                            <FormControlLabel value="option 3" control={<Radio />} label="Option 3" />
                            {ghi}
                        </RadioGroup>
                    </FormControl>
                    <br className={classes.break}/>
                    <Button onClick={this.submit} variant="raised" color="primary" className={classes.button}>Submit</Button>
                </form>
            </div>
        );
    }
}


export default withStyles (styles) (KitchenForm);