import { SearchInput, Searchbar, StyledForm, Submit } from './Searchbar.styled';
import { Formik } from 'formik';
export const SearchBar = ({ onSubmit }) => {
  return (
    <Searchbar>
      <Formik
        initialValues={{
          query: '',
        }}
        onSubmit={values => {
          onSubmit(values.query);
        }}
      >
        <StyledForm>
          <Submit type="submit">
            <span>Search</span>
          </Submit>
          <SearchInput
            name="query"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </StyledForm>
      </Formik>
    </Searchbar>
  );
};
