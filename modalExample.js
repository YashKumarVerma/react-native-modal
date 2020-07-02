import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Text, Modal, View, Button } from "react-native";
import TextContent from "./textContent";

const BasicModal = ({
  description,
  openButtonTitle,
  closeButtonTitle,
  animationType,
  hardwareAccelerated,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.example}>
      <Text>{description}</Text>
      <View style={styles.openButton}>
        <Button title={openButtonTitle} onPress={() => setVisible(true)} />
      </View>
      <Modal
        visible={visible}
        animationType={animationType}
        hardwareAccelerated={hardwareAccelerated}
      >
        <View style={styles.modal}>
          <TextContent />
          <Button onPress={() => setVisible(false)} title={closeButtonTitle} />
        </View>
      </Modal>
    </View>
  );
};

const StatusBarTranslucent = ({
  description,
  openButtonTitle,
  closeButtonTitle,
  animationType,
  hardwareAccelerated,
}) => {
  const [visible, setVisible] = useState(false);
  const ScreenWidth = Dimensions.get("screen").width;
  const ScreenHeight = Dimensions.get("screen").height;

  return (
    <View style={styles.example}>
      <Text>{description}</Text>
      <View style={styles.openButton}>
        <Button title={openButtonTitle} onPress={() => setVisible(true)} />
      </View>
      <Modal
        visible={visible}
        animationType={animationType}
        hardwareAccelerated={hardwareAccelerated}
        statusBarTranslucent={true}
      >
        <View
          style={{
            ...styles.modal,
            backgroundColor: "black",
            height: ScreenHeight,
            width: ScreenWidth,
          }}
        >
          <TextContent color="white" />
          <Button onPress={() => setVisible(false)} title={closeButtonTitle} />
        </View>
      </Modal>
    </View>
  );
};

const App = () => {
  const [visible, setVisible] = useState(false);
  const [hardwareAccelerated, setHardwareAccelerated] = useState(false);
  return (
    <View style={styles.parentView}>
      <BasicModal
        description="Simple Read More Dialog"
        openButtonTitle="Read More"
        closeButtonTitle="Proceed"
        animationType="slide"
        hardwareAccelerated={hardwareAccelerated}
      />

      <StatusBarTranslucent
        description="Read important Content Covering all screen"
        openButtonTitle="Open in Full Screen View"
        closeButtonTitle="Proceed"
        animationType="slide"
        hardwareAccelerated={hardwareAccelerated}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  openButton: {
    marginLeft: 20,
    marginRight: 20,
  },
  example: {
    marginBottom: 20,
  },
  modal: {
    padding: 20,
  },
});

export default App;
