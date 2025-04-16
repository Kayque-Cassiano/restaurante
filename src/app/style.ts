import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    form: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        margin: 16,
        padding: 24,
        borderRadius: 8,
        boxShadow: "0 2px 2px 2px rgba(0, 0, 0, 0.2)",
        marginTop: 150,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 24,
        textAlign: "center",
        textTransform: "uppercase",
    },

    label:{
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4,
        color: "#fff"
    },

    input: {
        backgroundColor: "#fff",
        padding: 8,
        borderRadius: 4,
        marginBottom: 40,
        borderColor: "#000",
        borderWidth: 1,
    },

    button:{
        backgroundColor: "#d62828",
        padding: 10,
        borderRadius: 8,
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        marginBottom: 16,
    },

    link:{
        backgroundColor: "#f5a623",
        padding: 10,
        borderRadius: 8,
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        marginBottom: 16,
    }

})