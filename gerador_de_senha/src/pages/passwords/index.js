import { View, Text, StyleSheet, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'
import { PasswordItem } from './components/passItem'

export function Passwords(){
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused()
    const { getItem, removeItem } = useStorage()

    useEffect (()=>{
        async function loadPasswords(){
            const passwords = await getItem("@pass")
            setListPasswords(passwords)
        }
        loadPasswords()
    }, [focused])

    async function deletePassword(item){
        const passwords = await removeItem("@pass", item)
        setListPasswords(passwords)
    }
    
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                    style={{flex: 1, paddingTop: 14}}
                    data={listPasswords}
                    keyExtractor= {(item)=>String(item)}
                    renderItem={({item}) => <PasswordItem data={item} removePassword={()=> deletePassword(item)}/>}
                />
            </View>
        </SafeAreaView>
    )
    //FlatList=> irá renderizar as buscas de listas do usoário
        // data: valor da lista que será renderizada
        // keyExtractor: identificador de cada item da lista; cada senha é unica
        // renderItem: renderiza os valores de cada lista unicamente
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
    },

    content:{
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
    }
})