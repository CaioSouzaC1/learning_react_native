import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import GreenStar from '../../assets/stars/estrela.png';
import GrayStar from '../../assets/stars/estrelaCinza.png';

interface Stars {
  stars: number;
  editable: boolean;
  big: boolean;
}

const Stars = ({stars, editable = false, big = false}: Stars) => {
  const style = styles({big});

  const starsArray = Array.from(Array(5).keys());
  const [starsStates, setStarsStates] = useState(stars);

  return (
    <View style={secStyles.cont}>
      {starsArray &&
        starsArray.map((item, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                setStarsStates(i + 1);
              }}
              disabled={!editable}>
              <Image
                key={i}
                style={style.stars}
                source={i < starsStates ? GreenStar : GrayStar}
              />
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

const styles = ({big}: {big: boolean}) => {
  return StyleSheet.create({
    stars: {
      width: big ? 24 : 12,
      height: big ? 24 : 12,
    },
  });
};

const secStyles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
  },
});

export default Stars;
