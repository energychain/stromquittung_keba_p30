# stromquittung-keba-p30
Prepare a  billing event for last charging sessio of a KEBA P30 Wallbox


![npm](https://img.shields.io/npm/dw/stromquittung-keba-p30) [![Build Status](https://travis-ci.com/energychain/stromquittung-keba-p30.svg?branch=master)](https://travis-ci.com/energychain/stromquittung-keba-p30) [![Code Quality](https://www.code-inspector.com/project/12872/score/svg)](https://frontend.code-inspector.com/public/project/12872/stromquittung-keba-p30/dashboard)

This module retrieves the last charging session of a KEBA P30 Wallbox (or compatible) using a UDP connection [KEBA P20/P30 Programmers Guide](https://www.keba.com/file/downloads/e-mobility/KeContact_P20_P30_UDP_ProgrGuide_en.pdf) and pushes value to an energy receipt [Strom-Quittung](https://strom-quittung.de) to invoice customer.


![Corrently STROM-Quittung](https://corrently.de/assets/img/Logos/Corrently/StromQuittung_Web.png)


## Installation / Usage

### Prerequisites
- npm and Node JS (version 12 recommended)

###  via CLI (Standalone)
```shell
npm install -g stromquittung-keba-p30
```
- you might run from command line typing `stromquittung_keba_p30 <IP_ADDRESS_OF_KEBABOX>`

### as Module
```javascript
const service = require("stromquittung-keba-p30");
const quittungURL = service.quittung("IP_ADDRESS_OF_KEBABOX");
console.log("Finish your Receipt at: ",quittungURL);
```

## Further reading
Further Documentation is available in german language: https://docs.corrently.de/

## Maintainer / Imprint
This module is not an official contribution by KEBA.

<addr>
STROMDAO GmbH  <br/>
Gerhard Weiser Ring 29  <br/>
69256 Mauer  <br/>
Germany  <br/>
  <br/>
+49 6226 968 009 0  <br/>
  <br/>
kontakt@stromdao.com  <br/>
  <br/>
Handelsregister: HRB 728691 (Amtsgericht Mannheim)
</addr>


## LICENSE
Apache-2.0
