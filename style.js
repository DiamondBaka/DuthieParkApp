import { StyleSheet, Dimensions } from "react-native";
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
const screenHeight = dimensions.height;
const styles=StyleSheet.create({
    titleStyle:{
      paddingLeft: 10,
      paddingRight:10,
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

    
    mapStyle2:{
      width: imageWidth*1.15,
      height: imageWidth*1.15,
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

    eventexampleSection:{
      marginTop:200,
      backgroundColor:"#adcb95",
      width: "90%",
      borderRadius:20,
      margin: "5%",
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

  trailButton: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
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
    width: "92%",
    borderRadius:20,
    margin: "4%"

  },

  logbookText2:{
    fontSize:25,
    color:"black"
  },

    logbookText3:{
    fontSize:16,
    color:"black"
  },

  logContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },

  logImgStyle:{
    width: imageWidth*0.37,
    height: imageWidth*0.37,
    resizeMode: 'cover',
  },

  sliderStyle:{
    backgroundColor:"lightgrey",
    flex: 1,
    height: screenHeight*0.5,
    top: screenHeight - screenHeight*0.55+50,
    width: imageWidth,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignSelf: 'center',
    paddingBottom:10,
    paddingRight:10,

},
sliderTitle:{
  fontSize:20,
  color:"black",
  width:imageWidth*0.5,

},

  sliderText:{
    color:"black",
    width:imageWidth*0.5,
    fontSize:16
  },
  sliderView:{
    flexDirection: "column"
  },

  sliderIco:{
    backgroundColor: "#adcb95",
    padding:16,
    borderRadius: 16,
  },

  memImgStyle:{
    width: imageWidth*0.37,
    height: imageWidth*0.6,
    marginTop: 10,
    marginLeft: 10,
    borderRadius:20,
    resizeMode: 'cover',
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
    borderWidth:1,
    borderColor: "black",
    height:45,
    paddingLeft: 10,
    paddingRight: 10
  }


})

export default styles;