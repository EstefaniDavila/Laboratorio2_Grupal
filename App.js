import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, TextInput, Image} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textValueUser: '',
      textValuePassword: '',
      count: "Presione entrar",
    };
  }
  changeTextInputUser = text => {
    this.setState({textValueUser: text});
  };
  changeTextInputPassword = text => {
    this.setState({textValuePassword: text});
  };
  onPress = () => {
    this.setState({
      count: "Usted ya entro",
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text>Empresa Acme</Text>
        </View>
        <Image source={require('./img/logo.png')} style={styles.image} />

        <TextInput style={{height: 40, borderColor: 'gray', borderWidth:1}}
        onChangeText={text => this.changeTextInputUser(text)}
        value={this.state.textValueUser}
        placeholder="Ingresa tu nombre de usuario"
        />
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth:1}}
        onChangeText={text => this.changeTextInputPassword(text)}
        value={this.state.textValuePassword}
        placeholder="Ingresa tu contraseña"
        secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>Entrar</Text>
          </TouchableOpacity>
          <View style={[styles.countContainer]}>
            <Text style={[styles.countText]}>
              {this.state.count}
            </Text>
          </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    paddingHorizontal:10,
  },
  text: {
    alignItems:'center',
    padding: 10,
  },
  button: {
    top: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems:'center',
    padding:10,
  },
  countText: {
    color:'#FF00FF',
  },
  image: {
    margin: 10,
    alignSelf:"center"
  },
});