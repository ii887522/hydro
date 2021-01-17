docker run --rm --name hydro_tester -w /hydro -v $PWD:/hydro hydro-custom-node /bin/sh -c "chmod 777 /root && ncu -u && npm install && npx tsc && npm test"
