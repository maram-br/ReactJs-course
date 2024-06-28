export const Getbadgeclass = (type) => {
  const typeToColorClass = {
    'Sick Leave': 'bg-danger',
    'Vacation Leave': 'bg-warning',
    'Casual Leave': 'bg-success',
    'Personal Leave': 'bg-primary',
  };

  return `badge rounded-pill d-inline ${typeToColorClass[type] }`;
};
