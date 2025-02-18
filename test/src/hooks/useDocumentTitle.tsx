import { useEffect } from 'react';

function useDocumentTitle(
  title: string,
  base?: 'React 플레이그라운드',
  divider?: '|'
) {
  useEffect(() => {
    document.title = `${title} ${divider} ${base}`;
  }, [base, divider, title]);
}

export default useDocumentTitle;
