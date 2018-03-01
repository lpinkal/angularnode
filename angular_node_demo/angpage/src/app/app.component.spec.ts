import {TestBed, async, getTestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {AuthService} from "./auth.service";
import {ServerService} from "./server.service";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        RouterTestingModule,
        HttpModule,
        BrowserAnimationsModule
      ],
      providers:[
        AuthService,
        ServerService
      ]
    }).compileComponents();
  }));
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));


    it(`should be able to navigate to 'login'`,()=>{
      const injector=getTestBed();
      const router=injector.get(Router);
      const fixture=TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      router.navigate(['login']).then(()=>{
        expect(router.url).toEqual('login');
      })
    });
  it(`should be able to navigate to 'registration'`,()=>{
    const injector=getTestBed();
    const router=injector.get(Router);
    const fixture=TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    router.navigate(['registration']).then(()=>{
      expect(router.url).toEqual('registration');
    })
  });
  it(`should be able to navigate to 'profile'`,()=>{
    const injector=getTestBed();
    const router=injector.get(Router);
    const fixture=TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    router.navigate(['profile']).then(()=>{
      expect(router.url).toEqual('profile');
    })
  });
  it(`should be able to navigate to 'student'`,()=>{
    const injector=getTestBed();
    const router=injector.get(Router);
    const fixture=TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    router.navigate(['student']).then(()=>{
      expect(router.url).toEqual('student');
    })
  });
  it(`should be able to navigate to 'logout'`,()=>{
    const injector=getTestBed();
    const router=injector.get(Router);
    const fixture=TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    router.navigate(['logout']).then(()=>{
      expect(router.url).toEqual('logout');
    })
  })
});
