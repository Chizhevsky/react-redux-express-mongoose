import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {takeCredit, updateCredits} from '../actions/creditActions';

@connect((store) => {
    return {
        credits: store.credits.credits,
    }
})
export default class TakeCredit extends React.Component {
    constructor(props) {
        super(props);
        this.taking = {
            name: '',
            secret: '',
            money: 0
        };
    }
    componentWillMount() {
        this.props.dispatch(updateCredits());
    }
    handleName(e) {
        this.taking.name = e.target.value;
    }
    handleSecret(e) {
        this.taking.secret = e.target.value;
    }
    handleMoney(e) {
        this.taking.money = parseInt(e.target.value) * 1.2;
        console.log(this.taking.money);
    }
    handleForm(e) {
        e.preventDefault();
        const newCredit = {
            name: this.taking.name,
            secret: this.taking.secret,
            money: this.taking.money,
            month: []
        };
        const newCredits = this.props.credits.concat(newCredit);
        this.props.dispatch(takeCredit(newCredits, newCredit));
    }
    render() {
        return (
            <div>
                <p><Link to="/">Закрытие</Link></p>
                <p><Link to="/new">Оформление</Link></p>
                <h1>Быстрый кредит</h1>
                <h3>создание аккаунта взятие и кредит в одной форме:</h3>
                <form>
                    <p>
                        <label htmlFor="name">Введите ваше имя</label>
                        <p><input type="text"  name="name" id="name" onChange={this.handleName.bind(this)}/></p>
                    </p>
                    <p>
                        <label htmlFor="secret">Введите секретный ключ</label>
                        <p><input type="text"  name="secret" id="secret" onChange={this.handleSecret.bind(this)}/></p>
                    </p>
                    <p>
                        <label htmlFor="money">Введите сумму</label>
                        <p><input type="text"  name="money" id="money" onChange={this.handleMoney.bind(this)}/></p>
                    </p>
                    <p>
                        <input type="submit" onClick={this.handleForm.bind(this)}> </input>
                        <h6>*взять дифференциированный кредит с 20% ставкой</h6>
                    </p>
                </form>
            </div>
        )
    }
}