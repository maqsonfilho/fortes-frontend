import { ChangeEvent, FC, useCallback, useState } from 'react';
import { Input, InputWrapper, SearchIcon } from './style';
import { Props } from '../../@types/components/search-field';

export const SearchField: FC<Props> = ({ placeholder = 'Search', onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    onSearch(searchTerm);
  }, [onSearch, searchTerm]);

  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={(e: { key: string }) => e.key === 'Enter' && handleSearch()}
      />
      <SearchIcon onClick={handleSearch} />
    </InputWrapper>
  );
};
