import React from 'react';
import { View, StyleSheet, } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList'
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
    state = {
        memoList: [],
    }
    componentWillMount() {

        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        //db.settings({ timestampsInSnapshots: true });
        db.collection(`users/${currentUser.uid}/memos`).get()
            .then(snapshot => {
                const memoList = [];//上のmemoListとは別物
                snapshot.forEach(doc => {
                    memoList.push({ ...doc.data(), key: doc.id });
                    //オブジェクトの追加合体記法
                });
                this.setState({ memoList }); //short hand
            })
            .catch(error => {
                console.log(error);
            })
    }
    handlePress() {
        const { params } = this.props.navigation.state;
        this.props.navigation.navigate('MemoCreate', { currentUser: params });
        //ログインから渡ってきた値をさらに渡している。
    }

    render() {
        return (
            <View style={styles.container}>
                <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
                <CircleButton name='plus' onPress={this.handlePress.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFDF6',
    },
});

export default MemoListScreen;