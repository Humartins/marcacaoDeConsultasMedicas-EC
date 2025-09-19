import styled from "styled-components/native";
import theme from "../../../../../styles/theme";

export const ProfileCard = styled.View`
  background-color: ${theme.colors.background};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  align-items: center;
  border-width: 1px;
  border-color: ${theme.colors.border};
`;

export const SpecialtyText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  margin-top: 8px;
`;

export const Card = styled.View`
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-bottom: 12px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Email = styled.Text`
  font-size: 14px;
  color: #555;
`;
