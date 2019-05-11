# Configuration

## Plugin Configuration

You can find the Configuration of Swark in the Plugin Manager in the Shopware Backend.

#### Ark wallet address

Insert your ark address that should be used for payments. You can just use one single wallet or insert multiple separated by semicolons. When you configured multiple wallets the application random select a wallet for the payment.
    
Example:

    AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv;ALgvTAoz5Vi9easHqBK6aEMKatHb4beCXm
    
---
    
#### Main node api url

Insert the http url for the request that will be used mainly.
    
Example:
   
    https://my.ark.node:4003/api/v2
    
---
    
#### Backup node api url

Same as the main node api url. Will be used when the main node isn't available.

Example:
   
    https://my.ark.node:4003/api/v2

---

#### Explorer Link

Link to the explorer that should be used for links in the shop.

Example:

    https://explorer.ark.io
    
---
    
#### Confirmations

Define how much network confirmations the transaction need to have at least.

Example:
   
    51

---
    
#### Payment Status

Select the payment status that should be set after the transaction is confirmed.

Example:
   
    completely_paid

---
    
#### VendorField Layout

Define the vendorField template that should be used to identify the correct transaction. The Placeholder {$ordernumber} is dynamically filled with the shopware ordernumber.
    
Example:
    
    Swark Order: {$ordernumber}
    
#### Send order status mail

If set on `Yes` the order status mail will be sent out when the order reached the configured payment status.

Example:

    Yes
    
### Currency precision

The decimal places that are displayed when the Ark Currency is selected.

Example:

    8

## Payment Method Configuration

* Open the shopware backend and navigate to `Configuration -> Payment methods`.
* Select `Ark` and check the `active` checkbox if you want to activate the Ark payment method.

## Currency Configuration

* Open the shopware backend and navigate to `Configuration -> Basic Settings -> Shop settings -> Currencies`.
* Select `Ark` and configure it to your needs!

#### Activate Currency in the Shop

* Open the shopware backend and navigate to `Configuration -> Basic Settings -> Shop settings -> Shops`.
* Select the shop you want to configure.
* Select currency `Ark` in the `Select currencies` selection and click on `Save`.

## Cronjob Configuration

#### Check Transactions

This Cronjob is active by default and checks every 15 minutes the Ark transactions and if any transaction reach the minimum confirmations to update the order status.

* Open the Cronjob settings in the Shopware backend under `Configuration -> Basic settings -> System -> Cronjobs`.
* Select "Check Ark Transactions" from list and configure it to your needs.`

#### Update Currency Factor

This Cronjob is not active by default. It updates the factor of the Ark currency every 15 minutes

* Open the Cronjob settings in the Shopware backend under Configuration -> Basic settings -> System -> Cronjobs.
* Select "Check Ark transactions" from list and configure it to your needs.
