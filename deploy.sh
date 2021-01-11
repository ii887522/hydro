docker run --rm --name hydro_publisher -it -w /hydro -v $PWD:/hydro node:15.4.0-alpine3.10 npm login && npm publish --access public
