import styled from "styled-components/native";
import theme from "../../../styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Content = styled.View`
  gap: 16px;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const styles = {
  scrollContent: {
    padding: 20,
  },
  button: {
    marginBottom: 20,
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
  },
  logoutButton: {
    backgroundColor: theme.colors.error,
    paddingVertical: 12,
  },
};