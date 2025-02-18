import { useEffect, useState } from 'react';
import MemoList from './components/memo-list';
import { supabase } from './lib/supabase-client';
import type { PostgrestError } from '@supabase/supabase-js';
import type { MemoItem } from './lib/supabase-client';

import delay from '@/utils/delay';

function MemoListPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<null | MemoItem[]>(null);
  const [error, setError] = useState<null | PostgrestError>(null);

  useEffect(() => {
    let ignore = false;

    const getMemoList = async () => {
      await delay();

      const { error, data } = await supabase.from('memo-list').select('*');

      if (error) {
        setError(error);
      }

      if (!ignore && data) {
        setData(data);
      }

      console.log(data);

      setLoading(false);
    };

    getMemoList();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section>
      <h1>Memo List</h1>
      {loading && <div role="alert">로딩 중...</div>}
      {error && <div role="alert">{error.message}</div>}
      {data && <MemoList items={data} />}
    </section>
  );
}

export default MemoListPage;
