import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
        <p>{this.props.startYear} - {this.props.endYear}</p>
        <p>Major</p>
        <p>{this.props.hasMinor}</p>
        <p>{this.props.hasCourses}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolMajor}</p>
                    <p>{this.props.schoolMinor}</p>
                    <p>{this.props.courses}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;