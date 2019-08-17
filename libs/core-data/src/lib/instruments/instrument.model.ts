export interface Instrument {
    id: number;
    name: string;
    year: string;
    inventor: string;
    country: string;
}

export const emptyInstrument: Instrument = {
    id: null,
    name: '',
    year: '',
    inventor: '',
    country: '',
}
