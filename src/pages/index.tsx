import { useEffect, useState } from 'react';
import CheckboxList from '../components/CheckboxList';

const Home: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [options, setOptions] = useState([])
  const [isLoading, setLoading] = useState(true)

  const BASE_URL = "https://loteriascaixa-api.herokuapp.com/api"



  useEffect(() => {
    fetch(`${BASE_URL}`)
      .then((res) => res.json())
      .then((data) => {
        setOptions(data)
        setLoading(false)
      })
  }, [])

  const handleCheckboxChange = (selectedOption: string) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <h1>Checkbox Options</h1>
      <CheckboxList options={options} selectedOption={selectedOption} onChange={handleCheckboxChange} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default Home;
