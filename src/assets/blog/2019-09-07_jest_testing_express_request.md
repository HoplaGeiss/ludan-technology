In this blog post we are going to see how to test an express call with Jest.

We are going to take the example of a get call from the controller to a service.

### Controller calling a service

Imagine you want to test the following method:

``` javascript
const userService = require('../service');

const getStoresFromGeolocation = (req, res) => {
  const firstName = req.query.firstName;
  const lastName = req.query.firstName;

  return userService.getPerson({ firstName, lastName})
    .then(stores => res.status(200).json(stores))
    .catch(error => res.status(error.response.status).json(error.message));
};
```

The tricky part is how to mock `req` and `res`.

### Mocking express' req and res

After a lot of fiddling I think a good way of doing that is like that:

``` javascript
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

const mockRequest = queryData => ({query: queryData});
```

Now let's see this in action. Typically when testing a controller call I do 3 things:
- The parameters passed to the service.
- The success scenario.
- The failure scenario.

### Test the parameters passed to the service

``` javascript
it('calls getStoresFromGeolocationCall', async () => {
    const res = mockResponse();
    const req = mockRequest({firstName: 'Gabriel', lastName: 'Muller'});

    callApis.getStoresFromGeolocationCall = jest
      .fn()
      .mockReturnValue(Promise.resolve([]));

    await getStoresFromGeolocation(req, res);

    expect(callApis.getStoresFromGeolocationCall).toHaveBeenCalledWith({
      firstName: 'Gabriel',
      lastName: 'Muller'
    });
});
```

### Test the success scenario

``` javascript
it('success => returns 200 with stores', async () => {
    const res = mockResponse();
    const req = mockRequest(geoReqParams);

    callApis.getStoresFromGeolocationCall = jest
      .fn()
      .mockReturnValue(Promise.resolve({id: 1, firstName: 'Gabriel', lastName: 'Muller'}));

    await getStoresFromGeolocation(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({id: 1, firstName: 'Gabriel', lastName: 'Muller'});
});
```

### Test the failure scenario

``` javascript
it('error => returns error statuc and error message', async () => {
    const res = mockResponse();
    const req = mockRequest(geoReqParams);

    callApis.getStoresFromGeolocationCall = jest.fn().mockReturnValue(
      Promise.reject({
        response: { status: 500 },
        message: 'Terrible error'
      })
    );

    await getStoresFromGeolocation(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith('Terrible error');
});
```

And that's about it. Mock response is quite tricky, but once you realise you just need to return `res` for each function it's quite straightforward. Also, notice that `mockRequest` needs to be adapted to your scenario, in mine I only have query parameters, you could have a body and a param as well.