export const questions = [
  {
    text: 'How often do you deploy to production?',
    options: [
      { label: 'On demand (multiple times per day)', value: 4 },
      { label: 'Daily', value: 3 },
      { label: 'Weekly', value: 2 },
      { label: 'Monthly or less', value: 1 }
    ]
  },
  {
    text: 'What is your average lead time for changes?',
    options: [
      { label: 'Less than 1 hour', value: 4 },
      { label: 'Less than 1 day', value: 3 },
      { label: 'Less than 1 week', value: 2 },
      { label: 'More than 1 week', value: 1 }
    ]
  },
  {
    text: 'What is your change failure rate?',
    options: [
      { label: '< 15%', value: 4 },
      { label: '15-30%', value: 3 },
      { label: '31-45%', value: 2 },
      { label: '> 45%', value: 1 }
    ]
  },
  {
    text: 'What is your mean time to restore service?',
    options: [
      { label: 'Less than 1 hour', value: 4 },
      { label: 'Less than 6 hours', value: 3 },
      { label: 'Less than 24 hours', value: 2 },
      { label: 'More than 24 hours', value: 1 }
    ]
  }
];
