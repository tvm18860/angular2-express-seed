/* tslint:disable:no-unused-variable */
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { Router, NavigationEnd, NavigationError } from '@angular/router';
import { AppComponent } from '../app.component';
import { Observable, BehaviorSubject } from 'rxjs';

// Here we're mocking just the router behavior used in app.component.ts
class RouterMock {
  private subject: any = new BehaviorSubject(new NavigationEnd(0,'/','/'));
  events = this.subject.asObservable();
  url = '/';

  navigate(target: Array<string>) {
    this.subject.next(new NavigationEnd(0,target[0],target[0]));
    this.url = target[0];
    return { url: target[0] };
  };

  navigateWithError(target: Array<string>) {
    this.subject.next(new NavigationError(0,target[0],target[0]));
    return { url: target[0] };
  };
}

let fixture: ComponentFixture<AppComponent>;
let app: AppComponent
let router: Router

describe('App: Seed', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [
        { provide: Router, useClass: RouterMock }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    router = TestBed.get(Router);
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should highlight the "Home" top level tab on initialization', inject([Router], (router: RouterMock) => {
    const homeTabIndex = app.tabLinks.findIndex( link => link.link === 'Home' );
    const homeTab = app.tabLinks.find( link => link.label === 'Home');
    expect(app.activeLinkIndex).toEqual(homeTabIndex);
  }));

  it('should highlight the "Data" top level tab when the route changes', inject([Router], (router: RouterMock) => {
    const dataTabIndex = app.tabLinks.findIndex( link => link.label === 'Data');
    const dataTab = app.tabLinks.find( link => link.label === 'Data');

    router.navigate([ dataTab.link ]);
    expect(app.activeLinkIndex).toEqual(dataTabIndex);
  }));

});
