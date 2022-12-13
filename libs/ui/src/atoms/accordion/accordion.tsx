import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

import Items from './items';

/* eslint-disable-next-line */
export interface AccordionProps {}

export function Accordion(props: AccordionProps) {
  const [expendedIndex, setExpendedIndex] = useState(-1);

  const handleClick = (currentIndex: number) => {
    setExpendedIndex((previousState) => {
      if (previousState === currentIndex) {
        return -1;
      } else {
        return currentIndex;
      }
    });
  };


  const labelClassName = 'flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer';

  const renderedItems = Items.map((item, index) => {
    const isExpended = expendedIndex === index;
    const icon = <span className='text-2xl'>{isExpended ? <GoChevronDown /> : <GoChevronLeft />}</span>

    return (
      <div key={item.id}>
        <p className={labelClassName} onClick={() => handleClick(index)}>{item.label} {icon}</p>
        {isExpended && <p className='border-b p-5'>{item.content}</p>}
      </div>
    );
  });
  return <div className='border-x border-t rounded'>{renderedItems}</div>;
}

export default Accordion;
