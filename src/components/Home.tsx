import * as React from "react";

interface HomeProps {
    name: string;
    time: number;
}
interface HomeState {
    data: Array<any>;
}

export class Home extends React.Component<HomeProps, HomeState> {

    constructor (props: HomeProps) {
        super (props);
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