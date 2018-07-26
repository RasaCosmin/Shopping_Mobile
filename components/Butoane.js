import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform
} from "react-native";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this._onPressButton = this._onPressButton.bind(this);
    this._onLongPressButton = this._onLongPressButton.bind(this);
  }

  _onPressButton() {
    let counter = this.state.counter;
    counter++;
    console.log(counter);
    this.setState({ counter: counter });
    Alert.alert("apasat" + this.state.counter);
  }

  _onLongPressButton() {
    let counter = this.state.counter;
    counter++;
    console.log(counter);
    this.setState({ counter: counter });
    Alert.alert("apasat long" + this.state.counter);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate("Layout")}
            title="apasama"
          />
        </View>
        <TouchableHighlight onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
          onPress={this._onPressButton}
          background={
            Platform.OS === "android"
              ? TouchableNativeFeedback.SelectableBackground()
              : ""
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight
          onPress={this._onPressButton}
          onLongPress={this._onLongPressButton}
          underlayColor="white"
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3"
  },
  buttonText: {
    padding: 20,
    color: "white"
  }
});

export default Buttons;
