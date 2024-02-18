import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
    const resultsData = calculateInvestmentResults(userInput);

    const { valueEndOfYear, interest, annualInvestment } = resultsData[0];
    const initialInvestment = valueEndOfYear - annualInvestment - interest;

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((yearData) => {
                    const { year, interest, annualInvestment, valueEndOfYear} = yearData;
                    const totalInterestValue = valueEndOfYear - annualInvestment * year - initialInvestment;
                    const totalAmountInvested = valueEndOfYear - totalInterestValue;
                    
                    return (
                        <tr key={year}>
                            <td>{year}</td>
                            <td>{formatter.format(valueEndOfYear)}</td>
                            <td>{formatter.format(interest)}</td>
                            <td>{formatter.format(totalInterestValue)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}