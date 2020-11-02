## Configuración Github Actions

También he configurado como sistema de integración continua una Github Action. Hace dos "jobs":

1. Construir un contenedor Docker y subirlos al Github Package Registry
    
    ``` 
    push-container-to-github-package-registry:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Log in Github Package Registry
           uses: docker/login-action@v1
           with:
             registry: ghcr.io
             username: ${{ github.repository_owner }}
             password: ${{ secrets.GR_TOKEN }}
         - name: Push Container
           run: docker build -t $TEST_IMAGE_PATH . && docker push $TEST_IMAGE_PATH
    ```

2. Siempre que el anterior trabajo no haya dado ningún error, lanza los tests:
    
    ```
    needs: push-container-to-github-package-registry
        if: always()
        steps:
          - name: Log in Github Package Registry
            uses: docker/login-action@v1
            with:
              registry: ghcr.io
              username: ${{ github.repository_owner }}
              password: ${{ secrets.GR_TOKEN }}
          - uses: actions/checkout@v2
          - name: Run tests
            run: docker run -t -v `pwd`:/test $TEST_IMAGE_PATH
    ```

Todo esto se hace por cada push a cualquier rama. Se ha configurado de esta forma, para que cada vez que se suba algo
al repositorio se pasen los tests y nos aseguremos de que no se ha roto nada :

![push_docker](img/push_tests.png)

El fichero de configuración puede encontrarse [aquí](https://github.com/cecimerelo/VizYourData/blob/main/.github/workflows/run_test.yml#L15).

