
import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, StackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Item, Form, Input, Button, Label } from "native-base";
import firebase from './firebase';


export default class LoginScreen extends Component {
    

    state = { email: '', password: '', errorMessage: null }
    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('App'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    handleLogin = () => {
        const { email, password } = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('App'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {


        return (
            <Container style={styles.container}>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={email => this.setState({ email })}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input

                            secureTextEntry={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={password => this.setState({ password })}
                        />
                    </Item>

                    <Button onPress={this.handleLogin} full rounded primary style={{ marginTop: 20, }}>
                        <Text>Login</Text>
                    </Button>

                    <Button onPress={this.handleSignUp} full rounded success style={{ marginTop: 20 }}>
                        <Text>Signup</Text>
                    </Button>
                </Form>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 190,
        justifyContent: "flex-start"

    },
})
