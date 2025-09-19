import React from "react";
import { User } from "../../../../types/user";
import { ProfileCard, Avatar, Name, Email, SpecialtyText } from "./styles";
import RoleBadge from "../RoleBadge";

type Props = {
  user: User | null;
};

const ProfileInfoCard: React.FC<Props> = ({ user }) => {
  if (!user) return null;

  const getRoleText = (role: string) => {
    switch (role) {
      case "admin":
        return "Administrador";
      case "doctor":
        return "Médico";
      case "patient":
        return "Paciente";
      default:
        return role;
    }
  };

  return (
    <ProfileCard>
      <Avatar source={{ uri: user.image || "https://via.placeholder.com/150" }} />
      <Name>{user.name}</Name>
      <Email>{user.email}</Email>
      <RoleBadge role={user.role}>{getRoleText(user.role)}</RoleBadge>

      {user.role === "doctor" && (
        <SpecialtyText>Especialidade: {user.specialty}</SpecialtyText>
      )}
    </ProfileCard>
  );
};

export default ProfileInfoCard;
