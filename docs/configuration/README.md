# Configuration

## Plugin Configuration

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

## Payment Method Configuration

* Open the shopware backend and navigate to `Configuration -> Payment methods`.
* Select `ARK` and check the `active` checkbox if you want to activate the ARK payment method.

## Currency Configuration

* Open the shopware backend and navigate to `Configuration -> Basic Settings -> Shop settings -> Currencies`.
* Select `ARK` and configure it to your needs!

## Transaction Check Cronjob

TODO
