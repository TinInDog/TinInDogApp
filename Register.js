import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class Register extends Component {

  static navigationOptions = {
    title: 'Register'
  };

  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        <View>
          <TouchableWithoutFeedback>
            <View>
              <Animation
                ref={animation => {
                this.animation1 = animation;
              }}
                style={{
                width: 100,
                height: 100
              }}
                source={require('./assets/star.json')}/>
            </View>
          </TouchableWithoutFeedback>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
});

module.exports = Register;
AppRegistry.registerComponent('Register', () => Register);