import React from 'react';
import { connect } from 'react-redux';

import {fetchCredits} from '../actions/creditActions';
import {payCredit} from '../actions/creditActions';

@connect((store) => {
    return {
        credits: store.credits.credits
    }
})

export default class ViewCredits extends React.Component {
    constructor() {
        super();
         this.paying = {
             name: '',
             secret: ''
        };
    }
    componentWillMount() {
        this.props.dispatch(fetchCredits());
    }
    componentWillReceiveProps(nextProps) {
        this.paying = {
            name: nextProps.credits[0].name,
            secret: ''
        };
    }
    handleName(e) {
        this.paying.name = e.target.value;
    }
    handleSecret(e) {
        this.paying.secret = e.target.value;
    }
    handleForm(e) {
        e.preventDefault();
        this.props.dispatch(payCredit(this.paying.name, this.paying.secret));
        this.setState({});
    }
    render() {
        return(
            <div>
                <h1>История всех кредитов в нашем банке</h1>
                {this.props.credits.map( (person) => {
                    if (person.month.length === 12) {
                        return (
                            <ul>
                                <li>{person.name}</li>
                                <li>Кредит в размере {person.money} отдан</li>
                            </ul>
                        );
                    } else if (!person.month.length) {
                        return (
                            <ul>
                                <li>{person.name}</li>
                                <li>Кредит в размере {person.money} ещё не начали погашать</li>
                                <li>В этом месяце вы должны отдать {Math.round(person.money / 12)}</li>
                            </ul>
                        );
                    } else {
                        return (
                            <ul>
                                <li>{person.name}</li>
                                <li>Уже отдано {person.month.length} часть(и/ей) кредита</li>
                                <li>В этом месяце вы должны отдать {Math.round(person.money / 12)}</li>
                            </ul>
                        );
                    }
                })}
                <h1>Погашение части своего кредита</h1>
                <form>
                    <p>
                        <label htmlFor="name">Выберети имя</label>
                        <p><input type="text" name="name" id="name" onChange={this.handleName.bind(this)}/></p>
                    </p>
                    <p>
                        <label htmlFor="secret">Введите ключевое слово</label>
                        <p><input type="text" onChange={this.handleSecret.bind(this)} name="secret" id="secret"/></p>
                    </p>
                    <p>
                        <input type="submit" onClick={this.handleForm.bind(this)}> </input>
                    </p>
                </form>
            </div>
        )
    }
}