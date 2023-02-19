import {
  useQuery as apolloUseQuery,
  useMutation as apolloUseMutation,
  gql,
  QueryHookOptions,
  MutationHookOptions,
} from "@apollo/client";

export const useQuery = (
  expr: string,
  option?: QueryHookOptions<any> | undefined
) => {
  const queryDocument = gql`
    ${expr}
  `;
  return option
    ? apolloUseQuery(queryDocument, option)
    : apolloUseQuery(queryDocument);
};

export const useMutation = (
  expr: string,
  option?: MutationHookOptions<any> | undefined
) => {
  const mutationDocument = gql`
    ${expr}
  `;
  return option
    ? apolloUseMutation(mutationDocument, option)
    : apolloUseMutation(mutationDocument);
};
