import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class BsModalRef {
  /**
   * Reference to a component inside the modal. Null if modal's been created with TemplateRef
   */
  // tslint:disable-next-line:no-any
  content?: any | null;

  /**
   * Hides the modal
   */
  hide: () => void = Function;
  /**
   * Sets new class to modal window
   */
  setClass: (newClass: string) => void = Function;
  /**
   * Event that is fired when the modal behind the ref starts hiding
   */
  // tslint:disable-next-line:no-any
  onHide: EventEmitter<any>;
  /**
   * Event that is fired when the modal behind the ref finishes hiding
   */
  // tslint:disable-next-line:no-any
  onHidden: EventEmitter<any>;  
  /**
   * Event that is fired when the modal behind the ref starts hiding
   */
  // tslint:disable-next-line:no-any
  onShow: EventEmitter<any>;
  /**
   * Event that is fired when the modal behind the ref finishes hiding
   */
  // tslint:disable-next-line:no-any
  onShown: EventEmitter<any>;
}
