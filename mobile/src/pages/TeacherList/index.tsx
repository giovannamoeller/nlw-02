import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'


import styles from './styles';
import PageHeader from '../../componentes/PageHeader';
import TeacherItem from '../../componentes/TeacherItem';

const TeacherList = () => {

    const { navigate } = useNavigation();

    return (
        <ScrollView>
            <View style={styles.container}>
                <PageHeader title="Proffys Disponíveis">
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>
                            Matéria
                        </Text>
                        <TextInput>

                        </TextInput>
                    </View>
                </PageHeader>
                    <TeacherItem/>
                    <TeacherItem/>
                    <TeacherItem/>
                    <TeacherItem/>
            </View>
        </ScrollView>
    )
};

export default TeacherList;