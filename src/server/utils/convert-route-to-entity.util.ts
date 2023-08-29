const mapping: Record<string, string> = {
  bookings: 'booking',
  cars: 'car',
  companies: 'company',
  invites: 'invite',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
