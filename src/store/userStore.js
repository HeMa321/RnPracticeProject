import Constants from '../common/Constants';
import material from '../../native-base-theme/variables/material';
import Colors from '../common/Colors';
import material_dark from '../../native-base-theme/variables/material_dark';
import {action, observable} from 'mobx';

class UserStore {

  @observable
  isFollowSystem = true; //默认不跟随系统主题

  @observable
  themeStyle = material; //使用的主题样式

  @observable
  theme = Constants.appTheme[0];

  allowLineFeed = false;
  dark = false;


  @action
  changeTheme = (color, isMandatory = false) => {
    this.theme = color;
    this.dark = !(color === Colors.white);
    this.themeStyle = color === Colors.white ? material : material_dark;
  };

  // constructor() {
  //   makeAutoObservable(this);
  // }

}

const userStore = new UserStore();

export default userStore;
