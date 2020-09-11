import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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

export type PublisherInput = {
  name: Scalars['String'];
  address: Scalars['String'];
  capital: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPublisher?: Maybe<Array<Publisher>>;
};


export type MutationCreatePublisherArgs = {
  input: PublisherInput;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Sex: Sex;
  AuthorDetail: ResolverTypeWrapper<AuthorDetail>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Author: ResolverTypeWrapper<Author>;
  Book: ResolverTypeWrapper<Book>;
  Publisher: ResolverTypeWrapper<Publisher>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  PublisherInput: PublisherInput;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthorDetail: AuthorDetail;
  String: Scalars['String'];
  Author: Author;
  Book: Book;
  Publisher: Publisher;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Query: {};
  PublisherInput: PublisherInput;
  Mutation: {};
  Boolean: Scalars['Boolean'];
};

export type AuthorDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthorDetail'] = ResolversParentTypes['AuthorDetail']> = {
  birthday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sex?: Resolver<Maybe<ResolversTypes['Sex']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  detail?: Resolver<Maybe<ResolversTypes['AuthorDetail']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PublisherResolvers<ContextType = any, ParentType extends ResolversParentTypes['Publisher'] = ResolversParentTypes['Publisher']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  capital?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType, RequireFields<QueryBooksArgs, never>>;
  publishers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Publisher']>>>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createPublisher?: Resolver<Maybe<Array<ResolversTypes['Publisher']>>, ParentType, ContextType, RequireFields<MutationCreatePublisherArgs, 'input'>>;
};

export type Resolvers<ContextType = any> = {
  AuthorDetail?: AuthorDetailResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  Publisher?: PublisherResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
