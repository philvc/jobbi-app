/**
 * Generated by orval v6.2.3 🍺
 * Do not edit manually.
 * Jobbi Back-end
 * Swagger for Jobbi Back-end

Schemes: [http, https]
 * OpenAPI spec version: 1.0.0
 */
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction
} from 'react-query'
import type {
  NetworkDTO,
  NetworkDTOBody
} from '../../types/dtos'
import { customInstance } from '.././config'

type AsyncReturnType<
T extends (...args: any) => Promise<any>
> = T extends (...args: any) => Promise<infer R> ? R : any;


/**
 * type id struct
Get networks by searchId.
Return network
 */
export const getNetworksBySearchId = (
    searchId: string,
 ) => {
      return customInstance<NetworkDTO[]>(
      {url: `/searches/${searchId}/networks`, method: 'get'
    },
      );
    }
  

export const getGetNetworksBySearchIdQueryKey = (searchId: string,) => [`/searches/${searchId}/networks`];

    
export const useGetNetworksBySearchId = <TData = AsyncReturnType<typeof getNetworksBySearchId>, TError = void>(
 searchId: string, options?: { query?:UseQueryOptions<AsyncReturnType<typeof getNetworksBySearchId>, TError, TData>, }

  ) => {

  const {query: queryOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetNetworksBySearchIdQueryKey(searchId);
  const queryFn: QueryFunction<AsyncReturnType<typeof getNetworksBySearchId>> = () => getNetworksBySearchId(searchId, );

  const query = useQuery<AsyncReturnType<typeof getNetworksBySearchId>, TError, TData>(queryKey, queryFn, {enabled: !!(searchId), ...queryOptions})

  return {
    queryKey,
    ...query
  }
}

/**
 * type id struct
Post  network.
Return  network
 */
export const addNetwork = (
    searchId: string,
    networkDTOBody: NetworkDTOBody,
 ) => {
      return customInstance<NetworkDTO>(
      {url: `/searches/${searchId}/networks`, method: 'post',
      data: networkDTOBody
    },
      );
    }
  


    export const useAddNetwork = <TError = void,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof addNetwork>, TError,{searchId: string;data: NetworkDTOBody}, TContext>, }
) => {
      const {mutation: mutationOptions} = options || {}

      const mutationFn: MutationFunction<AsyncReturnType<typeof addNetwork>, {searchId: string;data: NetworkDTOBody}> = (props) => {
          const {searchId,data} = props || {};

          return  addNetwork(searchId,data,)
        }

      return useMutation<AsyncReturnType<typeof addNetwork>, TError, {searchId: string;data: NetworkDTOBody}, TContext>(mutationFn, mutationOptions)
    }
    /**
 * type id struct
Get  network by id.
Return  network
 */
export const getNetworkById = (
    searchId: string,
    networkId: string,
 ) => {
      return customInstance<NetworkDTO>(
      {url: `/searches/${searchId}/networks/${networkId}`, method: 'get'
    },
      );
    }
  

export const getGetNetworkByIdQueryKey = (searchId: string,
    networkId: string,) => [`/searches/${searchId}/networks/${networkId}`];

    
export const useGetNetworkById = <TData = AsyncReturnType<typeof getNetworkById>, TError = void>(
 searchId: string,
    networkId: string, options?: { query?:UseQueryOptions<AsyncReturnType<typeof getNetworkById>, TError, TData>, }

  ) => {

  const {query: queryOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetNetworkByIdQueryKey(searchId,networkId);
  const queryFn: QueryFunction<AsyncReturnType<typeof getNetworkById>> = () => getNetworkById(searchId,networkId, );

  const query = useQuery<AsyncReturnType<typeof getNetworkById>, TError, TData>(queryKey, queryFn, {enabled: !!(searchId && networkId), ...queryOptions})

  return {
    queryKey,
    ...query
  }
}

/**
 * type id struct
Put  network.
Return  network
 */
export const modifyNetwork = (
    searchId: string,
    networkId: string,
    networkDTOBody: NetworkDTOBody,
 ) => {
      return customInstance<NetworkDTO>(
      {url: `/searches/${searchId}/networks/${networkId}`, method: 'put',
      data: networkDTOBody
    },
      );
    }
  


    export const useModifyNetwork = <TError = void,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof modifyNetwork>, TError,{searchId: string;networkId: string;data: NetworkDTOBody}, TContext>, }
) => {
      const {mutation: mutationOptions} = options || {}

      const mutationFn: MutationFunction<AsyncReturnType<typeof modifyNetwork>, {searchId: string;networkId: string;data: NetworkDTOBody}> = (props) => {
          const {searchId,networkId,data} = props || {};

          return  modifyNetwork(searchId,networkId,data,)
        }

      return useMutation<AsyncReturnType<typeof modifyNetwork>, TError, {searchId: string;networkId: string;data: NetworkDTOBody}, TContext>(mutationFn, mutationOptions)
    }
    