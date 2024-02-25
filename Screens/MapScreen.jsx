import React from 'react';
import {Image, Text, View } from 'react-native';
import styles from '../style.js';

function MapScreen() {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>Map</Text>
      </View>
    </View>
  );
}

export default MapScreen;