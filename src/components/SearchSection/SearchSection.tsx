import { useState } from 'react';
import { Button, Input } from '@ui5/webcomponents-react';
import styles from './SearchSection.module.scss';
import { ISearchSection } from './SearchSection.interface';

export const SearchSection = ({ onSubmit, onReset }: ISearchSection) => {
  const [searchTerm, setSearchTerm] = useState('');

  function handleOnSubmit(event: any) {
    setSearchTerm(event);
  }

  const handleReset = () => {
    setSearchTerm('');  
    onReset();
  }

  return (
    <section className={styles.container}>
      <Input
        placeholder="Pesquise um filme"
        className={styles.imputUI}
        value={searchTerm}
        onInput={(event: any) => handleOnSubmit(event.target.valueBeforeItemPreview)}
      />
      <div>
        <Button
          className={styles.buttonSearch}
          onClick={() => onSubmit(searchTerm)}
        >
          Pesquisar
        </Button>
        <Button
          className={styles.buttonReset}
          onClick={() => handleReset()}
        >
          Resetar
        </Button>
      </div>
    </section>
  )
}