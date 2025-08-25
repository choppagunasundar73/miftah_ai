import { MembershipRequest } from '@/types/crm';

export const mockRequests: MembershipRequest[] = [
  {
    id: '1',
    customerId: 'CUST-1023',
    customerName: 'John Matthews',
    email: 'john.matthews@example.com',
    phone: '+1 234 567 890',
    status: 'todo',
    requestDate: '10 Aug 2025',
    kycStatus: 'Not Started',
    kycDeadline: '20 Aug 2025',
    missingDocuments: ['Government ID Proof'],
    proofDocuments: [
      { id: '1', name: 'Image32568.jpg', size: '300kb' },
      { id: '2', name: 'Image32568.jpg', size: '300kb' }
    ],
    notes: 'User registered but hasn\'t uploaded any KYC documents yet.\nSent automated reminder email on 11 Aug 2025.'
  },
  {
    id: '2',
    customerId: 'CUST-1023',
    customerName: 'John Matthews',
    email: 'john.matthews@example.com',
    phone: '+1 234 567 890',
    status: 'todo',
    requestDate: '10 Aug 2025',
    kycStatus: 'Not Started',
    kycDeadline: '20 Aug 2025',
    missingDocuments: ['Government ID Proof'],
    proofDocuments: [
      { id: '3', name: 'Image32568.jpg', size: '300kb' },
      { id: '4', name: 'Image32568.jpg', size: '300kb' }
    ],
    notes: 'User registered but hasn\'t uploaded any KYC documents yet.\nSent automated reminder email on 11 Aug 2025.'
  },
  {
    id: '3',
    customerId: 'CUST-1023',
    customerName: 'John Matthews',
    email: 'john.matthews@example.com',
    phone: '+1 234 567 890',
    status: 'todo',
    requestDate: '10 Aug 2025',
    kycStatus: 'Not Started',
    kycDeadline: '20 Aug 2025',
    missingDocuments: ['Government ID Proof'],
    proofDocuments: [
      { id: '5', name: 'Image32568.jpg', size: '300kb' },
      { id: '6', name: 'Image32568.jpg', size: '300kb' }
    ],
    notes: 'User registered but hasn\'t uploaded any KYC documents yet.\nSent automated reminder email on 11 Aug 2025.'
  },
  {
    id: '4',
    customerId: 'CUST-1023',
    customerName: 'John Matthews',
    email: 'john.matthews@example.com',
    phone: '+1 234 567 890',
    status: 'progress',
    requestDate: '10 Aug 2025',
    kycStatus: 'Verification in Progress',
    kycDeadline: '20 Aug 2025',
    missingDocuments: [],
    proofDocuments: [
      { id: '7', name: 'Image32568.jpg', size: '300kb' },
      { id: '8', name: 'Image32568.jpg', size: '300kb' }
    ],
    notes: 'Documents uploaded and under review.'
  },
  {
    id: '5',
    customerId: 'CUST-1023',
    customerName: 'John Matthews',
    email: 'john.matthews@example.com',
    phone: '+1 234 567 890',
    status: 'progress',
    requestDate: '10 Aug 2025',
    kycStatus: 'Verification in Progress',
    kycDeadline: '20 Aug 2025',
    missingDocuments: [],
    proofDocuments: [
      { id: '9', name: 'Image32568.jpg', size: '300kb' },
      { id: '10', name: 'Image32568.jpg', size: '300kb' }
    ],
    notes: 'Documents uploaded and under review.'
  },
  {
    id: '6',
    customerId: 'CUST-1023',
    customerName: 'John Matthews',
    email: 'john.matthews@example.com',
    phone: '+1 234 567 890',
    status: 'done',
    requestDate: '10 Aug 2025',
    kycStatus: 'Document Review',
    kycDeadline: '20 Aug 2025',
    missingDocuments: [],
    proofDocuments: [
      { id: '11', name: 'Image32568.jpg', size: '300kb' },
      { id: '12', name: 'Image32568.jpg', size: '300kb' }
    ],
    notes: 'All documents verified successfully.'
  },
  {
    id: '7',
    customerId: 'CUST-1023',
    customerName: 'Mark Robinson',
    email: 'mark.robinson@example.com',
    phone: '+1 234 567 890',
    status: 'blocked',
    requestDate: '10 Aug 2025',
    blockedDate: '10 Aug 2025',
    kycStatus: 'Blocked',
    kycDeadline: '20 Aug 2025',
    missingDocuments: ['Government ID Proof'],
    proofDocuments: [],
    notes: 'Account blocked due to suspicious activity.'
  }
];