import React from 'react';
import {Alert, View} from 'react-native';

import {showPrompt} from '../../../config/adapters/prompt.adapter';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';

export const AlertScreen = () => {
  const createTwoButtonAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss() {
          console.log('onDismiss');
        },
      },
    );

  const onShowPrompt = () => {
    showPrompt({
      title: 'Lorem Ipsum',
      subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      buttons: [{text: 'Ok', onPress: () => console.log('ok')}],
      placeholder: 'Placeholder',
    });

    //! Codigo Nativo
    // Alert.prompt(
    //   '¿Correo electronico?',
    //   'Enim commodo ut amet esse aliqua',
    //   (valor: string) => console.log({valor}),
    //   'secure-text',
    //   'Soy el valor por defecto',
    //   'number-pad',
    // );
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alertas" />

      <Button text="Alerta - 2 Botones" onPress={createTwoButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Alerta - 3 Botones" onPress={createThreeButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Prompt - Input" onPress={onShowPrompt} />
    </CustomView>
  );
};
