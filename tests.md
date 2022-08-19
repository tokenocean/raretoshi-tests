# Implemented Tests
## Can Open Homepage
- Homepage displays "Raretoshi"

# Test Ideas
## Accounts
- Register an account  
  This would be difficult - needing the ability to automatically receive and read emails, and some way to deal with the fact that accounts require unique emails.  There are basically three ways to deal with this (only the third is likely viable):
  - Lift the unique-email requirement (probably a bad idea)
  - Secure an infinite supply of email addresses (probably costly)
  - A way to delete accounts, either by accessing the Hasura console within the test, or by implementing an account-delete function into Raretoshi
- Login to an account
- Log out of an account
- Change an account's password

## Wallets
- Create a wallet
- Recover a wallet from its seed phrase
- Fund a wallet
- Withdraw from a wallet
