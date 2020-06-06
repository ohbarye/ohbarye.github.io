# ohbarye.github.io

[https://ohbarye.github.io/](https://ohbarye.github.io/)

![me](https://cloud.githubusercontent.com/assets/1811616/21566624/fca372da-cee7-11e6-9b48-f3d1b215ddb6.gif)

## Development

```sh
$ git clone https://github.com/ohbarye/ohbarye.github.io.git && cd ohbarye.github.io
$ yarn && yarn start
$ open index.html
```

## Build / Publish

To build index page (managed by webpack) and CVs.

```sh
$ yarn build
```

Just push it to `origin/master` to publish.

### VSCode Remote Container

Just open this project in VSCode.

Note: Convertion to PDF does not work well in container. Maybe Pandoc's version mismatch.
