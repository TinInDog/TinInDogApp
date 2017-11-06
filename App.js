/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
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
  ScrollView,
  AccessibilityInfo
} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';

// import Register  from './Register'

import Animation from 'lottie-react-native';

const instructions = Platform.select({ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu', android: 'Vamos encontrar um novo amigo pra você'});

// const routes = StackNavigator({   Register: { screen: Register }   //
// Profile: { screen: Profile }, });

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0)
    };

  }

  componentDidMount() {
    this
      .animation
      .play();
  }

  componentWillMount() {}

  onPressLearnMore = () => {
    this
      .animation1
      .play();

  }

  render() {
    // const { navigate } = this.navigation;
    return (

      <View style={styles.container}>
        <StatusBar hidden={true}/>
        
        <View style={styles.title}>
          <Text style={styles.info}>
            Não Fique Sozinho
          </Text>
          <View style={styles.containerText}>
            <Text style={styles.infoText}>
            </Text>
            <Text style={styles.infoText}>
              {instructions}
            </Text>
            <Text style={styles.infoText}>
            </Text>
          </View>
        </View>

        <View style={styles.animate}>
          <Animation
            ref={animation => {
            this.animation = animation;
          }}
            style={{
            width: 400,
            height: 400
          }}
            source={require('./assets/fail.json')}
            loop={true}/>
        </View>

        <View style={styles.buttons}>
          <View style={styles.buttonPass}>
            <Button color="#870072" onPress={this.onPressLearnMore} title="Cadastre-se"/>
          </View>
          <View style={styles.buttonPass}>
            <Button color="#870072" onPress={this.onPressLearnMore} title="Login"/>
          </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFE0',
    
  },
  containerText: {
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    position:'relative', 
  },
  buttonPass: {
    flex: 1,
    justifyContent: 'center',
    margin: 7
  },
  title: {
    flex:1,
    flexDirection:'column',
  },
  infoText: {
    fontSize: 14,
    textAlign:'center',
    margin:-20
  },
  info: {
    color: '#870072',
    fontWeight: 'bold',
    fontSize: 40,
    margin: 70,
    textAlign:'center'
  },
  animate: {
    margin:-80,
    flex: 2,
    flexDirection: 'column',
    alignItems:'center'
  }

});
