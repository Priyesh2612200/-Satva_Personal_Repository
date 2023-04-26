export interface Weather {
  _id: string;
  InvestmentType: number;
  CompanyName: string;
  RepName: string;
  RepId: string;
  ProductServices: ProductServicesOrClassOrProgram;
  Class: ProductServicesOrClassOrProgram;
  Program: ProductServicesOrClassOrProgram;
  Description: string;
  QBOEntityId: string;
  QBOEntityNo: string;
  Amount: number;
  ProcessingFee: number;
  BrooklynInvestmentStatus: number;
  PaybevInvestmentStatus: number;
  IsPaybevConfirmed: boolean;
  IsNonALC: boolean;
  SiteId: string;
  SiteName: string;
  Processfee: string;
  Stage: number;
  CustomerDetails: CustomerDetails;
  InvestmentDetails: InvestmentDetails;
  Comment?: null;
  CreatedBy: string;
  CreatedById: string;
  ModifyBy: string;
  ApproverBy: string;
  ApproverId: string;
  IsLinkedEstimate: boolean;
  CancelReason?: null;
  TransactionsNo?: null;
  QBOInvoiceLink?: null;
}
export interface ProductServicesOrClassOrProgram {
  _id: string;
  Name: string;
}
export interface CustomerDetails {
  IsMapWithExisting: boolean;
  PayBevCustomerDetails: PayBevCustomerDetails;
  QuickBookCustomerDetails: QuickBookCustomerDetails;
}
export interface PayBevCustomerDetails {
  _id: string;
  QBOCustomerId: string;
  QBOCustomerNo?: null;
  Name: string;
  CompanyName: string;
  StreetAddress1: string;
  StreetAddress2: string;
  City: string;
  State: string;
  ZIPCode: string;
  Country: string;
  IsAddLine: boolean;
  ParentRefId: string;
  Email: string;
  PhoneNumber: string;
  MobileNumber: string;
  Terms: TermsOrPaymentMethod;
  PaymentMethod: TermsOrPaymentMethod;
}
export interface TermsOrPaymentMethod {
  _id?: null;
  Name?: null;
}
export interface QuickBookCustomerDetails {
  _id?: null;
  QBOCustomerId: string;
  QBOCustomerNo?: null;
  Name: string;
  CompanyName: string;
  StreetAddress1: string;
  StreetAddress2: string;
  City: string;
  State: string;
  ZIPCode: string;
  Country?: null;
  IsAddLine: boolean;
  ParentRefId: string;
  Email: string;
  PhoneNumber: string;
  MobileNumber: string;
  Terms: TermsOrPaymentMethod;
  PaymentMethod: TermsOrPaymentMethod;
}
export interface InvestmentDetails {
  PaybevInvestment: PaybevInvestment;
  QuickBookInvestment: QuickBookInvestment;
}
export interface PaybevInvestment {
  ProductServices: ProductServicesOrClassOrProgram;
  Class: ProductServicesOrClassOrProgram;
  CompanyName: string;
  RepName: string;
  RepId: string;
  Memo?: null;
  Amount: number;
  ProcessingFee: number;
  Fee: string;
  IsEstimate: boolean;
  Description: string;
  LinkedEstimateNo?: null;
  LinkedEstimateId?: null;
  LinkedInvoiceNo: string;
  LinkedInvoiceId: string;
}
export interface QuickBookInvestment {
  UserId: string;
  UserName: string;
  ProductServices: ProductServicesOrClassOrProgram;
  Class: ProductServicesOrClassOrProgram;
  Description: string;
  Memo?: null;
  Amount: number;
  ProcessingFee: number;
  QBOEntityId: string;
  QBOEntityNo: string;
  PaymentId?: null;
}
