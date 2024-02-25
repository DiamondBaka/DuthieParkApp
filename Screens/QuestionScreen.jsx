import React from 'react';
import {Image, Text, View } from 'react-native';
import styles from '../style.js';

function QuestionScreen() {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>FAQ</Text>
      </View>
      <View>
        <Text style={styles.textStyle}>What are the opening hours?</Text>
        <Text style={styles.textStyle}>The park is open 24 hours a day</Text>
      </View>
    </View>
  );
}

export default QuestionScreen;