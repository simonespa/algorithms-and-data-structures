import { TimeLimitedCache } from './';

const timeLimitedCache = new TimeLimitedCache();
timeLimitedCache.set(1, 42, 1000)
timeLimitedCache.set(2, -2, 1000)
timeLimitedCache.count()
