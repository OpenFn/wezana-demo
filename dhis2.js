// getResources('orgUnits', {
//     fields: '*',
//     responseType: 'json',
// });

getTEIs({
  fields: '*',
  ou: 'DiszpKrYNg8',
  skipPaging: true,
});

fn(state => {
  const { trackedEntityInstances } = state.data;

  const preparedData = trackedEntityInstances
    .map(tei => ({
      firstName: tei.attributes.find(x => x.displayName === 'First name'),
      lastName: tei.attributes.find(x => x.displayName === 'Last name'),
      id: tei.attributes.find(x => x.code === 'MMD_PER_ID'),
      ...tei,
    }))
    .filter(tei => tei.firstName && tei.lastName && tei.id);

  console.log('Sample TEI:', preparedData[0]);
  // return { ...state, data: preparedData.shift() };
  return { ...state, data: preparedData };
});
