import React from "react";
import{ View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export function DelModal({ handleClose, removePass, item }){
    function deleteItemAndClose(){
        removePass()
        handleClose()
    }
    return(

        <View style={styles.content}>
            <View style={styles.modalWrapper}>
                <Text style={styles.title}>Deseja deletar a senha?</Text>
                <View style={styles.contentPassArea}>
                    <Text style={styles.passContent}>{item}</Text>
                </View>
                <View style={styles.areaDeleteButton}>
                    <TouchableOpacity onPress={handleClose} style={styles.buttonPrev}>
                        <Text style={styles.textPrevBtn}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteItemAndClose} style={[styles.buttonDelete,styles.buttonPrev ]}>
                    <Text style={styles.textDelBtn}>Deletar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: "rgba(24, 24, 24, 0.4)",
        justifyContent: "center",
        alignItems: "center"
    },

    modalWrapper:{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        paddingBottom: 14,
        paddingTop: 14,
        borderRadius: 10
    },

    title:{
        fontSize: 17,
        fontWeight: "bold",
        paddingTop: 14,
        paddingBottom: 27,
    },

    areaDeleteButton:{
        flexDirection: "row",
        width: "85%",
        justifyContent: "space-between",
        alignItems: "center",
    },

    buttonPrev:{
        flex: 1,
        alignItems: "center",
        marginBottom: 14,
        marginTop: 14, 
        padding: 10,
    },

    buttonDelete:{
        backgroundColor: "lightcoral",
        borderRadius: 8,
    },

    textDelBtn:{
        fontSize: 15,
        fontWeight: "bold",
        color: "white"
    },

    textPrevBtn:{
        fontSize: 15,
        fontWeight: "bold"
    },

    contentPassArea:{
        width: "85%",
        backgroundColor: "black",
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 8,
        justifyContent: "center",
        alignItems:"center",
        marginBottom: 8,
    },

    passContent:{
        color: "white",
        fontWeight: "bold"
    }
})