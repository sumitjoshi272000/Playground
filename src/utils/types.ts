export interface userDataType {
  firstName: string;
  id: string;
  lastName: string;
  picture: string;
  title: string;
}
[];

export interface userInfoType {
  fname: string;
  lname: string;
  profile: string;
}

export interface IButtonProps {
  text: string;
  onPress?: () => void;
  disabled?: boolean;
}
