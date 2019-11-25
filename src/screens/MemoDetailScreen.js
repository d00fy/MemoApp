import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';

import CircleButton from '../elements/CircleButton';

const dateString = (date) => {
    const str = date.toISOString();
    return str.split('T')[0];
};
//上記はクラスと関係なく、単純な関数なのでグローバルにしてみた、、呼び出しもともthisはいらない。

class MemoDetailScreen extends React.Component {
    state = {
        memo: {},
    }

    //下のレンダーでもろも表示される前に、MemoListから渡ってきたitemを保存したいので
    componentWillMount() {
        const { params } = this.props.navigation.state;
        this.setState({ memo: params.memo });
    }


    render() {
        const { memo } = this.state;
        console.log(memo.createOn.toDate());

        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.memoHeader}>
                        <View>
                            <Text style={styles.memoHeaderTitle}>{memo.body.substring(0, 10)}</Text>
                            <Text style={styles.memoHeaderDate}>{dateString(memo.createOn.toDate())}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.memoContent}>
                    <Text style={styles.memoBody}>
                        {memo.body}
                    </Text>
                </View>

                <CircleButton
                    name="pencil"
                    color="white"
                    style={styles.editButton}
                    onPress={() => { this.props.navigation.navigate('MemoEdit', { memo }) }} />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoHeader: {
        height: 100,
        backgroundColor: '#17313c',
        justifyContent: 'center',
        //中身を上下の真ん中に持ってくる。
        padding: 10,
    },
    memoHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    memoHeaderDate: {
        fontSize: 12,
        color: '#fff',
    },
    memoContent: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: '#fff',
        flex: 1,
    },
    editButton: {
        top: 75,
    },
    memoBody: {
        lineHeight: 22,
        fontSize: 15,
    }
});

export default MemoDetailScreen;