test('GET to /api/v1/status returns 200', async () => {
  const response = await fetch('http://localhost:3000/api/v1/status');
  expect(response.status).toBe(200);

  const responseJson = await response.json();
  const currentDate = new Date(responseJson.updated_at).toISOString();
  expectedObject = {
    updated_at: currentDate,
    dependecies: {
      database: {
        version: '16.0',
        max_connections: 100,
        open_connections: 1,
      },
    },
  };
  expect(responseJson).toEqual(expectedObject);

  // expect(responseDate.updated_at).toEqual(currentDate);
});
