# Installation

Please read the Requirements and follow the Installation Instructions carefully!

## Requirements

* **Shopware > 5.5**
* **PHP > 7.2**

## Installation Options

### Zip Installation package for the Shopware Plugin Manager
* Download the latest plugin version (e.g. ```Swark-1.0.0.zip```) from [Github](https://github.com/reConNico/swark/releases).
* Upload and install plugin using the Plugin Manager in the Shopware Backend.

### Git Version
* Change to your root Installation of Shopware
* Checkout Plugin ```git clone https://github.com/reConNico/swark.git /custom/plugins/Swark```
* Change to Directory ```cd /custom/plugins/Swark``` and run ```composer install``` to install the dependencies
* Install the Plugin with the Plugin Manager

### Install with Composer
* Change to your root Installation of Shopware
* Run command ```composer require reconnico/swark``` and install plugin with Plugin Manager

## Cronjob Installation

Make sure that the Shopware Cron is working correctly because Swark is creating a shopware cronjob in the application. For more detailed information and instruction on the Shopware Cron visit the [official documentation](https://docs.shopware.com/en/shopware-5-en/settings/system-cronjobs) of Shopware.

## Plugin Configuration

After you've successfully installed the plugin you need to configure it correctly. Please continue with the [Configuration](/configuration/) section. After you've configured the plugin correctly you can activate it.
