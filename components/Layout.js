import React, { Component } from "react";
import { TextInput, View } from "react-native";

export class Flex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      text: ""
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prev => {
        return { show: !prev.show };
      });
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-evenly"
        }}
      >
        <TextInput onChangeText={text => this.setState({ text })} />
        <View
          style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
        />
      </View>
    );
  }
}

export default Flex;
