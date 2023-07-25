import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Alert,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Video from 'react-native-video';
import IonIcons from 'react-native-vector-icons/Ionicons';
import React, {useEffect, useRef, useState} from 'react';
const {height: heightScreen} = Dimensions.get('screen');
export default function FeedItem({data, currentVisibleItem}) {
  const video = useRef(null);
  const [isplaying, setIsPlaying] = useState(true);
  const [color, setColor] = useState('#FFF');
  function handlePlayer() {
    setIsPlaying(!isplaying);
  }
  useEffect(() => {
    if (currentVisibleItem?.id === data?.id) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  }, [currentVisibleItem]);
  return (
    <Pressable onPress={handlePlayer}>
      <View style={[styles.info, {bottom: 110}]}>
        <Text style={styles.name}>{data?.name}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {data?.description}
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setColor(color === '#FFF' ? '#F00' : '#FFF')}>
          <IonIcons name="heart" size={35} color={color} />
          <Text style={styles.actionText}>30.3K</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <IonIcons name="chatbubble-ellipses" size={35} color="#FFF" />
          <Text style={styles.actionText}>23</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <IonIcons name="bookmark" size={35} color="#FFF" />
        </TouchableOpacity>
      </View>
      <Video
        source={{uri: data?.video}}
        style={styles.video}
        ref={video}
        resizeMode="cover"
        repeat={true}
        paused={isplaying}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: heightScreen,
  },
  info: {
    position: 'absolute',
    zIndex: 99,
    left: 8,
    padding: 8,
  },
  name: {
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 4,
    textShadowColor: 'rgba(0,0,0,0.60)',
    textShadowOffset: {width: -1, height: 1.5},
    textShadowRadius: 8,
  },
  description: {
    color: '#FFF',
    fontWeight: 'bold',
    marginRight: 24,
    textShadowColor: 'rgba(0,0,0,0.20)',
    textShadowOffset: {width: -1, height: 1.5},
    textShadowRadius: 8,
  },
  actions: {
    position: 'absolute',
    zIndex: 99,
    right: 10,
    bottom: Platform.OS === 'android' ? 120 : 170,
    gap: 8,
  },
  actionText: {
    textAlign: 'center',
    color: '#FFF',
    textShadowColor: 'rgba(0,0,0,0.60)',
    textShadowOffset: {width: -1, height: 1.5},
    textShadowRadius: 8,
  },
});
