import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
}

export enum AppRole {
  Admin = 'admin',
  ProjectManager = 'project_manager',
  TeamMember = 'team_member',
}

export type Mutation = {
  __typename?: 'Mutation'
  create_project: Project
  create_task: Task
  create_team: Team
  create_user: Scalars['Boolean']['output']
  delete_project: Project
  delete_task: Task
  delete_team: Team
  delete_user: User
  update_project: Project
  update_task: Task
  update_team: Team
  update_user: User
}

export type MutationCreate_ProjectArgs = {
  name: Scalars['String']['input']
}

export type MutationCreate_TaskArgs = {
  args: TaskCreateInput
}

export type MutationCreate_TeamArgs = {
  name: Scalars['String']['input']
}

export type MutationCreate_UserArgs = {
  args: UserCreateInput
}

export type MutationDelete_ProjectArgs = {
  id: Scalars['Int']['input']
}

export type MutationDelete_TaskArgs = {
  id: Scalars['Int']['input']
}

export type MutationDelete_TeamArgs = {
  id: Scalars['Int']['input']
}

export type MutationDelete_UserArgs = {
  id: Scalars['Int']['input']
}

export type MutationUpdate_ProjectArgs = {
  args: ProjectUpdateInput
}

export type MutationUpdate_TaskArgs = {
  args: TaskUpdateInput
}

export type MutationUpdate_TeamArgs = {
  args: TeamUpdateInput
}

export type MutationUpdate_UserArgs = {
  args: UserUpdateInput
}

export type Project = {
  __typename?: 'Project'
  completed_at?: Maybe<Scalars['DateTime']['output']>
  created_at: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  tasks: Array<Maybe<Task>>
  team: Team
  team_id: Scalars['Int']['output']
  thumbnail?: Maybe<Scalars['String']['output']>
  updated_at: Scalars['DateTime']['output']
}

export type ProjectUpdateInput = {
  completed_at?: InputMaybe<Scalars['DateTime']['input']>
  id: Scalars['Int']['input']
  name?: InputMaybe<Scalars['String']['input']>
  thumbnail?: InputMaybe<Scalars['String']['input']>
}

export type Query = {
  __typename?: 'Query'
  current_user: User
  project?: Maybe<Project>
  projects?: Maybe<Array<Project>>
  task?: Maybe<Task>
  tasks?: Maybe<Array<Task>>
  team?: Maybe<Team>
  teams?: Maybe<Array<Team>>
  user: User
  users?: Maybe<Array<User>>
}

export type QueryProjectArgs = {
  id: Scalars['Int']['input']
}

export type QueryProjectsArgs = {
  name?: InputMaybe<Scalars['String']['input']>
  team_id?: InputMaybe<Scalars['Int']['input']>
}

export type QueryTaskArgs = {
  id: Scalars['Int']['input']
}

export type QueryTasksArgs = {
  description?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  project_id?: InputMaybe<Scalars['Int']['input']>
  team_id?: InputMaybe<Scalars['Int']['input']>
}

export type QueryTeamArgs = {
  id: Scalars['Int']['input']
}

export type QueryTeamsArgs = {
  name?: InputMaybe<Scalars['String']['input']>
}

export type QueryUserArgs = {
  id: Scalars['Int']['input']
}

export type QueryUsersArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<AppRole>
  team_id?: InputMaybe<Scalars['Int']['input']>
}

export type Task = {
  __typename?: 'Task'
  assignee?: Maybe<User>
  assignee_id?: Maybe<Scalars['Int']['output']>
  completed_at: Scalars['DateTime']['output']
  created_at: Scalars['DateTime']['output']
  description: Scalars['String']['output']
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  project: Project
  project_id: Scalars['Int']['output']
  thumbnail?: Maybe<Scalars['String']['output']>
  updated_at: Scalars['DateTime']['output']
}

export type TaskCreateInput = {
  description: Scalars['String']['input']
  name: Scalars['String']['input']
  project_id: Scalars['Int']['input']
}

export type TaskUpdateInput = {
  assignee_id?: InputMaybe<Scalars['Int']['input']>
  completed_at?: InputMaybe<Scalars['DateTime']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  name?: InputMaybe<Scalars['String']['input']>
  thumbnail?: InputMaybe<Scalars['String']['input']>
}

