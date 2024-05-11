import React from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity, Modal } from 'react-native'
import { useState } from "react";
import { DelModal} from './modal/delModal'

export function PasswordItem({ data , delPass }){
    const [modalVisible, setModalVisible] = useState(false)
    const [visiblePass, setVisiblePass] = useState(true)

    function HideItem(){
        
        setVisiblePass(!visiblePass)
        if(visiblePass == true){  
            data = data
        }
        else{
            data = "------"
        }
        return data
    }

    return(
        <View>
            <Pressable onLongPress={()=> setModalVisible(true)} style={styles.container}>
                <Text style={styles.text}>{data}</Text>
                <TouchableOpacity style={styles.hideBtn} onPress={HideItem}>
                    <Text style={styles.hideBtn}>hide</Text>
                </TouchableOpacity>
            </Pressable>
            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <DelModal handleClose={()=> setModalVisible(false)} item={data} removePass={delPass}></DelModal>
            </Modal>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        backgroundColor: "black",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    text:{
        color: "white", 
    },

    hideBtn:{
        color: "white",
    }
})