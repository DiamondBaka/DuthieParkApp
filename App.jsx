import {Button, Text, View, StyleSheet} from 'react-native'
import styles from './style.js'
function app() {
    return(
        <View style={styles.viewStyle}>
            <View>
                <Text style={styles.textStyle}>Hello!!!</Text>
            </View>
            <View>
                <Button title='BUTTON!!!' color='#841584'></Button>
            </View>
        </View>
    )
}
export default app;