export type Team = {
  __typename?: 'Team'
  created_at: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  members: Array<User>
  name: Scalars['String']['output']
  projects: Array<Project>
  thumbnail?: Maybe<Scalars['String']['output']>
}

export type TeamUpdateInput = {
  id: Scalars['Int']['input']
  name?: InputMaybe<Scalars['String']['input']>
  thumbnail?: InputMaybe<Scalars['String']['input']>
}

export type User = {
  __typename?: 'User'
  active: Scalars['Boolean']['output']
  avatar_url?: Maybe<Scalars['String']['output']>
  email: Scalars['String']['output']
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  role: AppRole
  tasks: Array<Maybe<Task>>
  team: Team
  team_id: Scalars['Int']['output']
}

export type UserCreateInput = {
  email: Scalars['String']['input']
  name: Scalars['String']['input']
  password: Scalars['String']['input']
  team_id: Scalars['Int']['input']
}

export type UserUpdateInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>
  avatar_url?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  name?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<AppRole>
  team_id?: InputMaybe<Scalars['Int']['input']>
}

export type CreateProjectMutationVariables = Exact<{
  name: Scalars['String']['input']
}>

export type CreateProjectMutation = {
  __typename?: 'Mutation'
  create_project: { __typename?: 'Project'; id: number; name: string }
}

export type UpdateProjectMutationVariables = Exact<{
  args: ProjectUpdateInput
}>

export type UpdateProjectMutation = {
  __typename?: 'Mutation'
  update_project: {
    __typename?: 'Project'
    id: number
    name: string
    thumbnail?: string | null
  }
}

export type DeleteProjectMutationVariables = Exact<{
  id: Scalars['Int']['input']
}>

export type DeleteProjectMutation = {
  __typename?: 'Mutation'
  delete_project: {
    __typename?: 'Project'
    id: number
    name: string
    team_id: number
  }
}

export type GetTeamQueryVariables = Exact<{
  id: Scalars['Int']['input']
}>

export type GetTeamQuery = {
  __typename?: 'Query'
  team?: {
    __typename?: 'Team'
    id: number
    name: string
    thumbnail?: string | null
    members: Array<{
      __typename?: 'User'
      id: number
      name: string
      avatar_url?: string | null
      role: AppRole
    }>
    projects: Array<{
      __typename?: 'Project'
      id: number
      name: string
      created_at: any
      completed_at?: any | null
      thumbnail?: string | null
      tasks: Array<{
        __typename?: 'Task'
        id: number
        name: string
        thumbnail?: string | null
        created_at: any
        completed_at: any
        assignee_id?: number | null
      } | null>
    }>
  } | null
}

export type CreateUserMutationVariables = Exact<{
  args: UserCreateInput
}>

export type CreateUserMutation = {
  __typename?: 'Mutation'
  create_user: boolean
}

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>

export type GetCurrentUserQuery = {
  __typename?: 'Query'
  current_user: {
    __typename?: 'User'
    id: number
    name: string
    avatar_url?: string | null
    email: string
    role: AppRole
    active: boolean
    team_id: number
  }
}

export const CreateProjectDocument = gql`
  mutation CreateProject($name: String!) {
    create_project(name: $name) {
      id
      name
    }
  }
`
export type CreateProjectMutationFn = Apollo.MutationFunction<
  CreateProjectMutation,
  CreateProjectMutationVariables
>

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >(CreateProjectDocument, options)
}
export type CreateProjectMutationHookResult = ReturnType<
  typeof useCreateProjectMutation
>
export type CreateProjectMutationResult =
  Apollo.MutationResult<CreateProjectMutation>
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<
  CreateProjectMutation,
  CreateProjectMutationVariables
>
export const UpdateProjectDocument = gql`
  mutation UpdateProject($args: ProjectUpdateInput!) {
    update_project(args: $args) {
      id
      name
      thumbnail
    }
  }
`
export type UpdateProjectMutationFn = Apollo.MutationFunction<
  UpdateProjectMutation,
  UpdateProjectMutationVariables
>

