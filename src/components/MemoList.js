import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';

const dateString = (date) => {
    const str = date.toISOString();
    return str.split('T')[0];
};
//上記はクラスと関係なく、単純な関数なのでグローバルにしてみた、、呼び出しもともthisはいらない。

class MemoList extends React.Component {
    renderMemo({ item }) {
        return (
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail', { memo: item }) }}>
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>{item.body.substring(1, 10)}</Text>
                    <Text style={styles.memoDate}>{dateString(item.createOn.toDate())}</Text>
                </View>
            </TouchableHighlight>
        );
    }
    render() {
        //console.log(this.props.memoList);渡ってるか確認
        return (
            <View style={styles.memoList}>
                <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)} />
            </View>

        );
    }
}

const styles = StyleSheet.create({

    memoList: {
        width: '100%',
        flex: 1,
    },
    memoListItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#fff',
    },
    memoTitle: {
        fontSize: 18,
        marginBottom: 4,
    },
    memoDate: {
        fontSize: 12,
        color: '#a2a2a2'
    },

});

//shadowが効いてない気がする。


export default MemoList;