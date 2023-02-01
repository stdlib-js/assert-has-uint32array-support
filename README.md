<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Uint32Array Support

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Detect native [`Uint32Array`][mdn-uint32array] support.



<section class="usage">

## Usage

```javascript
import hasUint32ArraySupport from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-uint32array-support@deno/mod.js';
```

#### hasUint32ArraySupport()

Detects if a runtime environment supports [`Uint32Array`][mdn-uint32array].

```javascript
var bool = hasUint32ArraySupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import hasUint32ArraySupport from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-uint32array-support@deno/mod.js';

var bool = hasUint32ArraySupport();
if ( bool ) {
    console.log( 'Environment has Uint32Array support.' );
} else {
    console.log( 'Environment lacks Uint32Array support.' );
}
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-has-uint32array-support.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-has-uint32array-support

[test-image]: https://github.com/stdlib-js/assert-has-uint32array-support/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-has-uint32array-support/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-has-uint32array-support/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-has-uint32array-support?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-has-uint32array-support.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-has-uint32array-support/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-has-uint32array-support/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-has-uint32array-support/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-has-uint32array-support/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-has-uint32array-support/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-has-uint32array-support/main/LICENSE

[mdn-uint32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array

</section>

<!-- /.links -->
