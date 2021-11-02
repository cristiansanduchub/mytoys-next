import { MutableRefObject } from 'react';

export type Truthy<T> = T extends false | '' | 0 | null | undefined ? never : T;

export type Maybe<D> = D | null | undefined;

export type Nullable<D> = D | null;

export type Stringify<T> = {
    [P in keyof T]: string;
};

export type ForwardedRef<T extends HTMLElement = HTMLElement> =
    | ((instance: T | null) => void)
    | MutableRefObject<T | null>
    | null;
