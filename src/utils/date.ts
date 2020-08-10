import moment from 'moment';

const now = moment(new Date());


export const formatDate = (value: string, format: string) => moment(String(value)).format(format);
export const monthDifference = (value: string) => moment(now).diff(new Date(value), 'months');
export const diffMonths = `${monthDifference} months ago`;
