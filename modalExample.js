import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Alert,
  Switch,
  ScrollView,
  Text,
  Modal,
  View,
  Button,
} from "react-native";
import TextContent from "./textContent";
import ModalBuilder from "./builder.js";

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
    <ScrollView>
      <View style={styles.parentView}>
        <View style={{ flex: 1, flexDirection: "row", marginBottom: 30 }}>
          <View>
            <Text>Make Examples Transparent : </Text>
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
            description="Simple Read More Dialog. A simple modal can be generated using 
            the default configurations, triggered by a button press "
            openButtonTitle="Read More"
            closeButtonTitle="Proceed"
            animationType={animation}
            hardwareAccelerated={hardwareAccelerated}
            transparent={transparent}
          />

          <ExampleStatusBarTranslucent
            description="Read important Content Covering all screen. Modals can be opened in multiple viewing modes, which are helpful in deciding modal behavior on large screens."
            openButtonTitle="Open in Full Screen View"
            closeButtonTitle="Proceed"
            animationType={animation}
            hardwareAccelerated={hardwareAccelerated}
            transparent={transparent}
          />

          <ExampleOnDismiss
            description="Please accept the terms and conditions. Few properties are only available for particular platforms, like listening for dismissAction"
            openButtonTitle="View Terms and Conditions"
            closeButtonTitle="Proceed"
            animationType={animation}
            hardwareAccelerated={hardwareAccelerated}
            transparent={transparent}
          />

          <ExampleOnOrientationChange
            description="Monitor orientation change in modal. Modals can listen for events or actions, for example change in orientation of device and trigger functions accordingly."
            openButtonTitle="Open Modal"
            closeButtonTitle="Proceed"
            animationType={animation}
            hardwareAccelerated={hardwareAccelerated}
            transparent={transparent}
          />

          <ExampleOnRequestClose
            description="Modals can be even watch for physical back button presses, attempts to close the modal and respond to such actions. This is done using onRequestClose prop."
            openButtonTitle="Open Modal"
            closeButtonTitle="Proceed"
            animationType={animation}
            hardwareAccelerated={hardwareAccelerated}
            transparent={transparent}
          />

          <ExampleOnShow
            description="You can even attach functions to modal show events. They are triggered as soon as the modal is opened. Checkout the example below"
            openButtonTitle="Open Modal"
            closeButtonTitle="Proceed"
            animationType={animation}
            hardwareAccelerated={hardwareAccelerated}
            transparent={transparent}
          />

          <ExamplePresentationStyle
            description="Presentation Mode : Modals can be configured to render differently, for example: to cover full screen, to appear at the center with side paddings etc "
            openButtonTitle="Open Modal"
            closeButtonTitle="Proceed"
            animationType={animation}
            hardwareAccelerated={hardwareAccelerated}
            transparent={transparent}
          />

          <View style={{ paddingTop: 10 }}>
            <Text>
              Modal Playground : Here you can play around with modal props and
              see live examples
            </Text>
            <ModalBuilder />
          </View>
        </View>
      </View>
    </ScrollView>
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
