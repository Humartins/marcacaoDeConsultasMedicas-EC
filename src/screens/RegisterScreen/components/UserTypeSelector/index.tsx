import React from 'react';
import { Container, UserTypeButton, UserTypeText } from './styles';

type Props = {
  userType: 'PACIENTE' | 'ADMIN';
  setUserType: (type: 'PACIENTE' | 'ADMIN') => void;
};

const UserTypeSelector: React.FC<Props> = ({ userType, setUserType }) => (
  <Container>
    <UserTypeButton selected={userType === 'PACIENTE'} onPress={() => setUserType('PACIENTE')}>
      <UserTypeText selected={userType === 'PACIENTE'}>👤 Paciente</UserTypeText>
    </UserTypeButton>
    <UserTypeButton selected={userType === 'ADMIN'} onPress={() => setUserType('ADMIN')}>
      <UserTypeText selected={userType === 'ADMIN'}>🔧 Administrador</UserTypeText>
    </UserTypeButton>
  </Container>
);

export default UserTypeSelector;
