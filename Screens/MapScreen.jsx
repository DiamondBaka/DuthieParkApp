import React from 'react';
import {Image, Text, View,  } from 'react-native';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styles from '../style.js';

function MapScreen() {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>Map</Text>
      </View>
      <View>

        <Image style={styles.mapStyle} source={require("../imgs/blank-map.png")} />

      </View>
    </View>
  );
}

export default MapScreen;