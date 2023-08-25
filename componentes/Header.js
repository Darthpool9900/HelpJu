import {Text,TouchableOpacity,View,StatusBar} from "react-native";
import Style from "../styles/Style";
import { Question,Notification,List } from "phosphor-react-native";


export default function Header({navigation}) {
    return(
        
        <View style={Style.header}>
            <StatusBar hidden={true} />
            <TouchableOpacity style={Style.btn}>
                <List size={34}/>
            </TouchableOpacity>
            <View style={Style.container}>
            <TouchableOpacity >
                <Question size={34}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Notification size={34}/>
            </TouchableOpacity>
            </View>
        </View>
    )
}