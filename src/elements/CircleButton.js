import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import fontawesome from '../../assets/fonts/fa-solid-900.ttf';

class CircleButton extends React.Component {
    state = {
        fontLoaded: false,
    };
    //コンポーネントが読み込まれたら、、
    async componentDidMount() {
        await Font.loadAsync({
            FontAwesome: fontawesome,
        });

        this.setState({ fontLoaded: true });
    }

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
                {
                    this.state.fontLoaded ? (
                        <Text style={[styles.circleButtonTitle, { color: textColor }]}>
                            {this.props.children}
                        </Text>
                    ) : null
                }
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
        fontFamily: 'FontAwesome',
        fontSize: 24,
        //なんかfontfamilyでttf指定すると、位置や太さが変わった。が、プラスもフォントにしたった
        lineHeight: 36,
    },
});


export default CircleButton;