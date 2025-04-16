import { Link, router } from "expo-router";
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function CadastrarScreen(){
    function handleCadastrar() {
            router.replace("/home/page")
        }


    return (
        <ImageBackground source={require("@/assets/images/Fundo.jpg")} style={{ flex: 1 }} resizeMode="cover">
                    <View style={styles.form}>
                        <View style={styles.flex}>
                            <View>
                                <Text style={styles.label}>Nome</Text>
                                <TextInput style={styles.input} placeholder="Seu nome" />
                            </View>
                            <View>
                                <Text style={styles.label}>Data de Nascimento</Text>
                                <TextInput style={styles.input} placeholder="Seu data de nascimento" />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.label}>CPF</Text>
                            <TextInput style={styles.input} placeholder="Seu CPF" />
                        </View>
                        <View>
                            <Text style={styles.label}>E-mail</Text>
                            <TextInput style={styles.input} placeholder="Seu email" />
                        </View>
                        <View>
                            <Text style={styles.label}>Senha</Text>
                            <TextInput style={styles.input} placeholder="Sua senha" />
                        </View>
                        <TouchableOpacity onPress={handleCadastrar}>
                            <Text>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
    )
}