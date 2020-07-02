import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Modal, View, Button, TouchableHighlight } from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.parentView}>
      <Text>Basic Modal</Text>
      <Button onPress={() => setModalVisible(true)} title="Open Modal" />
      <Modal
        visible={modalVisible}
        style={{
          padding: 50,
        }}
      >
        <Button
          onPress={() => setModalVisible(false)}
          title="Close Modal"
          color="black"
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default App;
