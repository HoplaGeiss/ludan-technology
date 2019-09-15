This blog post is about creating a simple list of tags. There is a lot of fancy things that can be done with tags, but that's just a simple Angular component to display a list of tags.


Source code: [https://github.com/HoplaGeiss/ludan-tags](https://github.com/HoplaGeiss/ludan-tags)

Demo: [https://ludan.io/library/tags](https://ludan.io/library/tags)


Let's first have a look at the parent component.

### Tags parent component

``` typescript
<ludan-tags
  [items]="filteredItems"
  (closeEvent)="removeItem($event)"
></ludan-tags>
```

As announced, we keep things simple and pass to our tags component a list of tag and get as output a close event.

``` typescript
initialItems = [
  { label: 'Football' },
  { label: 'Basketball' },
  { label: 'Tennis' },
  { label: 'Dancing' },
  { label: 'Skying' }
];
filteredItems = [];

ngOnInit() {
  this.filteredItems = this.initialItems.slice();
}

removeItem = item => {
  this.filteredItems.splice(this.filteredItems.indexOf(item), 1);
}
```

Here again, nothing extraordinary, we define the list of tags and we have a `removeItem` that splices it from the list.

Now let's have a look at the tags component.

### Tags component

``` typescript
<div class="wrapper">
  <div *ngFor="let item of items" class="item">
    <div class="label">{{ item.label }}</div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="10px"
      height="10px"
      (click)="close(item)"
      class="cross"
    >
      <path
        fill="white"
        d="M28.941 31.786L.613 60.114a2.014 2.014 0 1 0 2.848 2.849l28.541-28.541 28.541 28.541c.394.394.909.59 1.424.59a2.014 2.014 0 0 0 1.424-3.439L35.064 31.786 63.41 3.438A2.014 2.014 0 1 0 60.562.589L32.003 29.15 3.441.59A2.015 2.015 0 0 0 .593 3.439l28.348 28.347z"
      />
    </svg>
  </div>
</div>
```

The template is very simple, we have a list of tag element which contains a label and a cross to close that tag.

``` typescript
@Input() items: Array<any>;
@Output() closeEvent = new EventEmitter();

close = item => {
  this.closeEvent.emit(item);
}
```

Here again, no surprises. In input, we have the items and in output the `closeEvent`.

For completeness I am also going to give you the style file.

### Tags styling

``` scss
.wrapper {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.item {
  padding: 5px 10px;
  margin: 5px;
  background: $primary;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;

  .cross {
    padding-left: 10px;
    cursor: pointer;
    transition: 300ms;

    &:hover {
      transform: scale(1.2);
    }
  }
}
```

That's it. Enjoy your Angular tags and watch that space to get a more adanced tags component!