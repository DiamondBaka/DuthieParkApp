import React from 'react';
import {TouchableOpacity,ImageBackground,Dimensions, Image, Text, View } from 'react-native';
import styles from '../style.js';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

function TrailScreen({navigation}) {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>Trails</Text>
      </View>
      <View>
      <TouchableOpacity
        style={styles.trailSection}
        color="#adcb95"
        onPress={() => navigation.navigate('ShortTrailScreen')}>
        <Text style={styles.trailText}>
          <B>Short Trail</B>
        </Text>
      </TouchableOpacity>
        <View style={styles.trailSection}>
          <Text style={styles.trailText}>
            <B>Long Trail</B>
          </Text>
        </View>
        <View style={styles.trailSection}>
          <Text style={styles.trailText}>
            <B>Logbook</B>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default TrailScreen;
