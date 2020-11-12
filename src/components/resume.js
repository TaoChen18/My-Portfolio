import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import myphoto from './myphoto.jpg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Myresume from './Tao-Chen-Resume.pdf'

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src={myphoto} 
                            alt="avatar"
                            style={{height: '200px'}}/>
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Tao Chen</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                        <p>Seeking for a full-time software engineer position starts from Jan 2021.
M.S. candidate from Rensselaer Polytechnic Institute. Proficient in Java, C++, Python, JavaScript, SQL, and HTML/CSS. Solid knowledge in Object-Oriented Design, Data Structures, Algorithms, and Operating Systems. Hands-on experience in web application development with React, Spring, Tomcat, Node.js and Express.
</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/> 
                        <h5>Address</h5>
                        <p>1906 River View Rd, Green Island, NY, 12183</p>
                        <h5>Phone</h5>
                        <p>(917) 318-6995</p>
                        <h5>Email</h5>
                        <p>waldochan18@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                        <h5>Learn More</h5>
                        <a href= {Myresume} download>Click to download (Tao's Resume)</a>
                        <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education startYear="Sep 2018"
                        endYear="Dec 2020"
                        schoolName="Rensselaer Polytechnic Institute"
                        schoolMajor="Information Technology and Web Science"
                        hasMinor="Minor"
                        schoolMinor="Quantitative Finance and Risk Analytics"
                        hasCourses="Relevant courses"
                        courses="Data Structures, Operating Systems, Software Development, Database Systems"/>

                        <Education startYear="Sep 2012"
                        endYear="Jun 2016"
                        schoolName="Nanjing University of Finance and Economics"
                        schoolMajor="Major: Finance"/>

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience 
                        startYear="July 2020"
                        endYear="Sep 2020"
                        projectName="React JS based Starlink Trajectory Visualization"
                        projectDescription="• Setup the Repo by leveraging the React official CLI tool, create-react-app, and use NPM to manage project dependencies.<br />
                        • Used Ant Design component library to build forms to collect user observation geoinformation (longitude, latitude, etc.)<br />
                        • Fetch nearby satellites information and position prediction data through the N2YO API(s)<br />
                        • Animated selected satellite paths on a world map using React-Simple-Map to improve the user-friendliness.<br />
                        • Deployed the dashboard to Amazon Web Service for demonstration."/>

                        <Experience 
                        startYear="July 2020"
                        endYear="Sep 2020"
                        projectName="Spring and Hibernate based Shopping and Ordering system"
                        projectDescription="• Built a web application based on Spring MVC to support item search and listing (dependency injection,
                            inversion of control, REST API, etc.).<br />
                            • Implemented security workflow via Spring Security for user authentication and authorization.<br />
                            • Created a MySQL database to store user-generated data (user profile, item information, order history) and
                            utilized Hibernate to provide better support of database operations.<br />
                            • Developed a Spring Web Flow to support item ordering."/>

                        <Experience 
                        startYear="May 2020"
                        endYear="July 2020"
                        projectName="Job Search and Recommendation Service Development"
                        projectDescription="• Developed an easy-use interactive web page for users to search nearby jobs and apply for the positions.
                        (HTML, CSS, JavaScript, AJAX)<br />
                        • Implemented RESTful APIs by creating several JAVA servlets to handle HTTP requests and responses
                        efficiently.<br />
                        • Created a MySQL database to store user data and position data retrieved from Github API, and deployed it
                        to Amazon RDS for better simplicity and scalability.<br />
                        • Explored several recommendation algorithms and used MonkeyLearn API to extract keywords from the
                        jobs’ description to implement a content-based algorithm.<br />
                        • Deployed service to Amazon EC2 for better performance."/>

                        <Experience 
                        startYear="Apr 2020"
                        endYear="May 2020"
                        projectName="Simulate the Spread of Coronavirus"
                        projectDescription="• Initialized several 2-D world matrixes for each state in the US, and set simulation premises and spread rules.<br />
                        • Used MPI library to process file I/O and world matrix in parallel to improve efficiency by 600%.<br />
                        • Used CUDA library to perform multi-block and multi-thread computing on GPU, and accelerated the transformation of the matrix by 3 seconds.<br />
                        • Deployed codes to RPI AIMOS (a remote supercomputer) and obtained the infection rate, the mortality rate, and the cure rate after several iterations of transmission.
                        "/>

                        <Experience 
                        startYear="Jan 2020"
                        endYear="May 2020"
                        projectName="RPI Ambulance Member Management System"
                        projectDescription="• Developed user interface for users to send different requests based on their roles. For example, administrators can create new member, make credential, and add checklist items to a credential; Trainer can check off items in the checklist, vote for promotion, etc. (HTML, CSS, JavaScript)<br />
                        • Built an HTTP server with node.js and implemented RESTful APIs by creating Express Router to handle HTTP requests and responses efficiently.<br />
                        • Used Postgres SQL to store user data such as user credentials (identify user’s role), user permission and checklist_items, etc."/>

                        <Experience 
                        startYear="Jan 2020"
                        endYear="May 2020"
                        projectName="Graduate Teaching Assistance for Data Structures"
                        projectDescription="• Held weekly data structure labs to help students solve problems and make students have a deeper understanding of data structures, such as binary search tree, hash map, priority queue, etc. <br />
                        • Held weekly office hours to help students solve difficult problems encountered in homework and exams, such as the implementation of data structures, analysis of time and space complexity, and recursive principles, etc. <br />
                        • Responsible for grading students’ homework and exams, added or improved Rubric’s grading standard.
                        "/>
                        
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills 
                        skill="Python"
                        progress={100}/>
                        <Skills 
                        skill="C++"
                        progress={100}/>
                        <Skills 
                        skill="SQL"
                        progress={100}/>
                        <Skills 
                        skill="Java"
                        progress={80}/>
                        <Skills 
                        skill="JavaScript"
                        progress={70}/>
                        <Skills 
                        skill="HTML/CSS"
                        progress={70}/>
                        <Skills 
                        skill="React"
                        progress={50}/>
                        <Skills 
                        skill="Spring"
                        progress={50}/>
                        <Skills 
                        skill="NodeJS"
                        progress={40}/>
                        <Skills 
                        skill="Android"
                        progress={40}/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;