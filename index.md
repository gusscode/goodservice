---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "goodservice"
  #text: "clean develop"
  tagline: clean develop, call api service
  actions:
    - theme: brand
      text: Api Service
      link: /

#features:
#  - title: Vue
#    details: Funciona con Vue, React y angular
#  - title: React
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#  - title: Angular
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---


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

