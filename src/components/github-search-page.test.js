import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import GithubSearchPage from './github-search-page';

beforeEach(() => render(<GithubSearchPage />));

describe('when the GithubPageSearchPage is mounted', () => {
  it('must display the title', () => {
    expect(
      screen.getByRole('heading', {name: /github respositories list/i}),
    ).toBeInTheDocument();
  });

  it('must  be an input text with label "filter by" field', () => {
    expect(screen.getByLabelText(/filter by/i)).toBeInTheDocument();
  });

  it('must be a search button ', () => {
    expect(screen.getByRole('button', {name: /search/i})).toBeInTheDocument();
  });

  it('must be a initial message "Please provide a search option and click in the search button', () => {
    expect(
      screen.getByText(
        /please provide a search option and click in the search button/i,
      ),
    ).toBeInTheDocument();
  });
});

describe('when the develope does a search', () => {
  it('the search button should be disabled until the search is done', async () => {
    expect(screen.getByRole('button', {name: /search/i})).not.toBeDisabled();
    fireEvent.click(screen.getByRole('button', {name: /search/i}));
    await waitFor(() =>
      expect(screen.getByRole('button', {name: /search/i})).toBeDisabled(),
    );
  });
});
