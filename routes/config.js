import { createStackNavigator } from "react-navigation";
import Butoane from "../components/Butoane";
import Layout from "../components/Layout";
import Login from "../components/Login";

const RootStack = createStackNavigator(
  {
    Butoane: Butoane,
    Layout: Layout,
    Login: Login
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#432112"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        alignSelf: "center"
      }
    }
  }
);

export default RootStack;
