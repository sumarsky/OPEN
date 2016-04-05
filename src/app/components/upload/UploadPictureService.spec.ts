import {
  beforeEachProviders,
  it,
  inject
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {BaseRequestOptions, Http, Response, ResponseOptions} from 'angular2/http';
import {MockBackend, MockConnection} from 'angular2/http/testing';

import {UploadPictureService} from './UploadPictureService';
import {GlobalService} from '../../shared/services/GlobalService';
import {AlertingService} from '../alerting/AlertingService';

describe('UploadPictureServiceTests', () => {
  beforeEachProviders(() => [
    GlobalService,
    AlertingService,
    UploadPictureService
  ]);

  it('upload_givenFile_should', inject([UploadPictureService], (instance) => {
    // Arrange
    spyOn(instance.multipartItem, 'upload').and.callFake(() => { });

    // Act
    instance.upload(new Array<File>()[0]);

    // Assert
    expect(instance.multipartItem.upload).toHaveBeenCalled();
  }));
});
