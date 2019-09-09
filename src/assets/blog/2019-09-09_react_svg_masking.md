If you visit this page it's probably because your UI/UX designer came up with some funky design that you can't achieve with CSS.
In this blog post, we are going to see how to use SVG Masking in React.

You can find the source code here: [https://github.com/HoplaGeiss/ludan-svg-masking](https://github.com/HoplaGeiss/ludan-svg-masking)

We are going to do a quite simple masking, the goal is to have a paragraph of lorem lipsum masked in a heart shape.

First thing first, let's have a look at our `Post` class.

### Post class

``` Javascript
const Post = () => (
  <div className="post">
    <HeartMask>
      <div className="lorem-lipsum">
        lorem lipsum ....
      </div>
    </HeartMask>
  </div>
);
```

It's fairly simple, we are wrapping the lorem lipsum class inside of a `HeartMask` class.

Now let's have a look at that `HeartMask`.

### Mask class

``` javascript
const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
const defaultProps = {
  className: ""
};

const HeartMask = ({ className, children }) => (
  <div
    style={{
      clipPath: "url(#image-mask)"
    }}
    className={"heart-mask " + className}
  >
    <svg>
      <defs>
        <clipPath id="image-mask" clipPathUnits="objectBoundingBox">
          <path
            transform="scale(0.002, 0.005)"
            d="M492.719 166.008c0-73.486-59.573-133.056-133.059-133.056-47.985 0-89.891 25.484-113.302 63.569-23.408-38.085-65.332-63.569-113.316-63.569C59.556 32.952 0 92.522 0 166.008c0 40.009 17.729 75.803 45.671 100.178l188.545 188.553a17.17 17.17 0 0 0 24.284 0l188.545-188.553c27.943-24.375 45.674-60.169 45.674-100.178z"
          />
        </clipPath>
      </defs>
    </svg>
    <div className="heart-mask__children">{children}</div>
  </div>
);
```

Now that's where the magic happens. Basically I have a wrapping div, which has a `clipath`.
Then I have two childrens, one is the svg cliPath and the second is where the children gets injected.

I am also attaching here the css, as you have to be careful positionning that child div.

``` scss
.heart-mask {
  &__children {
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
```

And that's about it, with this pattern you can achieve pretty good looking web components.