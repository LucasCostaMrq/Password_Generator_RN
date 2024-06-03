import React from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity, Modal } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useState } from "react";
import { DelModal} from './modal/delModal'

export function PasswordItem({ data , delPass }){
    const [modalVisible, setModalVisible] = useState(false)

    return(
        <View>
            <Pressable onLongPress={()=> setModalVisible(true)} style={styles.container}>
                <Text style={styles.text}>{data}</Text>
            </Pressable>
            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <DelModal delPassConfirm={delPass} handleClose={()=> setModalVisible(false)} data={data} ></DelModal>
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