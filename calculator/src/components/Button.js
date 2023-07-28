import React from "react";
import { 
    Text,
    Dimensions, 
    TouchableHighlight,
    StyleSheet
 } from "react-native";


 const style = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get("window").width / 4,
        width: Dimensions.get("window").width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderColor: '#888',
        borderWidth: 1
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width /4 * 2),
    },
    buttonTriple: {
        width: (Dimensions.get('window').width /4 * 3),
    }
 })

 export default props => {
    const styleButton = [style.button]
    if (props.double) styleButton.push(style.buttonDouble)
    if (props.triple) styleButton.push(style.buttonTriple)
    if (props.operation) styleButton.push(style.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
 }