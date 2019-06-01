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

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: true,
            career: false,
            future: false,
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

    render() {
        return (
            <MuiThemeProvider theme={createMuiTheme({
                palette: {
                primary: {
                    main: '#FFFFFF'
                },
                }
            })}>
                <div className="App">
                <Navbar type="sub"/>
                <BGSquares />
                <div className="expansionContainer">
                    <ExpansionPanel expanded={this.state.intro} onClick={event => this.changePane('intro')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography variant="h6">Introduction</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>Hello</ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={this.state.career} onClick={event => this.changePane('career')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography variant="h6">Development Career</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>Hello</ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={this.state.future} onClick={event => this.changePane('future')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography variant="h6">The Road Ahead</Typography>
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