/**
 * __useUpdateProjectMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMutation, { data, loading, error }] = useUpdateProjectMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useUpdateProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProjectMutation,
    UpdateProjectMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateProjectMutation,
    UpdateProjectMutationVariables
  >(UpdateProjectDocument, options)
}
export type UpdateProjectMutationHookResult = ReturnType<
  typeof useUpdateProjectMutation
>
export type UpdateProjectMutationResult =
  Apollo.MutationResult<UpdateProjectMutation>
export type UpdateProjectMutationOptions = Apollo.BaseMutationOptions<
  UpdateProjectMutation,
  UpdateProjectMutationVariables
>
export const DeleteProjectDocument = gql`
  mutation DeleteProject($id: Int!) {
    delete_project(id: $id) {
      id
      name
      team_id
    }
  }
`
export type DeleteProjectMutationFn = Apollo.MutationFunction<
  DeleteProjectMutation,
  DeleteProjectMutationVariables
>

/**
 * __useDeleteProjectMutation__
 *
 * To run a mutation, you first call `useDeleteProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectMutation, { data, loading, error }] = useDeleteProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProjectMutation,
    DeleteProjectMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteProjectMutation,
    DeleteProjectMutationVariables
  >(DeleteProjectDocument, options)
}
export type DeleteProjectMutationHookResult = ReturnType<
  typeof useDeleteProjectMutation
>
export type DeleteProjectMutationResult =
  Apollo.MutationResult<DeleteProjectMutation>
export type DeleteProjectMutationOptions = Apollo.BaseMutationOptions<
  DeleteProjectMutation,
  DeleteProjectMutationVariables
>
export const GetTeamDocument = gql`
  query GetTeam($id: Int!) {
    team(id: $id) {
      id
      name
      thumbnail
      members {
        id
        name
        avatar_url
        role
      }
      projects {
        id
        name
        created_at
        completed_at
        thumbnail
        tasks {
          id
          name
          thumbnail
          created_at
          completed_at
          assignee_id
        }
      }
    }
  }
`

/**
 * __useGetTeamQuery__
 *
 * To run a query within a React component, call `useGetTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTeamQuery(
  baseOptions: Apollo.QueryHookOptions<GetTeamQuery, GetTeamQueryVariables> &
    ({ variables: GetTeamQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetTeamQuery, GetTeamQueryVariables>(
    GetTeamDocument,
    options,
  )
}
export function useGetTeamLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTeamQuery,
    GetTeamQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetTeamQuery, GetTeamQueryVariables>(
    GetTeamDocument,
    options,
  )
}
export function useGetTeamSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetTeamQuery, GetTeamQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetTeamQuery, GetTeamQueryVariables>(
    GetTeamDocument,
    options,
  )
}
export type GetTeamQueryHookResult = ReturnType<typeof useGetTeamQuery>
export type GetTeamLazyQueryHookResult = ReturnType<typeof useGetTeamLazyQuery>
export type GetTeamSuspenseQueryHookResult = ReturnType<
  typeof useGetTeamSuspenseQuery
>
export type GetTeamQueryResult = Apollo.QueryResult<
  GetTeamQuery,
  GetTeamQueryVariables
>
export const CreateUserDocument = gql`
  mutation CreateUser($args: UserCreateInput!) {
    create_user(args: $args)
  }
`
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>

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
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  )
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>
export const GetCurrentUserDocument = gql`
  query GetCurrentUser {
    current_user {
      id
      name
      avatar_url
      email
      role
      active
      team_id
    }
  }
`

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options,
  )
}
export function useGetCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options,
  )
}
export function useGetCurrentUserSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetCurrentUserQuery,
        GetCurrentUserQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >(GetCurrentUserDocument, options)
}
export type GetCurrentUserQueryHookResult = ReturnType<
  typeof useGetCurrentUserQuery
>
export type GetCurrentUserLazyQueryHookResult = ReturnType<
  typeof useGetCurrentUserLazyQuery
>
export type GetCurrentUserSuspenseQueryHookResult = ReturnType<
  typeof useGetCurrentUserSuspenseQuery
>
export type GetCurrentUserQueryResult = Apollo.QueryResult<
  GetCurrentUserQuery,
  GetCurrentUserQueryVariables
>
