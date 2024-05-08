import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {globalStyles} from '../../../config/theme/theme';
import {Card} from '../../components/ui/Card';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <ScrollView>
      <CustomView margin>
        <Title text="Text Inputs" safe />

        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder="Nombre Completo"
            // Esto es que está capitalizado por palabra quiere decir que cuando le damos espacio se pone automaticamente
            // el teclado en mayuscula
            autoCapitalize={'words'}
            autoCorrect={false}
            onChangeText={value => setForm({...form, name: value})}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Correo Electrónico"
            // Esto es que está capitalizado por palabra quiere decir que cuando le damos espacio se pone automaticamente
            // el teclado en mayuscula
            autoCapitalize={'none'}
            autoCorrect={false}
            // Esto es para que cambie el taeclado del celular y se agregue el @
            keyboardType="email-address"
            onChangeText={value => setForm({...form, email: value})}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Teléfono"
            autoCorrect={false}
            keyboardType="phone-pad"
            onChangeText={value => setForm({...form, phone: value})}
          />
        </Card>

        <View style={{height: 20}} />

        <Card>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
        </Card>
        <View style={{height: 10}} />

        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder="Teléfono"
            autoCorrect={false}
            keyboardType="phone-pad"
            onChangeText={value => setForm({...form, phone: value})}
          />
        </Card>
      </CustomView>
      <View style={{height: 20}} />
    </ScrollView>
  );
};
