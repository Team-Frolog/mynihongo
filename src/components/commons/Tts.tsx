import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import TtsIcon from '../../../assets/icons/TtsIcon';
import * as Speech from 'expo-speech';

interface Props {
  color?: string;
  text: string;
}

function Tts({ color = '#B4B4B4', text }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePressTts = async () => {
    if (!text) return;

    if (isPlaying) {
      await Speech.stop();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);

    const options = {
      language: 'ja-JP',
      pitch: 1.0,
      rate: 0.8,
      volume: 1.0,
    };

    Speech.speak(text, {
      ...options,
      onDone: () => setIsPlaying(false),
      onStopped: () => setIsPlaying(false),
      onError: (error) => {
        console.log(error);
        setIsPlaying(false);
      },
    });
  };

  return (
    <TouchableOpacity onPress={handlePressTts}>
      <TtsIcon color={color} />
    </TouchableOpacity>
  );
}

export default Tts;
