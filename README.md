Puffi
=====

Puffi is an [angular.js](https://angularjs.org/) blog engine written in pure javascript, no back-end scripts needed.

### Features

* [Markdown](http://daringfireball.net/projects/markdown/syntax) syntax for post writing
* [Google Code Prettify](https://code.google.com/p/google-code-prettify/) for highlight source codes (just for developers)
* Automatic twitter nickname hightlighting in blog post
* Custom page making
* Tag searching

### TODO

* Improving page making
* Add post searching
* Make management client
* Add SASS or LESS for style templating
* Add more themes
* Social sharing

### Test it

Just clone git repo:
```bash
https://github.com/jiin/Puffi
```
and run:
```bash
cd Puffi
bower install
```
Now change in *index.html* this line: 
```html
<base href="/dev/Puffi/"> <!-- [!!!] change the original value [!!!] -->
```
with your real base path.
In the *.htaccess* change this line:
```bash
RewriteBase /dev/Puffi/
```
again with your real base path.
Finally in *scripts/config/base.js* customize the informations: 
```javascript
angular.module('configuration', [])
  .constant('BLOG', {
    name: "OMG A PUFFI!", // blog name
    author: "Mr. Puffi", // blog author (you)
    description: "Another amazing puffi powered blog", // blog description
    email: "blah.puffi@gmail.com", // your email
    keywords: "foo, bar, omg", // keywords
    theme: "default",
    baseurl: "/dev/Puffi/" // your base url
  });
```

That's all!
Puffi is actually in experiment phase, for bug or other issues open a thread in issues section.
