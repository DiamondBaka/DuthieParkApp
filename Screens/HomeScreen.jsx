import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import styles from '../style.js';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

function App() {
    return (
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
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Home</Text>
            </View>

            <View>
                
            </View>


        </View>
    );
}

export default App;
