// for a single one...
create('Contact', {
  Name: "Taylor",
});


// upsert(
//   'Contact',
//   'DHIS2_ID__c',
//   fields(
//     field('DHIS2_ID__c', dataValue('id.value')),
//     field('FirstName', dataValue('firstName.value')),
//     field('LastName', dataValue('lastName.value')),
//     field('MailingAddress', dataValue('Address')),
//     field('Email', dataValue('email')),
//     field('MobilePhone', dataValue('phone'))
//   )
// );

// upsert(
//   'Patient_Satisfaction_Survey__c',
//   'Survey_id__c',
//   fields(
//     field('Region__c', dataValue('Area')),
//     field('Facility_Ownership__c', dataValue('Facility Ownership')),
//     field('Facility_Type__c', dataValue('Facility Type')),
//     field('Location__c', dataValue('Location_Rural/Urban'))
//   )
// );

// or for bulk...
// bulk(
//   'Contact',
//   'upsert',
//   { extIdField: 'DHIS2_ID__c', failOnError: true },
//   state =>
//     state.data.map(tei => {
//       return {
//         DHIS2_ID__c: tei.id.value,
//         FirstName: tei.firstName.value,
//         LastName: tei.lastName.value,
//         MailingAddress: tei.Address,
//         Email: tei.email,
//         MobilePhone: tei.phone,
//       };
//     })
// );

// bulk('Patient_Satisfaction_S__c', 'insert', { failOnError: true }, state =>
//   state.data.map(tei => ({
//     'Contact__r.DHIS2_ID__c': tei.id.value,
//     Region__c: 'West',
//     Facility_Ownership__c: 'NGO',
//     Facility_Type__c: 'Hospital',
//     Location__c: 'Rural',
//   }))
// );
