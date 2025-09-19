import styled from 'styled-components/native';
import theme from '../../../../styles/theme';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const UserTypeButton = styled.TouchableOpacity<{ selected: boolean }>`
  flex: 1;
  padding: 12px;
  margin: 0 4px;
  border-radius: 8px;
  border: 2px solid ${({ selected }) => (selected ? theme.colors.primary : theme.colors.border)};
  background-color: ${({ selected }) => (selected ? theme.colors.primary + '20' : theme.colors.background)};
  align-items: center;
`;

export const UserTypeText = styled.Text<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? theme.colors.primary : theme.colors.text)};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  font-size: 14px;
`;
