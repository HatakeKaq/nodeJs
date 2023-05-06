import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Task =(props)=>{
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View styles={styles.square}></View>
                <View styles={styles.itemText}>{props.text}</View>

            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({

    item:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,

    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square:{ 
        width:24,
        height:24,
        borderColor:'#55BCF6',
        opacity:0.4,
        borderRadius:5,
        borderWidth:2,
        marginRight:15,
    },
    circular:{
        width:12,
        height:12,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:5,
    }
})

export default Task;