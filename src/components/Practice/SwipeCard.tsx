import React, { useRef } from 'react';
import { View, Animated, PanResponder, Dimensions } from 'react-native';

// 화면의 너비를 가져와서 상수로 저장
const SCREEN_WIDTH = Dimensions.get('window').width;

interface Props {
  children: React.ReactNode;
}

function SwipeCard({ children }: Props) {
  // 카드의 x, y 위치를 저장하는 Animated 값 생성
  const position = useRef(new Animated.ValueXY()).current;

  // PanResponder를 생성하여 드래그 제스처를 감지
  const panResponder = useRef(
    PanResponder.create({
      // 사용자가 터치 후 움직이면 panResponder가 동작하도록 항상 true 반환
      onMoveShouldSetPanResponder: () => true,
      // 드래그 중일 때, dx, dy 값을 position에 실시간으로 반영
      onPanResponderMove: Animated.event(
        [null, { dx: position.x, dy: position.y }],
        { useNativeDriver: false },
      ),
      // 드래그를 끝냈을 때(손을 뗐을 때) 실행
      onPanResponderRelease: (e, gesture) => {
        if (gesture.dx > 120) {
          // 오른쪽으로 충분히 드래그하면, 카드가 오른쪽 화면 밖으로 날아감
          Animated.spring(position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gesture.dy },
            useNativeDriver: false,
          }).start();
        } else if (gesture.dx < -120) {
          // 왼쪽으로 충분히 드래그하면, 카드가 왼쪽 화면 밖으로 날아감
          Animated.spring(position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gesture.dy },
            useNativeDriver: false,
          }).start();
        } else {
          // 그 외에는 카드가 원래 위치로 돌아옴
          Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  return (
    // Animated.View로 감싸서 애니메이션 효과 적용
    <Animated.View
      style={{
        // 카드의 이동 및 회전 효과를 transform으로 적용
        transform: [
          { translateX: position.x }, // x축 이동
          { translateY: position.y }, // y축 이동
          {
            // x축 이동값에 따라 카드가 좌우로 회전
            rotate: position.x.interpolate({
              inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
              outputRange: ['-10deg', '0deg', '10deg'],
            }),
          },
        ],
      }}
      // panResponder의 핸들러를 연결하여 터치/드래그 이벤트 처리
      {...panResponder.panHandlers}
    >
      {/* 카드 안에 들어갈 내용 */}
      {children}
    </Animated.View>
  );
}

export default SwipeCard;
