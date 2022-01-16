import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { EnumSearchRole } from "../../constants/enums";
import {
  getGetSearchRoleQueryKey,
  useGetSearchRole,
} from "../../services/searches/searches";
import { GetSearchRole200 } from "../../types/dtos";

interface SearchRoleContext {
  role: EnumSearchRole;
}

interface RoleProviderProps {
  children: React.ReactNode;
}

// Search role context
const SearchRoleContext = createContext<SearchRoleContext>(null);

// search role context hook
export function useSearchRoleContext() {
    return useContext(SearchRoleContext)
}

const RoleProvider = ({ children }: RoleProviderProps) => {
  // Attributes
  const router = useRouter();
  const questId = router.query.questId as string;
  const {
    data: requesterRole,
    isLoading: isRoleLoading,
    refetch: refetchRole,
    error,
  } = useGetSearchRole(questId, { query: { enabled: !!questId } });
  const [role, setRole] = useState<EnumSearchRole>();

  // Effects
  // Set search role
  useEffect(() => {
    if (requesterRole) {
      switch (requesterRole) {
        case GetSearchRole200.owner:
          setRole(EnumSearchRole.OWNER);
          break;
        case GetSearchRole200.friend:
          setRole(EnumSearchRole.FRIEND);
          break;
        case GetSearchRole200.follower:
          setRole(EnumSearchRole.FOLLOWER);
          break;
        case GetSearchRole200.visitor:
          setRole(EnumSearchRole.VISITOR);
          break;
        default:
          setRole(EnumSearchRole.UNKNOWN);
      }
    }

    // requester role is undefined set to unknow
    if (!requesterRole) {
      setRole(EnumSearchRole.UNKNOWN);
    }
  }, [requesterRole]);

  // Refetch requester role if search id changes
  useEffect(() => {
    if (questId) {
      handleRefetchRequesterRole();
    }
  }, [questId]);

  async function handleRefetchRequesterRole() {
    // Refetch Query
    await refetchRole({ queryKey: getGetSearchRoleQueryKey(questId) });
  }

  return (
    <SearchRoleContext.Provider value={{ role }}>
      {children}
    </SearchRoleContext.Provider>
  );
};

export default RoleProvider;
