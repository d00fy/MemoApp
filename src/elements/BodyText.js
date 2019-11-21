import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//読み込みおなじない

class BodyText extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>
                    {this.props.children}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#DDD',
        backgroundColor: '#eee',
    },
});
//ここでcssクラスを作成しているイメージ


export default BodyText;
//他のファイルで使用するために出力している。