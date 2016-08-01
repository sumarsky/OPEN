import {
  beforeEachProviders,
  it,
  inject
}
from 'angular2/testing';
import {provide} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

import {StatisticsService} from '../../shared/services/StatisticsService';
import {StatisticsServiceMock} from '../../shared/mocks/StatisticsServiceMock';
import {AlertingService} from '../../shared/services/AlertingService';
import {GameStatisticComponent} from './GameStatisticComponent';

describe('GameStatisticComponentTests', () => {
  beforeEachProviders(() => [
    GameStatisticComponent,
    AlertingService,
    provide(StatisticsService, { useClass: StatisticsServiceMock })
  ]);

  it('getStatistic_givenStatisicsServiceAvailable_shouldLoadStatistics',
    inject([GameStatisticComponent], (instance) => {
      // Arrange
      spyOn(instance.statisticsService, 'getLoggedUserStatisticForGame').and.callThrough();

      // Act
      instance.getStatistic(0);

      // Assert
      expect(instance.statistics[0].username).toEqual('name');
      expect(instance.statistics.length).toEqual(1);
    }));

  it('getStatistic_givenStatisicsServicUnavailable_shouldShowAlertForDanger',
    inject([GameStatisticComponent], (instance) => {
      // Arrange
      spyOn(instance.alertingService, 'addDanger').and.callFake(() => { });
      spyOn(instance.statisticsService, 'getLoggedUserStatisticForGame').and.callFake(() => { return Observable.throw(new Error()); });

      // Act
      instance.getStatistic(0);

      // Assert
      expect(instance.alertingService.addDanger).toHaveBeenCalledWith('STATISTIC_ERROR_MESSAGE');
    }));
});
