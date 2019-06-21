# Stock Market Recommender

Program that allows to get recommendation of stocks

## Getting Started

This project was structured as bellow:

Source files are in src/app folder

* **core**: contains models and services
  * _Stock_: class that represents a stock and its recommendations
  * _StockRecommendation_: class that represents a stock recomendation
  * _Recommendation_: enum that represents a type of recommendations
  * _StockService_: mock values of stock recommendations
* **features/stock**: contains feature that provides stock recommendations
  * _StockComponent_: top component that consume StockService and has StockRecommenderComponent embedded view
  * _StockRecommenderComponenent_: table with stock recommendations
* **shared**: contains shared declarables (components, directives, pipes)
  * _HeaderComponent_
  * _ButtonComponent_
  * _AlertDirective_: used to add css class to types of recommendations
* **styles**: contains style files
  * _base_: tags basic styles
  * _generic_: generic properties
  * _objects_: objects that can reused
  * _settings_: basic configurations
  * _tools_: mixins and functions

### CSS 

_styles_: imports style files in ascending order of specificity, following ITCSS architecture
Components CSS classes follows RSCSS methodology

### Prerequisites

node ^v10.10.0

### Installing

```
npm install
``` 

## Running the tests

```
npm test
``` 

### Runnning project

```
npm start
Access http://localhost:4200/ from a browser 
```

## Author

Keilla Menezes Fernandes
