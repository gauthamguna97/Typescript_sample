import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { LanguageTypes } from "../../redux/actionTypes/language";
import { getLanguages } from "../../redux/actionCreators/languageAction";
import { RootState } from "../../redux/rootReducer";

interface HomeProps {
    name: string;
    time: number;
}


interface IStateProps {
    Languages?: object,
}

interface IDispatchProps {
    getLanguages: any;
}

interface HomeState {
    data: Array<any>;
}

type Props = HomeProps & IStateProps & IDispatchProps;

class _Home extends React.Component<Props, HomeState> {

    constructor (props: Props) {
        super (props);
        console.log(props);
        props.getLanguages();
        this.state = { data: []};
        fetch('https://www.justdial.com/api/india_api_read/language_selector.php?wap=2&sid=8eKh0hv28niiJ%252BhsgvIn2IyOhxBRNlOAuQcwo6RL%252BdY%253D&source=2')
            .then((res) => {
                res.json()
                .then((response) => {
                    console.log('response', response);
                    this.setState({
                        data: response.results,
                    });
                })
            });
    }

    componentDidMount() {}

    componentWillReceiveProps (nprops: HomeProps) {
        console.log('nprops', nprops);
    }
    
    public render() {
        const { data } = this.state;
        return (
            <div>
                <div>
                    Hello there, {this.props.name}, the time is {this.props.time}
                </div>
                <div>
                    {data && data.length > 0 && data.map((item) => (
                        <div>{item.lang}</div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<LanguageTypes>): IDispatchProps => ({
    getLanguages: () => dispatch(getLanguages()) 
})

const mapStateToProps = (store: RootState): IStateProps => ({
    Languages: store.language
})

export const Home =  connect <IStateProps, IDispatchProps, HomeProps, RootState> (mapStateToProps, mapDispatchToProps)(_Home);