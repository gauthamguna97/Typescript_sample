import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getLanguages } from '../../redux/actionCreators/languageAction';
import { RootState } from '../../redux/rootReducer';
import { LanguageTypes } from '../../redux/actionTypes/language';

export interface IsecondaryProps {
  rating: boolean;
}

export interface IstateProps {
  Languages?: object;
}

export interface IdispatchProps {
  getLanguages?: any
}

type Iprops = IsecondaryProps & IdispatchProps & IstateProps;

export const Secondary = (props: Iprops) => {
  React.useEffect(() => {
    console.log('Reloading');
    props.getLanguages && props.getLanguages();
  }, []);

  console.log(props);
  return (
    <div>
      {props.rating ? 'done' : 'no'}
    </div>
  )
}
const mapDispatchToProps = (dispatch: Dispatch<LanguageTypes>): IdispatchProps => ({
  getLanguages: () => dispatch(getLanguages())
});

const mapStateToProps = (State: RootState): IstateProps => {
  return {
    Languages: State
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Secondary);



