import styled from 'styled-components/native';
import { ViewStyle } from 'react-native';
import { Input } from 'react-native-elements';
import theme from '../../../styles/theme';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: ${theme.colors.text};
`;

export const ErrorText = styled.Text`
  color: ${theme.colors.error};
  text-align: center;
  margin-bottom: 10px;
`;

export const InputField = styled(Input).attrs({
  containerStyle: {
    marginBottom: 15,
  } as ViewStyle,
})``;

export const styles = {
  button: { marginTop: 10, width: '100%' } as ViewStyle,
  buttonStyle: { backgroundColor: theme.colors.primary, paddingVertical: 12 } as ViewStyle,
  backButton: { marginTop: 10, width: '100%' } as ViewStyle,
  backButtonStyle: { backgroundColor: theme.colors.secondary, paddingVertical: 12 } as ViewStyle,
};
