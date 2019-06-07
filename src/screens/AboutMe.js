import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import BGSquares from '../components/BGSquares';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../styles/about.css';
import Typist from 'react-typist';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: true,
            career: false,
            future: false,
            tab: 1
        }
    }

    changePane = (pane) => {
        this.setState({
            intro: false,
            career: false,
            future: false,
        })

        if (this.state[pane]) {
            this.setState({
                [pane]: false,
            })
        } else {
            this.setState({
                [pane]: true
            })
        }
    }

    changeTab = (tab) => {
        this.setState({
            tab: tab
        })
    }

    render() {
        return (
            <MuiThemeProvider theme={createMuiTheme({
                palette: {
                primary: {
                    main: '#FFFFFF'
                },
                secondary: {
                    main: '#8892f6'
                }
                }
            })}>
                <div className="App">
                <Navbar type="sub"/>
                <BGSquares />
                <Paper className="tabSection">
                    <Tabs
                        value={this.state.tab}
                        onChange={this.changeTab}
                        indicatorColor="secondary"
                        textColor="secondary"
                        centered
                    >
                        <Tab value={1} onClick={event => this.changeTab(1)} label="I Know"/>
                        <Tab value={2} onClick={event => this.changeTab(2)} label="I'm Learning"/>
                        <Tab value={3} onClick={event => this.changeTab(3)} label="Want to Learn"/>
                    </Tabs>
                    {this.state.tab === 1 ?
                        <div className="devFlex">
                            <div className="iconFlex">
                                <i class="devicon-amazonwebservices-original devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">AWS</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-angularjs-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">ANGULAR</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-bootstrap-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">BOOTSTRAP</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-css3-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">CSS3</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-express-original devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">EXPRESS</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-gimp-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">GIMP</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-git-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">GIT</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-html5-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">HTML5</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-javascript-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">JAVASCRIPT</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-jquery-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">JQUERY</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-nginx-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">NGINX</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-nodejs-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">NODEJS</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-python-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">PYTHON</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-postgresql-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">POSTGRESQL</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-react-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">REACT</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-sass-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">SASS</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-typescript-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">TYPESCRIPT</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-visualstudio-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">VS CODE</Typography>
                            </div>
                        </div>
                    :
                        null
                    }
                    {this.state.tab === 2 ?
                        <div className="devFlex">
                            <div className="iconFlex">
                                <i class="devicon-apache-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">APACHE</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-android-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">ANDROID</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-django-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">DJANGO</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-mysql-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">MYSQL</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-php-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">PHP</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-mongodb-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">MONGODB</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-laravel-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">LARAVEL</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-ruby-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">RUBY</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-rails-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">RAILS</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-wordpress-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">WORDPRESS</Typography>
                            </div>
                        </div>
                    :
                        null
                    }
                    {this.state.tab === 3 ?
                        <div className="devFlex">
                            <div className="iconFlex">
                                <i class="devicon-cplusplus-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">C++</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-csharp-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">C#</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-java-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">JAVA</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-vuejs-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">VUE</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-oracle-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">ORACLE</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-appcelerator-original devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">APPCELERATOR</Typography>
                            </div>
                            <div className="iconFlex">
                                <i class="devicon-docker-plain devIcon"></i>
                                <Typography className="iconText" variant="subtitle2">DOCKER</Typography>
                            </div>
                        </div>
                    :
                        null
                    }
                    

                </Paper>
                <div className="expansionContainer">
                    <ExpansionPanel expanded={this.state.intro} onClick={event => this.changePane('intro')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography variant="h6" color={this.state.intro ? "secondary" : "black"}>Introduction</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography align="left">
                                <p>Hello my name is Matthew,</p>
                                <p>
                                    I'm a driven software engineer dedicated to providing reliable solutions 
                                    for real-world problems.  I work to exhibit craftsmanship, passion and integrity 
                                    with how I conduct myself in both personal and professional environments.  I live my life 
                                    striving to use my experience, strength, wisdom and knowledge in order to benefit those I come
                                    into contact with.  I believe in giving back to my community and paying it forward, so service work
                                    and volunteerism are important parts of my life.
                                </p>
                                <p>
                                    I received my professional foundation working in the hospitality management industry.  During my 
                                    experience in hospitality management I also practiced free-lance web design on the side for friends, families
                                    and small businesses.  In 2017, I decided to pursue my dreams of becoming a software developer and began the 
                                    rigorous process of career switching.  The hospitality industry instilled me with many skills that have translated
                                    well into the world of software development.  These skills include effective communication, team building, collaboration,
                                    conflict resolution, customer relation management and goal oriented planning.  I plan on continuing to utilize these
                                    skillsets as I grow as a software developer. 
                                </p>
                                <p>
                                    Software development has always been a passion for me over the years. I wanted to learn to do more with my coding capabilities and decided to truly 
                                    kick start my career as a software engineer. I embarked on a journey to hone and develop my coding skills at DigitalCrafts in Atlanta. DigitalCrafts 
                                    is a four month long immersive full-time full-stack software engineering boot camp. Throughout the course at DigitalCrafts my skills grew exponentially 
                                    and I was now able to provide full-stack reliable solutions for real-world problems.
                                </p>
                                <p>
                                    My dedication, ambition and perseverance as I worked to become an aspiring software engineer have truly paid off.  I have been able to provide several businesses
                                    solutions to various firms and businesses on a contractual basis.  I also have a full-time job as the lead software developer for a startup called GRYYT.
                                    I now possess a valuable skillset to bring with me wherever my future may lead.  I look forward to continuing to use my coding capabilities to leave a positive impact
                                    on the world, both inside and outside of the workplace.
                                </p>
                            </Typography>
                            
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={this.state.career} onClick={event => this.changePane('career')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography variant="h6" color={this.state.career ? "secondary" : "black"}>Development Career</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography align="left">
                                <p>
                                    Throughout my career I have had many opportunities to design front-end websites, however
                                    since my career switch into software development I have had many opportunities to build 
                                    business solutions from scratch.
                                </p>
                                <p>
                                    I started my software development career as a software solutions specialist for the real estate
                                    investment firm Piedmont Ridge Builders.  I came in in order to propose and develop viable business 
                                    solutions in order to optimize their sales and client retention.  During my work here I wrote several
                                    scripts that would scrub their massive list of leads.  My script would also verify whether or not a phone
                                    number was cellular service and provide our business with a list of leads and corresponding cellular numbers.
                                    I then used this list in order to send out text campaigns integrated with Twilio in order to optimize client outreach.
                                </p>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={this.state.future} onClick={event => this.changePane('future')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography variant="h6" color={this.state.future ? "secondary" : "black"}>The Road Ahead</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>Hello</ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
                </div>

            </MuiThemeProvider>
        )
    }
}

export default AboutMe;