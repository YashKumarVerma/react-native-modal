import React, { useState } from "react";
import { StyleSheet, Dimensions, Alert, Switch } from "react-native";
import { Text, Modal, View, Button } from "react-native";
import TextContent from "./textContent";

const ExampleBasicModal = ({
  description,
  openButtonTitle,
  closeButtonTitle,
  animationType,
  transparent,
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
        transparent={transparent}
      >
        <View style={styles.modal}>
          <TextContent />
          <Button onPress={() => setVisible(false)} title={closeButtonTitle} />
        </View>
      </Modal>
    </View>
  );
};

const ExampleStatusBarTranslucent = ({
  description,
  openButtonTitle,
  closeButtonTitle,
  animationType,
  transparent,
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
        transparent={transparent}
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

const ExampleOnDismiss = ({
  description,
  openButtonTitle,
  closeButtonTitle,
  animationType,
  transparent,
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
        transparent={transparent}
        onDismiss={() => {
          Alert.alert(
            "Welcome on board",
            "Thanks for Accepting",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ],
            { cancelable: false }
          );
        }}
      >
        <View style={styles.modal}>
          <TextContent />
          <Button onPress={() => setVisible(false)} title={closeButtonTitle} />
        </View>
      </Modal>
    </View>
  );
};

const ExampleOnOrientationChange = ({
  description,
  openButtonTitle,
  closeButtonTitle,
  animationType,
  transparent,
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
        transparent={transparent}
        onOrientationChange={() => {
          Alert.alert(
            "Orientation Changed",
            "See content in a different prospective",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ],
            { cancelable: false }
          );
        }}
      >
        <View style={styles.modal}>
          <TextContent />
          <Button onPress={() => setVisible(false)} title={closeButtonTitle} />
        </View>
      </Modal>
    </View>
  );
};

const ExampleOnShow = ({
  description,
  openButtonTitle,
  closeButtonTitle,
  animationType,
  transparent,
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
        transparent={transparent}
        onShow={() => {
          Alert.alert(
            "Welcome User",
            "You can not move back from here. Proceed only when you're sure of it",
            [
              {
                text: "Cancel",
                onPress: () => setVisible(false),
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ],
            { cancelable: false }
          );
        }}
      >
        <View style={styles.modal}>
          <TextContent />
          <Button onPress={() => setVisible(false)} title={closeButtonTitle} />
        </View>
      </Modal>
    </View>
  );
};

const ExampleOnRequestClose = ({
  description,
  openButtonTitle,
  closeButtonTitle,
  animationType,
  transparent,
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
        transparent={transparent}
        onRequestClose={() => {
          Alert.alert(
            "Are you sure",
            "going back from this step is not recommended",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ],
            { cancelable: false }
          );
        }}
      >
        <View style={styles.modal}>
          <TextContent />
          <Button onPress={() => setVisible(false)} title={closeButtonTitle} />
        </View>
      </Modal>
    </View>
  );
};

const ExamplePresentationStyle = ({
  description,
  openButtonTitle,
  closeButtonTitle,
  animationType,
  transparent,
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
        presentationStyle="formSheet"
      >
        <View style={styles.modal}>
          <TextContent />
          <Button onPress={() => setVisible(false)} title={closeButtonTitle} />
        </View>
      </Modal>
    </View>
  );
};

const App = () => {
  const [hardwareAccelerated, setHardwareAccelerated] = useState(false);
  const [animation, setAnimation] = useState("slide");
  const [transparent, setTransparent] = useState(false);
  return (
    <View style={styles.parentView}>
      <View style={{ flex: 1, flexDirection: "row", marginBottom: 30 }}>
        <View>
          <Text>Transparent</Text>
        </View>
        <View>
          <Switch
            onValueChange={() => setTransparent(!transparent)}
            value={transparent}
          />
        </View>
      </View>
      <View>
        <ExampleBasicModal
          description="Simple Read More Dialog"
          openButtonTitle="Read More"
          closeButtonTitle="Proceed"
          animationType={animation}
          hardwareAccelerated={hardwareAccelerated}
          transparent={transparent}
        />

        <ExampleStatusBarTranslucent
          description="Read important Content Covering all screen"
          openButtonTitle="Open in Full Screen View"
          closeButtonTitle="Proceed"
          animationType={animation}
          hardwareAccelerated={hardwareAccelerated}
          transparent={transparent}
        />

        <ExampleOnDismiss
          description="Please accept the terms and conditions"
          openButtonTitle="View Terms and Conditions"
          closeButtonTitle="Proceed"
          animationType={animation}
          hardwareAccelerated={hardwareAccelerated}
          transparent={transparent}
        />

        <ExampleOnOrientationChange
          description="Monitor orientation change in modal"
          openButtonTitle="Open Modal"
          closeButtonTitle="Proceed"
          animationType={animation}
          hardwareAccelerated={hardwareAccelerated}
          transparent={transparent}
        />

        <ExampleOnRequestClose
          description="Minitor Physical Back Button"
          openButtonTitle="Open Modal"
          closeButtonTitle="Proceed"
          animationType={animation}
          hardwareAccelerated={hardwareAccelerated}
          transparent={transparent}
        />

        <ExampleOnShow
          description="onShow"
          openButtonTitle="Open Modal"
          closeButtonTitle="Proceed"
          animationType={animation}
          hardwareAccelerated={hardwareAccelerated}
          transparent={transparent}
        />

        <ExamplePresentationStyle
          description="Presentation Mode"
          openButtonTitle="Open Modal"
          closeButtonTitle="Proceed"
          animationType={animation}
          hardwareAccelerated={hardwareAccelerated}
          transparent={transparent}
        />
      </View>
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
    marginLeft: 30,
    marginRight: 30,
  },
  example: {
    marginBottom: 20,
  },
  modal: {
    padding: 20,
    backgroundColor: "white",
  },
});

export default App;
