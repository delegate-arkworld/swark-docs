# CLI Commands

Swark provide several Shopware CLI Commands. More information about the Shopware CLI can be found on their [official documentation](https://docs.shopware.com/en/shopware-5-en/tutorials-and-faq/shopware-cli).

## Check Transactions

This command check all open Ark orders if the transaction on the blockchain has the correct amount, vendorField, recipient wallet and confirmations. If the transaction is confirmed the payment status is set to the status that is defined in the [plugin configuration](https://github.com/delegate-arkworld/swark-docs/tree/18e4ba8ca3db9b6d510d27c3a3f3f0ac24748e1b/configuration/README.md#payment-status).

```text
php bin/console swark:check:transactions
```

## Test Configuration

In Development...

