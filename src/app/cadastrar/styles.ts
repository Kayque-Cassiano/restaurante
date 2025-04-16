import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    form: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        margin: 16,
        padding: 24,
        borderRadius: 8,
        boxShadow: "0 2px 2px 2px rgba(0, 0, 0, 0.2)",
        marginTop: 150,
    },

    label:{
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4,
        color: "#fff"
    },

    flex: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
        marginBottom: 16,
    },

    input: {
        backgroundColor: "#fff",
        padding: 8,
        borderRadius: 4,
        marginBottom: 16,
        borderColor: "#000",
        borderWidth: 1,
        
        width: "100%",
    },

})