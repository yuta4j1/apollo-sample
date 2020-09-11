import { Book, Publisher, Author } from "./gen/types"

type Store = {
  books: Book[]
  publishers: Publisher[]
}

const authorA: Author = {
  id: "1",
  name: "test",
}

const authorB: Author = {
  id: "2",
  name: "test2",
}

const initialBooks: Book[] = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: authorA,
  },
  {
    title: "Jurassic Park",
    author: authorB,
  },
]

const initialPublishers: Publisher[] = [
  {
    id: "1",
    name: "集英社",
    address: "東京都江戸川区松本2-13-8",
    capital: 1340000000,
  },
  {
    id: "2",
    name: "講談社",
    address: "東京都足立区谷在家1-15-9",
    capital: 940000000,
  },
  {
    id: "3",
    name: "旺文社",
    address: "千葉県山武郡横芝光町鳥喰下5-2-6-6階",
    capital: 540000000,
  },
]

export const addPublisher = (
  name: string,
  address: string,
  capital: number
): Publisher[] => {
  const idNum = store.publishers.length + 1
  const newPublishers = [
    ...store.publishers,
    {
      id: String(idNum),
      name,
      address,
      capital,
    },
  ]
  store.publishers = newPublishers
  return newPublishers
}

export const store = {
  books: initialBooks,
  publishers: initialPublishers,
}
