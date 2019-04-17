const physicians = ['Hibbert, Julius', 'Krieger, Algemop', 'Riviera, Nick'];
const appointmentList = {
  'Hibbert, Julius': {
    email: 'hibbert@notablehealth.com',
    firstName: 'Julius',
    lastName: 'Hibbert',
    patients: [
      {
        num: 1,
        name: 'Moses Archer',
        time: '8:00AM',
        kind: 'Follow-up'
      },
      {
        num: 2,
        name: 'Cyril Figis',
        time: '9:00AM',
        kind: 'Follow-up'
      },
      {
        num: 3,
        name: 'Ray Gilette',
        time: '10:00AM',
        kind: 'New Patient'
      },
    ]
  },
  'Krieger, Algemop': {
    email: 'krieger@notablehealth.com',
    firstName: 'Algernop',
    lastName: 'Krieger',
    patients: [
      {
        num: 1,
        name: 'Sterling Archer',
        time: '8:00AM',
        kind: 'New Patient'
      },
      {
        num: 2,
        name: 'Cyril Figis',
        time: '9:00AM',
        kind: 'Follow-up'
      },
      {
        num: 3,
        name: 'Tony Dan',
        time: '10:00AM',
        kind: 'New Patient'
      },
      {
        num: 4,
        name: 'Zk Liu',
        time: '9:00AM',
        kind: 'Follow-up'
      },
      {
        num: 5,
        name: 'Roy Than',
        time: '10:00AM',
        kind: 'New Patient'
      },
    ]
  },
  'Riviera, Nick': {
    email: 'riviera@notablehealth.com',
    firstName: 'Nick',
    lastName: 'Riviera',
    patients: [
      {
        num: 1,
        name: 'Moses Archer',
        time: '9:00AM',
        kind: 'New Patient'
      },
      {
        num: 2,
        name: 'Megan Clark',
        time: '9:30AM',
        kind: 'New Patient'
      },
      {
        num: 3,
        name: 'Sam Tenorio',
        time: '10:00AM',
        kind: 'New Patient'
      },
      {
        num: 4,
        name: 'Pam Poovey',
        time: '11:00AM',
        kind: 'New Patient'
      },
    ]
  }
};

module.exports = { physicians, appointmentList };