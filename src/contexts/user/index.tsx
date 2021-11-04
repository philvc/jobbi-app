import { BoxProps } from "@chakra-ui/layout";
import { createContext, useContext } from "react";
import { useGetUserBySub } from "../../services/default/default";

interface IUserContext {
  id?: string;
  email?: string;
  fistName?: string;
  lastName?: string;
}

const UserContext = createContext<IUserContext>({});

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = (props: BoxProps) => {
  // Queries
  const { data: user, isLoading } = useGetUserBySub();


  return (
    <UserContext.Provider
      value={{
        email: user?.email,
        id: user?.id,
        fistName: user?.firstName,
        lastName: user?.lastName,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
