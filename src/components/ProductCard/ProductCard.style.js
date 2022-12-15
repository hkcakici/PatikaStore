import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create(
    {
        card_container: {
            flex: 1,
            backgroundColor: 'lightgrey',
            margin: 5,
            borderRadius: 5,
        },

        image: {
            margin: 10,
            height:Dimensions.get("window").height/4,
            borderRadius:10,
        },
        title: {
            fontSize:12,
            fontWeight: "bold",
            margin: 10,
            marginBottom:3,
        },
        price: {            
            fontSize:18,
            fontWeight: "bold",
            margin: 10,
            marginTop:3,
            color:'grey',
        },
        instock: {
            fontSize:18,
            fontWeight: "bold",
            margin: 10,
            marginTop:3,
            color:'red',
        },
        inner_container: {},
    }
)