// import styles from './ui-components.module.scss';
import { useState } from 'react';

import { Button, Dropdown } from '@nx-apps/ui';

/* eslint-disable-next-line */
export interface UiComponentsProps {}

export function UiComponents(props: UiComponentsProps) {
  const [selectedItem, setSelectedItem] = useState(null);
  
  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', value: 'blue'}
  ];

  const handleSelect = (selection: any) => {
    setSelectedItem(selection.label);
  };

  return (
    <div>
      <h1 className='text-2xl'>Welcome to UiComponents!</h1>
        <Button />
        <Dropdown options={options} handleSelect={handleSelect} selectedItem={selectedItem}/>
    </div>
  );
}

export default UiComponents;
