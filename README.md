# react-native-ene-battery
[![npm version](https://badge.fury.io/js/react-native-ene-battery.svg)](https://badge.fury.io/js/react-native-ene-battery)

## Installation

Add the package to your react-native project in the following way

```shell
npm install --save react-native-ene-battery
```

Or

```shell
yarn add react-native-ene-battery
```

Link the current package to your react native project

```shell
react-native link react-native-ene-battery
```

## Usage

``` javascript
import Battery from 'react-native-ene-battery'

componentWillMount() {
    Battery.getBatteryPercentage((batteryLevel) => {
      console.log(batteryLevel)
    })
  }

```

For any problems and doubt raise an issue.
