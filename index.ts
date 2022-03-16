/* eslint-disable import/no-unassigned-import */
import 'next';
import 'next/image-types/global';

import {NextkitClientError} from 'nextkit/client';

import type {APIResponse} from 'nextkit';

/**

 @example
 ```ts
 import useSWR from "swr";
 import { fetcher } from "nextkit-fetcher";

 const Index: NextPage<Props> = (props) => {
   const { data } = useSWR("/api/user", fetcher);

   return <p>Hello {data.name}!</p>;
 };
 ```
*/

export async function fetcher<T>(url: string, options?: RequestInit) {
	const request = await fetch(url, options);

	if (request.status >= 400) {
		throw new NextkitClientError(request.status, 'Error While Fetching');
	}

	const body = (await request.json()) as APIResponse<T>;

	if (!body.success) {
		throw new NextkitClientError(request.status, body.message);
	}

	return body.data;
}