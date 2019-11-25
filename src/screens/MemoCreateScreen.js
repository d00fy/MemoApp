import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import firebase from 'firebase';
import { KeyboardAvoidingView } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
    state = {
        body: '',
    }

    handlePress() {
        const { params } = this.props.navigation.state;
        console.log(params.currentUser.currentUser.user.uid);
        let uid = params.currentUser.currentUser.user.uid;
        //実は const {currentUser} = firebase.auth(); でfirebaseから直に取得できる。

        const db = firebase.firestore();
        // db.settings({ timestampsInSnapshots: true });
        db.collection(`users/${uid}/memos`).add({
            body: this.state.body,
            createOn: new Date(),
        })
            .then(docRef => {
                console.log(docRef.id);

            })
            .catch(error => {
                console.log(error);

            });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.memoEditInput}
                    multiline value={this.state.body}
                    onChangeText={text => { this.setState({ body: text }); }}
                />
                <KeyboardAvoidingView behavior="padding">
                    <CircleButton name='check' onPress={this.handlePress.bind(this)} />
                </KeyboardAvoidingView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoEditInput: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        fontSize: 16,
    }

});

export default MemoCreateScreen;