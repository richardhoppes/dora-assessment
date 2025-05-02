export const questions = [
  {
    text: 'How often do you deploy to production?',
    options: [
      { label: 'Multiple times per day', value: 4 },
      { label: 'Between once a day and once a week', value: 3 },
      { label: 'Between once a week and once a month', value: 2 },
      { label: 'Between once a month and once every 6 months', value: 1 }
    ]
  },
  {
    text: 'What is your average lead time for changes?',
    options: [
      { label: '< 1 day', value: 4 },
      { label: 'Between 1 day and 1 week', value: 3 },
      { label: 'Between 1 week and 1 month', value: 2 },
      { label: 'Between 1 month and 6 months', value: 1 }
    ]
  },
  {
    text: 'What is your change failure rate?',
    options: [
      { label: '0 to 15%', value: 4 },
      { label: '16 to 30%', value: 3 },
      { label: '31 to 45%', value: 2 },
      { label: '46 to 60%', value: 1 }
    ]
  },
  {
    text: 'What is your mean time to restore service?',
    options: [
      { label: '< 1 hour', value: 4 },
      { label: '< 1 day', value: 3 },
      { label: 'Between 1 day and 1 week', value: 2 },
      { label: 'Between 1 week and 1 month', value: 1 }
    ]
  }
];