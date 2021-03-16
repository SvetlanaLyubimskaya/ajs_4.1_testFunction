import getHealth from '../app';

test('health status 1', () => {
  const result = getHealth({ name: 'Маг', health: 90 });
  // const received = getHealth(obj);

  expect(result).toBe('healthy');
});

test('health status 2', () => {
  const result = getHealth({ name: 'Маг', health: 50 });

  expect(result).toBe('healthy');
});

test('health status 3', () => {
  const result = getHealth({ name: 'Маг', health: 20 });

  expect(result).toBe('wounded');
});

test('health status 4', () => {
  const result = getHealth({ name: 'Маг', health: 15 });

  expect(result).toBe('wounded');
});

test('health status 5', () => {
  const result = getHealth({ name: 'Маг', health: 10 });

  expect(result).toBe('critical');
});
