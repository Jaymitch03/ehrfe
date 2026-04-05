import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getSummary() {
    return {
      openEncounters: 30,
      highPriorityTasks: 12,
      signedToday: 18,
      pendingAuths: 7
    };
  }
}
