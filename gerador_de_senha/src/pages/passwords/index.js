import { View, Text, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'

export function Passwords(){
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused()
    const { getItem } = useStorage()

    useEffect (()=>{
        async function loadPasswords(){
            const passwords = getItem("@pass")
            console.log(passwords)
        }
        loadPasswords()
    }, [focused])
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "lightcoral",
        height: "13%",
        paddingTop: 60,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15
    },

    title:{
        fontSize: 20,
        fontWeight: "600",
        color: "#FFF"
    }
})