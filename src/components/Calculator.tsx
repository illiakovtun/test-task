import React, { useState } from 'react'

const Calculator = () => {

    const [firstNumber, setFirstNumber] = useState<number>(0);
    const [secondNumber, setSecondNumber] = useState<number>(0);
    const [sum, setSum] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'firstNumber') {
            setFirstNumber(parseInt(e.target.value));
        } else {
            setSecondNumber(parseInt(e.target.value));
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = fetch("http://localhost:8000/calculate", {
            method: 'POST',
            body: JSON.stringify({firstNumber, secondNumber}),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((res) => {
            return res.json();
        })
        .then(data => {
            setSum(data.sum)
        });
    }


    return (
        <section className="calculator">
            <header>Calculator</header>
            <div className="form-wrapper">
                <h5>Enter the numbers</h5>
                <form onSubmit={handleSubmit}>
                    <input placeholder="number 1" id="firstNumber" name="firstNumber" type="number" onChange={handleChange}/>
                    <input placeholder="number 2" id="secondNumber" name="secondNumber" type="number" onChange={handleChange}/>
                    <button type="submit">Sum</button>
                </form>
                <hr/>
                <div className="results">
                    <h5>Results</h5>
                    <div className="results-number">
                        {sum}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Calculator
