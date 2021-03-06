import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

class LoginScreen extends React.Component {
    state = {
        email: 'user3@example.com',
        password: 'password',
    }

    handleSubmit() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(user => {
                console.log('成功');
                this.props.navigation.navigate('Home', { currentUser: user });
            })
            .catch(error => {
                console.log(error);

            })
        //Log in!
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    ログイン
                </Text>
                <TextInput style={styles.input} value={this.state.email} onChangeText={text => { this.setState({ email: text }); }} autoCapitalize="none" autoCorrect={false} placeholder="Email Address" />
                <TextInput style={styles.input} value={this.state.password} onChangeText={text => { this.setState({ password: text }) }} secureTextEntry placeholder="Password" />
                <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor='#C70F66'>
                    <Text style={styles.buttonTitile}>ログインする</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
        backgroundColor: '#fff',
    },

    input: {
        backgroundColor: '#eee',
        height: 48,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#DDD',
        padding: 8,

    },
    title: {
        fontSize: 28,
        alignSelf: 'center',
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#E31676',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        alignSelf: 'center',
    },
    buttonTitile: {
        color: '#fff',
        fontSize: 18,
    }

});

export default LoginScreen;