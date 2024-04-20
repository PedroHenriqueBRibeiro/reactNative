import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

export const Estado = () => {
    const [estado, setEstado] = useState(["Sou um Estado", "Outro Texto", "3", "4", "5", "6", "7", "8", "9"]);
    const [indice, setIndice] = useState(0);

    const alterarTexto = () => {
        setIndice((indice + 1) % 9 )
    };

    return (
        <View>
            <Text>COMPONENTE DE ESTADO</Text>
            <Text>{estado[indice]}</Text>
            <Button title="Clique Aqui" onPress={alterarTexto}/>
        </View>
    );
};