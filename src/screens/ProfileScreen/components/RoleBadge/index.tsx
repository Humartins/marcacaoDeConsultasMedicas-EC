import React from "react";
import { RoleBadgeContainer, RoleText } from "./styles";

type Props = {
  role: string;
  children: React.ReactNode;
};

const RoleBadge: React.FC<Props> = ({ role, children }) => {
  return (
    <RoleBadgeContainer role={role}>
      <RoleText>{children}</RoleText>
    </RoleBadgeContainer>
  );
};

export default RoleBadge;
