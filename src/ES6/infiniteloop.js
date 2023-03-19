function infiniteLoop() {
    console.log(ejecucion);
    setTimeout(infiniteLoop, 1000);
  }
  
  // Iniciar el loop
  infiniteLoop();

  var ejecucion = `
  {

    "name": "artio",

    "version": "0.1.0",

    "lockfileVersion": 3,

    "requires": true,

    "packages": {

      "": {

        "name": "artio",

        "version": "0.1.0",

        "dependencies": {

          "@testing-library/jest-dom": "^5.16.5",

          "@testing-library/react": "^13.4.0",

          "@testing-library/user-event": "^13.5.0",

          "react": "^18.2.0",

          "react-dom": "^18.2.0",

          "react-router-dom": "^6.6.2",

          "react-scripts": "5.0.1",

          "web-vitals": "^2.1.4"

        }
      },
      "node_modules/@adobe/css-tools": {

        "version": "4.0.1",

        "resolved": "https://registry.npmjs.org/@adobe/css-tools/-/css-tools-4.0.1.tgz",

        "integrity": "sha512-+u76oB43nOHrF4DDWRLWDCtci7f3QJoEBigemIdIeTi1ODqjx6Tad9NCVnPRwewW
        lKkVab5PlK8DCtPTyX7S8g=="

      },
      "node_modules/@ampproject/remapping": {

        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.2.0.tgz",

        "integrity": "sha512-qRmjj8nj9qmLTQXXmaR1cck3UXSRMPrbsLJAasZpF+t3
        riI71BXed5ebIOYwQntykeZuhjsdweEc9BxH5Jc26w==",
        "dependencies": {
          "@jridgewell/gen-mapping": "^0.1.0",
          "@jridgewell/trace-mapping": "^0.3.9"
        },
        "engines": {
          "node": ">=6.0.0"
        }
      },
      "node_modules/@babel/code-frame": {

        "version": "7.18.6",
        "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.18.6.tgz",
        "integrity": "sha512-TDCmlK5eOvH+eH7cdAFlNXeVJqWIQ7gW9tY1GJIpUtFb6CmjVyq2VM3u71bOyR8CRihcCgMUYoDNyLXao3+70Q==",
        "dependencies": {
          "@babel/highlight": "^7.18.6"
        },
        "engines": {
          "node": ">=6.9.0"
        }
      },
      "node_modules/@babel/compat-data": {
        "version": "7.20.10",
        "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.20.10.tgz",
        "integrity": "sha512-sEnuDPpOJR/fcafHMjpcpGN5M2jbUGUHwmuWKM/YdPzeEDJg8bgmbcWQFUfE32MQjti1koACvoPVsDe8Uq+idg==",
        "engines": {
          "node": ">=6.9.0"
        }
      },
  `

  console.log('root');