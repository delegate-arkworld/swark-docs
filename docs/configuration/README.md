# Configuration

## Plugin Configuration

**Ark wallet address** 

    Insert your ark address that should be used for payments. 
    You can just use one single wallet or insert multiple separated 
    by semicolons. When you configured multiple wallets the application 
    random select a wallet for the payment.
    
    Example:
    
    AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv;ALgvTAoz5Vi9easHqBK6aEMKatHb4beCXm
    
**Main node api url**

    Insert the http url for the request that will be used mainly.
    
    Example:
    
    https://my.ark.node:8443/api
    
**Backup node api url**

    Same as the main node api url. Will be used when the main node isn't available.
    
**Confirmations**

    Define how much network confirmations the transaction need to have at least.
    
**Payment Status**

    Select the payment status that should be set after the transaction is confirmed.
    
**VendorField Layout**

    Define the vendorField template that should be used to identify 
    the correct transaction. The Placeholder {$ordernumber} is dynamically 
    filled with the shopware ordernumber.
    
    Example:
    
    Order: {$ordernumber}

## Ark Currency

## Transaction Check Cronjob