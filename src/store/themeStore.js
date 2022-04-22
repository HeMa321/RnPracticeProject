
import {action, makeAutoObservable, observable} from 'mobx';

class ThemeStore {
  @observable
  fontSize = 14;
  @observable
  scale = 14;

  @action
  setFontSize = fontSize => {
    this.fontSize = fontSize;
    this.scale = fontSize / 14;
  };


  constructor() {
    makeAutoObservable(this);
  }
}

const themeStore = new ThemeStore();

export default themeStore;
