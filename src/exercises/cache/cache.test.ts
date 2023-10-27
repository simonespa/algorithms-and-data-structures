import { TimeLimitedCache } from 'src/exercises/cache';

async function sleep(time) {
  return new Promise((r) => setTimeout(r, time));
}

test('Test 1', async () => {
  const timeLimitedCache = new TimeLimitedCache();

  const duration = 1000;

  expect(timeLimitedCache.set(1, 42, duration)).toBe(false);
  expect(timeLimitedCache.get(1)).toBe(42);
  expect(timeLimitedCache.count()).toBe(1);

  await sleep(duration);

  expect(timeLimitedCache.count()).toBe(0);
});

test('Test 2', async () => {
  const timeLimitedCache = new TimeLimitedCache();

  expect(timeLimitedCache.set(1, 42, 1000)).toBe(false);
  expect(timeLimitedCache.set(1, 100, 2000)).toBe(true);
  expect(timeLimitedCache.get(1)).toBe(100);
});

test('Test 3', async () => {
  const timeLimitedCache = new TimeLimitedCache();

  const duration = 500;

  expect(timeLimitedCache.set(1, 42, duration)).toBe(false);
  expect(timeLimitedCache.set(2, 100, duration)).toBe(false);

  await sleep(duration + 200);

  expect(timeLimitedCache.count()).toBe(0);
});

test('Test 4', async () => {
  const timeLimitedCache = new TimeLimitedCache();

  expect(timeLimitedCache.set(1, 42, 1000)).toBe(false);
  expect(timeLimitedCache.set(2, 100, 1000)).toBe(false);
  expect(timeLimitedCache.set(3, 100, 1000)).toBe(false);
  expect(timeLimitedCache.count()).toBe(3);
});

test('Test 5', async () => {
  const timeLimitedCache = new TimeLimitedCache();

  expect(timeLimitedCache.count()).toBe(0);
});

test('Test 6', async () => {
  const timeLimitedCache = new TimeLimitedCache();

  expect(timeLimitedCache.get(1)).toBe(-1);
});
