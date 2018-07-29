import React, { Component } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
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
    margin: {
        margin: theme.spacing.unit,
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
                        <TextField 
                            required
                            type="text" 
                            className={classNames(classes.textField, classes.margin)}
                            placeholder="name" 
                            value={this.state.name} 
                            onChange={this.handleChangeFor('name')}
                        />
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
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="wall-length">Wall Length</InputLabel>
                            <Input
                                className={classNames(classes.textField, classes.margin)}
                                type="number"
                                min="0"
                                step=".01"
                                value={this.state.wallLength}
                                onChange={this.handleChangeFor('wallLength')}
                                endAdornment={<InputAdornment position="start">Ft</InputAdornment>}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="desired-height">Desired Height</InputLabel>
                            <Input
                                className={classNames(classes.textField, classes.margin)}
                                type="number"
                                min="0"
                                step=".01"
                                value={this.state.desiredHeight}
                                onChange={this.handleChangeFor('desiredHeight')}
                                endAdornment={<InputAdornment position="start">Ft</InputAdornment>}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="sink-wall-dist">Sink and Wall Distance</InputLabel>
                            <Input
                                className={classNames(classes.textField, classes.margin)}
                                type="number"
                                min="0"
                                step=".01"
                                value={this.state.sinkFromWall}
                                onChange={this.handleChangeFor('sinkFromWall')}
                                endAdornment={<InputAdornment position="start">Ft</InputAdornment>}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="range">How Far is Your Range?</InputLabel>
                            <Input
                                className={classNames(classes.textField, classes.margin)}
                                type="number"
                                min="0"
                                step=".01"
                                value={this.state.range}
                                onChange={this.handleChangeFor('range')}
                                endAdornment={<InputAdornment position="start">Ft</InputAdornment>}
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