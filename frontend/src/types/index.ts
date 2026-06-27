export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  phone: string;
}

export interface Loan {
  id: string;
  userId: string;
  type: 'personal' | 'business' | 'education' | 'emergency';
  amount: number;
  purpose: string;
  duration: number;
  interestRate: number;
  status: 'pending' | 'approved' | 'rejected' | 'active' | 'overdue' | 'completed';
  monthlyPayment: number;
  remainingBalance: number;
  createdAt: Date;
}

export interface Transaction {
  id: string;
  userId: string;
  type: 'deposit' | 'withdrawal' | 'loan_payment' | 'interest';
  amount: number;
  description: string;
  balanceAfter: number;
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;
}

export interface SavingGoal {
  id: string;
  userId: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
  priority: 'low' | 'medium' | 'high';
  progress: number;
}