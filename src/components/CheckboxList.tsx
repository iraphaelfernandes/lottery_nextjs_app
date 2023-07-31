import { useEffect, useState } from 'react';

interface CheckboxListProps {
  options: string[];
  selectedOption: string;
  onChange: (selectedOption: string) => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ options, selectedOption, onChange }) => {
  useEffect(() => {
    // Inicializa a opção selecionada com o primeiro valor do array de options
    if (options.length > 0 && !selectedOption) {
      onChange(options[0]);
    }
  }, [options, selectedOption, onChange]);

  const handleCheckboxChange = (option: string) => {
    onChange(option);
  };

  return (
    <div>
      {options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="radio"
              name="options"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleCheckboxChange(option)}
            />
            {option}
          </label>
          <br />
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;
