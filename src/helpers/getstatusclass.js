export const Getstatusclass = (status) => {
  const ColorClass = {
    'Waiting for technique approval': 'text-danger',
    'Approved': 'text-warning',
    'Waiting for final approval': 'text-success',
  };

  return ` ${ColorClass[status] }`;
};
