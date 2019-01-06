# Installation

Please read the requirements and follow the installation instructions carefully!

## Requirements

* **Shopware > 5.3**
* **PHP > 7.2**

## Installation Options

### Zip Installation package for the Shopware Plugin Manager
* Download the latest plugin version (e.g. ```Swark-1.0.0.zip```)
* Upload and install plugin using the Plugin Manager

### Git Version
* Checkout Plugin in ```/custom/plugins/Swark```
* Change to Directory and run ```composer install``` to install the dependencies
* Install the Plugin with the Plugin Manager

### Install with Composer
* Change to your root Installation of Shopware
* Run command ```composer require reconnico/swark``` and install plugin with Plugin Manager

## Cronjob Installation

Make sure that the Shopware Cron is working correctly because Swark is creating a shopware cronjob in the application. For more detailed information and instruction on the Shopware Cron visit the [official documentation](https://docs.shopware.com/en/shopware-5-en/settings/system-cronjobs) of Shopware.

## Plugin Configuration

After you've successfully installed the plugin you need to configure it correctly. Please continue with the [Configuration](/configuration/) section. After you've configured the plugin correctly you can activate it.
