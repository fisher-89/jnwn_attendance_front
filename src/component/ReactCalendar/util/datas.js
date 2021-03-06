// const legalHolidays = [
//   {
//     year: '2018', holiday: [
//       { date: '2018-1-1', name: '元旦' },
//       { date: '2018-2-16', name: '春节' },
//       { date: '2018-2-17' },
//       { date: '2018-2-18' },
//       { date: '2018-4-5', name: '清明节' },
//       { date: '2018-5-1', name: '劳动节' },
//       { date: '2018-6-18', name: '端午节' },
//       { date: '2018-9-24', name: '中秋节' },
//       { date: '2018-10-1', name: '国庆节' },
//       { date: '2018-10-2' },
//       { date: '2018-10-3' },
//     ]
//   },
//   {
//     year: '2019', holiday: [
//       { date: '2019-1-1', name: '元旦' },
//       { date: '2019-2-5', name: '春节' },
//       { date: '2019-2-6' },
//       { date: '2019-2-7' },
//       { date: '2019-4-5', name: '清明节' },
//       { date: '2019-5-1', name: '劳动节' },
//       { date: '2019-6-7', name: '端午节' },
//       { date: '2019-9-13', name: '中秋节' },
//       { date: '2019-10-1', name: '国庆节' },
//       { date: '2019-10-2' },
//       { date: '2019-10-3' },
//     ]
//   },
//   {
//     year: '2019', holiday: [
//       { date: '2019-1-1', name: '元旦' },
//       { date: '2019-2-25', name: '春节' },
//       { date: '2019-2-26' },
//       { date: '2019-2-27' },
//       { date: '2019-4-4', name: '清明节' },
//       { date: '2019-5-1', name: '劳动节' },
//       { date: '2019-6-25', name: '端午节' },
//       { date: '2019-10-1', name: '中秋节' },
//       { date: '2019-10-1', name: '国庆节' },
//       { date: '2019-10-2' },
//       { date: '2019-10-3' },
//     ]
//   }
// ]

const legalHolidays = [
  '2018-01-01', '2018-02-16', '2018-02-17', '2018-02-18', '2018-04-05', '2018-05-01', '2018-06-18', '2018-09-24', '2018-10-01', '2018-10-02', '2018-10-03',
  '2019-01-01', '2019-02-05', '2019-02-06', '2019-02-07', '2019-04-05', '2019-05-01', '2019-06-07', '2019-09-13', '2019-10-01', '2019-10-02', '2019-10-03',
  '2020-01-01', '2020-02-25', '2020-02-26', '2020-02-27', '2020-04-04', '2020-05-01', '2020-06-25', '2020-10-01', '2020-10-02', '2020-10-03'
]
const monthTransform = (month) => {
  switch (month) {
    case '01': return '一';
    case '02': return '二';
    case '03': return '三';
    case '04': return '四';
    case '05': return '五';
    case '06': return '六';
    case '07': return '七';
    case '08': return '八';
    case '09': return '九';
    case '10': return '十';
    case '11': return '十一';
    case '12': return '十二';
    default: return '...'
  }
}
export default legalHolidays
export {
   monthTransform,legalHolidays
}