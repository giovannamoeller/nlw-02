import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutline from '../../assets/images/icons/heart-outline.png';
import unfavorite from '../../assets/images/icons/unfavorite.png';
import whatsapp from '../../assets/images/icons/whatsapp.png';

import styles from './style';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar}
                    source={{ uri: 'https://avatars1.githubusercontent.com/u/47362960?s=460&u=99702db3dedab50f47b0f151acea1e2e9db1b3fc&v=4'}}/>
            
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Giovanna Moeller</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View>
                
            </View>

            <View style={styles.bio}>
                <Text style={styles.textBio}>Entusiasta das melhores tecnologias de química avançada. {"\n\n"}Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.</Text>
            </View>

            <View style={styles.footer}>
                <View style={styles.price}>
                    <Text style={styles.priceTitle}>Preço/hora</Text>
                    <Text style={styles.priceValue}>R$ 80,00</Text>
                </View>
                <View style={styles.button}>
                    <RectButton style={[styles.buttonFavorite, styles.favorited]}>
                        <Image source={unfavorite}/>
                    </RectButton>
                    <RectButton style={styles.buttonWhatsapp}>
                        <Image source={whatsapp}/>
                        <Text style={styles.buttonText}>{'    '}Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
            
        </View>
    )
}

export default TeacherItem;