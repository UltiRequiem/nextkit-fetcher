# nextkit-fetcher

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

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

Check the full API on 📖

https://nextkit-fetcher.js.org

## Extra

If you are not a fan of adding dependencies, copy-paste this 👇

```ts
import { NextkitClientError } from "nextkit/client";

import type { APIResponse } from "nextkit";

export async function fetcher<T>(url: string, options?: RequestInit) {
  const request = await fetch(url, options);

  if (request.status >= 400) {
    throw new NextkitClientError(request.status, "Error While Fetching");
  }

  const body = (await request.json()) as APIResponse<T>;

  if (!body.success) {
    throw new NextkitClientError(request.status, body.message);
  }

  return body.data;
}
```

## Licence

Licensed under the MIT License.
