import { ApartmentData } from "./apartment";

export enum CarLogType {
  ALL = 'ALL',
  VISIT = 'VISIT',
  MEMBER = 'MEMBER',
  UNKNOWN = 'UNKNOWN'
}

export enum InOutType {
  IN = 'IN',
  OUT = 'OUT',
  BOTH = 'BOTH'
}

export interface CarLogInOut {
  id: number;
  apartment: ApartmentData;
  inOutType: InOutType;
  inOutTime: string;
  vehicleNumber: string;
}

export interface ICarLog {
  in: CarLogInOut;
  out: CarLogInOut;
  type: CarLogType;
  typeText?: string;
}

export interface CarLogDetails extends CarLogInOut {
  files: any;
}