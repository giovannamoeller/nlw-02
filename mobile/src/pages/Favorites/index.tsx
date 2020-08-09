import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import PageHeader from '../../componentes/PageHeader';

const Favorites = () => {

    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos"/>
        </View>
    )
};

export default Favorites;