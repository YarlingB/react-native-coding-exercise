import React, { FC, useRef, useState } from 'react';
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './RNDropDownStyles';
import { DropDownRenderType } from '../../types/uiComponents';

interface Props {
  label: string;
  data: DropDownRenderType[];
  onSelect: (item: { label: string; value: string }) => void;
  title?: string;
}

export const RNDropdown: FC<Props> = ({
  label,
  data,
  onSelect,
  title = '',
}) => {
  const DropdownButton = useRef<TouchableOpacity>(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<DropDownRenderType>();
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton.current!.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h - 5);
    });
    setVisible(true);
  };

  const onItemPress = (item: DropDownRenderType): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={[styles.item]} onPress={() => onItemPress(item)}>
      <Text style={[styles.itemText]}>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    return (
      <Modal
        style={{ justifyContent: 'center' }}
        visible={visible}
        transparent
        animationType='none'
      >
        <View
          style={{
            position: 'absolute',
            top: 10,
            width: 250,
            height: '77%',
            justifyContent: 'center',
            backgroundColor: 'transparent',
          }}
        >
          <TouchableOpacity
            style={[styles.overlay]}
            onPress={() => setVisible(false)}
          >
            <View style={[styles.dropdown, { top: dropdownTop, left: 10 }]}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  paddingBottom: 15,
                  color: 'white',
                }}
              >
                {title}
              </Text>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <View>
        <Text style={styles.buttonText}>
          {(selected && selected.label) || label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
