import {Text, View} from "react-native";
import Header from "../componentes/Header";
import Banner from "../componentes/Banner";
import Points from "../componentes/Points";
import Carrosel from "../componentes/Carrosel";

export default function Home() {
    return (
        <View>
        <Header/>
        <Banner/>
        <Points/>
        <Carrosel/>
        </View>
    )
}