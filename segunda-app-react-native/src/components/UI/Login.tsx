
import React, {useState, useEffect} from 'react';


import { StyleSheet, Text, View, TextInput, Button } from 'react-native';





const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {

    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <View style={styles.button}>
                <Button title="Login" onPress={handleLogin} color="#ffffff" />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        width: '100%',
    },
    input: {
        height: 60,
        width:'auto',
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 12,
        paddingHorizontal: 0,
    },
    button:{
        backgroundColor: '#6200ee',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
        color: '#ffffff',
        width: 200,
    }
});


export default Login;