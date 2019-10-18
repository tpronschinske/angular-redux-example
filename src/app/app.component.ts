import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store/store';
import { ReduxStoreActions } from './store/actions';
import { Map } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // select decorator gets name of field in the store. must be matched from componeent to store
  //@select() counter: number;
  // select decorator gets name of field in the store. can pass the matched one into select to rename in view
  //@select('counter') count;
  @select((s: IAppState) => s.permissions.CanViewPage) permission;
  @select((s: IAppState) => s.counter) count;



  constructor(public ngRedux: NgRedux<IAppState>){

  }

  increment(){
    this.ngRedux.dispatch({type: ReduxStoreActions.Increment});
  }

}
