Breadcrumbs are very useful in a large application for the user to be able to navigate back and forth with ease. They are surprisingly easy to implement with angular. let's dive in!

### Listen to the router event

The first thing to do is to listen to the router events.

```typescript
this.breadcrumbs$ = this.router.events.pipe(
  filter(event => event instanceof NavigationEnd),
  distinctUntilChanged(),
  map(() => this.buildBreadCrumb(this.router.url))
);
```

- `filter(event => event instanceof NavigationEnd)` filters out all the events that are not `navigationEnd`.
- `distinctUntilChanged` filters out the user navigating consecutively to the same page.
- `this.buildBreadCrumb` is our custom function that builds the breadcrumb from the URL. We will come back to that one shortly.

### Basic breadcrumb template

Now let's have a look at how the template should look like.

```typescript
<div class="breadcrumbs">
  <span *ngFor="let breadcrumb of breadcrumbs$ | async" class="breadcrumb">
    <a [routerLink]="breadcrumb.url" class="link">{{breadcrumb.label}}</a>
  </span>
</div>
```

In essance, a breadcrumb is just a list of elements displayed horizontally. First, you can start with a classic `ngFor` and display all the elements of the breadcrumb.

### Breadcrumb interface

While building the template, you realise each breadcrumb element will need to be composed of an URL and a label. This makes defining out interface straightforward.

```typescript
export interface BreadCrumb {
  label: string;
  url: string;
}
```

### buildBreadCrumb function

Now we know what our `buildBreadCrumb` takes in input ( an URL string ) and what it needs to output ( an array of `Breadbrumb` ), so all that remains is to build it!

```typescript
buildBreadCrumb(url: string): Array<BreadCrumb> {
  const segments = url.split('/');
  let currentUrl = '';

  return segments.map((segment, i) => {
    currentUrl += '/' + segment;
    return {
      label: i === 0 ? 'Home' : segment,
      url: currentUrl
    };
  });
}
```

The only trick in this function is to display `Home` in the label of the first breadcrumb element.

### Complete the template

Now that we have the breadcrumb working, we can think of improving the look and feel of the template.

```typescript
<div class="breadcrumbs">
  <span
    *ngFor="let breadcrumb of breadcrumbs$ | async; index as i"
    class="breadcrumb"
    [hidden]="router.url === '/'"
  >
    <span [hidden]="i === 0">/</span>
    <a [routerLink]="breadcrumb.url" class="link">{{
      breadcrumb.label | titleCase: '_'
    }}</a>
  </span>
</div>
```

We did a couple of things:
- Added a separator in between the breadcrumb element. So that it looks like that `Home / about`. Note that we hide that separator with a `[hidden]` for the first element.
- We also apply a pipe to the label. The pipe transforms our label from: `an_example_of_a_route` to `An Example Of A Route`. That's because we are getting the label directly from the URL.

That's it, you have a fully functional breadcrumb. you can see it in action on top of this website. Also, you can find the codebase directly on source code of this blog here:

[https://github.com/HoplaGeiss/ludan-technology/tree/master/src/app/shared/components/breadcrumb](https://github.com/HoplaGeiss/ludan-technology/tree/master/src/app/shared/components/breadcrumb)