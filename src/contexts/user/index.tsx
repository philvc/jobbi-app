import { BoxProps } from "@chakra-ui/layout";
import { createContext, useContext, useEffect } from "react";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query/types/core/types";
import { useGetUserBySub } from "../../services/default/default";
import { UserDTO } from "../../types/dtos/userDTO";

interface IUserContext {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  isLoading?: boolean;
  isFetched?: boolean;
  refetchUser?: <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>
  ) => Promise<QueryObserverResult<UserDTO, void>>;
}

const UserContext = createContext<IUserContext>({});

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = (props: BoxProps) => {
  // Attributes
  // Queries
  const {
    data: user,
    isLoading,
    isFetched,
    refetch,
    error,
  } = useGetUserBySub();

  // Effect

  return (
    <UserContext.Provider
      value={{
        email: user?.email,
        id: user?.id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        isLoading: isLoading,
        isFetched: isFetched,
        refetchUser: refetch,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
