import { StyleSheet, Dimensions } from "react-native";
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
const styles=StyleSheet.create({
    textStyle:{
        fontSize:50,
        color:"white",
        zIndex:1
    },
    viewStyle:{
        backgroundColor:"#adcb95",
        alignSelf: 'flex-start',
        paddingBottom:10,
        paddingRight:10,
        borderBottomRightRadius:25
    },

    imageStyle:{
        width: imageWidth,
        height: imageHeight,
        resizeMode: 'contain',
        position:'absolute'
    }

})
export default styles;