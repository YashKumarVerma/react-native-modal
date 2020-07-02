import React from "react";
import { View, Text } from "react-native";

const TextContent = ({ color }) => (
  <View>
    <Text style={{ color }}>
      React Native combines the best parts of native development with React, a
      best-in-class JavaScript library for building user interfaces.
      {`\n`}
    </Text>
    <Text style={{ color }}>
      React primitives render to native platform UI, meaning your app uses the
      same native platform APIs other apps do.
      {`\n`}
    </Text>
    <Text style={{ color }}>
      React components wrap existing native code and interact with native APIs
      via React’s declarative UI paradigm and JavaScript. This enables native
      app development for whole new teams of developers, and can let existing
      native teams work much faster.
      {`\n`}
    </Text>
    <Text style={{ color }}>
      In 2018, React Native had the 2nd highest number of contributors for any
      repository in GitHub. Today, React Native is supported by contributions
      from individuals and companies around the world including Callstack, Expo,
      Infinite Red, Microsoft, and Software Mansion.
      {`\n`}
    </Text>
    <Text style={{ color }}>
      Our community is always shipping exciting new projects and exploring
      platforms beyond Android and iOS with repos like React Native Windows and
      React Native Web.
      {`\n`}
    </Text>
  </View>
);

export default TextContent;

// const ModalExample = ({
//     children,
//     openModalTitle,
//     closeButtonTitle,
//     description,
//   }) => {
//     const [modalVisible, setModalVisible] = useState(false);

//     return (
//       <View style={styles.parentView}>
//         <Text>{description}</Text>
//         <Button onPress={() => setModalVisible(true)} title={openModalTitle} />
//         <Modal visible={modalVisible} style={styles.defaultModal}>
//           <View style={styles.parentView}>
//             <TextContent />
//             <View style={styles.closeButton}>
//               <Button
//                 onPress={() => setModalVisible(false)}
//                 title={closeButtonTitle}
//                 color="black"
//               />
//             </View>
//           </View>
//         </Modal>
//       </View>
//     );
//   };
