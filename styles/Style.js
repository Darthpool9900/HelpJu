import { StyleSheet } from "react-native";

export default StyleSheet.create({
     header: {
        width: "100%",
        height: 50,
        backgroundColor: "#EBE721",
        flexDirection: "row",       // Arrange items horizontally
        alignItems: "center",       // Vertically center items
        justifyContent: "space-between", // Space items evenly along the main axis
    },
    banner: {
        width: "100%",
        height: "50%",
        backgroundColor: "#7D2CCD",
        alignItems: "center",
        justifyContent: "center",
        
    },
    btn: {
        width: "30%",
         paddingLeft:10,
    },
    container:{
        width:"50%",
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"right",
        paddingRight:10,
    },
    title:{
        color: "#ffff",
        fontSize: 30,
    },
    t_input:{
        width:"80%",
        height:60,
        backgroundColor:"#ffff",
        marginTop:10,
        borderRadius: 5,
         textAlign: 'center',
         fontSize:18
    },
    points_cotainer:{
        width:"100%",
        height:120,
        paddingLeft:10,
        paddingRight:10,
        marginTop:10,
        marginBottom:10,
    },
    pointsbtn:{
        width:"100%",
        height:"80%",
        backgroundColor:"#F7F6F6",
        paddingLeft:10,
        paddingRight:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
          // Drop shadow for Android
          elevation: 3,
          // Drop shadow for iOS
          shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 2,
          },
          shadowOpacity: 0.3,
          shadowRadius: 3,
          color:"#343433"
    },
    carrosel:{
        width:200,
        height:"100%",
        backgroundColor:"#F7F6F6"
    },
    c_container:{
        width:"100%",
        height:"100%",
    }
});