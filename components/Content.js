import React, {Component} from 'react';
import { render } from 'react-dom';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import styles from './Styles'

export default class Content extends Component {
    constructor(){
        super();
        this.state = {
            TextHolder:''
        }
    }
     _onPressGiveName = (title) => {
        if(title === 'Rhiann') {
            this.setState({
                    TextHolder: "How dare you, that is the women I love, not a kid diddler."
            })
        } else {
            this.setState({
                TextHolder: "Oh well, that's just... " + title + " for you"
            })
        }
    }
    render() {
        return(
            <View style={styles.content}>
                <Text style={styles.contentText}>Off he goes, noncing again.</Text>
                <Text style={styles.contentText}>{this.state.TextHolder}</Text>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => this._onPressGiveName('Josh')}
                    accessibilityLabel="Josh is a nonce"
                ><Text style={styles.buttonText}>Josh</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => this._onPressGiveName('Dec')}
                    accessibilityLabel='Dec is a nonce'
                ><Text style={styles.buttonText}>Dec</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => this._onPressGiveName('Charlotte')}
                    accessibilityLabel='Josh is a nonce'
                ><Text style={styles.buttonText}>Charlotte</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => this._onPressGiveName('Kyle')}
                    accessibilityLabel='Kyle is a nonce'
                ><Text style={styles.buttonText}>Kyle</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => this._onPressGiveName('Rhiann')}
                    accessibilityLabel='Rhiann is a nonce'
                ><Text style={styles.buttonText}>Rhiann</Text>
                </TouchableOpacity>
            </View>
        );
    }
};