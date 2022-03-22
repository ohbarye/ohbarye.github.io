# ohbarye.github.io

[https://ohbarye.github.io/](https://ohbarye.github.io/)

![me](https://cloud.githubusercontent.com/assets/1811616/21566624/fca372da-cee7-11e6-9b48-f3d1b215ddb6.gif)

## Development

```sh
$ git clone https://github.com/ohbarye/ohbarye.github.io.git && cd ohbarye.github.io
$ yarn && yarn dev
$ open http://localhost:3000
```

### Index page application

It's a simple JavaScript application. The following command starts a dev server managed by Vite.

```sh
$ yarn && yarn dev
$ open http://localhost:3000
```

### CVs

Edit the files below.

- `src/cv/en.md`
- `src/cv/ja.md`

PDF and HTML files are generated by Pandoc with the command below.

## Build / Publish

### Requirements

To generate CVs, it requires those tools.

```sh
$ brew install pandoc wkhtmltopdf
```

### Build

To build index page (managed by Vite) and CVs (generated by Pandoc).

```sh
$ yarn build
```

### Publish

Just push it to `origin/main`, then GitHub pages publishes files in `/docs`.

### VSCode Remote Container

Just open this project in VSCode.

Note: Convertion to PDF does not work well in container. Maybe Pandoc's version mismatch.
