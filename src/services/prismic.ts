import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

export const apiEndpoint =
  'https://criando-projeto-do-zero.cdn.prismic.io/api/v2';

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(apiEndpoint, {
    req,
  });

  return prismic;
}
