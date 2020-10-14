import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Tao Chen</h2>
                        <img src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="avatar"
                        style={{ height: '250px' }}/>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Seeking for a full-time software engineer position starts from Jan 2021.
M.S. candidate from Rensselaer Polytechnic Institute. Proficient in Java, C++, Python, JavaScript, SQL, and HTML/CSS. Solid knowledge in Object-Oriented Design, Data Structures, Algorithms, and Operating Systems. Hands-on experience in web application development with React, Spring, Tomcat, Node.js and Express.
</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (917) 318-6995
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        waldochan18@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;