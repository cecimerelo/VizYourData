## Github Action

En la GitHub action desarrollada para la integración continua hacemos uso del contenedor docker como podemos ver en el
job `test` :

```
  test:
    runs-on: ubuntu-latest
    needs: [push-container-to-github-package-registry, needs-rebuild]
    if: always()
    steps:
      ...
      - name: Run tests
        run: docker run -t -v `pwd`:/test $TEST_IMAGE_PATH
```

Con la orden indicada en `run` hacemos que los tests se ejecuten haciendo uso del entorno del contenedor. Además este
job está configurado para que se ejecute siempre que haya un cambio en los archivos: `Dockerfile, package.json, tests/**`.
Lo que quiere decir que cada vez que se cambie la imagen de Docker, las dependencias o se añadan tests nuevos se
ejecutará, y así nos aseguraremos de que no se ha roto nuestra aplicación. Esto se indica en el apartado `needs`, que hace
que dependa de los jobs anteriores y se tenga en cuenta su salida.

## Travis

En Travis también podemos hacer uso de nuestro contenedor de docker. Con nuestra configuración actual:

```
language: node_js
node_js:
  - "10"
  - "11"
  - "12"
before_install:
  - npm install -g grunt-cli
  - npm install
script: grunt test
```

Se indican los lenguajes que usaremos y posteriormente se instalan las dependencias. Al fin y al cabo esas dependencias
son las que están instaladas en nuestro contenedor, así que para usarlo cambiamos nuestra configuración a:

```
language:
  - minimal

services:
  - docker

before_install:
- docker pull cecimerelo/vizyourdata

script:
  - docker run -t -v  $TRAVIS_BUILD_DIR:/test cecimerelo/vizyourdata
```

Así usamos directamente nuestro contenedor. Como lenguaje usamos `minimal` porque sino por defecto se instalará
`ruby`, y a la hora de la construcción tarda más, como podemos ver en la siguiente imagen. El primer `build` que 
aparece usa como lenguaje `minimal`, que es un alias para `shell`, y en el segundo no se ha especificado el lenguaje, así que 
por defecto ha instalado `ruby`. Podemos ver que el primero es más rápido, aunque la diferencia no sea muy significativa.

![travis_build](img/compara_builds.png)


