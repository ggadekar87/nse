import myData from './data.json';
import { useEffect, useState } from 'react';
import "./Excel.css"
import { saveAs } from 'file-saver';
const ExcelFile = () => {
    const [data, setData] = useState(myData);
    const [formData, setFormData] = useState({
        name: '',
        date: ''
    });
    useEffect(() => {
        fetch('./data.json') // Path to JSON file
            .then(data => {
                console.log(data)
                //setData(data);
            }
            )
            .catch(error => console.error('Error loading JSON:', error));
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = { name: formData.name, CheckDate: formData.date };
        myData.Stoks.push(data);
        const blob = new Blob([JSON.stringify(myData, null, 2)], { type: 'application/json' });
        saveAs(blob, './data.json');
        console.log('Form Data:', formData);
    };
    return <>

        <hr></hr>   <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Date:</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
        <table className='QTable'>
            <th><tr><td colspan={4}>StockData</td></tr></th>
            <tr><td>Name</td><td>Date</td></tr>
            <tbody>
                {data.Stoks.map((dt, index) => {
                    return <tr key={index}><td >{dt.Name}</td><td >{dt.CheckDate}</td></tr>
                })}
            </tbody>
        </table>
    </>
}

export default ExcelFile;