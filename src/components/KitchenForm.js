import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
            wallLength: 20,
            desiredHeight: 3,
            sinkFromWall: 5,
            range: 10,
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
        axios.post('/api/kitchen/',  this.state )
        .then(response => {
            alert('measurements saved successfully');
            this.setState({
                email: '',
                name: '',
                wallLength: 20,
                desiredHeight: 3,
                sinkFromWall: 5,
                range: 10,
            })
        })
        .catch(error => {
            console.log(error);
            alert('measurements unsuccessful. please try again');
        })
    }

    render(){
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <form onSubmit={this.submit} noValidate>
                    <FormControl required component="fieldset">
                        <TextField 
                            required
                            type="text" 
                            className={classes.textField}
                            placeholder="name" 
                            value={this.state.name} 
                            onChange={this.handleChangeFor('name')}
                        />
                    </FormControl>
                        <br/>
                        <TextField 
                            required
                            type="email" 
                            className={classes.textField}
                            placeholder="email" 
                            value={this.state.email} 
                            onChange={this.handleChangeFor('email')}
                        />
                        <br/>
                    <FormControl component="fieldset" required className={classes.formControl}>
                        <FormLabel component="legend">Options (all measurements in feet)</FormLabel>
                        <label>Wall Length: </label>
                        <TextField
                            className={classes.textField}
                            type="number"
                            min="0"
                            step=".01"
                            value={this.state.wallLength}
                            onChange={this.handleChangeFor('wallLength')}
                        />
                        <label>Desired Height: </label>
                        <TextField
                            className={classes.textField}
                            type="number"
                            min="0"
                            step=".01"
                            value={this.state.desiredHeight}
                            onChange={this.handleChangeFor('desiredHeigh')}
                        />
                        <label>Distance between sink and wall: </label>
                        <TextField
                            className={classes.textField}
                            type="number"
                            min="0"
                            step=".01"
                            value={this.state.sinkFromWall}
                            onChange={this.handleChangeFor('sinkFromWall')}
                        />
                        <label>How Far is Your Range?</label>
                        <TextField
                            className={classes.textField}
                            type="number"
                            min="0"
                            step=".01"
                            value={this.state.range}
                            onChange={this.handleChangeFor('range')}
                        />
                    </FormControl>
                    <br className={classes.break}/>
                    <Button onClick={this.submit} variant="raised" color="primary" className={classes.button}>Submit</Button>
                </form>
            </div>
        );
    }
}


export default withStyles (styles) (KitchenForm);