import React from 'react';
import {Image, Text, View, ScrollView} from 'react-native';
import styles from '../style.js';

function ShortTrailStartScreen() {
  return (
    <View>
      <View>
          <ScrollView horizontal={true}>
            <Image style={styles.mapStyle} source={require("../imgs/blank-map.png")} />
          </ScrollView>
      </View>
      <View style={[styles.viewStyle, {position:'absolute'}]}>
        <Text style={styles.titleStyle}>Map</Text>
      </View>
    </View>
  );
}

export default ShortTrailStartScreen;