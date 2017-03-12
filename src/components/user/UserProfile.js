/**
 * Created by alexp on 06.03.2017.
 */
import React from 'react';

export class UserProfile extends React.Component {

    componentWillMount() {

    }

    constructor(props) {
        super();
        this.state = {
            fio: {
                name: props.user.fio.name,
                secondName: props.user.fio.secondName,
                surname: props.user.fio.surname
            },
            birthDate : props.user.birthDate,

        }
    }

    render() {
        return (
            <div className="container">

            </div>
        );
    }

}

