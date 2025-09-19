import React from "react";
import { Button } from "react-native-elements";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../types/navigation";
import Header from "../../components/Header";
import { Container, ScrollView, Title, styles } from "./styles";
import ProfileInfoCard from "./components/ProfileInfoCard";

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Profile">;
};

const ProfileScreen: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigation = useNavigation<ProfileScreenProps["navigation"]>();

  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title>Meu Perfil</Title>

        <ProfileInfoCard user={user} />

        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          containerStyle={styles.button}
          buttonStyle={styles.buttonStyle}
        />

        <Button
          title="Sair"
          onPress={signOut}
          containerStyle={styles.button}
          buttonStyle={styles.logoutButton}
        />
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;
