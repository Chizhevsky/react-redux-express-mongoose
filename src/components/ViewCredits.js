import React from 'react';

export default class ViewCredits extends React.Component {
    handleForm(e) {
        e.preventDefault();

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
                        <p><select name="name" id="name">
                            {
                                this.props.credits.map( (person) => {
                                    if (person.month.length !== 0 && person.month.length !== 12) {
                                        return (
                                            <option value={person.name}>{person.name}</option>
                                        )
                                    }
                                })
                            }
                        </select></p>
                    </p>
                    <p>
                        <label htmlFor="secret">Введите ключевое слово</label>
                        <p><input type="text" name="secret" id="secret"/></p>
                    </p>
                    <p>
                        <button onClick={this.handleForm.bind(this)}>Pay</button>
                    </p>
                </form>
            </div>
        )
    }
}