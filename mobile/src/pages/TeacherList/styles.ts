import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, // ocupa tela inteira
        backgroundColor: '#f0f0f7',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 40
    },

    searchForm: {
        marginBottom: 24,
    },

    label: {
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        marginBottom: 10,
    },

    input: {
        backgroundColor: '#FAFAFC',
        padding: 16,
        borderRadius: 8,
        marginBottom: 10,
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputBlock: {
        width: '48%',
    },

    
});

export default styles;