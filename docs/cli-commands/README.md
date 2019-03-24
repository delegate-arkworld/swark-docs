# CLI Commands

Swark provide several Shopware CLI Commands. More information about the Shopware CLI can be found on their [official documentation](https://docs.shopware.com/en/shopware-5-en/tutorials-and-faq/shopware-cli).

## Check Transactions

This command check all open Ark orders if the transaction on the blockchain has the correct amount, vendorField, recipient wallet and confirmations. If the transaction is confirmed the payment status is set to the status that is defined in the [plugin configuration](/configuration/#payment-status). 

    php bin/console swark:check:transactions
    
## Test Configuration

TODO