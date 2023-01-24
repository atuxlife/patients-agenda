# Patient Agenda

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript project. Patients Agenda.

## Instalación y puesta en marcha

1. Descargar el repositorio de git:

```bash
$ git clone git@github.com:atuxlife/patients-agenda.git
```

2. Ya copiado entrar al directorio

```bash
$ cd patients-agenda
```

3. Copiar el env.example a .env

```bash
$ cp env.example .env
```

4. Crear y ejecutar los contenedores en segundo plano. Esto instalará y configurará las dependencias y echará a andar la aplicación.

```bash
docker-compose up -d
```

5. Ya con esto los contenedores estarán arriba y listos para usar el microservicio con la siguiente URL:

```bash
[http://localhost:5000/api](http://localhost:5000/api)
```

Ahí inicialmente verán la documentación hecha con Swagger, donde estarán los diferentes endpoints que conforman el microservicio, cómo se acceden a ellos, los verbos que usan y los inputs que debe tener, así como las respuestas que da cada uno de ellos.

Se implementaron las validaciones solicitadas:

- Teléfono sólo números.
- Documento de identidad sólo números.
- Correo electrónico con el formato debido.
- Y validación que el usuario no exista buscándolo por documento de identidad y correo electrónico. Si existe el usuario con esta consulta, no permite crearlo.
- Los mensajes y tipos de respuesta también fueron implementados.

Cualquier duda, inquietud o sugerencia estoy atento a recibirla.

## Extras

1. Bajar los contenedores:

```bash
$ docker-compose down
```

2. Eliminar todos los contenedores vinculados en el proyecto. Nota: hay que estar en el directorio donde estén los archivos Dockerfile y docker-compose.yml

```bash
$ docker-compose down -v
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
