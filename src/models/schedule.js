import * as schedule from '../services/schedule'
export default {
  namespace: 'schedule',
  state: {
    details: {},
  },

  effects: {

    * editSchedule({ payload }, { call }) {
      const response = yield call(schedule.editSchedule, payload.data);
      if (response && !response.error) {
        payload.cb(response.data);
      } else {
        // Toast.info(data.message, 1.5);
      }
    },
  },

  reducers: {

  },
}