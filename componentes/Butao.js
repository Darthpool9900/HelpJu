import {Text,TouchableOpacity,View} from "react-native";
import Style from "../styles/Style";
import { TextT } from "phosphor-react-native";


export default function Header() {
    return(
        <TouchableOpacity style={{height:900,width:300,backgroundColor:"#F7F6F6",marginRight:10, borderRadius: 10}}>
            <View style={{height:"100%",width:"100%"}}><Text>oi</Text></View>
        </TouchableOpacity>
    );
}