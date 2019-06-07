import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';
import '../styles/words.css';

const styles = {
    large: {
        fontFamily: 'serif',
        fontSize: 45,
        padding: 5,
    },
    small: {
        fontFamily: 'cursive',
        fontSize: 15,
        padding: 1
    }
}

class WordCloud extends Component {
    componentDidMount() {
        setInterval(() => {
            this.forceUpdate();
        }, 3000)
    }

    render() {
        return <TagCloud
            className="tagCloud"
            style={{
                fontFamily: 'sans-serif',
                fontSize: 30,
                textShadow: "-1px -1px rgb(0, 0, 0, .2), -1px 0px rgb(0, 0, 0, .2), 0px -1px rgb(0, 0, 0, .2), 0px 0px rgb(0, 0, 0, .2), 1px 0px rgb(0, 0, 0, .2), 0px 1px rgb(0, 0, 0, .2), 1px 1px rgb(0, 0, 0, .2)",
                color: () => randomColor({hue: 'blue'}),
                padding: 3
            }}
        >
            <div style={styles.large}>Determined</div>
            <div>Diligence</div>
            <div>Perserverance</div>
            <div>Ambitious</div>
            <div style={styles.small}>Conflict Resolution</div>
            <div>Communicative</div>
            <div style={styles.large}>Reliable</div>
            <div style={styles.small}>Team Oriented</div>
            <div>Honesty</div>
            <div style={styles.large}>Integrity</div>
            <div>Loyalty</div>
            <div>Honor</div>
            <div>Passionate</div>
            <div>Conscientious</div>
            <div>Enthusiastic</div>
            <div style={styles.small}>Resourceful</div>
            <div style={styles.large}>Dedicated</div>
            <div style={styles.large}>Creative</div>
            <div>Strategic</div>
            <div>Progressive</div>
            <div style={styles.small}>Detail Oriented</div>
            <div>Influential</div>
            <div>Productive</div>
            <div style={styles.large}>Result Driven</div>
            <div>Dynamic</div>
            <div style={styles.small}>Energetic</div>
            <div>Commited</div>
            <div style={styles.small}>Sincere</div>
            <div>Industrious</div>
            <div style={styles.small}>Diverse</div>
            <div style={styles.small}>Flexible</div>
            <div>Comprehensive</div>
            <div>Consistent</div>

        </TagCloud>
    }
}

export default WordCloud;