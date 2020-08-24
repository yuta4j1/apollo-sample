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

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
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
