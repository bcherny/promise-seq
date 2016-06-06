export declare type LazyPromise<A> = () => Promise<A>;
export default function seq<A>(promises: LazyPromise<A>[]): Promise<A[]>;
