import { Text, View, Image, Button } from "react-native";
import { styles } from "./style";
import { Link, router } from "expo-router";

export default function Produto() {
    function handleHome() {
            router.replace("/home/page")
        }

    return (
        <View style={styles.card}>
            <div style={styles.flex}>
                <Text onPress={handleHome} style={styles.link}>←</Text>
                <Text style={styles.title}>Voltar</Text>
            </div>
            <Image source={require("@/assets/images/original.png")} style={styles.itemImage}/>
            <Text style={styles.title}>X-Burguer</Text>
            <Text style={styles.description}>Pão macio e brilhante, hambúrguer de carne, queijo derretido, alface fresca e molho especial!</Text>
            <Text style={styles.description}>R$ 19,90</Text>
            <Text style={styles.title}>Mais Informações</Text>
            <Button title="Adicionar ao Carrinho"/>
        </View>
    )
}