import{Text,View,TouchableOpacity} from "react-native";
import Style from "../styles/Style";
import { Trophy,ArrowFatRight} from "phosphor-react-native";


export default function Points(){
    return(
        <View style={Style.points_cotainer}>
            <Text style={{fontSize:24,color:"#323130",fontWeight:"bold",marginTop:5,marginBottom:5,}}>Resgate de pontos</Text>
            <TouchableOpacity style={Style.pointsbtn}>
                <View style={{flexDirection:"column",alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center",marginBottom:5}}>
                    <Trophy size={32}/>
                    <Text style={{fontSize:18,marginLeft:5}}>Pontos</Text>
                    </View>
                    <Text>Resgate</Text>
                    </View>
                    
                    <View Style={{}}>
                    <ArrowFatRight size={32}/>
                    </View>
                </TouchableOpacity>
        </View>
    );
}