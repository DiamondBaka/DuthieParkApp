import React from 'react';
import {Image, Text, View, ScrollView, Button, TouchableOpacity} from 'react-native';
import styles from '../style.js';
import Icon from 'react-native-ico-material-design';

const Sound = require('react-native-sound');
let audio = new Sound('audio.mp3', Sound.MAIN_BUNDLE, (error) => {
    if(error) {
        console.log(error)
      }
})

function ShortTrailStartScreen() {
  return (
    <View>
      <View>
          <ScrollView horizontal={true}>
            <Image style={styles.mapStyle2} source={require("../imgs/ShortTrail.png")} />
          </ScrollView>
      </View>
      <View style={[styles.viewStyle, {position:'absolute'}]}>
        <Text style={styles.titleStyle}>Map</Text>
      </View>
      <View style={[styles.sliderStyle, {position:'absolute'}]}>
        <View style={styles.logContainer}>
          <Image style={styles.memImgStyle} source={require("../imgs/mem.png")} />
          <View style={styles.sliderView}>
            <Text style={styles.sliderTitle}>Gordon Highlanders Memorial</Text>
            <Text style={styles.sliderText}>One of two memorials to the regiment in the park (see also 20). Grey granite Celtic cross memorial, dated 1882,
to Gordon Hig...</Text>
            <View style={styles.logContainer}>
                    <TouchableOpacity style={styles.sliderIco}>
                        <Icon name="camera" height="40" width="40" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sliderIco} onPress={() => audio.play()}>
                    <Icon name="play-arrow" height="40" width="40" />
                    </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ShortTrailStartScreen;