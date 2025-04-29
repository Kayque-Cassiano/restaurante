import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        padding: 16,
        margin: 16,
        height: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 24,
    },

    itemImage: {
        width: 100,
        height: 100,
        margin: "auto",
        marginBottom: 16,
    },

    description: {
        fontSize: 16,
        color: "#333",
        marginTop: 8,
        textAlign: "justify",
    },

    title: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 8,
    },

    link:{
        fontSize: 24,
        color: "#333",
    },

    flex:{
        display: "flex",
        flexDirection: "row",
        gap: 8,
    },

    botao:{
        backgroundColor: "#333",
        color: "#fff",
        padding: 8,
        borderRadius: 4,
        textAlign: "center",
        marginTop: 16,
    }
});