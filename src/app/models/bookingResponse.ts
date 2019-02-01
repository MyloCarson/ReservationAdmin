import { Booking } from './booking';

export class BookingResponse {
    code: number;
    message: string;
    resources: Booking[];
}
