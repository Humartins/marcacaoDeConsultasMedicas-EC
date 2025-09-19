import styled from "styled-components/native";

type ContainerProps = {
  role: string;
};

export const Badge = styled.View`
  background-color: #007bff;
  padding: 6px 12px;
  border-radius: 20px;
  align-self: flex-start;
`;

export const BadgeText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 600;
`;


export const RoleText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 600;
`;

export 
const RoleBadgeContainer = styled.View<ContainerProps>`
  background-color: ${({ role }) =>
    role === "Administrador"
      ? "#007bff"
      : role === "Usuário"
      ? "#28a745"
      : "#6c757d"};
  padding: 6px 12px;
  border-radius: 20px;
  align-self: flex-start;
`;