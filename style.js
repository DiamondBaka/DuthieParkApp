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

    routeStyle:{
      width: imageWidth*0.8,
      height: imageWidth*0.8,
      margin: imageWidth*0.1,
      marginBottom: imageWidth*0.05,
      marginTop: imageWidth*0.05
    },

    mapStyle:{
      width: 1100,
      height: 750
    },

    welcomeText:{
      padding:20,
      marginTop:130,
      backgroundColor:"#adcb95",
      fontSize:25,
      

    },

    eventSection:{
      backgroundColor:"#adcb95",
      width: "90%",
      borderRadius:20,
      margin: "5%"
    },

    eventText:{
      alignContent:"center",
      justifyContent:"center",
      textAlign:"center",
      color: "black",
      paddingBottom: 10
      },

    eventImage:{
      borderRadius:20,
      width: "80%",
      height: imageHeight,
      marginLeft: "10%",
      marginTop:20,
      marginBottom:10
    },


  eventStyles:{
    textAlign: "center",
    color:"black"
      },

  trailSection:{
    marginTop: 20,
    backgroundColor:"#adcb95",
    width: "90%",
    marginLeft:imageWidth * 0.05,
    justifyContent: "center", 
    alignItems: "center", 
    padding: 30,
    borderRadius: 25
  },

  trailText:{
    fontSize: 30,
    color:"black"

  },

  trailButton:{
    width:"50%",
    alignContent:"center",
    justifyContent:"center"
  },
    logbookEntry:{
    marginTop: 20,
    backgroundColor:"#adcb95",
    width: "90%",
    marginLeft:imageWidth * 0.05,
    justifyContent: "center", 
    alignItems: "center", 
    padding: 15,
    borderRadius: 25
  },
  logbookText:{
    fontSize:15,
    color:"black"
  },

  logbookSection:{
    backgroundColor:"#adcb95",
    padding: 15,
    borderRadius: 25,
        marginTop: 10


  },

  logbookSection2:{
    backgroundColor:"#adcb95",
    padding: 15,
    borderRadius: 25,
    marginTop: 10
  },
  logbookText2:{
    fontSize:25,
    color:"black"
  },

    logbookText3:{
    fontSize:16,
    color:"black"
  },

  defaultText:{
    color:"black",
    fontSize:15
  },

  welcomeSection:{
    paddingLeft:20,
    paddingRight:20
  },

  question:{
    backgroundColor:"#adcb95",
    marginTop: 20,
    width: "90%",
    marginLeft:imageWidth * 0.05,
    justifyContent: "center", 
    padding: 15,
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
  },

  answer:{
    backgroundColor:"#cbf5da",
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    width: "90%",
    marginLeft:imageWidth * 0.05,
    justifyContent: "center", 
    padding: 15,

  },

  startButton:{
    backgroundColor:"#adcb95",
    borderWidth:2,
    borderColor: "black"
  }
})
export default styles;