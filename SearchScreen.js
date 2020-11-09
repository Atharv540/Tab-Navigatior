import * as React from 'react';
import {Text, View, TextInput, StyleSheet, Image} from 'react-native';

export default class SearchScreen extends React.Component{
    render(){
        return(
            <View style={{textAlign: 'center'}}>
                <Text style={{fontSize: 30, color: 'blue', marginTop: 200}}>Instagram</Text>
            </View>
        )
    }
}