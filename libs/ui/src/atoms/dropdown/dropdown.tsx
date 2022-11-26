import { useState } from 'react';

// import styles from './dropdown.module.scss';

/* eslint-disable-next-line */
export interface DropdownProps {}

export function Dropdown({ options, handleSelect, selectedItem }: any) {
  console.log('options', options);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleSelection = (item: any) => {
    handleSelect(item);
    setIsOpen(false);
  };

  const optionsEls = options.map((item: any) => {
    return (
      <div key={item.value} onClick={() => handleSelection(item)}>
        {item.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>
        {selectedItem ? selectedItem : 'Select...'}
      </div>
      {isOpen && optionsEls}
    </div>
  );
}

export default Dropdown;
