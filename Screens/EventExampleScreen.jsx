import React from 'react';
import { ImageBackground,Dimensions, Image, Text, View, Button } from 'react-native';
import styles from '../style.js';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

function HomeScreen() {
  return (
    <View>
<View style = {styles.centerImage}>
      <ImageBackground
        style={styles.imageStyle} source={{
          uri: 'https://i2-prod.aberdeenlive.news/incoming/article8678934.ece/ALTERNATES/s1200b/0_DSC_6437.jpg',
        }}/>
        </View>
      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>Event</Text>
      </View>
      <View>

      </View>


        <View style={styles.eventexampleSection}>


        <Text style={[styles.defaultText, {padding:10}]}><B>Duthie Park Light Show!</B>
        {"\n"}{"\n"}
        <B>Date:</B> 14/03/2024 - 8:00pm
        {"\n"}{"\n"}
        <B>Description:</B> Come along to see Duthie Gardens beautifully illuminated at night by a variety of lights! Take a stroll and see the nature and monuments in a way you've never seen before.
                {"\n"}{"\n"}
        <B>Price:</B> Free
                {"\n"}{"\n"}
        <B>Location:</B> Duthie Gardens
        </Text>
        
        </View>
      </View>
  );
}

export default HomeScreen;
