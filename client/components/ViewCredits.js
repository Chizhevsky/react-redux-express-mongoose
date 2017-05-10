import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {updateCredits, payCredit} from '../actions/creditActions';

@connect((store) => {
    return {
        credits: store.credits.credits,
    }
})
export default class ViewCredits extends React.Component {
    constructor(props) {
        super(props);
        this.paying = {
            name: '',
            secret: ''
        };
    }
    componentWillMount() {
        this.props.dispatch(updateCredits());
    }
    handleName(e) {
        this.paying.name = e.target.value;
    }
    handleSecret(e) {
        this.paying.secret = e.target.value;
    }
    handleForm(e) {
        const creditor = this.paying.name,
            month = this.paying.name;
        e.preventDefault();
        const newCredits = this.props.credits.map((person) => {
            if (person.name === this.paying.name && person.secret === this.paying.secret && person.month.length <12) {
                person.month =  person.month.concat(true);
            }
            return person;
        });
        this.props.dispatch(payCredit(newCredits, creditor, month));
    }
    render() {
        return (
            <div>
                <p><Link to="/">Закрытие</Link></p>
                <p><Link to="/new">Оформление</Link></p>
                <h1>История всех кредитов в нашем банке</h1>
                {this.props.credits.map((person) => {
                    if (person.month.length >= 12) {
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