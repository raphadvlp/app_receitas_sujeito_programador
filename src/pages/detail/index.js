import { View, Text, StyleSheet } from 'react-native';

export function Datail(){
    return(
        <View style={styles.container}>
            <Text>Detalhes da Receita!!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'blue',
    }
})