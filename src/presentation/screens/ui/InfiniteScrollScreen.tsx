import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {colors} from '../../../config/theme/theme';
import {FadeInImage} from '../../components/ui/FadeInImage';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    // Aca hago que los numeros se sumen de a 5 cada vez que el scroll llega al final
    const newArray = Array.from({length: 5}, (_, i) => numbers.length + i);
    // Esto simbolizaria como una tarea asincrona
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <View style={{backgroundColor: 'black'}}>
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        // Esto es para que se empiece a cargar antes de llegar al final
        onEndReachedThreshold={0.6}
        // Aca le puse que es de tipo any porque me tiraba error pero igual funcionaba
        keyExtractor={(item: any) => item.toString()}
        renderItem={({item}: any) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
            }}>
            {/* Este es para mostrar un loading cuando carrga la imagen */}
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

interface ListItemProps {
  number: number;
}

const ListItem = ({number}: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: '100%',
      }}
    />

    // <Image
    //   source={{uri: `https://picsum.photos/id/${number}/500/400`}}
    //   style={{
    //     height: 400,
    //     width: '100%',
    //   }}
    // />
  );
};
