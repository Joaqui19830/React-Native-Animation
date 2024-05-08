import React, {useContext} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
import {Button} from '../../components/ui/Button';
import {CustomView} from '../../components/ui/CustomView';
import {ThemeContext} from '../../context/ThemeContext';
import {useAnimation} from '../../hooks/useAnimation';

export const Animation101Screen = () => {
  const {colors} = useContext(ThemeContext);

  const {
    fadeIn,
    fadeOut,
    animatedOpacity,
    animatedTop,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <CustomView style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            backgroundColor: colors.primary,
          },
          {
            opacity: animatedOpacity,
            transform: [
              {
                translateY: animatedTop,
              },
            ],
          },
        ]}
      />
      <Button
        text="FadeIn"
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.elastic(1),
            duration: 750,
          });
        }}
        styles={{marginTop: 10}}
      />

      <Button
        text="FadeOut"
        onPress={() => fadeOut({})}
        styles={{marginTop: 10}}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
