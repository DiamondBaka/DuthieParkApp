import {Dimensions,Image,Button, Text, View, StyleSheet} from 'react-native'
import styles from './style.js'

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;


function app() {
    return(
        <View >
            <View>
                <Text >Home</Text>
            </View>         
            
            <View>
        <Image
              style={{
                width: imageWidth,
                height: imageHeight,

                resizeMode: 'contain',
              }}
              source={{
                uri: 'https://www.secret-scotland.com/datafiles/uploaded/cmsRefImage/popularPlaces/additional/main/main_77_Duthiebandstand.jpg',
              }}
            />
        </View>      
        </View>


    )
}
export default app;