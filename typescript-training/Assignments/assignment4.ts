/*
Assignment -4 (Conditional Statements & Loops)

Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions
*/

const transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let totalCredit: number = 0;
let totalDebit: number = 0;
let suspiciousTransactions: number = 0;                 
for (let i = 0; i < transactions.length; i++) {
    const transaction: number = transactions[i];    
    if (transaction > 0) {
        totalCredit += transaction; // Calculate total credit
    } else {
        totalDebit += transaction; // Calculate total debit
    }   
    if (Math.abs(transaction) > 10000) {
        console.log(`Suspicious transaction with amount: ${transaction}`);
        suspiciousTransactions++; // Count suspicious transactions
    }
}
const totalTransactions: number = transactions.length;
const remainingBalance: number = totalCredit + totalDebit; // Calculate remaining balance

console.log(`Total Credit Transactions: ${totalCredit}`);
console.log(`Total Debit Transactions: ${totalDebit}`);
console.log(`Total Transactions: ${totalTransactions}`);
console.log(`Remaining Balance: ${remainingBalance}`);
console.log(`Total Suspicious Transactions: ${suspiciousTransactions}`);

    




