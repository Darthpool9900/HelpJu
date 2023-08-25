import {Text,TextInput,View,StatusBar} from "react-native";
import Style from "../styles/Style";

export default function Banner() {
    return(
        
        <View style={Style.banner}>
            <StatusBar hidden={true} />
            <Text style={Style.title}>Pague e ganhe</Text>
            <View style={{width:"50%",alignItems: "center", justifyContent: "center",color:"#ffff",fontSize:24}}>
                <Text>Acumulem pontos que valem descontos ou milhas Smiles!</Text>
            </View>
            <TextInput style={Style.t_input} placeholder="Digite para pagar"></TextInput>
        </View>
    )
}