export type RequestStatus = 'todo' | 'progress' | 'done' | 'blocked';

export interface MembershipRequest {
  id: string;
  customerId: string;
  customerName: string;
  email: string;
  phone: string;
  status: RequestStatus;
  requestDate: string;
  blockedDate?: string;
  kycStatus: 'Not Started' | 'Verification in Progress' | 'Document Review' | 'Blocked';
  kycDeadline: string;
  missingDocuments: string[];
  proofDocuments: {
    id: string;
    name: string;
    size: string;
  }[];
  notes: string;
}

export const statusConfig = {
  todo: {
    label: 'To do',
    color: 'status-todo',
    bgColor: 'bg-status-todo',
    textColor: 'text-status-todo-foreground',
    columnBg: 'bg-status-todo-bg'
  },
  progress: {
    label: 'In Progress',
    color: 'status-progress',
    bgColor: 'bg-status-progress',
    textColor: 'text-status-progress-foreground',
    columnBg: 'bg-status-progress-bg'
  },
  done: {
    label: 'Done',
    color: 'status-done',
    bgColor: 'bg-status-done',
    textColor: 'text-status-done-foreground',
    columnBg: 'bg-status-done-bg'
  },
  blocked: {
    label: 'Block',
    color: 'status-blocked',
    bgColor: 'bg-status-blocked',
    textColor: 'text-status-blocked-foreground',
    columnBg: 'bg-status-blocked-bg'
  }
} as const;