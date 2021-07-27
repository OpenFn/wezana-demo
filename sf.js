upsert('Contact', 'Contact_id__c', fields(
  field('Name', dataValue('contactPerson')),
  field('MailingAddress', dataValue('Address')),
  field('Email', dataValue('email')),
  field('MobilePhone', dataValue('phone')),
));

upsert('Patient_Satisfaction_Survey__c', 'Survey_id__c', fields(
  field('Region__c', dataValue('Area')),
  field('Facility_Ownership__c', dataValue('Facility Ownership')),
  field('Facility_Type__c', dataValue('Facility Type')),
  field('Location__c', dataValue('Location_Rural/Urban')),
));