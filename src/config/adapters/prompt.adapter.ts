import prompt from 'react-native-prompt-android';

//* Si cambia algo del prompt que instalamos podemos cambiar el codigo directamente aca sin necesidad de estar modificando las demas pantallas
interface Options {
  title: string;
  subTitle?: string;
  buttons: PromptButton[];
  promptType?: 'plain-text' | 'secure-text';
  placeholder?: string;
  defaultValue?: string;
}

interface PromptButton {
  text: string;
  onPress: () => void;
  style?: 'cancel' | 'default' | 'destructive';
}

export const showPrompt = ({
  title,
  subTitle,
  buttons,
  promptType = 'plain-text',
  placeholder,
  defaultValue,
}: Options) => {
  prompt(title, subTitle, buttons, {
    type: promptType,
    cancelable: false,
    defaultValue: defaultValue,
    placeholder: placeholder,
  });
};
