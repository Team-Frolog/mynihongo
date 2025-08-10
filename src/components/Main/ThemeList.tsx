import { useState } from 'react';
import { FlatList, Pressable, TouchableOpacity } from 'react-native';
import { styles } from '@/styles/Main/ThemeList.style';
import { themeData } from '@/data/theme';
import { useUser } from '@/hooks/useUser';
import ThemeListItem from './ThemeListItem';
import { View, Text } from 'react-native';
import ChevronDownArrow from 'assets/icons/ChevronDownArrow';

function ThemeList() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('전부 보기');
  const [list, setList] = useState(themeData);
  const { userInfo } = useUser();
  const themeStatus = userInfo?.themeStatus;

  const handleClickFilter = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickFilterItem = (filter: string) => {
    setSelectedFilter(filter);
    setIsDropdownOpen(false);

    if (filter === '전부 보기') setList(themeData);
    if (filter === '미완료 보기') {
      const filteredList = themeData.filter((theme) => {
        const targetThemeStatus = themeStatus?.find(
          (status) => status.themeId === theme.id,
        );
        return targetThemeStatus?.status !== 'completed';
      });
      setList(filteredList);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.filterWrapper} onPress={handleClickFilter}>
        <Text>{isDropdownOpen ? '선택' : selectedFilter}</Text>
        <ChevronDownArrow width={11} height={6} color="#666" />
        {isDropdownOpen && (
          <View style={styles.filterDropdownList}>
            <TouchableOpacity
              onPress={() => handleClickFilterItem('전부 보기')}
            >
              <Text style={styles.filterDropdownItem}>전부 보기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClickFilterItem('미완료 보기')}
            >
              <Text style={styles.filterDropdownItem}>미완료 보기</Text>
            </TouchableOpacity>
          </View>
        )}
      </Pressable>
      <FlatList
        contentContainerStyle={styles.list}
        data={list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const targetThemeData = themeStatus?.find(
            (theme) => theme.themeId === item.id,
          );
          const status = targetThemeData?.status;
          const words = targetThemeData?.words;

          return <ThemeListItem item={item} status={status} words={words} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ThemeList;
