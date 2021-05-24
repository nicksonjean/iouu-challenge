# IOUU - Challenge (API PriceTable) - Repository

![IOUU](./assets/iouu-logo.jpg)

## :triangular_flag_on_post: Starting

The project was created from the boilerplate developed and maintained by [Douglas Dennys](https://github.com/doga10/clean-architecture-node), where it was used NodeJs + TypeScript + TDD + Clean Architecture.

## :checkered_flag: Dependencies

- Node: 14.15.0
- npm: 6.14.8
- Docker: 20.10.2
- Git 2.28.0.windows.1

To use this repository, follow the steps:

> git clone <https://github.com/nicksonjean/iouu-challenge.git>\
> cd iouu-challenge\
> npm install\
> docker compose up

## :ledger: Description

1 - Construction of a price table for financing. Where it is received as parameters to calculate the value of the parcels, as the following example: <http://www.drcalc.net/price.asp?it=5&ml=Calc>
2 - It is possible to renegotiate the price table, if the borrower is unable to pay in a certain installment and thus, a new price table will be recreated from the last installment paid. And when consuming the price table it must be adjusted.

### <p style="font-size:30px; font-weight:bold;"><img style="position:relative; top:-4px;" src="./assets/swagger-logo.png" height="30" align="center" /> &nbsp;Documentation</p>

After the service has been properly started, according to the steps previously described, the functionality documentation for this project can be found in the swagger, in [User Guide](http://localhost:5050/api-docs).

## :bust_in_silhouette: Autor

### Nickson Jeanmerson

---

This README was generated with ❤️ by **Nickson Jeanmerson**
