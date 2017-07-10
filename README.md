# react-native-ene-battery

## React Native Telephony
[![npm version](https://badge.fury.io/js/react-native-ene-telephony.svg)](https://badge.fury.io/js/react-native-ene-telephony)

## Installation

Add the package to your react-native project in the following way

```shell
npm install --save react-native-ene-telephony
```

Or

```shell
yarn add react-native-ene-telephony
```

Link the current package to your react native project

```shell
react-native link react-native-ene-telephony
```

## Usage

``` javascript
import Battery from 'react-native-ene-telephony'

componentWillMount() {
    Battery.getBatteryPercentage((batteryLevel) => {
      console.log(batteryLevel)
    })
  }

```

For any problems and doubt raise an issue.
