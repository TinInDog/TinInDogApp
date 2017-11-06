/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Animated,
  Button,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';

import Animation from 'lottie-react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Agoora Vamos lá Aqui novamente  tap R on your keyboard to reload,\n' +
    'Sacudsa or press menu button for dev menu',
});

import anim from './assets/soda_loader.json';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }


  
  componentDidMount() {
    this.animation.play();
  }
  
  componentWillMount(){
  
  }

  onPressLearnMore = ()=>{
    this.animation1.play();
  }  

  render() {
    return (
     
     <View style={styles.container}>
       <StatusBar
       hidden={true} 
      />
        <Text style={styles.welcome}>
         Não Fique Sozinho
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>

      <View>
      <TouchableWithoutFeedback
        onPress={this.onPressLearnMore}
        
      >
      <View>

      <Animation
        ref={animation => { this.animation1 = animation; }}
        style={{
          width: 100,
          height: 100,
        }}
        source={require('./assets/star.json')}
      />
      </View>
      </TouchableWithoutFeedback>
     
      

      </View>
      <Animation
        ref={animation => { this.animation = animation; }}
        style={{
          width: 300,
          height: 300,
        }}
        source={require('./assets/fail.json')}
        loop={true}
      />
      <View style={styles.buttons}>
      <View style={styles.buttonPass}>
        <Button
          color="#870072"
          onPress={this.onPressLearnMore}
          title="Cadastre-se"
          accessibilityLabel="Cadastre-se"
        />
      </View>
      <View style={styles.buttonPass}>  
      <Button
        color="#870072"
        onPress={this.onPressLearnMore}
        title="Login"
        accessibilityLabel="Logar"
       />
       </View> 
       </View>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFE0',
  },
  buttons: {
    flex: 1,
    backgroundColor: '#FFFFE0',
    // backgroundColor: 'red',
    flexDirection:'row'
  
  },
  buttonPass:{
    flex:1,
    justifyContent: 'center',
    margin:7,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
