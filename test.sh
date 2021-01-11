docker run --rm --name hydro_tester -w /hydro -v $PWD:/hydro hydro-custom-node ncu -u && npm install && npx tsc && npm test
