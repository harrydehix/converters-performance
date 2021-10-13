import { performance } from "perf_hooks";

export default (fn: (...any: any[]) => any, warmup = 700, count = 200000): number => {
    for (let i = 0; i < warmup; i++) {
        fn();
    }
    let time = 0;
    for (let i = 0; i < count; i++) {
        const t1 = performance.now();
        fn();
        const t2 = performance.now();
        time += t2 - t1;
    }
    return time / count;
}