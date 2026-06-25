# loan-and-saving

# API Contract

## Authentication

### Register User

POST /api/auth/register

Request

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

Response

```json
{
  "message": "User registered successfully"
}
```

---

### Login User

POST /api/auth/login

Request

```json
{
  "email": "string",
  "password": "string"
}
```

Response

```json
{
  "token": "jwt_token",
  "user": {
    "id": 1,
    "name": "string",
    "email": "string"
  }
}
```

---

## User Profile

### Get Profile

GET /api/users/profile

Response

```json
{
  "id": 1,
  "name": "string",
  "email": "string"
}
```

---

## Savings

### Get Savings Information

GET /api/savings

Response

```json
{
  "balance": 5000,
  "totalDeposits": 7000,
  "totalWithdrawals": 2000
}
```

---

### Deposit Savings

POST /api/savings/deposit

Request

```json
{
  "amount": 1000
}
```

Response

```json
{
  "message": "Deposit successful"
}
```

---

### Withdraw Savings

POST /api/savings/withdraw

Request

```json
{
  "amount": 500
}
```

Response

```json
{
  "message": "Withdrawal successful"
}
```

---

## Loans

### Apply For Loan

POST /api/loans

Request

```json
{
  "amount": 10000,
  "durationMonths": 12,
  "purpose": "Business"
}
```

Response

```json
{
  "loanId": 1,
  "status": "Pending"
}
```

---

### Get User Loans

GET /api/loans

Response

```json
[
  {
    "loanId": 1,
    "amount": 10000,
    "remainingBalance": 7000,
    "status": "Active"
  }
]
```

---

### Repay Loan

POST /api/loans/{loanId}/repay

Request

```json
{
  "amount": 1000
}
```

Response

```json
{
  "message": "Repayment successful"
}
```

---

## Dashboard

### Get Dashboard Data

GET /api/dashboard

Response

```json
{
  "savingsBalance": 5000,
  "activeLoans": 1,
  "remainingLoanBalance": 7000,
  "recentTransactions": []
}
```

---

# Frontend Pages

1. Landing Page
2. Login Page
3. Registration Page
4. User Dashboard
5. Savings Page
6. Loan Application Page
7. Loan History Page
8. User Profile Page

---



