import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);
  }

  onChange = prop => value => {
    console.log;
    this.setState({ [prop]: value });
    console.log(this.state);
  };

  login(){
      console.log(this.state);
  }

  static navigationOptions = {
    title: "Login",
    alignSelf: "center"
  };

  render() {
    console.log(this.state);
    const textt = this.state.password + " " + this.state.email;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Please provide your credentials to login or open the register page{" "}
          {textt}
        </Text>
        <TextInput
          style={(styles.text, styles.textInput)}
          autoCapitalize="none"
          onChangeText={this.onChange("email")}
        />
        <TextInput
          style={(styles.text, styles.textInput)}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={this.onChange("password")}
        />
        <Button style={styles.btn} onPress={() => this.login()} title="Login" />
        <Button
          style={styles.btn}
          onPress={() => this.props.navigation.navigate("Register")}
          title="Register"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 16
  },
  textInput: {
    color: "blue",
    padding: 10,
    margin: 4
  },
  btn: {
    margin: 4
  }
});

export default Login;
