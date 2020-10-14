import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';
import ReactTextCollapse from 'react-text-collapse';

const TEXT_COLLAPSE_OPTIONS = {
    collapse: false,
    collapseText: '... show more',
    expandText: 'show less',
    minHeight: 70,
    maxHeight: 180,
    textStyle: {
        color: 'black'
    }
}

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <div>
                        {/* Project 1 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.searchenginejournal.com/wp-content/uploads/2017/06/shutterstock_268688447-760x400.jpg) center/ cover'}} >Java Project #1</CardTitle>
                            <CardText>
                                <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                                    <p>This is a project focusing on developing a content-based job recommendation system based on the jobs saved by the users. To realize it, two Open source APIs are used, which are Github and MonkeyLearn. Github API can obtain all available jobs around a user. MonkeyLearn API is used to extract keywords from the job description so as to create basic data requirement for content-based algorithm. Finally, users can obtain all job information related to their bias easily.</p>
                                </ReactTextCollapse>
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/TaoChen18/Job-Recommendation-System" target="_blank">GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    <div>
                        {/* Project 1 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.monsterinsights.com/wp-content/uploads/2019/11/breathtaking-online-shopping-statistics-you-never-knew.png) center/ cover'}} >Spring Project #1</CardTitle>
                            <CardText>
                                <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                                    <p>This project using Spring and Hibernate framework to help do dependency injection, inversion of control and database operations. This web application can support item search and listing. Spring Security is applied to implement user authentication and authorization. Finally, users can search and order item using this applicaiton.</p>
                                </ReactTextCollapse>
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/TaoChen18/Shopping-and-Ordering-System" target="_blank">GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                    <div>
                        {/* Project 1 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://techcrunch.com/wp-content/uploads/2019/10/starlinkhead.jpg) center/ cover'}} >React Project #1</CardTitle>
                            <CardText>
                                <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                                    <p>This project focuses on developing a pure front-end web application that can track satellites. Ant Design component library is used to build forms to collect user observation geoinformation (longitude, latitude, etc.) The API that is used to fetch nearby satellites information and position prediction data is N2YO. To better improve user experience, React-Simple-Map is used to do animation. Finally, the users can track the satellites' position within the duration they choosed.</p>
                                </ReactTextCollapse>
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/TaoChen18/Starlink-Trajectory-Visualization" target="_blank">GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                    <div>
                        {/* Project 2 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.pngio.com/personal-blog-site-personal-web-design-personal-web-page-personal-web-page-png-512_512.png) center/ cover'}} >React Project #2</CardTitle>
                            <CardText>
                                <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                                    <p>This is a project to build my personal website, which gathers all information about myself. React-mdl is used to build my component.</p>
                                </ReactTextCollapse>
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        } else if(this.state.activeTab === 3){
            return(
                <div className="projects-grid">
                    <div>
                        {/* Project 1 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.dailynews.com/wp-content/uploads/2017/09/img_3776.jpg) center/ cover'}} >Android Project #1</CardTitle>
                            <CardText>
                                <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                                    <p>This is a project focusing on designing the Instagram Flavor News app based on Google Component Architectural MVVM Pattern. JetPack navigation component is used to implement bottom bar and page navigation. To better improve the interface, CardStackView(RecyclerView) is used to support swipe gestures for liking/disliking the news. Room Database is also applied to allow local cache and offline model. To get the latest news data, NewsAPI is used with Retrofit to do RESTful endpoint.</p>
                                </ReactTextCollapse>
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/TaoChen18/TinNews" target="_blank">GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Java</Tab>
                    <Tab>Spring</Tab>
                    <Tab>React</Tab>
                    <Tab>Android</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
    <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;