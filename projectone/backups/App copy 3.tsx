import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, PanResponder, PanResponderInstance } from 'react-native';

const SquareFollowTouch: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [squareColor, setSquareColor] = useState('red');

  const toggleColor = () => {
    console.log('Cambio de color');
    setSquareColor(prevColor => (prevColor === 'red' ? 'green' : 'red'));
  };

  const panResponderRef = useRef<PanResponderInstance>(PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_event, gestureState) => {
      console.log('Movimiento del dedo');
      setPosition({
        x: gestureState.moveX - 25,
        y: gestureState.moveY - 25,
      });
    },
  })).current;

  const handleTouchStart = () => {
    console.log('Clic en el cuadrado');
    toggleColor();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('¡Hola! Han pasado 20 segundos');
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.square,
          { 
            transform: [{ translateX: position.x }, { translateY: position.y }],
            backgroundColor: squareColor,
          }
        ]}
        {...panResponderRef.panHandlers}
        onTouchStart={handleTouchStart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 50,
    height: 50,
  },
});

export default SquareFollowTouch;
