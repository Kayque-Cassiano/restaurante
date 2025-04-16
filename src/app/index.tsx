import { Link, router } from "expo-router";
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export default function LoginScreen() {
    function handleLogin() {
        router.replace("/home/page")
    }

    return (

        <ImageBackground source={require("@/assets/images/Fundo.jpg")} style={{ flex: 1 }} resizeMode="cover">
            <View style={styles.form}>
                <Text style={styles.title}>Login</Text>
                <View>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput style={styles.input} placeholder="Seu email" />
                </View>
                <View>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={styles.input} placeholder="Sua senha" />
                </View>
                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.button}>Enviar</Text>
                </TouchableOpacity>
                <Link style={styles.link} href={"/cadastrar/page"}>Crie uma conta</Link>
            </View>
        </ImageBackground>


    )
}