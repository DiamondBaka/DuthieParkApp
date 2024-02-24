import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import styles from '../style.js';

function HomeScreen() {
  return (
    <View>
      <Image
        style={styles.imageStyle} source={{
          uri: 'https://www.secret-scotland.com/datafiles/uploaded/cmsRefImage/popularPlaces/additional/main/main_77_Duthiebandstand.jpg',
        }}/>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Home</Text>
      </View>
    </View>
  );
}

export default HomeScreen;
