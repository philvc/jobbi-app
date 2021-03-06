/**
 * Generated by orval v6.2.4 🍺
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
  CompanyDTO,
  CompanyDTOBody
} from '../../types/dtos'
import { customInstance } from '.././config'

type AsyncReturnType<
T extends (...args: any) => Promise<any>
> = T extends (...args: any) => Promise<infer R> ? R : any;


/**
 * type id struct
Get Companies by searchId.
Return company
 */
export const getCompaniesBySearchId = (
    searchId: string,
 ) => {
      return customInstance<CompanyDTO[]>(
      {url: `/searches/${searchId}/companies`, method: 'get'
    },
      );
    }
  

export const getGetCompaniesBySearchIdQueryKey = (searchId: string,) => [`/searches/${searchId}/companies`];

    
export const useGetCompaniesBySearchId = <TData = AsyncReturnType<typeof getCompaniesBySearchId>, TError = void>(
 searchId: string, options?: { query?:UseQueryOptions<AsyncReturnType<typeof getCompaniesBySearchId>, TError, TData>, }

  ) => {

  const {query: queryOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetCompaniesBySearchIdQueryKey(searchId);
  const queryFn: QueryFunction<AsyncReturnType<typeof getCompaniesBySearchId>> = () => getCompaniesBySearchId(searchId, );

  const query = useQuery<AsyncReturnType<typeof getCompaniesBySearchId>, TError, TData>(queryKey, queryFn, {enabled: !!(searchId), ...queryOptions})

  return {
    queryKey,
    ...query
  }
}

/**
 * type id struct
Create company.
Return company
 */
export const addCompany = (
    searchId: string,
    companyDTOBody: CompanyDTOBody,
 ) => {
      return customInstance<CompanyDTO>(
      {url: `/searches/${searchId}/companies`, method: 'post',
      data: companyDTOBody
    },
      );
    }
  


    export const useAddCompany = <TError = void,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof addCompany>, TError,{searchId: string;data: CompanyDTOBody}, TContext>, }
) => {
      const {mutation: mutationOptions} = options || {}

      const mutationFn: MutationFunction<AsyncReturnType<typeof addCompany>, {searchId: string;data: CompanyDTOBody}> = (props) => {
          const {searchId,data} = props || {};

          return  addCompany(searchId,data,)
        }

      return useMutation<AsyncReturnType<typeof addCompany>, TError, {searchId: string;data: CompanyDTOBody}, TContext>(mutationFn, mutationOptions)
    }
    /**
 * type id struct
Get company by id.
Return company
 */
export const getCompanyById = (
    searchId: string,
    companyId: string,
 ) => {
      return customInstance<CompanyDTO>(
      {url: `/searches/${searchId}/companies/${companyId}`, method: 'get'
    },
      );
    }
  

export const getGetCompanyByIdQueryKey = (searchId: string,
    companyId: string,) => [`/searches/${searchId}/companies/${companyId}`];

    
export const useGetCompanyById = <TData = AsyncReturnType<typeof getCompanyById>, TError = void>(
 searchId: string,
    companyId: string, options?: { query?:UseQueryOptions<AsyncReturnType<typeof getCompanyById>, TError, TData>, }

  ) => {

  const {query: queryOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetCompanyByIdQueryKey(searchId,companyId);
  const queryFn: QueryFunction<AsyncReturnType<typeof getCompanyById>> = () => getCompanyById(searchId,companyId, );

  const query = useQuery<AsyncReturnType<typeof getCompanyById>, TError, TData>(queryKey, queryFn, {enabled: !!(searchId && companyId), ...queryOptions})

  return {
    queryKey,
    ...query
  }
}

/**
 * type id struct
Modify company.
Return company
 */
export const modifyCompany = (
    searchId: string,
    companyId: string,
    companyDTOBody: CompanyDTOBody,
 ) => {
      return customInstance<CompanyDTO>(
      {url: `/searches/${searchId}/companies/${companyId}`, method: 'put',
      data: companyDTOBody
    },
      );
    }
  


    export const useModifyCompany = <TError = void,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof modifyCompany>, TError,{searchId: string;companyId: string;data: CompanyDTOBody}, TContext>, }
) => {
      const {mutation: mutationOptions} = options || {}

      const mutationFn: MutationFunction<AsyncReturnType<typeof modifyCompany>, {searchId: string;companyId: string;data: CompanyDTOBody}> = (props) => {
          const {searchId,companyId,data} = props || {};

          return  modifyCompany(searchId,companyId,data,)
        }

      return useMutation<AsyncReturnType<typeof modifyCompany>, TError, {searchId: string;companyId: string;data: CompanyDTOBody}, TContext>(mutationFn, mutationOptions)
    }
    /**
 * type id struct
Delete company.
Return true or error
 */
export const deleteCompany = (
    searchId: string,
    companyId: string,
 ) => {
      return customInstance<boolean>(
      {url: `/searches/${searchId}/companies/${companyId}`, method: 'delete'
    },
      );
    }
  


    export const useDeleteCompany = <TError = void,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof deleteCompany>, TError,{searchId: string;companyId: string}, TContext>, }
) => {
      const {mutation: mutationOptions} = options || {}

      const mutationFn: MutationFunction<AsyncReturnType<typeof deleteCompany>, {searchId: string;companyId: string}> = (props) => {
          const {searchId,companyId} = props || {};

          return  deleteCompany(searchId,companyId,)
        }

      return useMutation<AsyncReturnType<typeof deleteCompany>, TError, {searchId: string;companyId: string}, TContext>(mutationFn, mutationOptions)
    }
    