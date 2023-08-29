interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Fleet Manager', 'Admin'],
  tenantName: 'Company',
  applicationName: 'QA B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Search for available cars near me.', 'Book a car.', 'Cancel my booking.'],
  ownerAbilities: [
    'Manage company registration',
    'Invite Fleet Managers and Admins',
    'Manage car fleet',
    'Manage car status',
    'Manage car location',
    'Search for available cars',
    'Book a car',
    'Cancel car booking',
  ],
};
