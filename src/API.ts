/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Comment = {
  __typename: "Comment",
  commentId: string,
  content: string,
  createdAt: string,
  eventId: string,
};

export type Event = {
  __typename: "Event",
  comments?: CommentConnection | null,
  description?: string | null,
  id: string,
  name?: string | null,
  when?: string | null,
  where?: string | null,
};

export type CommentConnection = {
  __typename: "CommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type TableEventFilterInput = {
  description?: TableStringFilterInput | null,
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  when?: TableStringFilterInput | null,
  where?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
};

export type TableIDFilterInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
};

export type EventConnection = {
  __typename: "EventConnection",
  items?:  Array<Event | null > | null,
  nextToken?: string | null,
};

export type CommentOnEventMutationVariables = {
  content: string,
  createdAt: string,
  eventId: string,
};

export type CommentOnEventMutation = {
  commentOnEvent?:  {
    __typename: "Comment",
    commentId: string,
    content: string,
    createdAt: string,
    eventId: string,
  } | null,
};

export type CreateEventMutationVariables = {
  description: string,
  name: string,
  when: string,
  where: string,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    comments?:  {
      __typename: "CommentConnection",
      nextToken?: string | null,
    } | null,
    description?: string | null,
    id: string,
    name?: string | null,
    when?: string | null,
    where?: string | null,
  } | null,
};

export type DeleteEventMutationVariables = {
  id: string,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    comments?:  {
      __typename: "CommentConnection",
      nextToken?: string | null,
    } | null,
    description?: string | null,
    id: string,
    name?: string | null,
    when?: string | null,
    where?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    comments?:  {
      __typename: "CommentConnection",
      nextToken?: string | null,
    } | null,
    description?: string | null,
    id: string,
    name?: string | null,
    when?: string | null,
    where?: string | null,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: TableEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "EventConnection",
    items?:  Array< {
      __typename: "Event",
      description?: string | null,
      id: string,
      name?: string | null,
      when?: string | null,
      where?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type SubscribeToEventCommentsSubscriptionVariables = {
  eventId: string,
};

export type SubscribeToEventCommentsSubscription = {
  subscribeToEventComments?:  {
    __typename: "Comment",
    commentId: string,
    content: string,
    createdAt: string,
    eventId: string,
  } | null,
};
