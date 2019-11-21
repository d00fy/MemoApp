import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
    render() {
        //スタイルをpropsでもってきて、それで上書きカスタマイズするということ。
        const { style, color } = this.props;

        let bgColor = '#E31676';
        let textColor = '#fff';

        if (color === 'white') {
            bgColor = '#fff';
            textColor = '#E31676';
        }

        return (
            //配列形式で入れる、第一引数優先、それ以降は差分を見てる？？
            <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
                <Text style={[styles.circleButtonTitle, { color: textColor }]}>
                    {this.props.children}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    circleButton: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    circleButtonTitle: {
        fontSize: 32,
        lineHeight: 32,
        color: '#fff',
    },
});


export default CircleButton;