import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'


import styles from './styles';

const TeacherList = () => {

    const { navigate } = useNavigation();



    return (
        <View style={styles.container}>
            <Text>Oiii</Text>
        </View>
    )
};

export default TeacherList;