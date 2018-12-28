import { TestBed } from '@angular/core/testing';

import { MyMusicService } from './my-music.service';

describe('MyMusicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyMusicService = TestBed.get(MyMusicService);
    expect(service).toBeTruthy();
  });
});
