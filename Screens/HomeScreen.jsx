import React from 'react';
import { Dimensions, Image, Text, View, Button} from 'react-native';
import styles from '../style.js';

function HomeScreen() {
  return (
    <View>
      <Image
        style={styles.imageStyle} source={{
          uri: 'https://www.secret-scotland.com/datafiles/uploaded/cmsRefImage/popularPlaces/additional/main/main_77_Duthiebandstand.jpg',
        }}/>
      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>Home</Text>
      </View>
    </View>
  );
}

export default HomeScreen;
