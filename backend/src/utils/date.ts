export const onYearFromNow = () =>
  new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);

export const thirtyDaysFromNow = () =>
  new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

export const fiftneenMinutesFromNow = () =>
  new Date(Date.now() + 15 * 60 * 1000);
