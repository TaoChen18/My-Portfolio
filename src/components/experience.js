import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

function breakLine(text) {
    var br = React.createElement('br');
    var regex = /(<br \/>)/g;
    return text.split(regex).map(function(line, index) {
        return line.match(regex) ? <br key={"key_" + index} /> :line;
    });
}

class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
        <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.projectName}</h4>
        <div>{ breakLine(this.props.projectDescription) }</div>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;