import { StyleSheet, Dimensions } from "react-native";
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
const styles=StyleSheet.create({
    titleStyle:{
        fontSize:25,
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
        resizeMode: 'cover',
        position:'absolute',
        flex:1
    },

    welcomeText:{
      padding:20,
      marginTop:130,
      backgroundColor:"#adcb95",
      fontSize:25,
      

    },

    eventSection:{
      backgroundColor:"#adcb95",
      width: "100%",
    marginTop:20,

    },

    eventImage:{
      borderRadius:20,
      width: imageWidth * 0.8,
      height: imageHeight,
      marginTop:10,
      marginBottom:10
    },


  eventStyles:{
    textAlign: "center",
      },

  trailSection:{
    marginTop: 20,
    backgroundColor:"#adcb95",
    width: "90%",
    marginLeft:imageWidth * 0.05,
    flex: 1,
    justifyContent: "center", 
    alignItems: "center", 
    padding: 30,
    borderRadius: 25,
  },

  trailText:{
    fontSize: 30

  }

})
export default styles;