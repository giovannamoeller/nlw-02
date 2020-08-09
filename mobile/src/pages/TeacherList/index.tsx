import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import PageHeader from "../../componentes/PageHeader";
import TeacherItem from "../../componentes/TeacherItem";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

const TeacherList = () => {
  const { navigate } = useNavigation();

  const [isFilterVisable, setIsFilterVisable] = useState(false);

  function filtersVisible() {
      setIsFilterVisable(!isFilterVisable);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <PageHeader title="Proffys Disponíveis" headerRight={(
            <BorderlessButton onPress={filtersVisible}>
                <Feather name="filter" size={20} color="white"/>
            </BorderlessButton>
        )}>
          {isFilterVisable && (
            <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual a matéria?"
                placeholderTextColor="#C1BCCC"
              ></TextInput>

              <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da semana</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Qual o dia?"
                    placeholderTextColor="#C1BCCC"
                  ></TextInput>
                </View>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horário</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Qual horário?"
                    placeholderTextColor="#C1BCCC"
                  ></TextInput>
                </View>
              </View>
            </View>
          )}
        </PageHeader>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </View>
    </ScrollView>
  );
};

export default TeacherList;
