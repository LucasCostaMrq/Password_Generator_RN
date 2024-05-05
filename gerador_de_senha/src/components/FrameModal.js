import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native"
import * as ClipBoard from "expo-clipboard"
import useStorage from "../hooks/useStorage"

export function FrameModal( {password , handleClose} ){
    //async function => irá esperar um tempo de resposta para responder ao usoário, sem realizar o comando de forma imediata

    const { saveItem } = useStorage() 

    async function copyPasswordClip(){
        //await => irá esperar o comando pelo ClipBoard
        //.setStringAsync => irá salvar a string 
        await ClipBoard.setStringAsync(password)
        await saveItem("@pass", password)

        alert("senha salva com sucesso")
        handleClose()
    }

    return(
        //OnLongPress => resposta quando o usoário realizar um "click demorado"
        <View style={styles.container}>
            <View style={styles.content}>
                
                <Text style={styles.title}>Sua nova senha</Text>
                
                <Pressable style={styles.passArea} onLongPress={copyPasswordClip}>
                    <Text style={styles.passValueInArea}>{password}</Text>    
                </Pressable>

                <View style={styles.areaBtn}>   
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={handleClose}>
                        <Text style={styles.prevBtnText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button , styles.buttonSave]} onPress={copyPasswordClip}>
                        <Text style={styles.saveBtnText}>Salvar</Text>
                    </TouchableOpacity>
                </View>      

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.4)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    content: {
        backgroundColor: "white",
        width:"85%",
        paddingBottom: 30,
        paddingTop: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },

    passArea: {
        width: "80%",
        height: 42,
        backgroundColor: "black",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },

    passValueInArea: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
    },

    areaBtn: {
        flexDirection: "row",
        marginTop: 10,
        alignItems:"center",
        width: "80%",
        justifyContent: "space-between"
    },
    
    button: {
        flex:1,
        alignItems: "center",
        marginBottom: 14,
        marginTop: 14, 
        padding: 10,
    },

    buttonSave:{
        backgroundColor: "lightcoral",
        borderRadius: 8,
    },

    saveBtnText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },

    prevBtnText:{
        fontWeight:"bold",
        fontSize: 15
    }
})