# nextkit-fetcher

A simple and type-safe fetcher for [nextkit](https://github.com/alii/nextkit).

## Installation ∙ [![npm](https://img.shields.io/npm/v/nextkit-fetcher?color=blue&style=flat-square)](https://www.npmjs.com/package/nextkit-fetcher)

```sh
# npm
npm install read-from-fs

# yarn
yarn add read-from-fs

# pnpm
pnpm add read-from-fs
```

## Usage

Use it on the frontend while fetching your own Endpoints.

```ts
import useSWR from "swr";
import { fetcher } from "nextkit-fetcher";

const Index: NextPage<Props> = (props) => {
  const { data } = useSWR("/api/user", fetcher);

  return <p>Hello {data.name}!</p>;
};
```

If it fails it wil throw a `NextkitClientError`.

Check the full API on 👇

https://nextkit-fetcher.js.org

## Licence

Licensed under the MIT License.
