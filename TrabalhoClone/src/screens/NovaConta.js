import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import imageLogin from '../../assets/pictures/backGroundLogin.jpg';
import imageGoogle from '../../assets/pictures/google.png';
import imageFacebook from '../../assets/pictures/facebook.png';
import imageUsuario from '../../assets/pictures/imageUsuario.png';
import cadeado from '../../assets/pictures/cadeado.png';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';



export default function NovaConta({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleContinue = () => {
        if (email.trim() !== '' && password.trim() !== '') {
            navigation.navigate('Game');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={imageLogin} />
            <View style={styles.overlay}></View>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('EmailScreen')}>
                    <Image style={styles.icon} source={imageGoogle} />
                    <Text style={styles.buttonText2}>Acesse com Google</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('EmailScreen')}>
                    <Image style={styles.icon} source={imageFacebook} />
                    <Text style={styles.buttonText2}>Acesse com Facebook</Text>
                </TouchableOpacity>

                <Text style={styles.ouText}>ou entre com</Text>


            </View>


            <View style={styles.button3}>
                    <Image style={styles.icon} source={imageUsuario} />
                    <TextInput style={[styles.input2, { color: 'white' }]}
                        placeholder="Nome de usuário ou email"
                        placeholderTextColor="white"
                        onChangeText={setEmail}
                        value={email}
                    />
            </View>

            <View style={styles.button3}>
                    <Image style={styles.icon} source={cadeado} />
                    <TextInput style={[styles.input2, { color: 'white' }]}
                        secureTextEntry={true}
                        placeholder="Senha"
                        placeholderTextColor="white"
                        onChangeText={setPassword}
                        value={password}
                        
                    />
            </View>

            <TouchableOpacity>
                <Text style={styles.esqueceuText}>Esqueceu / Redefinir Senha?</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                <Text style={styles.continueButtonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        position: 'absolute',
        width: '100%', 
        height: '100%',
    },
    overlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        top: 150,
    },
    button2: {
        height: 45,
        backgroundColor: '#808080',
        paddingVertical: 15,
        paddingHorizontal: 70,
        borderRadius: 5,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText2: {
        color: 'white',
        fontSize: 10,
        marginHorizontal: 32, 
    },
    button3: {
        bottom: 200,
        height: 40,
        backgroundColor: '#808080',
        paddingHorizontal: 30,
        borderRadius: 5,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        flexDirection: 'row',
        alignItems: 'center',
        width: '82%',

    },
    input2: {
        height: 36,
        paddingVertical: 1,
        
        paddingHorizontal: 0,
        backgroundColor: 'gray',
        fontSize: 10,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    icon: {
        width: 15,
        height: 15,
    },
    continueButton: {
        backgroundColor: '#A4eA4f',
        paddingVertical: 8,
        paddingHorizontal: 50,
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 3,
        borderColor: '#A4FF11',
        marginBottom: 100,
        bottom: 160,
        width: '84%',

    },
    continueButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '900',
        paddingVertical: 5,
        paddingHorizontal: 50,
        textAlign: 'center',
    },
    ouText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
        top: 20,
    },
    esqueceuText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
        bottom: 180,
    },
    
});
