# Good Service

## Install

``` bash
npm install goodservice
```
## Import single
``` ts
import {goodservice} from 'goodservice';
```
## Import and create instance

``` ts
import 'gooddialogs/dist/base.min.css';
import {GoodService} from 'gooddialogs';
const goodservice = new GoodService('URL');
```

## Use

``` ts
const response = await goodservice.GET<any>('/my-endpoint')
```


## With Options
``` ts
const response = await goodservice.POST('/my-endpoint', {/* Options */})
```

