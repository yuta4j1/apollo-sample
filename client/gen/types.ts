import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum Sex {
  Male = 'MALE',
  Female = 'FEMALE',
  None = 'NONE'
}

export type AuthorDetail = {
  __typename?: 'AuthorDetail';
  birthday?: Maybe<Scalars['String']>;
  sex?: Maybe<Sex>;
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['String'];
  name: Scalars['String'];
  detail?: Maybe<AuthorDetail>;
};

export type Book = {
  __typename?: 'Book';
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Author>;
};

export type Publisher = {
  __typename?: 'Publisher';
  id: Scalars['ID'];
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  capital: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
  publishers?: Maybe<Array<Maybe<Publisher>>>;
};


export type QueryBooksArgs = {
  title?: Maybe<Scalars['String']>;
};

export type FetchBooksQueryVariables = Exact<{
  title?: Maybe<Scalars['String']>;
}>;


export type FetchBooksQuery = (
  { __typename?: 'Query' }
  & { books?: Maybe<Array<Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'title'>
    & { author?: Maybe<(
      { __typename?: 'Author' }
      & Pick<Author, 'id' | 'name'>
      & { detail?: Maybe<(
        { __typename?: 'AuthorDetail' }
        & Pick<AuthorDetail, 'birthday' | 'sex'>
      )> }
    )> }
  )>>> }
);

export type FetchPublishersQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchPublishersQuery = (
  { __typename?: 'Query' }
  & { publishers?: Maybe<Array<Maybe<(
    { __typename?: 'Publisher' }
    & Pick<Publisher, 'id' | 'name' | 'address' | 'capital'>
  )>>> }
);


export const FetchBooksDocument = gql`
    query FetchBooks($title: String) {
  books(title: $title) {
    title @client
    author {
      id
      name
      detail {
        birthday
        sex
      }
    }
  }
}
    `;

/**
 * __useFetchBooksQuery__
 *
 * To run a query within a React component, call `useFetchBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchBooksQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useFetchBooksQuery(baseOptions?: Apollo.QueryHookOptions<FetchBooksQuery, FetchBooksQueryVariables>) {
        return Apollo.useQuery<FetchBooksQuery, FetchBooksQueryVariables>(FetchBooksDocument, baseOptions);
      }
export function useFetchBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchBooksQuery, FetchBooksQueryVariables>) {
          return Apollo.useLazyQuery<FetchBooksQuery, FetchBooksQueryVariables>(FetchBooksDocument, baseOptions);
        }
export type FetchBooksQueryHookResult = ReturnType<typeof useFetchBooksQuery>;
export type FetchBooksLazyQueryHookResult = ReturnType<typeof useFetchBooksLazyQuery>;
export type FetchBooksQueryResult = Apollo.QueryResult<FetchBooksQuery, FetchBooksQueryVariables>;
export const FetchPublishersDocument = gql`
    query FetchPublishers {
  publishers {
    id
    name
    address
    capital
  }
}
    `;

/**
 * __useFetchPublishersQuery__
 *
 * To run a query within a React component, call `useFetchPublishersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPublishersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPublishersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchPublishersQuery(baseOptions?: Apollo.QueryHookOptions<FetchPublishersQuery, FetchPublishersQueryVariables>) {
        return Apollo.useQuery<FetchPublishersQuery, FetchPublishersQueryVariables>(FetchPublishersDocument, baseOptions);
      }
export function useFetchPublishersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchPublishersQuery, FetchPublishersQueryVariables>) {
          return Apollo.useLazyQuery<FetchPublishersQuery, FetchPublishersQueryVariables>(FetchPublishersDocument, baseOptions);
        }
export type FetchPublishersQueryHookResult = ReturnType<typeof useFetchPublishersQuery>;
export type FetchPublishersLazyQueryHookResult = ReturnType<typeof useFetchPublishersLazyQuery>;
export type FetchPublishersQueryResult = Apollo.QueryResult<FetchPublishersQuery, FetchPublishersQueryVariables>;