import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class TransactionScreen extends React.Component{
    render(){
        return(
            <View style={{textAlign: 'center'}}>
                <Text style={{fontSize: 30, color: 'blue', marginTop: 200}}>FaceBook</Text>
            </View>
        )
    }
}