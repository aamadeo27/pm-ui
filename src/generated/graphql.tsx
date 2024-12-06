import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export enum AppRole {
  Admin = 'admin',
  ProjectManager = 'project_manager',
  TeamMember = 'team_member'
}

export type Mutation = {
  __typename?: 'Mutation';
  create_project: Project;
  create_user: User;
  delete_project: Project;
  delete_user: User;
  update_project: Project;
  update_user: User;
};


export type MutationCreate_ProjectArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreate_UserArgs = {
  args: UserCreateInput;
};


export type MutationDelete_ProjectArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDelete_UserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdate_ProjectArgs = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdate_UserArgs = {
  args: UserUpdateInput;
};

export type Project = {
  __typename?: 'Project';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  tasks: Array<Maybe<Task>>;
  team: Team;
  team_id: Scalars['Int']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  current_user: User;
  project?: Maybe<Project>;
};

export type Task = {
  __typename?: 'Task';
  assignee?: Maybe<User>;
  assignee_id?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  project: Project;
  project_id: Scalars['Int']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type Team = {
  __typename?: 'Team';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  members: Array<Maybe<User>>;
  name: Scalars['String']['output'];
  projects: Array<Maybe<Project>>;
};

export type User = {
  __typename?: 'User';
  active: Scalars['Boolean']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  role: AppRole;
  tasks: Array<Maybe<Task>>;
  team: Team;
  team_id: Scalars['Int']['output'];
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  team_id: Scalars['Int']['input'];
};

export type UserUpdateInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<AppRole>;
  team_id?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateUserMutationVariables = Exact<{
  args: UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', create_user: { __typename?: 'User', id: number, name: string, email: string, active: boolean } };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', current_user: { __typename?: 'User', id: number, name: string, email: string, role: AppRole, active: boolean } };


export const CreateUserDocument = gql`
    mutation CreateUser($args: UserCreateInput!) {
  create_user(args: $args) {
    id
    name
    email
    active
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetUserDocument = gql`
    query GetUser {
  current_user {
    id
    name
    email
    role
    active
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;